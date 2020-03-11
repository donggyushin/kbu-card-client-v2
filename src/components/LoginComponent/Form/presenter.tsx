import React from 'react'
import { TextField, Button } from '@material-ui/core'
import './styles.css'

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
    return <div className="login__container">
        <div className="login__container__card">
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
        </div>
    </div>
}

export default LoginFormPresenter