import React from 'react'
import styled from 'styled-components'
import Left from './Left'
import Center from './Center'
import Right from './Right'
import { COLORS } from '../../../consts/colors'

const Container = styled.div`
    width: 90%;
    height: 33vh;
    display: grid;
    justify-content: center;
    grid-template-columns: 49% 1% 49%;
    border-bottom:1px solid ${COLORS.weakGray};
`

const FirstLowPresenter: React.FC = () => {
    return <Container>
        <Left />
        <Center />
        <Right />
    </Container>
}

export default FirstLowPresenter