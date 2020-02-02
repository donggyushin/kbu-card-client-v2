import React from 'react'
import styled from 'styled-components'
import DatePicker from './DatePicker'
import Menus from './Menus'

const Container = styled.div`
    height:83vh;
    display: grid;
    grid-template-rows: 12% 1fr;
`

const Presenter: React.FC = () => {
    return <Container>
        <DatePicker />
        <Menus />
    </Container>
}

export default Presenter