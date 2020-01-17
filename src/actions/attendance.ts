import axios from 'axios'
import { END_POINT } from '../consts/endpoint'
import { Dispatch } from 'react'
import { ReducerAttendanceExtraType, ReducerAttendanceSummaryType } from '../types/index.d'
import { FETCH_ATTENDANCE } from './types.d'

interface IfetchAttendanceInfoNonThunkFunctionDispatch {
    type: string
    summary: ReducerAttendanceSummaryType
    thead: string[]
    tbody: string[][]
    extra: ReducerAttendanceExtraType
}

interface ISummary {
    출석: string
    일반결석: string
    지각: string
    기타: string
}
interface IExtra {
    강좌번호: string
    분반번호: string
    강좌명: string
    이름: string
}

interface IfetchAttendanceInfoNonThunkFunctionData {
    summary: ISummary
    thead: string[]
    tbody: string[][]
    extra: IExtra
}

export const fetchAttendanceInfoNonThunkFunction = (lmsCode: string, jwtToken: string, dispatch: Dispatch<IfetchAttendanceInfoNonThunkFunctionDispatch>) => {
    axios.get(`${END_POINT}users/information/attendance/${lmsCode}`, {
        headers: {
            'Authorization': jwtToken
        }
    })
        .then(res => {
            if (res.status === 200) {
                const {
                    summary,
                    thead,
                    tbody,
                    extra
                }: IfetchAttendanceInfoNonThunkFunctionData = res.data.data

                const convertedSummary: ReducerAttendanceSummaryType = {
                    absence: parseInt(summary.일반결석),
                    late: parseInt(summary.지각),
                    attendace: parseInt(summary.출석),
                    etc: parseInt(summary.기타)
                }

                const convertedExtra: ReducerAttendanceExtraType = {
                    lectureCode: extra.강좌번호,
                    classCode: extra.분반번호,
                    className: extra.강좌명,
                    studentName: extra.이름
                }

                dispatch({
                    type: FETCH_ATTENDANCE,
                    summary: convertedSummary,
                    tbody,
                    thead,
                    extra: convertedExtra
                })

            }

        })
        .catch(err => {
            console.log(`Error occured at actions/attendance.ts fetchAttendanceInfoNonThunkFunction`)
            console.error(err)
        })
}