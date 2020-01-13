import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import { Link } from 'react-router-dom'

const Container = styled.div`
    width: 80%;
    margin-top: 25px;
    display: grid;
    grid-template-columns:repeat(4, 1fr);
    grid-column-gap:20px;
    grid-row-gap:20px;
    
`

const ButtonContainer = styled.div``

interface IProps {
    isLoggedIn: boolean
    logoutUser: () => void
    shutDownTabBar: () => void
}

const ButtonsContainerPresenter: React.FC<IProps> = ({
    isLoggedIn,
    logoutUser,
    shutDownTabBar
}) => {
    return <Container>
        {isLoggedIn ? <ButtonContainer
            onClick={logoutUser}
        >
            <Button
                iconClassName="fas fa-sign-out-alt"
                text="로그아웃"
            />
        </ButtonContainer> : <Link
            style={{
                textDecoration: 'none'
            }}
            onClick={shutDownTabBar}
            to={'/login'}>
                <Button
                    iconClassName="fas fa-sign-in-alt"
                    text="로그인"
                />
            </Link>}
    </Container>
}

export default ButtonsContainerPresenter