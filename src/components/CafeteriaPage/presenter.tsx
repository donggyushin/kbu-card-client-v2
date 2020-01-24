import React, { Dispatch, useEffect } from 'react'
import styled from 'styled-components'
import BottomNavigation from '../BottomNavigation'
import Navigation from '../NavigationBar'
import { updateCurrentLocationNonThunkFunction } from '../../actions/location'
import { useDispatch } from 'react-redux'

const Container = styled.div``

interface ILocationDispatch {
    type: string
    current: string
}

const CafeteriaPresenter: React.FC = () => {

    const locationDispatch = useDispatch<Dispatch<ILocationDispatch>>()

    useEffect(() => {
        updateCurrentLocation()
    }, [])

    return <Container>
        <Navigation />
        cafeteria page
        <BottomNavigation />
    </Container>

    function updateCurrentLocation() {
        updateCurrentLocationNonThunkFunction('cafeteria', locationDispatch)
    }
}

export default CafeteriaPresenter