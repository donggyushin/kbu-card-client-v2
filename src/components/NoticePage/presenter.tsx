import React, { Dispatch, useEffect } from 'react'
import styled from 'styled-components'
import Navigation from '../NavigationBar'
import BottomNavigation from '../BottomNavigation'
import { useDispatch } from 'react-redux'
import { updateCurrentLocationNonThunkFunction } from '../../actions/location'
import Body from './Body'

const Container = styled.div``

interface ILocationDispatch {
    type: string
    current: string
}

const Presenter: React.FC = () => {

    const locationDispatch = useDispatch<Dispatch<ILocationDispatch>>()

    useEffect(() => {
        updateCurrentLocation()
    }, [])

    return <Container>
        <Navigation />
        <Body />
        <BottomNavigation />
    </Container>

    function updateCurrentLocation() {
        updateCurrentLocationNonThunkFunction('notice', locationDispatch)
    }
}

export default Presenter