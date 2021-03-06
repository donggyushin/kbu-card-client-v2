import React from 'react'
import styled from 'styled-components'
import Navigation from '../NavigationBar'
import CalenderBody from './Body'

const Container = styled.div``

const Presenter: React.FC = () => {
    return <Container>
        <Navigation />
        <CalenderBody />
    </Container>
}

export default Presenter