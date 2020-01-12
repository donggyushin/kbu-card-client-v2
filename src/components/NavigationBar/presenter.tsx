import React, { Dispatch } from 'react'
import styled from 'styled-components'
import { COLORS } from '../../consts/colors'
import { useDispatch } from 'react-redux'
import { TURN_ON_TAB } from '../../actions/types.d'
import { Link } from 'react-router-dom'

interface IDispatch {
    type: string
}

const Container = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    height:10vh;
    justify-content:space-between;
    
`

const LeftText = styled.div`
    padding-left:20px;
    padding-right:20px;
    cursor:pointer;
    font-weight:700;
    color:${COLORS.black};
`

const RightConfigIcon = styled.i`
    padding-left:20px;
    padding-right:20px;
    color:${COLORS.gray};
    cursor:pointer;
`


const NavigationPresenter: React.FC = () => {

    const dispatch = useDispatch<Dispatch<IDispatch>>()

    const RightConfigIconClicked = (): void => {
        return dispatch({
            type: TURN_ON_TAB
        })
    }

    return <Container>
        <Link
            style={{
                textDecoration: 'none'
            }}
            to={'/'}>
            <LeftText>
                성서봇
        </LeftText>
        </Link>
        <RightConfigIcon
            onClick={RightConfigIconClicked}
            className="fas fa-cog" />
    </Container>
}

export default NavigationPresenter