import React, { useState } from 'react'
import styled from 'styled-components'
import { ProgressBar } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'

const Container = styled.div`
        display: grid;
    grid-template-columns: 74% 1fr;
`

const Left = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:100%;
`;

const Right = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:12px;
`

const Icon = styled.i`
    margin-left:7px;
`

const Presenter: React.FC = () => {

    const [redirect, setRedirect] = useState(false)

    if (redirect) {
        return <Redirect to={'/login'} />
    } else {
        return <Container
            onClick={redirectFunc}
        >
            <Left>
                <ProgressBar style={{
                    width: '90%'
                }} now={0} />
            </Left>
            <Right>
                로그인 <Icon className="fas fa-chevron-right" />
            </Right>
        </Container>
    }



    function redirectFunc() {
        setRedirect(true)
    }

}

export default Presenter