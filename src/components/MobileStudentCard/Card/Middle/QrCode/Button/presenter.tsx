import React, { Dispatch } from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core'
import { fetchMcuNonThunkFunction } from '../../../../../../actions/mcu'
import { useDispatch, useSelector } from 'react-redux'
import { TURN_ON_ALERT, USER_LOGOUT } from '../../../../../../actions/types.d'
import { verifyToken } from '../../../../../../utils/decodeToken'
import { ReducerStateType } from '../../../../../../types/index.d'

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
        const jwttoken: string | null = localStorage.getItem('kbucard')
        if (jwttoken) {
            if (verifyToken()) {
                fetchMcuNonThunkFunction(jwttoken, mscDispatch)
            } else {
                modalDispatch({
                    type: TURN_ON_ALERT,
                    title: "경고",
                    text: "세션이 만료되었습니다. 다시 로그인해주세요.",
                    callBack: goHome
                })
            }
        } else {
            modalDispatch({
                type: TURN_ON_ALERT,
                title: "경고",
                text: "세션이 만료되었습니다. 다시 로그인해주세요.",
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
}

export default Presenter