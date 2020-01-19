import React from 'react'
import styled from 'styled-components'
import Categories from './Categories'
import Datas from './Datas'

const Container = styled.div`
    height:83vh;
    display: grid;
    grid-template-rows: 10% 1fr;
`

const Presenter: React.FC = () => {
    return <Container>
        <Categories />
        <Datas />
    </Container>
}

export default Presenter