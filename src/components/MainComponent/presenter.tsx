import React from 'react'
import styled from 'styled-components'
import Navigation from '../NavigationBar'
import BottomNavigation from '../BottomNavigation'
import Body from './Body'

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`

const MainComponentPresenter: React.FC = () => {
    return <Container>
        <Navigation />
        <Body />
        <BottomNavigation />
    </Container>
}

export default MainComponentPresenter