import axios from 'axios'
import { Dispatch } from 'react'
import { END_POINT, END_POINT_UNIV } from '../consts/endpoint'
import { FETCH_LECTURE_CODE } from './types.d'

interface IDispatchFetchLecutreCode {
    type: string
    lectureCode: any
}

export const fetchLectureCodeThunkFunction = (jwtToken: string) => (dispatch: Dispatch<IDispatchFetchLecutreCode>) => {
    axios.get(`${END_POINT_UNIV}users/course-code?semester=20201`, {
        headers: {
            'Authorization': jwtToken
        }
    })
        .then(res => {
            console.log(res)

            if (res.status === 200) {
                const lectureCode = res.data.data.courses
                dispatch({
                    type: FETCH_LECTURE_CODE,
                    lectureCode
                })
            }
        })
        .catch(err => {
            console.log(`Error occured at actions/lectureCode.tsx fetchLectureCodeThunkFunction`)
            console.error(err)
        })
}