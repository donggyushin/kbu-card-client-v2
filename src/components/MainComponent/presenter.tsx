import React from 'react'
import styled from 'styled-components'
import Navigation from '../NavigationBar'

const Container = styled.div``

const MainComponentPresenter: React.FC = () => {
    return <Container>
        <Navigation />
        Main Component
    </Container>
}

export default MainComponentPresenter