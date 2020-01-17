import React from 'react'
import styled from 'styled-components'
import Card from '../Card'
import Line from '../Line'
import { COLORS } from '../../../../../../../../consts/colors'
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
            dataText={summaryReducer.late}
            label={'지각'}
        />
        <Line />
        <Card
            dataText={summaryReducer.etc}
            label={'기타'}
        />
    </Container>
}

export default Presenter