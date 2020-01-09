import React from 'react'
import styled from 'styled-components'
import Title from './Title'
import Description from './Description'

const Container = styled.div`
display:flex;
flex-direction:column;
width:400px;
`

const InfomationPresenter: React.FC = () => {
    return <Container>
        <Title />
        <Description />
    </Container>
}

export default InfomationPresenter