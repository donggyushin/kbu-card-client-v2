import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { ReducerStateType } from '../../../../../../types/index.d'

const Container = styled.div`
    padding-left: 14px;
    padding-top: 20px;
    display:flex;
    flex-direction:column;
`

const Name = styled.div`
    margin-bottom: 34px;
    font-weight:600;
`

const Major = styled.div``

const Sid = styled.div``

const Presenter: React.FC = () => {
    const UserReducer = useSelector((state: ReducerStateType) => state.user)
    const { name, major, sid } = UserReducer
    return <Container>
        <Name>{name}</Name>
        <Major>{major}</Major>
        <Sid>{sid}</Sid>
    </Container>
}

export default Presenter