import React from 'react'
import styled from 'styled-components'
import Navigation from '../NavigationBar'
import BottomNavigation from '../BottomNavigation'
import TimeTable from './TimeTable'

const Container = styled.div`
    display: grid;
    height:100vh;
    grid-template-rows: 10% 1fr 7%;
`

const LecturePagePresenter: React.FC = () => {

    return <Container>
        <Navigation />
        <TimeTable
        />
        <BottomNavigation />
    </Container>
}

export default LecturePagePresenter