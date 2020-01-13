import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../../../consts/colors'
import Body from './Body'

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

const LeftPresenter: React.FC<IProps> = () => {
    return <Container>
        <Body />
        {/* <UnderLine /> */}
    </Container>
}

export default LeftPresenter