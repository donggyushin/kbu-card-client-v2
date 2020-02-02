import React from 'react'
import styled from 'styled-components'
import { ReducerTodayPrayStudentPrayType } from '../../../../../../types/index.d'

const Container = styled.div``

interface IProps {
    studentPray: ReducerTodayPrayStudentPrayType
}

const Presenter: React.FC<IProps> = () => {
    return <Container>
        student pray card
    </Container>
}

export default Presenter