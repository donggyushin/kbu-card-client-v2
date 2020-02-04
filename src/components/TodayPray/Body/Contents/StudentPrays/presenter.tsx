import React from 'react'
import styled from 'styled-components'
import { ReducerTodayPrayStudentPrayType } from '../../../../../types/index.d'
import StudentPray from './StudentPray'
import { COLORS } from '../../../../../consts/colors'

const Container = styled.div`
    display: grid;
    grid-template-rows: 19% 1fr;
    padding:7px;
`

const Label = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${COLORS.weakGray};
`

const StudentPrayContainer = styled.div`
    display:flex;
    flex-direction:column;
    padding:7px;
    overflow-y:scroll;
`

interface IProps {
    studentPrays: ReducerTodayPrayStudentPrayType[]
}

const Presenter: React.FC<IProps> = ({
    studentPrays
}) => {
    return <Container>
        <Label>
            학생들의 기도
        </Label>
        <StudentPrayContainer>
            {studentPrays.map((studentPray, i) => {
                return <StudentPray studentPray={studentPray} key={i} />
            })}
        </StudentPrayContainer>
    </Container>
}

export default Presenter