import React, { Dispatch, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { MOBILE_STUDENT_CARD_ON, TURN_ON_ALERT } from '../../../../actions/types.d'
import { ReducerStateType } from '../../../../types/index.d'
import { Redirect } from 'react-router-dom'

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`

const Korean = styled.div`
    font-weight: 600;
`

const English = styled.div`
    font-size: 12px;
    margin-top:7px;
`

interface IMobileStudentCardDispatch {
    type: string
}

interface IModalDispatch {
    type: string
    title: string
    text: string
    callBack?: (param: any) => void
}

const RightPresenter: React.FC = () => {

    const dispatch = useDispatch<Dispatch<IMobileStudentCardDispatch>>()
    const userReducer = useSelector((state: ReducerStateType) => state.user)
    const modalDispatch = useDispatch<Dispatch<IModalDispatch>>()

    const [redirect, setRedirect] = useState(false)

    const redirectFunction = () => {
        setRedirect(true)
    }

    const containerClicked = () => {

        if (userReducer.isLoggedIn) {
            dispatch({
                type: MOBILE_STUDENT_CARD_ON
            })
        } else {
            modalDispatch({
                type: TURN_ON_ALERT,
                title: '경고',
                text: '해당 기능은 로그인을 하셔야 이용하실 수 있습니다. 로그인 페이지로 이동하시겠습니까?',
                callBack: redirectFunction
            })
        }

    }

    if (redirect) {
        return <Redirect to="/login" />
    } else {
        return <Container onClick={containerClicked}>
            <Korean>모바일 학생증</Korean>
            <English>Mobild ID Card</English>
        </Container>
    }

}

export default RightPresenter