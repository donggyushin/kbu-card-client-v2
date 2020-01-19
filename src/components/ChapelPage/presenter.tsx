import React, { Dispatch, useEffect } from 'react'
import styled from 'styled-components'
import Navigation from '../NavigationBar'
import BottomNavigation from '../BottomNavigation'
import ChapelBody from './Body'
import { useDispatch } from 'react-redux'
import { UPDATE_CURRENT_LOCATION } from '../../actions/types.d'

const Container = styled.div``

interface UpdateCurrentLocationDispatch {
    type: string
    current: string
}

const Presenter: React.FC = () => {

    const locationDispatch = useDispatch<Dispatch<UpdateCurrentLocationDispatch>>()

    useEffect(() => {
        locationDispatch({
            type: UPDATE_CURRENT_LOCATION,
            current: 'chapel'
        })
    }, [])

    return <Container>
        <Navigation />
        <ChapelBody />
        <BottomNavigation />
    </Container>
}

export default Presenter