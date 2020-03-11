import axios from 'axios'
import { END_POINT } from '../consts/endpoint'
import { Dispatch } from 'react'
import { CHAPEL_GET, SORING_CHAPEL, CHAPEL_UPDATE_CURRENT } from './types.d'
import { ReducerChapelOneDataType } from '../types/index.d'

interface IchangeChapelCurrentDispatch {
    type: string
    current: "" | "absence" | "attendance" | "late" | "etc"
}

export const changeChapelCurrent = (newCurrent: "" | "absence" | "attendance" | "late" | "etc", dispatch: Dispatch<IchangeChapelCurrentDispatch>) => {
    dispatch({
        type: CHAPEL_UPDATE_CURRENT,
        current: newCurrent
    })
}


interface IchapelNotThunkFunctionDispatch {
    type: string
    daysOfWeek?: number
    duty?: number
    late?: number
    attendance?: number
    sure?: number
    tbody?: string[][]
    thead?: string[]
    selected?: string
    selectable?: string[]
    attendances?: ReducerChapelOneDataType[]
    lates?: ReducerChapelOneDataType[]
    etcs?: ReducerChapelOneDataType[]
    absences?: ReducerChapelOneDataType[]
    totalChapelDatas?: ReducerChapelOneDataType[]
}

interface ISummary {
    주중수업일수: string
    규정일수: string
    출석: string
    지각: string
    확정: string
}

interface IchapelNotThunkFunctionData {
    summary: ISummary,
    thead: string[]
    tbody: string[][]
}

interface IchapelNotThunkFunctionMeta {
    selected: string
    selectable: string[]
}

export const chapelNotThunkFunction = (jwtToken: string, dispatch: Dispatch<IchapelNotThunkFunctionDispatch>) => {
    axios.get(`${END_POINT}users/information/chapel`, {
        headers: {
            'Authorization': jwtToken
        }
    })
        .then(res => {
            if (res.status === 200) {

                const { summary, tbody, thead }: IchapelNotThunkFunctionData = res.data.data
                const { selectable, selected }: IchapelNotThunkFunctionMeta = res.data.meta.select
                const {
                    주중수업일수,
                    규정일수,
                    출석,
                    지각,
                    확정
                } = summary

                sortChapels(tbody, dispatch)


                const daysOfWeek = parseInt(주중수업일수)
                const duty = parseInt(규정일수)
                const late = parseInt(지각)
                const attendance = parseInt(출석)
                const sure = parseInt(확정)

                dispatch({
                    type: CHAPEL_GET,
                    daysOfWeek,
                    duty,
                    late,
                    attendance,
                    sure,
                    tbody,
                    thead,
                    selected,
                    selectable
                })


            } else if (res.status === 304) {
                console.log('chapel data not modified')

            }
        })
        .catch(err => {
            console.log(`Error occured at action/chapel.tsx chapelNotThunkFunction`)
            console.error(err)
        })
}

const sortChapels = (tbody: string[][], dispatch: Dispatch<IchapelNotThunkFunctionDispatch>): void => {
    const attendances: ReducerChapelOneDataType[] = []
    const lates: ReducerChapelOneDataType[] = []
    const etcs: ReducerChapelOneDataType[] = []
    const absences: ReducerChapelOneDataType[] = []
    const totalChapelDatas: ReducerChapelOneDataType[] = []


    // 0: (9) ["2019", "12", "12", "11:59:00", "목", "주", "출석", "출석", "채플오류일괄등록    (2019-12-13)"]

    tbody.map(oneData => {
        let instance: ReducerChapelOneDataType = {
            year: parseInt(oneData[0]),
            month: parseInt(oneData[1]),
            day: parseInt(oneData[2]),
            time: oneData[3],
            date: oneData[4],
            etc: oneData[8],
            classification: ""
        }




        if (oneData[7] === '출석') {
            instance.classification = "ATTENDANCE"
            attendances.push(instance)

        } else if (oneData[7] === '지각') {
            instance.classification = "LATE"
            lates.push(instance)

        } else if (oneData[7] === '결석') {
            instance.classification = "ABSENCE"
            absences.push(instance)

        }

        if (instance.etc.length !== 1) {
            etcs.push(instance)
        }

        totalChapelDatas.push(instance)


    })

    dispatch({
        type: SORING_CHAPEL,
        attendances,
        lates,
        etcs,
        absences,
        totalChapelDatas: totalChapelDatas
    })


}