import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../../../../../../../consts/colors'

const Container = styled.div`
    display:flex;
    align-items:center;
`

const Line = styled.div`
    width:1px;
    height: 80%;
    background:${COLORS.weakGray};
`

const Presenter: React.FC = () => {
    return <Container>
        <Line />
    </Container>
}

export default Presenter;