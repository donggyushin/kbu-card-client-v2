import React from 'react'
import styled from 'styled-components'
import DatePicker from './DatePicker'
import Contents from './Contents'

const Container = styled.div`
    height:83vh;
    display: grid;
    grid-template-rows: 12% 1fr;
`

const Presenter: React.FC = () => {
    return <Container>
        <DatePicker />
        <Contents />
    </Container>
}

export default Presenter