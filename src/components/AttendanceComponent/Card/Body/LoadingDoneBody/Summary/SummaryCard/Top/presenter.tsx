import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../../../../../../../consts/colors'
import Card from '../Card'
import Line from '../Line'
import { useSelector } from 'react-redux'
import { ReducerStateType } from '../../../../../../../../types/index.d'

const Container = styled.div`
    border-bottom:1px solid ${COLORS.weakGray};
    display: grid;
    justify-content: space-between;
    grid-template-columns: 49% 1% 49%;
`

const Presenter: React.FC = () => {
    const summaryReducer = useSelector((state: ReducerStateType) => state.attendance.summary)
    return <Container>
        <Card
            dataText={summaryReducer.attendace}
            label={'출석'}
        />
        <Line />
        <Card
            dataText={summaryReducer.absence}
            label={'결석'}
        />
    </Container>
}

export default Presenter