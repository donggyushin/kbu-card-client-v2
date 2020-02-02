import React, { useState } from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'


const Container = styled.div`
    display: grid;
    grid-template-rows: 22% 1fr;
`

const Text = styled.div`
display:flex;
align-items:center;
justify-content:center;
padding-left:10px;
font-size:11px;
`

const Presenter: React.FC = () => {

    const [redirect, setRedirect] = useState(false)

    if (redirect) {
        return <Redirect to="/notice" />
    } else {

        return <Container onClick={goToNotice}>
            <Text>공지사항</Text>
        </Container>
    }


    function goToNotice() {
        setRedirect(true)
    }
}

export default Presenter