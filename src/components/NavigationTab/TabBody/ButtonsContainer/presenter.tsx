import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import { Link } from 'react-router-dom'

const Container = styled.div`
    width: 80%;
    margin-top: 25px;
    
`

const ButtonContainer = styled.div`
    display: grid;
    grid-template-columns:repeat(4, 1fr);
    grid-column-gap:20px;
    grid-row-gap:20px;
`

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
        >
            <Button
                iconClassName="fas fa-sign-out-alt"
                text="로그아웃"
                onClick={logoutUser}
            />
            <Link
                style={{
                    textDecoration: 'none'
                }}
                onClick={shutDownTabBar}
                to={'/schedule'}>
                <Button
                    iconClassName="far fa-calendar-alt"
                    text="학사일정"
                />
            </Link>

        </ButtonContainer> : <ButtonContainer>
                <Link
                    style={{
                        textDecoration: 'none'
                    }}
                    onClick={shutDownTabBar}
                    to={'/login'}>
                    <Button
                        iconClassName="fas fa-sign-in-alt"
                        text="로그인"
                    />
                </Link>
                <Link
                    style={{
                        textDecoration: 'none'
                    }}
                    onClick={shutDownTabBar}
                    to={'/schedule'}>
                    <Button
                        iconClassName="far fa-calendar-alt"
                        text="학사일정"
                    />
                </Link>
            </ButtonContainer>}
    </Container>
}

export default ButtonsContainerPresenter