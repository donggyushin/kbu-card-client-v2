import axios from 'axios'
import { END_POINT } from '../consts/endpoint'
import { Dispatch } from 'react'
import { CHAPEL_GET } from './types.d'

interface IchapelNotThunkFunctionDispatch {
    type: string
    daysOfWeek: number
    duty: number
    late: number
    attendance: number
    sure: number
    tbody: string[][]
    thead: string[]
    selected: string
    selectable: string[]
}

interface ISummary {
    주중수업일수: string
    규정일수: string
    출석: string
    지각: string
    확정: string
}

interface IchapelNotThunkFunctionData {
    summary: ISummary,
    thead: string[]
    tbody: string[][]
}

interface IchapelNotThunkFunctionMeta {
    selected: string
    selectable: string[]
}

export const chapelNotThunkFunction = (jwtToken: string, dispatch: Dispatch<IchapelNotThunkFunctionDispatch>) => {
    axios.get(`${END_POINT}users/information/chapel`, {
        headers: {
            'Authorization': jwtToken
        }
    })
        .then(res => {
            console.log('response from get chapel: ', res)
            if (res.status === 200) {

                const { summary, tbody, thead }: IchapelNotThunkFunctionData = res.data.data
                const { selectable, selected }: IchapelNotThunkFunctionMeta = res.data.meta.select
                const {
                    주중수업일수,
                    규정일수,
                    출석,
                    지각,
                    확정
                } = summary

                console.log(res.data.meta.select)
                console.log(selectable)
                console.log(selected)

                const daysOfWeek = parseInt(주중수업일수)
                const duty = parseInt(규정일수)
                const late = parseInt(지각)
                const attendance = parseInt(출석)
                const sure = parseInt(확정)

                dispatch({
                    type: CHAPEL_GET,
                    daysOfWeek,
                    duty,
                    late,
                    attendance,
                    sure,
                    tbody,
                    thead,
                    selected,
                    selectable
                })


            } else if (res.status === 304) {
                console.log('chapel data not modified')

            }
        })
        .catch(err => {
            console.log(`Error occured at action/chapel.tsx chapelNotThunkFunction`)
            console.error(err)
        })
}