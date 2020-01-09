import React from 'react'
import styled from 'styled-components'
import LoginForm from './Form'

const Container = styled.div`
    display:flex;
    width:100%;
    height:100vh;
    flex-direction:column;
    align-items:center;
    background:white;
    color:black;
`

const LoginPage: React.FC = () => {
    return <Container>
        <LoginForm />
    </Container>
}

export default LoginPage