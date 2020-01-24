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

const Presenter: React.FC = () => {

    const [redirect, setRedirect] = useState(false)

    if (redirect) {
        return <Redirect to="/lecture" />
    } else {

        return <Container onClick={redirectFunc}>
            <Text>
                수업 시간
        </Text>
        </Container>
    }


    function redirectFunc() {
        setRedirect(true)
    }
}

export default Presenter