import { Dispatch } from "react";
import axios from 'axios'
import { END_POINT } from '../consts/endpoint'
import { TIME_TABLE_FETCH, LOADING_ON, LOADING_OFF, SET_COLOR_SET } from './types.d'

interface IDispatch {
    type: string
    tbody?: string[][][]
    thead?: string[]
    startTime?: number
    endTime?: number
    colorSet?: any
}

interface IfetchTimeTableThunkFunctionData {
    thead: string[]
    tbody: string[][][]
}

interface IFirstAndEndTime {
    startTime: number
    endTime: number
}

export const fetchTimeTableThunkFunction = (jwtToken: string) => (dispatch: Dispatch<IDispatch>) => {



    dispatch({
        type: LOADING_ON
    })

    axios.get(`${END_POINT}users/information/timetable?semester=20201`, {
        headers: {
            'Authorization': jwtToken
        }
    })
        .then(res => {

            if (res.status === 200) {
                const { tbody, thead }: IfetchTimeTableThunkFunctionData = res.data.data
                const { startTime, endTime } = getStartTimeAndEndTime(tbody)
                const colorSet = setColorSetToEachClass(tbody)


                dispatch({
                    type: SET_COLOR_SET,
                    colorSet
                })


                dispatch({
                    type: TIME_TABLE_FETCH,
                    thead,
                    tbody,
                    startTime,
                    endTime
                })


            }
        })
        .catch(err => {
            console.log(`Error occured at actions/timeTable.tsx fetchTimeTableThunkFunction`)
            console.error(err)
        })
}

// 각각의 수업마다 고유의 색상을 지정해주는 함수
function setColorSetToEachClass(schedule: string[][][]): any {
    const colorSamples = ['#2980b9', '#ff9ff3', '#00b894', '#d35400', '#0984e3', '#F7B32B', '#B33771', '#e66767', '#9c88ff', '#c23616', '#ffbe76', '#ff7979', '#badc58', '#54a0ff', '#6a89cc', '#fad390', '#f8c291', '#FFC6ED', '#81ecec', '#f6e58d']
    const colorSet: any = {}
    let colorSampleIndex = 0



    // 월요일부터 금요일까지 루프돌기   
    for (let i = 0; i < schedule.length; i++) {
        const oneDayClasses = schedule[i]
        // 각각의 요일마다 루프 돌기
        for (let i = 0; i < oneDayClasses.length; i++) {
            const oneClass = oneDayClasses[i];

            if (colorSet[oneClass[0]] === undefined) {
                colorSet[oneClass[0]] = colorSamples[colorSampleIndex]
                colorSampleIndex++;
            }
        }

    }

    return colorSet
}



// 수업의 가장 첫 수업 시간대와 가장 끝 수업 시간대를 반환해주는 함수

function getStartTimeAndEndTime(schedule: string[][][]): IFirstAndEndTime {

    const firstClasses: string[][] = []
    const endClasses: string[][] = []
    const firstClassStartTimes: number[] = []
    const endClassesEndTimes: number[] = []
    let firstTime: number = 0
    let endTime: number = 0
    schedule.map(row => {
        firstClasses.push(row[0])
        endClasses.push(row[row.length - 1])
    })
    firstClasses.map(firstClass => {

        if (firstClass) {
            const firstTime: number = parseInt(firstClass[2].substr(0, 2))
            firstClassStartTimes.push(firstTime)
        }
    })
    endClasses.map(endClass => {
        if (endClass) {
            const endTime: number = parseInt(endClass[3].substr(0, 2))
            endClassesEndTimes.push(endTime)
        }
    })
    firstTime = firstClassStartTimes[0]
    endTime = endClassesEndTimes[0]
    firstClassStartTimes.map(ft => {
        if (firstTime > ft) {
            firstTime = ft
        }
    })
    endClassesEndTimes.map(et => {
        if (endTime < et) {
            endTime = et
        }
    })
    return {
        startTime: firstTime,
        endTime
    }
}