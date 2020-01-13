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

interface IProps {
    id: string
    pw: string
    handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void
    login: () => void
}

const LoginComponentPresenter: React.FC<IProps> = ({
    id,
    pw,
    handleInput,
    login
}) => {
    return <Container>
        <Navigation />
        <LoginForm
            id={id}
            pw={pw}
            handleInput={handleInput}
            login={login}
        />
    </Container>
}

export default LoginComponentPresenter