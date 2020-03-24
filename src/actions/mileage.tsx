import axios from 'axios'
import { Dispatch } from 'react'
import { END_POINT, END_POINT_UNIV } from '../consts/endpoint'
import { MILEAGE_GET_BALANCE, LOADING_ON, GET_MILEAGE, LOADING_OFF, PUT_MILEAGE_CURRENT } from './types.d'
import { ReducerMileageDataType } from '../types/index.d'

interface IputMileageCurrentDispatch {
    type: string
    newCurrent: "" | "IN" | "OUT"
}

export const putMileageCurrent = (newCurrent: "" | "IN" | "OUT", dispatch: Dispatch<IputMileageCurrentDispatch>) => {
    dispatch({
        type: PUT_MILEAGE_CURRENT,
        newCurrent
    })
}



interface IgetMileageNonThunkFunctionDispatch {
    type: string
    thead?: string[]
    tbody?: string[][]
    datas?: ReducerMileageDataType[]
    inDatas?: ReducerMileageDataType[]
    outDatas?: ReducerMileageDataType[]
}

interface IgetMileageNonThunkFunctionData {
    head: string[]
    body: string[][]
}

export const getMileageNonThunkFunction = (jwtToken: string, dispatch: Dispatch<IgetMileageNonThunkFunctionDispatch>) => {
    dispatch({
        type: LOADING_ON
    })
    axios.get(`${END_POINT_UNIV}users/statement`, {
        headers: {
            'Authorization': jwtToken
        }
    })
        .then(res => {
            if (res.status === 200) {
                const { body, head }: IgetMileageNonThunkFunctionData = res.data.data
                const allDatas = sortDatas(body)
                dispatch({
                    type: GET_MILEAGE,
                    thead: head,
                    tbody: body,
                    datas: allDatas.datas,
                    inDatas: allDatas.inDatas,
                    outDatas: allDatas.outDatas
                })
                dispatch({
                    type: LOADING_OFF
                })
            }
        })
        .catch(err => {
            console.log(`Error occured at actions/mileage.tsx getMileageNonThunkFunction`)
            console.error(err)
        })
}



function sortDatas(tbody: string[][]): {
    inDatas: ReducerMileageDataType[],
    outDatas: ReducerMileageDataType[],
    datas: ReducerMileageDataType[]
} {
    const datas: ReducerMileageDataType[] = []
    const inDatas: ReducerMileageDataType[] = []
    const outDatas: ReducerMileageDataType[] = []
    tbody.map((oneData, i) => {
        // 0: (5) ["20200122", "20200122", "5", "-1500", "성서대.카페코스테스 : 포인트 사용(승인)"]
        const newData: ReducerMileageDataType = {
            content: oneData[4],
            cost: parseInt(oneData[3]),
            date: oneData[0],
            classification: (oneData[2] === "5" ? 'OUT' : 'IN')
        }
        datas.push(newData)
        if (newData.classification === "OUT") {
            outDatas.push(newData)
        } else {
            inDatas.push(newData)
        }
    })

    const result = {
        inDatas,
        outDatas,
        datas
    }

    return result
}



export interface ImileageGetBalanceThunkFunctionD {
    type: string
    balance: number
}

interface ImileageGetBalanceNormalFunctionData {
    balance: string
}

export const mileageGetBalanceNormalFunction = (dispatch: Dispatch<ImileageGetBalanceThunkFunctionD>) => {
    axios.get(`${END_POINT_UNIV}users/balance`, {
        headers: {
            'Authorization': localStorage.getItem('kbucard')
        }
    })
        .then(res => {

            if (res.status === 200) {
                const { balance }: ImileageGetBalanceNormalFunctionData = res.data.data
                dispatch({
                    type: MILEAGE_GET_BALANCE,
                    balance: parseInt(balance)
                })
            }
        })
        .catch(err => {
            console.log(`Error occured at actions/mileage.tsx mileageGetBalanceThunkFunction`)
            console.log(err)
        })
}

export const mileageGetBalanceThunkFunction = () => (dispatch: Dispatch<ImileageGetBalanceThunkFunctionD>) => {
    axios.get(`${END_POINT}users/information/balance`, {
        headers: {
            'Authorization': localStorage.getItem('kbucard')
        }
    })
        .then(res => {

            if (res.status === 200) {

                const { balance }: ImileageGetBalanceNormalFunctionData = res.data.data
                dispatch({
                    type: MILEAGE_GET_BALANCE,
                    balance: parseInt(balance)
                })
            }
        })
        .catch(err => {
            console.log(`Error occured at actions/mileage.tsx mileageGetBalanceThunkFunction`)
            console.log(err)
        })
}