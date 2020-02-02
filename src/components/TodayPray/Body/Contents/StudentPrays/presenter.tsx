import React from 'react'
import styled from 'styled-components'
import { ReducerTodayPrayStudentPrayType } from '../../../../../types/index.d'
import StudentPray from './StudentPray'

const Container = styled.div`
    overflow-y:scroll;
`

interface IProps {
    studentPrays: ReducerTodayPrayStudentPrayType[]
}

const Presenter: React.FC<IProps> = ({
    studentPrays
}) => {
    return <Container>
        student prays
        {studentPrays.map((studentPray, i) => {
            return <StudentPray studentPray={studentPray} key={i} />
        })}
    </Container>
}

export default Presenter