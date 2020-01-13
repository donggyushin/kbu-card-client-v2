import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../../../consts/colors'

const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`

const Line = styled.div`
    width:1px;
    height:85%;
    background:${COLORS.weakGray};
`

const CenterPresenter: React.FC = () => {
    return <Container>
        <Line />
    </Container>
}

export default CenterPresenter