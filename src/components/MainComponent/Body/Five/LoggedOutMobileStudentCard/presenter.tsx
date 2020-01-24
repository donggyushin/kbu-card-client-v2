import React, { useState, Dispatch } from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { turnOnAlertNonThunkFunction } from '../../../../../actions/modal'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
`

interface IModalDispatch {
    type: string
    text: string
    title: string,
    callBack?: (param: any) => void
}

const Presenter: React.FC = () => {
    const [redirect, setRedirect] = useState(false)
    const modalDispatch = useDispatch<Dispatch<IModalDispatch>>()
    if (redirect) {
        return <Redirect to="/login" />
    } else {
        return <Container onClick={showAlert}>
            모바일 학생증
    </Container>

    }

    function showAlert() {
        turnOnAlertNonThunkFunction("알림", "해당 기능을 이용하시려면 로그인을 하셔야합니다. 로그인 페이지로 이동하시겠습니까?", modalDispatch, redirectFunc)
    }

    function redirectFunc() {
        setRedirect(true)
    }
}

export default Presenter