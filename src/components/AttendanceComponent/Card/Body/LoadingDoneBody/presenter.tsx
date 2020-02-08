import React from 'react'
import styled from 'styled-components'
import Body from './Body'
import Summary from './Summary'

const Container = styled.div`
    height: 100%;
    display: grid;
    grid-template-rows: 36% 1fr;
`

const LoadingDoneBodyPresenter: React.FC = () => {
    return <Container>
        <Body />
        <Summary />
    </Container>
}

export default LoadingDoneBodyPresenter