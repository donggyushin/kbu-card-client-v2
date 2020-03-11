import React from 'react'
import styled from 'styled-components'
import { ClockLoader } from 'react-spinners'
import { useSelector } from 'react-redux'
import { ReducerStateType } from '../../../../../types/index.d'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height:90vh;
`

const LoadingBodyPresenter: React.FC = () => {
    const color: string = useSelector((state: ReducerStateType) => state.attendance.color)
    return <Container>
        <ClockLoader
            color={color}
        />
    </Container>
}

export default LoadingBodyPresenter