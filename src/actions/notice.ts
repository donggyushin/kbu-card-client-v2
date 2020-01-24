import axios from 'axios'
import { Dispatch } from "react";
import { END_POINT } from '../consts/endpoint'
import { ReducerNoticeDataType } from '../types/index.d'
import { GET_NOTICES, LOADING_ON, LOADING_OFF } from './types.d';


interface IgetNoticeNonThunkFunctionDispatch {
    type: string
    datas?: ReducerNoticeDataType[]
}


export const getNoticeNonThunkFunction = (jwtToken: string, dispatch: Dispatch<IgetNoticeNonThunkFunctionDispatch>) => {
    dispatch({
        type: LOADING_ON
    })
    axios.get(`${END_POINT}information/notice`, {
        headers: {
            'Authorization': jwtToken
        }
    })
        .then(res => {
            if (res.status === 200) {
                const datas: ReducerNoticeDataType[] = res.data.data
                dispatch({
                    type: GET_NOTICES,
                    datas
                })
                dispatch({
                    type: LOADING_OFF
                })
            }
        })
        .catch(err => {
            console.log(`Error occured at actions/notice.ts getNoticeNonThunkFunction`)
            console.error(err)
        })
}