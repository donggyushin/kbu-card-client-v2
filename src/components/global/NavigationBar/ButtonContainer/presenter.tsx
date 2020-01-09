import React from 'react'
import styled from 'styled-components'
import NavigationButton from './Button'

const Container = styled.div`
    display:flex;
    width: 75%;
    justify-content: space-around;
`


const ButtonContainerPresenter: React.FC = () => {
    return <Container>
        <NavigationButton
            text="공지사항"
        />
        <NavigationButton
            text="채플"
        />
        <NavigationButton
            text="시간표"
        />
        <NavigationButton
            text="온라인 학생증"
        />
        <NavigationButton
            text="공지사항"
        />
        <NavigationButton
            text="학사일정"
        />
        <NavigationButton
            text="학식"
        />
    </Container>
}

export default ButtonContainerPresenter