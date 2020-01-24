import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../../../../consts/colors'

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`
const Line = styled.div`
    width:1px;
    height:60%;
    background:${COLORS.weakGray};
`

const Presenter: React.FC = () => {
    return <Container>
        <Line />
    </Container>
}

export default Presenter