import React from 'react'
import styled from 'styled-components'
import Navigation from '../NavigationBar'
import BottomNavigation from '../BottomNavigation'
import TimeTable from './TimeTable'

const Container = styled.div`
    display:flex;
    width:100%;
    flex-direction:column;
    align-items:center;
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