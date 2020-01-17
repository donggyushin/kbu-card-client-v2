import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../../../../../../consts/colors'
import { useSelector } from 'react-redux'
import { ReducerStateType } from '../../../../../../../types/index.d'

const Container = styled.div`
    display: flex;
    align-items: center;
    color:${COLORS.deepGray};
`

const ICon = styled.i`
    margin-right:10px;
`

const Text = styled.div`
    font-size: 14px;
`

const Presenter: React.FC = () => {
    const selectedLecture = useSelector((state: ReducerStateType) => state.lecture.selectedCourse)
    const date = selectedLecture[5]

    return <Container>
        <ICon className={'fas fa-calendar'} />
        <Text>{date}</Text>
    </Container>
}

export default Presenter