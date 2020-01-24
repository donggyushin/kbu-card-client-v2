import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { ReducerStateType } from '../../../../types/index.d'
import LoggedInMileage from './LoggedInMileage'
import LoggedOutMileage from './LoggedOutMileage'

const Container = styled.div``

const Presenter: React.FC = () => {
    const isLoggedIn: boolean = useSelector((state: ReducerStateType) => state.user.isLoggedIn)
    return <Container>
        {isLoggedIn ? <LoggedInMileage /> : <LoggedOutMileage />}
    </Container>
}

export default Presenter