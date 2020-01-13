import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../../../consts/colors'
import { useSelector } from 'react-redux'
import { ReducerStateType } from '../../../../types/index.d'
import LoggedInImage from './LoggedInImage'
import LoggedOutImage from './LoggedOutImage'

const Container = styled.div`
    position: relative;
    display:flex;
    flex-direction:column;
    align-items:center;
`

const UnderLine = styled.div`
    position:absolute;
    bottom:0;
    width:60%;
    height:1px;
    background:${COLORS.weakGray};
`

interface IProps { }

const RightPresenter: React.FC<IProps> = () => {
    const isLoggedIn: boolean = useSelector((state: ReducerStateType) => state.user.isLoggedIn)
    return <Container>
        {isLoggedIn ? <LoggedInImage /> : <LoggedOutImage />}
        {/* <UnderLine /> */}
    </Container>
}

export default RightPresenter