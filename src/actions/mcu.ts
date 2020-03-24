import axios from 'axios'
import { END_POINT, END_POINT_UNIV } from '../consts/endpoint'
import { Dispatch } from 'react'
import { FETCH_MCU, MCU_LOADING } from './types.d'

interface IfetchMcuNonThunkFunctionData {
    img: string
    token: string
}

interface IfetchMcuNonThunkFunctionMeta {
    iat: number
    exp: number
}

interface IDispatch {
    type: string
    img?: string
    token?: string
    iat?: number
    exp?: number
}

export const fetchMcuNonThunkFunction = (jwtToken: string, dispatch: Dispatch<IDispatch>) => {

    dispatch({
        type: MCU_LOADING
    })

    axios.get(`${END_POINT_UNIV}msc/code`, {
        headers: {
            'Authorization': jwtToken
        }
    })
        .then(res => {
            console.log('response from fetch mcu: ', res)
            if (res.status === 200) {
                const {
                    img,
                    token
                }: IfetchMcuNonThunkFunctionData = res.data.data
                const {
                    iat,
                    exp
                }: IfetchMcuNonThunkFunctionMeta = res.data.meta

                dispatch({
                    type: FETCH_MCU,
                    img,
                    token,
                    iat,
                    exp
                })

            }

        })
        .catch(err => {
            console.log(`Error occured at actions/mcu.ts fetchMcuNonThunkFunction`)
            console.error(err)
        })
}