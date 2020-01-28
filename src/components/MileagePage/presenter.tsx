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

    useEffect(() => {

        if (verifyToken()) {
            const token = localStorage.getItem('kbucard')
            if (token) {
                getMileageNonThunkFunction(token, getMileageNonThunkFunctionDispatch)

            } else {
                callModal('경고', '로그인이 제대로 이루어져있지 않습니다. 다시 로그인해주세요. ')
            }
        } else {
            callModal('경고', '토큰의 만료시간이 끝났습니다. 다시 로그인해주세요.')
        }

    }, [])

    return <Container>
        <Navigation />
        <Body />
        <BottomNavigation />
    </Container>

    function callModal(title: string, text: string) {
        turnOnAlertNonThunkFunction(title, text, modalDispatch, () => {
            window.location.href = '/'
        })
    }
}

export default Presenter