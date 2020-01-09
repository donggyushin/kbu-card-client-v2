import React from 'react'
import WhiteTextBox from './TextBox'
import styled from 'styled-components'
import LocationText from './Location'

const Container = styled.div`
    margin-top:30px;
    width: 100%;
    height: 600px;
    background:url('/school.jpg');
    background-size:cover;
    display:flex;
    flex-direction:column;
    align-items:center;
    color:white;
    position:relative;
    font-family: 'Roboto', sans-serif;
`

const IntroImageComponentPresenter: React.FC = () => {
    return <Container>
        <WhiteTextBox />
        <LocationText />
    </Container>
}

export default IntroImageComponentPresenter