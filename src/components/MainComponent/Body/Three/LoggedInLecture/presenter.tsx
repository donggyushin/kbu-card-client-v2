import React, { useState } from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'

const Container = styled.div`
        display: grid;
    grid-template-rows: 17% 1fr;
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

const Image = styled.img`
    width:50px;
    position: relative;
    bottom: 12%;
`

const Presenter: React.FC = () => {

    const [redirect, setRedirect] = useState(false)

    if (redirect) {
        return <Redirect to="/lecture" />
    } else {

        return <Container onClick={redirectFunc}>
            <Text>
                수업 시간
            </Text>
            <ImageContainer>
                <Image src="https://img.icons8.com/officel/80/000000/overtime.png" />
            </ImageContainer>
        </Container>
    }


    function redirectFunc() {
        setRedirect(true)
    }
}

export default Presenter