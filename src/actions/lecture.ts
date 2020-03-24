import axios from 'axios'
import { FETCH_LECTURES, LOADING_OFF } from './types.d'
import { Dispatch } from 'react'
import { END_POINT, END_POINT_UNIV } from '../consts/endpoint'

interface IDispatch {
    type: string
    tbody?: string[][]
    thead?: string[]
    select?: ISelect
}

interface ISelect {
    selected: string
    selectable: string[]
}

interface IfetchLecturesThunkFunctionData {
    thead: string[]
    tbody: string[][]

}

interface IfetchLecturesThunkFunctionMeta {
    select: ISelect
}

export const fetchLecturesThunkFunction = (jwtToken: string) => (dispatch: Dispatch<IDispatch>) => {
    axios.get(`${END_POINT_UNIV}users/course?semester=20201`, {
        headers: {
            'Authorization': jwtToken
        }
    })
        .then(res => {
            if (res.status === 200) {
                const { thead, tbody }: IfetchLecturesThunkFunctionData = res.data.data
                const { select }: IfetchLecturesThunkFunctionMeta = res.data.meta
                dispatch({
                    type: FETCH_LECTURES,
                    thead,
                    tbody,
                    select
                })
                dispatch({
                    type: LOADING_OFF
                })
            }
        })
        .catch(err => {
            console.log(`Error occured at actions/lecture.ts fetchLecturesThunkFunction`)
            console.error(err)
        })
}