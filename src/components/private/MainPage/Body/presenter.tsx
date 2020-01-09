import React from 'react'
import styled from 'styled-components'
import TopPresenter from './Top'
import Bottom from './Bottom'

const Container = styled.div`
    display:grid;
    grid-template-rows:repeat(2, 300px);
    grid-template-columns:repeat(1, 1200px);
    margin-top:30px;
    row-gap:20px;
`




const BodyPresenter: React.FC = () => {
    return <Container>
        <TopPresenter />
        <Bottom />
    </Container>
}

export default BodyPresenter