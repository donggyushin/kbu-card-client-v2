import React from 'react'
import styled from 'styled-components'
import TimeLine from './TimeLine'
import ClassesContainer from './ClassesContainer'

const Container = styled.div`
    display: grid;
    grid-template-columns: 27px 1fr;
`

const TimeTableBodyPresenter: React.FC = () => {
    return <Container>
        <TimeLine />
        <ClassesContainer />
    </Container>
}

export default TimeTableBodyPresenter