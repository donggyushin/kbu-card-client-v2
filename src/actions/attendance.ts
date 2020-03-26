import axios from 'axios'
import { END_POINT, END_POINT_UNIV } from '../consts/endpoint'
import { Dispatch } from 'react'
import { ReducerAttendanceExtraType, ReducerAttendanceSummaryType, ReducerAttendanceDetailType } from '../types/index.d'
import { FETCH_ATTENDANCE, SORT_ATTENDANCES, PUT_ATTENDANCE_CURRENT } from './types.d'

interface IputAttendanceCurrentDispatch {
    type: string
    newCurrent: "" | "ATTENDANCE" | "ETC" | "ABSENCE" | "LATE"
}

export const putAttendanceCurrent = (newCurrent: "" | "ATTENDANCE" | "ETC" | "ABSENCE" | "LATE", dispatch: Dispatch<IputAttendanceCurrentDispatch>) => {

    dispatch({
        type: PUT_ATTENDANCE_CURRENT,
        newCurrent
    })
}


interface IfetchAttendanceInfoNonThunkFunctionDispatch {
    type: string
    summary?: ReducerAttendanceSummaryType
    thead?: string[]
    tbody?: string[][]
    extra?: ReducerAttendanceExtraType
    attendances?: ReducerAttendanceDetailType[]
    absences?: ReducerAttendanceDetailType[]
    lates?: ReducerAttendanceDetailType[]
    etcs?: ReducerAttendanceDetailType[]
    all?: ReducerAttendanceDetailType[]
}

interface ISummary {
    출석: string
    일반결석: string
    지각: string
    기타: string
    강좌번호: string
    분반번호: string
    강좌명: string
    이름: string
}
interface IExtra {
    강좌번호: string
    분반번호: string
    강좌명: string
    이름: string
}

interface IfetchAttendanceInfoNonThunkFunctionData {
    summary: ISummary
    head: string[]
    body: string[][]
    // extra: IExtra
}

export const fetchAttendanceInfoNonThunkFunction = (lmsCode: string, jwtToken: string, dispatch: Dispatch<IfetchAttendanceInfoNonThunkFunctionDispatch>) => {
    axios.get(`${END_POINT_UNIV}users/attendance/${lmsCode}`, {
        headers: {
            'Authorization': jwtToken
        }
    })
        .then(res => {
            if (res.status === 200) {
                console.log(res)
                const {
                    summary,
                    head,
                    body
                }: IfetchAttendanceInfoNonThunkFunctionData = res.data.data

                sortAttendancesInfo(body, dispatch)

                const convertedSummary: ReducerAttendanceSummaryType = {
                    absence: parseInt(summary.일반결석),
                    late: parseInt(summary.지각),
                    attendace: parseInt(summary.출석),
                    etc: parseInt(summary.기타)
                }



                const convertedExtra: ReducerAttendanceExtraType = {
                    lectureCode: summary.강좌번호,
                    classCode: summary.분반번호,
                    className: summary.강좌명,
                    studentName: summary.이름
                }

                dispatch({
                    type: FETCH_ATTENDANCE,
                    summary: convertedSummary,
                    tbody: body,
                    thead: head,
                    extra: convertedExtra
                })

            }

        })
        .catch(err => {
            console.log(`Error occured at actions/attendance.ts fetchAttendanceInfoNonThunkFunction`)
            console.error(err)
        })
}

function sortAttendancesInfo(attendancesdata: string[][], dispatch: Dispatch<IfetchAttendanceInfoNonThunkFunctionDispatch>) {
    const attendances: ReducerAttendanceDetailType[] = []
    const lates: ReducerAttendanceDetailType[] = []
    const absences: ReducerAttendanceDetailType[] = []
    const etcs: ReducerAttendanceDetailType[] = []
    const all: ReducerAttendanceDetailType[] = []

    attendancesdata.map(data => {
        let attendaceInstance: ReducerAttendanceDetailType = {
            date: data[0],
            time: data[1],
            classification: ""
        }
        if (data[2].length === 1) {
            // 출석
            attendaceInstance.classification = "ATTENDANCE"
            attendances.push(attendaceInstance)
        } else if (data[4].length === 1) {
            // 지각
            attendaceInstance.classification = "LATE"
            lates.push(attendaceInstance)
        } else if (data[3].length === 1) {
            // 결석
            attendaceInstance.classification = "ABSENCE"
            absences.push(attendaceInstance)
        } else if (data[5].length === 1) {
            // 기타 
            attendaceInstance.classification = "ETC"
            etcs.push(attendaceInstance)
        } else {
            // 출석
            attendaceInstance.classification = "ATTENDANCE"
            attendances.push(attendaceInstance)
        }

        all.push(attendaceInstance)
    })

    attendances.reverse()
    lates.reverse()
    absences.reverse()
    etcs.reverse()
    all.reverse()

    dispatch({
        type: SORT_ATTENDANCES,
        attendances,
        lates,
        absences,
        etcs,
        all
    })
}
