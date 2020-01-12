import React from 'react'
import styled from 'styled-components'
import Left from './Left'
import Center from './Center'
import Right from './Right'

const Container = styled.div`
    width: 100%;
    height: 37vh;
    display: grid;
    width: 100%;
    justify-content: center;
    grid-template-columns: 49% 1% 49%;
`

const FirstLowPresenter: React.FC = () => {
    return <Container>
        <Left />
        <Center />
        <Right />
    </Container>
}

export default FirstLowPresenter