import React, { Dispatch, useEffect } from 'react'
import styled from 'styled-components'
import Navigation from '../NavigationBar'
import BottomNavigation from '../BottomNavigation'
import Body from './Body'
import { getMileageNonThunkFunction } from '../../actions/mileage'
import { turnOnAlertNonThunkFunction } from '../../actions/modal'
import { ReducerMileageDataType } from '../../types/index.d'
import { useDispatch } from 'react-redux'
import { verifyToken } from '../../utils/decodeToken'
import { ENCRYPTED_USER_ID, ENCRYPTED_USER_PASSWORD } from '../../consts/localStorageKeys'
import { decrypt } from '../../utils/cryptr'
import { replaceJwtToken, IuserLoginDispatch } from '../../actions/user'
import Axios from 'axios'
import { END_POINT_UNIV } from '../../consts/endpoint'


const Container = styled.div``

interface IgetMileageNonThunkFunctionDispatch {
    type: string
    thead?: string[]
    tbody?: string[][]
    datas?: ReducerMileageDataType[]
}

interface IModalDispatch {
    type: string
    text: string
    title: string,
    callBack?: (param: any) => void
}

const Presenter: React.FC = () => {

    const getMileageNonThunkFunctionDispatch = useDispatch<Dispatch<IgetMileageNonThunkFunctionDispatch>>()
    const modalDispatch = useDispatch<Dispatch<IModalDispatch>>()
    const userLoginDispatch = useDispatch<Dispatch<IuserLoginDispatch>>()

    useEffect(() => {


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
                    getMileageNonThunkFunction(jwtToken, getMileageNonThunkFunctionDispatch)
                })
        }

    }, [])

    return <Container>
        <Navigation />
        <Body />
        <BottomNavigation />
    </Container>

    function replaceJwtTokenFunc() {
        if (verifyToken()) {

        } else {
            if (localStorage.getItem(ENCRYPTED_USER_ID) && localStorage.getItem(ENCRYPTED_USER_PASSWORD)) {
                const decryptedId = decrypt(localStorage.getItem(ENCRYPTED_USER_ID) as string)
                const decryptedPw = decrypt(localStorage.getItem(ENCRYPTED_USER_PASSWORD) as string)
                replaceJwtToken(decryptedId, decryptedPw, userLoginDispatch)
            }


        }
    }

    function callModal(title: string, text: string) {
        turnOnAlertNonThunkFunction(title, text, modalDispatch, () => {
            window.location.href = '/'
        })
    }
}

export default Presenter