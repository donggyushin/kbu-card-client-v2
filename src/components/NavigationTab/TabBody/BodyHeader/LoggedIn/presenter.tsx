import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid gainsboro;
    padding-bottom: 18px;
    width:100%;
`

const Image = styled.div`
    width:40px;
    height:40px;
    border-radius:4px;
    background-image:url('/samplePersonImage.png');
    background-position:center center;
    background-size: cover;
`

const Name = styled.div`
    color: black;
padding-top: 3px;
padding-bottom: 3px;
padding-left: 6px;
padding-right: 6px;
border-radius: 4px;
margin-top: 10px;
font-size: 12px;
font-weight: 600;
`

const LoggedIn: React.FC = () => {
    return <Container>
        <Image />
        <Name>홍길동</Name>
    </Container>
}

export default LoggedIn