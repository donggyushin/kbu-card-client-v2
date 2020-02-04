import React, { useState } from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'


const Container = styled.div`
    display: grid;
    grid-template-rows: 22% 1fr;
    padding-left:10px;
`

const Text = styled.div`
display:flex;
align-items:center;
justify-content:center;
font-size:11px;
`

const ImageContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`

const Img = styled.img`
    position: relative;
    bottom: 15%;
    width:50px;
`

const Presenter: React.FC = () => {

    const [redirect, setRedirect] = useState(false)

    if (redirect) {
        return <Redirect to="/notice" />
    } else {

        return <Container onClick={goToNotice}>
            <Text>공지사항</Text>
            <ImageContainer>
                <Img src="https://img.icons8.com/cotton/80/000000/speaker.png" />
            </ImageContainer>
        </Container>
    }


    function goToNotice() {
        setRedirect(true)
    }
}

export default Presenter