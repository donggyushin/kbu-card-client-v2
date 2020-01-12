import React from 'react'
import styled from 'styled-components'
import Navigation from '../NavigationBar'
import FirstLow from './FirstLow'

const Container = styled.div``

const MainComponentPresenter: React.FC = () => {
    return <Container>
        <Navigation />
        <FirstLow />
    </Container>
}

export default MainComponentPresenter