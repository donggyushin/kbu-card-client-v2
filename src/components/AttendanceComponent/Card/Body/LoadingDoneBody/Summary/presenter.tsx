import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { ReducerStateType } from '../../../../../../types/index.d'
import { COLORS } from '../../../../../../consts/colors'
import SummaryCard from './SummaryCard'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom:1px solid ${COLORS.weakGray};
    flex-direction:column;
`

const Card = styled.div`
    width: 96%;
    height:96%;
    display:grid;
    grid-template-rows:1fr;
`
const Text = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;

`

const LectureCode = styled.div`
    display:flex;
    justify-content:center;
`

const Presenter: React.FC = () => {

    const summaryReducer = useSelector((state: ReducerStateType) => state.attendance.summary)
    const attendanceReducer = useSelector((state: ReducerStateType) => state.attendance)
    return <Container>
        <Card>
            <SummaryCard />
        </Card>
    </Container>
}

export default Presenter