import React from 'react'
import styled from 'styled-components'
import TimeTableHeader from './Header'
import TimeTableBody from './Body'

const Container = styled.div`
    width: 100%;
`

interface IProps { }

const TimeTablePresenter: React.FC<IProps> = () => {
    return <Container>
        <TimeTableHeader />
        <TimeTableBody />
    </Container>
}

export default TimeTablePresenter