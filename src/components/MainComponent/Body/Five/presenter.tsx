import React from 'react'
import styled from 'styled-components'
import TodaysPrayer from './TodaysPrayer'
import { useSelector } from 'react-redux'
import { ReducerStateType } from '../../../../types/index.d'
import LoggedInMobileStudentCard from './LoggedInMobileStudentCard'
import LoggedOutMobileStudentCard from './LoggedOutMobileStudentCard'

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
`

const Presenter: React.FC = () => {

    const isLoggedIn: boolean = useSelector((state: ReducerStateType) => state.user.isLoggedIn)

    return <Container>
        <TodaysPrayer />
        {isLoggedIn ? <LoggedInMobileStudentCard /> : <LoggedOutMobileStudentCard />}
    </Container>
}

export default Presenter