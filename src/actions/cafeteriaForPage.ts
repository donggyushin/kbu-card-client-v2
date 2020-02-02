import { ReducerCafeteriaType } from '../types/index.d'
import { Dispatch } from 'react'
import { DONGGYU_END_POINT } from '../consts/endpoint'
import { LOADING_ON, LOADING_OFF, TURN_ON_ALERT, CAFETERIA_FOR_PAGE_FETCH } from './types.d'
import axios from 'axios'


export interface IFetchMenuDispatch {
    type: string
    menu?: ReducerCafeteriaType
    title?: string
    text?: string
    callBack?: (param: any) => void
}

interface IFetchMenuData {
    ok: boolean
    error: string
    menu: ReducerCafeteriaType
}

export const fetchMenu = (date: number, dispatch: Dispatch<IFetchMenuDispatch>) => {
    dispatch({
        type: LOADING_ON
    })
    axios.get(`${DONGGYU_END_POINT}menu/menu/${date}`)
        .then(res => res.data)
        .then(data => {
            const { ok, error, menu } = data as IFetchMenuData
            dispatch({
                type: LOADING_OFF
            })
            if (ok) {
                dispatch({
                    type: CAFETERIA_FOR_PAGE_FETCH,
                    menu
                })
            } else {
                dispatch({
                    type: TURN_ON_ALERT,
                    title: "경고",
                    text: error,
                    callBack: () => {
                        window.location.href = '/'
                    }
                })
            }
        })
        .catch(err => {
            console.log('학식 데이터를 불러오던 도중에 에러발생')
            console.error(err)
            dispatch({
                type: LOADING_OFF
            })


        })
}   