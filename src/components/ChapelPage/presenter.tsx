import React from 'react'
import styled from 'styled-components'
import Navigation from '../NavigationBar'
import BottomNavigation from '../BottomNavigation'
import ChapelBody from './Body'

const Container = styled.div``

const Presenter: React.FC = () => {
    return <Container>
        <Navigation />
        <ChapelBody />
        <BottomNavigation />
    </Container>
}

export default Presenter