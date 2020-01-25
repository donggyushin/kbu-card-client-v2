import axios from 'axios'
import { Dispatch } from "react";
import { END_POINT } from '../consts/endpoint'
import { ReducerNoticeDataType } from '../types/index.d'
import { GET_NOTICES, LOADING_ON, LOADING_OFF, APPEND_NEW_NOTICES } from './types.d';

interface IgetNoticeWithMinimunIdDispatch {
    type: string
    datas?: ReducerNoticeDataType[]
    minId?: number
}

export const getNoticeWithMinimunId = (minId: number, dispatch: Dispatch<IgetNoticeWithMinimunIdDispatch>) => {
    dispatch({
        type: LOADING_ON
    })
    axios.get(`${END_POINT}information/notice?max_id=${minId - 1}`)
        .then(res => {
            if (res.status === 200) {
                const datas: ReducerNoticeDataType[] = res.data.data
                dispatch({
                    type: APPEND_NEW_NOTICES,
                    datas,
                    minId: datas[datas.length - 1].id
                })
                dispatch({
                    type: LOADING_OFF
                })
            }
        })
        .catch(err => {
            console.log(`Error occured at actions/notice.ts getNoticeWithMinimunId`)
            console.error(err)
        })
}



interface IgetNoticeNonThunkFunctionDispatch {
    type: string
    datas?: ReducerNoticeDataType[]
    minId?: number
}


export const getNoticeNonThunkFunction = (dispatch: Dispatch<IgetNoticeNonThunkFunctionDispatch>) => {
    dispatch({
        type: LOADING_ON
    })
    axios.get(`${END_POINT}information/notice`)
        .then(res => {
            if (res.status === 200) {
                const datas: ReducerNoticeDataType[] = res.data.data
                dispatch({
                    type: GET_NOTICES,
                    datas,
                    minId: datas[datas.length - 1].id
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