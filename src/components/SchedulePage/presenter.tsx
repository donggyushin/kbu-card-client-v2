import React from 'react'
import styled from 'styled-components'
import Navigation from '../NavigationBar'
import BottomNavigation from '../BottomNavigation'
import CalenderBody from './Body'

const Container = styled.div``

const Presenter: React.FC = () => {
    return <Container>
        <Navigation />
        <CalenderBody />
        <BottomNavigation />
    </Container>
}

export default Presenter