import React from 'react'
import styled from 'styled-components'
import Navigation from '../NavigationBar'
import LoginForm from './Form'

const Container = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    flex-direction:column;
`

const LoginComponentPresenter: React.FC = () => {
    return <Container>
        <Navigation />
        <LoginForm />
    </Container>
}

export default LoginComponentPresenter