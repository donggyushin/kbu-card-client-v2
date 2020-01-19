import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Body from './Body'
import { useSelector } from 'react-redux'
import { ReducerStateType } from '../../../../types/index.d'


const Container = styled.div`
    position: relative;
    display:flex;
    flex-direction:column;
    align-items:center;
`


interface IProps { }

const LeftPresenter: React.FC<IProps> = () => {
    const isLoggedIn: boolean = useSelector((state: ReducerStateType) => state.user.isLoggedIn)
    return <Container>
        {isLoggedIn ? <Link style={{
            width: '100%',
            height: '100%',
            textDecoration: 'none'
        }} to="/chapel">
            <Body />
        </Link> : <Body />}

    </Container>

}

export default LeftPresenter