import React from 'react'
import styled from 'styled-components'
import Left from './Left'
import Center from './Center'
import Right from './Right'

const Container = styled.div`
    width: 90%;
    height: 25vh;
    display: grid;
    grid-template-columns: 49% 1% 49%;
    justify-content: center;
`

const ThirdRowPresenter: React.FC = () => {
    return <Container>
        <Left />
        <Center />
        <Right />
    </Container>
}

export default ThirdRowPresenter