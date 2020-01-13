import React from 'react'
import styled from 'styled-components'
import { TextField, Button } from '@material-ui/core'
import { BoxShadowObject } from '../../../consts/boxShadow'

const Container = styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
`

const Card = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    box-shadow: ${BoxShadowObject.typeOne};
    border-radius:4px;
    width: 300px;
    height: 400px;
    margin-top:50px;
`

const TitleText = styled.div`
    margin-top: 35px;
    font-weight: 600;
    margin-bottom: 36px;
`


interface IProps {
    id: string
    pw: string
    handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void
    login: () => void
}


const LoginFormPresenter: React.FC<IProps> = ({
    id,
    pw,
    handleInput,
    login
}) => {
    return <Container>
        <Card>
            <TitleText>성서봇</TitleText>
            <TextField
                style={{
                    marginBottom: 20
                }}
                label="아이디" variant="outlined"
                value={id}
                name={'id'}
                onChange={handleInput}
            />
            <TextField
                style={{
                    marginBottom: 40
                }}
                value={pw}
                name={'pw'}
                label="비밀번호"
                type="password"
                variant="outlined"
                onChange={handleInput}
            />
            <Button
                onClick={login}
                variant="contained" color="primary">로그인</Button>
        </Card>
    </Container>
}

export default LoginFormPresenter