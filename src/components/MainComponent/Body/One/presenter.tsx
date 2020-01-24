import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { ReducerStateType } from '../../../../types/index.d'
import LoggedInChapelBar from './LoggedInChapelBar'
import LoggedOutChapelBar from './LoggedOutChapelBar'
import { COLORS } from '../../../../consts/colors'

const Container = styled.div`
    display: grid;
    grid-template-rows: 30% 1fr;
    border-bottom:1px solid ${COLORS.weakGray};
`

const Text = styled.div`
    font-size: 11px;
    display: flex;
    align-items: center;
    padding-left:10px;
`

const Presenter: React.FC = () => {

    const loggedIn: boolean = useSelector((state: ReducerStateType) => state.user.isLoggedIn)

    return <Container>
        <Text>채플</Text>
        {loggedIn ? <LoggedInChapelBar /> : <LoggedOutChapelBar />}
    </Container>
}

export default Presenter