import React from 'react'
import styled from 'styled-components'
import CafeteriaPresenter from './Cafeteria'
import RightContainer from './RightContainer'

const Container = styled.div`
    margin-top: 80px;
    width: 83%;
    display:flex;
`

const CafeteriaLinkCardPresenter: React.FC = () => {
    return <Container>
        <CafeteriaPresenter />
        <RightContainer />
    </Container>
}

export default CafeteriaLinkCardPresenter