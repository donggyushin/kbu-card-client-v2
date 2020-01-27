import { Dispatch } from "react";
import axios from 'axios'
import { DONGGYU_END_POINT } from "../consts/endpoint";
import { ReducerTodayPrayType } from '../types/index.d'
import { TURN_ON_ALERT, GET_TODAY_PRAY, LOADING_ON, LOADING_OFF } from "./types.d";

interface IGetTodayPrayDispatch {
    type: string
    title?: string
    text?: string
    callBack?: (param: any) => void
    todayPray?: ReducerTodayPrayType
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
        .then(res => res.data)
        .then(data => {
            const { ok, error, todayPray }: IGetTodayPrayData = data;
            if (ok) {
                dispatch({
                    type: GET_TODAY_PRAY,
                    todayPray
                })
                dispatch({
                    type: LOADING_OFF
                })
            } else {
                dispatch({
                    type: TURN_ON_ALERT,
                    title: "알림",
                    text: error,
                    callBack: () => {
                        window.location.href = '/'
                    }
                })
                dispatch({
                    type: LOADING_OFF
                })
            }
        })
        .catch(err => {
            console.log(`Error occured at atctions/todayPray.ts getTodayPray`)
            console.error(err)
            return dispatch({
                type: TURN_ON_ALERT,
                title: "에러",
                text: '알수없는 에러 발생. 관리자에게 문의해주세요.',
                callBack: () => {
                    window.location.href = '/'
                }
            })
        })

}