import React, { Dispatch, useEffect } from 'react'
import styled from 'styled-components'
import Navigation from '../NavigationBar'
import BottomNavigation from '../BottomNavigation'
import ChapelBody from './Body'
import { useDispatch } from 'react-redux'
import { UPDATE_CURRENT_LOCATION } from '../../actions/types.d'
import { replaceJwtToken, IuserLoginDispatch } from '../../actions/user'
import { decrypt } from '../../utils/cryptr'
import { verifyToken } from '../../utils/decodeToken'
import { ENCRYPTED_USER_ID, ENCRYPTED_USER_PASSWORD } from '../../consts/localStorageKeys'

const Container = styled.div``

interface UpdateCurrentLocationDispatch {
    type: string
    current: string
}

const Presenter: React.FC = () => {

    const locationDispatch = useDispatch<Dispatch<UpdateCurrentLocationDispatch>>()
    const userLoginDispatch = useDispatch<Dispatch<IuserLoginDispatch>>()

    useEffect(() => {

        locationDispatch({
            type: UPDATE_CURRENT_LOCATION,
            current: 'chapel'
        })

        if (localStorage.getItem('kbucard')) {
            replaceJwtTokenFunc()
        }

    }, [])

    return <Container>
        <Navigation />
        <ChapelBody />
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
}

export default Presenter