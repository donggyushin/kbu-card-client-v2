import React, { Dispatch, useEffect, useState } from 'react'
import styled from 'styled-components'
import { getNoticeNonThunkFunction } from '../../../actions/notice'
import { useDispatch, useSelector } from 'react-redux'
import { verifyToken } from '../../../utils/decodeToken'
import { turnOnAlertNonThunkFunction } from '../../../actions/modal'
import { Redirect } from 'react-router-dom'
import { ReducerStateType } from '../../../types/index.d'
import Cell from './Cell'

const Container = styled.div`
    width: 100%;
    height: 83vh;
    display: grid;
    grid-template-columns: 94%;
    justify-content: center;
    overflow-y:scroll;
`

interface INoticeDispatch {
    type: string
}

interface IAlertDispatch {
    type: string
    text: string
    title: string,
    callBack?: (param: any) => void
}

const Presenter: React.FC = () => {

    const noticeDispatch = useDispatch<Dispatch<INoticeDispatch>>()
    const alertDispatch = useDispatch<Dispatch<IAlertDispatch>>()
    const [redirect, setRedirect] = useState(false)
    const noticeReducer = useSelector((state: ReducerStateType) => state.notice)

    useEffect(() => {
        if (checkThereIsToken()) {
            const token = localStorage.getItem('kbucard')
            if (token) {
                callGetNoticeFunction(token)
            }
        } else {
            showAlert()
        }
    }, [])

    if (redirect) {
        return <Redirect to="/" />
    } else {
        return <Container>
            {noticeReducer.datas.map((data, i) => {
                return <Cell data={data} key={i} />
            })}
        </Container>

    }


    function showAlert() {
        turnOnAlertNonThunkFunction("죄송해요", "세션이 만료되었습니다. 다시 로그인해주세요.", alertDispatch, redirectFunc)
    }

    function redirectFunc() {
        setRedirect(true)
    }


    function checkThereIsToken(): boolean {
        const token = localStorage.getItem('kbucard')
        if (token) {
            if (verifyToken()) {
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    }

    function callGetNoticeFunction(jwtToken: string) {
        getNoticeNonThunkFunction(jwtToken, noticeDispatch)
    }
}

export default Presenter