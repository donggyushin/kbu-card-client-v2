import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../../../consts/colors'

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`

const Line = styled.div`
    height:85%;
    width:1px;
    background:${COLORS.weakGray};
`

const CenterPresenter: React.FC = () => {
    return <Container>
        <Line />
    </Container>
}

export default CenterPresenter