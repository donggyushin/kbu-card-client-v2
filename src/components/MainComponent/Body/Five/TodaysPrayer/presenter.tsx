import React, { useState } from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
`

const Presenter: React.FC = () => {

    const [redirect, setRedirect] = useState(false)
    if (redirect) {
        return <Redirect to="/pray" />
    } else {
        return <Container onClick={redirectFunc}>
            오늘의 기도
    </Container>

    }

    function redirectFunc() {
        setRedirect(true)
    }
}

export default Presenter;