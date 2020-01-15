import React from 'react'
import styled from 'styled-components'
import ClassColumn from './Column'
import { useSelector } from 'react-redux'
import { ReducerStateType } from '../../../../../types/index.d'

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
`

const ClassesContainerPresenter: React.FC = () => {

    const timeTableReducer = useSelector((state: ReducerStateType) => state.timeTable)

    const classes = timeTableReducer.tbody

    return <Container>
        {classes.map((cl, i) => {
            return <ClassColumn key={i} oneDayClasses={cl} />
        })}
    </Container>
}

export default ClassesContainerPresenter