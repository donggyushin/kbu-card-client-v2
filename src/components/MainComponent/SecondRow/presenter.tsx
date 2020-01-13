import React from 'react'
import styled from 'styled-components'
import Left from './Left'
import Center from './Center'
import Right from './Right'
import { COLORS } from '../../../consts/colors'

const Container = styled.div`
    height: 25vh;
    width: 90%;
    display: grid;
    grid-template-columns: 59% 1% 40%;
    border-bottom:1px solid ${COLORS.weakGray};
`

const SecondRowPresenter: React.FC = () => {
    return <Container>
        <Left />
        <Center />
        <Right />
    </Container>
}

export default SecondRowPresenter