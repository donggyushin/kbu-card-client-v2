import React, { Dispatch, useEffect } from 'react'
import styled from 'styled-components'
import Navigation from '../NavigationBar'
import BottomNavigation from '../BottomNavigation'
import Body from './Body'
import { getMileageNonThunkFunction } from '../../actions/mileage'
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

const Presenter: React.FC = () => {

    const getMileageNonThunkFunctionDispatch = useDispatch<Dispatch<IgetMileageNonThunkFunctionDispatch>>()
    useEffect(() => {

        if (verifyToken()) {
            const token = localStorage.getItem('kbucard')
            if (token) {
                getMileageNonThunkFunction(token, getMileageNonThunkFunctionDispatch)
            }
        }

    }, [])

    return <Container>
        <Navigation />
        <Body />
        <BottomNavigation />
    </Container>
}

export default Presenter