import axios from 'axios'
import { Dispatch } from 'react'
import { END_POINT } from '../consts/endpoint'
import { MILEAGE_GET_BALANCE } from './types.d'

export interface ImileageGetBalanceThunkFunctionD {
    type: string
    balance: number
}

interface ImileageGetBalanceNormalFunctionData {
    balance: string
}

export const mileageGetBalanceNormalFunction = (dispatch: Dispatch<ImileageGetBalanceThunkFunctionD>) => {
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