import { Dispatch } from "react";
import axios from 'axios'
import { DONGGYU_END_POINT } from "../consts/endpoint";
import { ReducerTodayPrayType } from '../types/index.d'
import { TURN_ON_ALERT, GET_TODAY_PRAY, LOADING_ON, LOADING_OFF, INIT_TODAY_PRAY } from "./types.d";

export interface IGetTodayPrayDispatch {
    type: string
    title?: string
    text?: string
    callBack?: (param: any) => void
    todayPray?: ReducerTodayPrayType
    studentPray?: {
        name: string
        grade: number
        prays: string[]
    }[]
    ads?: string[]
    todayPrayContent?: string[]
    date?: string

}

interface IGetTodayPrayData {
    ok: boolean
    error: string
    todayPray: ReducerTodayPrayType
}

export const getTodayPray = (date: string | number, dispatch: Dispatch<IGetTodayPrayDispatch>) => {
    dispatch({
        type: LOADING_ON
    })
    axios.get(`${DONGGYU_END_POINT}todaypray/${date}`)
        .then(res => {
            dispatch({
                type: LOADING_OFF
            })
            if (res.status === 200) {
                interface IData {
                    studentPray: {
                        name: string
                        grade: number
                        prays: string[]
                    }[]
                    ads: string[]
                    todayPrayContent: string[]
                    date: string
                }

                const { studentPray, ads, todayPrayContent, date } = res.data as IData

                return dispatch({
                    type: GET_TODAY_PRAY,
                    studentPray,
                    ads,
                    todayPrayContent,
                    date
                })

            } else if (res.status === 204) {
                dispatch({
                    type: INIT_TODAY_PRAY
                })
                return dispatch({
                    type: TURN_ON_ALERT,
                    title: "Warning",
                    text: "아직 업로드되지 않았습니다. 홈으로 이동하시겠습니까?",
                    callBack: () => {
                        window.location.href = '/'
                    }
                })
            } else if (res.status === 422) {
                dispatch({
                    type: INIT_TODAY_PRAY
                })
                return dispatch({
                    type: TURN_ON_ALERT,
                    title: "Warning",
                    text: "유효하지 않은 날짜입니다. 홈으로 이동하시겠습니까?",
                    callBack: () => {
                        window.location.href = '/'
                    }
                })
            } else {
                dispatch({
                    type: INIT_TODAY_PRAY
                })
                return dispatch({
                    type: TURN_ON_ALERT,
                    title: "Warning",
                    text: "알수없는 에러 발생. 홈으로 이동하시겠습니까?",
                    callBack: () => {
                        window.location.href = '/'
                    }
                })
            }
        })


}