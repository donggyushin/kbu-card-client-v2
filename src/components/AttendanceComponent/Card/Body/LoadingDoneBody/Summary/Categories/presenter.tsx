import React from 'react'
import styled from 'styled-components'
import Cell from './Cell'
import { useSelector } from 'react-redux'
import { ReducerStateType } from '../../../../../../../types/index.d'

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
`



const Presenter: React.FC = () => {

    const current = useSelector((state: ReducerStateType) => state.attendance.current)
    const attendanceReducer = useSelector((state: ReducerStateType) => state.attendance)

    return <Container>
        <Cell
            label="출석"
            current={current}
            name="ATTENDANCE"
            counter={attendanceReducer.attendances.length}
        />
        <Cell
            label="지각"
            current={current}
            name="LATE"
            counter={attendanceReducer.lates.length}
        />
        <Cell
            label="결석"
            current={current}
            name="ABSENCE"
            counter={attendanceReducer.absences.length}
        />
        <Cell
            label="비고"
            current={current}
            name="ETC"
            counter={attendanceReducer.etcs.length}
        />
    </Container>
}

export default Presenter