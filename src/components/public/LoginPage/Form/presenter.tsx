import React from 'react'
import styled from 'styled-components'
import LoginFormHeader from './Header'
import LoginFormBody from './Body'


const Container = styled.div`
    width:370px;
    height:500px;
    border-radius:4px;
    border:1px solid white;
    box-shadow:0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
    margin-top:100px;
    display:flex;
    flex-direction:column;
    align-items:center;
    background:white;
    color:black;

    @media only screen and (max-width: 370px) {
        width:100%;
    }

`

const LoginFormPresenter: React.FC = () => {
    return <Container>
        <LoginFormHeader />
        <LoginFormBody />
    </Container>
}

export default LoginFormPresenter