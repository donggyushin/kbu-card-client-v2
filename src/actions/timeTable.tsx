import { Dispatch } from "react";
import axios from 'axios'
import { END_POINT } from '../consts/endpoint'
import { TIME_TABLE_FETCH, LOADING_ON, LOADING_OFF } from './types.d'

interface IDispatch {
    type: string
    tbody?: string[][][]
    thead?: string[]
    startTime?: number
    endTime?: number
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

    axios.get(`${END_POINT}users/information/timetable`, {
        headers: {
            'Authorization': jwtToken
        }
    })
        .then(res => {
            if (res.status === 200) {
                const { tbody, thead }: IfetchTimeTableThunkFunctionData = res.data.data
                const { startTime, endTime } = getStartTimeAndEndTime(tbody)

                dispatch({
                    type: TIME_TABLE_FETCH,
                    thead,
                    tbody,
                    startTime,
                    endTime
                })
                dispatch({
                    type: LOADING_OFF
                })
            }
        })
        .catch(err => {
            console.log(`Error occured at actions/timeTable.tsx fetchTimeTableThunkFunction`)
            console.error(err)
        })
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
        const firstTime: number = parseInt(firstClass[2].substr(0, 2))
        firstClassStartTimes.push(firstTime)
    })
    endClasses.map(endClass => {
        const endTime: number = parseInt(endClass[3].substr(0, 2))
        endClassesEndTimes.push(endTime)
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