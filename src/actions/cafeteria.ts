import axios from 'axios'
import { DONGGYU_END_POINT } from '../consts/endpoint'
import { ReducerCafeteriaType } from '../types/index.d'
import { Dispatch } from 'react'
import { GET_MENU, TURN_ON_ALERT } from './types.d'

interface IGetMenuData {
    ok: boolean
    error: string
    menu: ReducerCafeteriaType
}

interface IGetMenuDispatch {
    type: string
    menu?: ReducerCafeteriaType
    title?: string
    text?: string
    callBack?: (param: any) => void
}

export function getMenu(date: number, dispatch: Dispatch<IGetMenuDispatch>) {
    axios.get(`${DONGGYU_END_POINT}menu/menu/${date}`)
        .then(res => res.data)
        .then(data => {
            const {
                ok,
                error,
                menu
            }: IGetMenuData = data

            if (ok) {
                dispatch({
                    type: GET_MENU,
                    menu
                })
            } else {
                dispatch({
                    type: TURN_ON_ALERT,
                    title: "에러",
                    text: error,
                    callBack: () => {
                        window.location.href = '/'
                    }
                })
            }

        })
        .catch(err => {
            console.log(`Error occured at actions/cafeteria.ts getMenu`)
            console.error(err)
        })
}