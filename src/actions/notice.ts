import axios from 'axios'
import { Dispatch } from "react";
import { END_POINT, END_POINT_UNIV } from '../consts/endpoint'
import { ReducerNoticeDataType } from '../types/index.d'
import { GET_NOTICES, LOADING_ON, LOADING_OFF, APPEND_NEW_NOTICES, TURN_ON_ALERT } from './types.d';

interface IgetNoticeWithMinimunIdDispatch {
    type: string
    datas?: ReducerNoticeDataType[]
    minId?: number
    title?: string
    text?: string
    callBack?: () => void
}

export const getNoticeWithMinimunId = (minId: number, dispatch: Dispatch<IgetNoticeWithMinimunIdDispatch>) => {
    dispatch({
        type: LOADING_ON
    })
    axios.get(`${END_POINT_UNIV}info/notice?max_id=${minId - 1}`)
        .then(res => {
            dispatch({
                type: LOADING_OFF
            })

            if (res.status === 200) {
                const originalDatas = res.data.data.body as []

                const datas = originalDatas.map(originalData => {
                    return {
                        id: originalData[0],
                        title: originalData[1],
                        author: originalData[2],
                        description: "",
                        url: originalData[5],
                        tag: originalData[4],
                        created_time_str: originalData[2]
                    }
                }) as ReducerNoticeDataType[]
                return dispatch({
                    type: APPEND_NEW_NOTICES,
                    datas,
                    minId: datas[datas.length - 1].id
                })

            } else if (res.status === 500) {
                return dispatch({
                    type: TURN_ON_ALERT,
                    title: "Warning",
                    text: "서버 내부 에러로 공지사항을 불러올 수 없습니다. 홈으로 이동하시겠습니까?",
                    callBack: () => {
                        window.location.href = '/'
                    }
                })
            }
        })
        .catch(err => {

            console.log(`Error occured at actions/notice.ts getNoticeWithMinimunId`)
            console.error(err)
            return dispatch({
                type: TURN_ON_ALERT,
                title: "Warning",
                text: "서버 내부 에러로 공지사항을 불러올 수 없습니다. 홈으로 이동하시겠습니까?",
                callBack: () => {
                    window.location.href = '/'
                }
            })
        })
}



interface IgetNoticeNonThunkFunctionDispatch {
    type: string
    datas?: ReducerNoticeDataType[]
    minId?: number
    title?: string
    text?: string
    callBack?: () => void
}


export const getNoticeNonThunkFunction = (dispatch: Dispatch<IgetNoticeNonThunkFunctionDispatch>) => {
    dispatch({
        type: LOADING_ON
    })
    axios.get(`${END_POINT_UNIV}info/notice`)
        .then(res => {
            dispatch({
                type: LOADING_OFF
            })
            if (res.status === 200) {

                const originalDatas = res.data.data.body as []
                console.log(originalDatas)
                const datas = originalDatas.map(originalData => {
                    return {
                        id: originalData[0],
                        title: originalData[1],
                        author: originalData[3],
                        description: "",
                        url: originalData[5],
                        tag: originalData[4],
                        created_time_str: originalData[2]
                    }
                }) as ReducerNoticeDataType[]

                dispatch({
                    type: GET_NOTICES,
                    datas,
                    minId: datas[datas.length - 1].id
                })

            } else if (res.status === 500) {
                return dispatch({
                    type: TURN_ON_ALERT,
                    title: "Warning",
                    text: "서버 내부 에러로 공지사항을 불러올 수 없습니다. 홈으로 이동하시겠습니까?",
                    callBack: () => {
                        window.location.href = '/'
                    }
                })
            }
        })
        .catch(err => {
            console.log(`Error occured at actions/notice.ts getNoticeNonThunkFunction`)
            console.error(err)
            dispatch({
                type: LOADING_OFF
            })
            return dispatch({
                type: TURN_ON_ALERT,
                title: "Warning",
                text: "서버 내부 에러로 공지사항을 불러올 수 없습니다. 홈으로 이동하시겠습니까?",
                callBack: () => {
                    window.location.href = '/'
                }
            })
        })
}