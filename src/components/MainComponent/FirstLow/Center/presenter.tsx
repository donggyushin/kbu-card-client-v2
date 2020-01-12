import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../../../consts/colors'

const Container = styled.div`
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
`

const Line = styled.div`
    height:60%;
    width:1px;
    background:${COLORS.weakGray};
`

interface IProps { }

const CenterPresenter: React.FC<IProps> = () => {
    return <Container>
        <Line />
    </Container>
}

export default CenterPresenter