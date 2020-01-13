import React from 'react'
import styled from 'styled-components'
import Navigation from '../NavigationBar'
import FirstLow from './FirstLow'
import SecondRow from './SecondRow'
import ThirdRow from './ThirdRow'
import BottomNavigation from '../BottomNavigation'

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`

const MainComponentPresenter: React.FC = () => {
    return <Container>
        <Navigation />
        <FirstLow />
        <SecondRow />
        <ThirdRow />
        <BottomNavigation />
    </Container>
}

export default MainComponentPresenter