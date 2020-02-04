import React, { Dispatch, useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { turnOnAlertNonThunkFunction } from '../../../../../actions/modal'
import { Redirect } from 'react-router-dom'

const Container = styled.div`
        display: grid;
    grid-template-rows: 17% 1fr;
`

const Text = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:11px;
`

const ImageContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`

const Image = styled.img`
    width:50px;
    position: relative;
    bottom: 12%;
    opacity:0.6;
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
            <Text>
                수업 시간
        </Text>
            <ImageContainer>
                <Image src="https://img.icons8.com/officel/80/000000/overtime.png" />
            </ImageContainer>
        </Container>
    }


    function showAlert() {
        turnOnAlertNonThunkFunction("알림", "로그인이 필요한 페이지입니다. 로그인페이지로 이동하시겠습니까? ", modalDispatch, redirectFunc)
    }

    function redirectFunc() {
        setRedirect(true)
    }

}

export default Presenter