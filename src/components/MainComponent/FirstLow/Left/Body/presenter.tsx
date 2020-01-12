import React from 'react'
import styled from 'styled-components'
import DynamicImage from './DynamicImage'
import { useSelector } from 'react-redux'
import { ReducerStateType } from '../../../../../types/index.d'
import NormalImage from './NormalImage'

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

interface IProps { }

const BodyPresenter: React.FC<IProps> = (
    { }
) => {
    const isLoggedIn: boolean = useSelector((state: ReducerStateType) => state.user.isLoggedIn)
    return <Container>
        {isLoggedIn ? <DynamicImage /> : <NormalImage />}

    </Container>
}

export default BodyPresenter