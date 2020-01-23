import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Datas from './Datas'

const Container = styled.div`
    height:83vh;
    display: grid;
    grid-template-rows: 48px 1fr;
`

const Presenter: React.FC = () => {
    return <Container>
        <Header />
        <Datas />
    </Container>
}

export default Presenter