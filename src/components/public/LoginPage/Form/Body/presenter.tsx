import React from 'react'
import styled from 'styled-components'
import { TextField, Button } from '@material-ui/core'

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const LoginFormBodyPresenter: React.FC = () => {
    return <Container>
        <TextField
            style={{
                width: '60%'
            }}
            id="outlined-basic" label="인트라넷 아이디" variant="outlined" />
        <TextField
            style={{
                marginTop: 40,
                marginBottom: 40,
                width: '60%'
            }}
            id="outlined-basic" label="비밀번호" type="password" variant="outlined" />
        <Button variant="outlined" color="primary">
            로그인
        </Button>
    </Container>
}

export default LoginFormBodyPresenter