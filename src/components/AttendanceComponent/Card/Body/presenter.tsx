import React, { useEffect, Dispatch, useState } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { ReducerStateType } from '../../../../types/index.d'
import LoadingBody from './LoadingBody'
import LoadingDoneBody from './LoadingDoneBody'
import { fetchAttendanceInfoNonThunkFunction } from '../../../../actions/attendance'
import { verifyToken } from '../../../../utils/decodeToken'
import { logoutNonThunkFunction } from '../../../../actions/user'
import { turnOnAlertNonThunkFunction } from '../../../../actions/modal'
import { Redirect } from 'react-router-dom'
import Axios from 'axios'
import { END_POINT_UNIV } from '../../../../consts/endpoint'

const Container = styled.div``

interface IAttendanceDispatch {
    type: string
}

interface IUserDispatch {
    type: string
    token?: string
    sid?: string
    name?: string
    major?: string
    jwtToken?: string
    title?: string
    text?: string
    callBack?: (param: any) => void
}

interface IModalDispatch {
    type: string
    text: string
    title: string,
    callBack?: (param: any) => void
}

const AttendanceCardBodyPresenter: React.FC = () => {
    const [redirect, setRedirect] = useState(false)
    const loading: boolean = useSelector((state: ReducerStateType) => state.attendance.loading)
    const lmsCode = useSelector((state: ReducerStateType) => state.attendance.lectureCode)
    const jwtToken = localStorage.getItem('kbucard')
    const verified = verifyToken()
    const attendanceDispatch = useDispatch<Dispatch<IAttendanceDispatch>>()
    const userDispatch = useDispatch<Dispatch<IUserDispatch>>()
    const modalDispatch = useDispatch<Dispatch<IModalDispatch>>()

    useEffect(() => {

        const id = localStorage.getItem("asjdhjsakd")
        const pw = localStorage.getItem("aslkdjaslkd")

        if (id && pw) {
            Axios.post(`${END_POINT_UNIV}auth/login`, {
                id,
                pw
            }, {
                withCredentials: true
            }).then(res => {
                const jwtToken = res.headers['authorization']
                localStorage.setItem('kbucard', jwtToken)
                fetchAttendanceInfoNonThunkFunction(lmsCode, jwtToken, attendanceDispatch)
            })
        } else {
            // 로그인을 다시 해달라고 하고 로그아웃 시키고 메인 페이지로 보낸다. 
            logoutNonThunkFunction(userDispatch)
            turnOnAlertNonThunkFunction('경고', '세션이 만료되었습니다. 로그인을 다시 해주세요', modalDispatch)
            setTimeout(() => {
                redirectGoHome()
            }, 1500);
        }
    }, [])

    const redirectGoHome = () => {
        setRedirect(true)
    }

    if (redirect) {
        return <Redirect to="/" />
    } else {
        return <Container>
            {loading ? <LoadingBody /> : <LoadingDoneBody />}
        </Container>
    }


}

export default AttendanceCardBodyPresenter