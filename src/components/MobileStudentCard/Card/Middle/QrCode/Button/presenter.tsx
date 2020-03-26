import React, { Dispatch } from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core'
import { fetchMcuNonThunkFunction } from '../../../../../../actions/mcu'
import { useDispatch, useSelector } from 'react-redux'
import { TURN_ON_ALERT, USER_LOGOUT } from '../../../../../../actions/types.d'
import { verifyToken } from '../../../../../../utils/decodeToken'
import { ReducerStateType } from '../../../../../../types/index.d'
import { replaceJwtToken } from '../../../../../../actions/user'
import { ENCRYPTED_USER_ID, ENCRYPTED_USER_PASSWORD } from '../../../../../../consts/localStorageKeys'
import { decrypt } from '../../../../../../utils/cryptr'
import Axios from 'axios'
import { END_POINT_UNIV } from '../../../../../../consts/endpoint'

const Container = styled.div`
    display:flex;
    justify-content:center;
    padding-top:47px;
`

interface ImodalDispatch {
    type: string
    title: string
    text: string
    callBack?: (param: any) => void
}

interface IUserDispatch {
    type: string
}

interface IMscDispatch {
    type: string
    img?: string
    token?: string
    iat?: number
    exp?: number
}

const Presenter: React.FC = () => {

    const modalDispatch = useDispatch<Dispatch<ImodalDispatch>>()
    const userDispatch = useDispatch<Dispatch<IUserDispatch>>()
    const mscDispatch = useDispatch<Dispatch<IMscDispatch>>()
    const loading: boolean = useSelector((state: ReducerStateType) => state.mcu.loading)

    const clickButton = () => {


        const id = localStorage.getItem("asjdhjsakd")
        const pw = localStorage.getItem("aslkdjaslkd")

        if (id && pw) {
            Axios.post(`${END_POINT_UNIV}auth/login`, {
                id,
                pw
            }, {
                withCredentials: true
            })
                .then(res => {
                    const jwtToken: string = res.headers['authorization']
                    localStorage.setItem('kbucard', jwtToken)

                    fetchMcuNonThunkFunction(jwtToken, mscDispatch)
                })
        } else {
            modalDispatch({
                type: TURN_ON_ALERT,
                title: "경고",
                text: "로그인이 제대로 이루어져 있지 않습니다. 다시 로그인해주세요.",
                callBack: goHome
            })
        }


    }



    const goHome = () => {
        userDispatch({
            type: USER_LOGOUT
        })
    }

    return <Container>
        {loading ? <Button>Loading...</Button> : <Button disabled={loading} onClick={clickButton} variant="outlined" color="primary">
            QR CODE 발급받기
        </Button>}

    </Container>

    // 토큰을 교체하고 다시 큐알코드를 요청하는 함수 
    async function replaceTokenAndReFetchQrCode() {

        const jwttoken: string = localStorage.getItem('kbucard') as string

        const id = decrypt(localStorage.getItem(ENCRYPTED_USER_ID) as string)
        const pw = decrypt(localStorage.getItem(ENCRYPTED_USER_PASSWORD) as string)

        await replaceJwtToken(id, pw, userDispatch)

        fetchMcuNonThunkFunction(jwttoken, mscDispatch)

    }
}

export default Presenter