import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../../../consts/colors'
import { useSelector } from 'react-redux'
import { ReducerStateType } from '../../../../types/index.d'
import Cafeteria from './Cafeteria'
import Line from './Line'
import LoggedInLecture from './LoggedInLecture'
import LoggedOutLecture from './LoggedOutLecture'

const Container = styled.div`
    display: grid;
    grid-template-columns: 49% 1% 49%;
    justify-content: space-between;
    border-bottom:1px solid ${COLORS.weakGray};
`

const Presenter: React.FC = () => {
    const loggedIn: boolean = useSelector((state: ReducerStateType) => state.user.isLoggedIn)
    return <Container>
        <Cafeteria />
        <Line />
        {loggedIn ? <LoggedInLecture /> : <LoggedOutLecture />}
    </Container>
}

export default Presenter