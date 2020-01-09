import React from 'react'
import styled from 'styled-components'
import ButtonsContainer from './ButtonContainer'

const Container = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const NavigationBarPresenter: React.FC = () => {
    return <Container>
        <ButtonsContainer />
    </Container>
}

export default NavigationBarPresenter