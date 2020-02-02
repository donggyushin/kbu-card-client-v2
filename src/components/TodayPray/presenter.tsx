import React, { Dispatch, useEffect } from 'react'
import styled from 'styled-components'
import BottomNavigation from '../BottomNavigation'
import Navigation from '../NavigationBar'
import { updateCurrentLocationNonThunkFunction } from '../../actions/location'
import { getTodayPray } from '../../actions/todayPray'
import { useDispatch } from 'react-redux'
import { ReducerTodayPrayType } from '../../types/index.d'
import Body from './Body'

const Container = styled.div``

interface ILocationDispatch {
    type: string
    current: string
}

interface ITodayPrayDispatch {
    type: string
    title?: string
    text?: string
    callBack?: (param: any) => void
    todayPray?: ReducerTodayPrayType
}

const TodayPrayerPresenter: React.FC = () => {

    const locationDispatch = useDispatch<Dispatch<ILocationDispatch>>()
    const todayPrayDispatch = useDispatch<Dispatch<ITodayPrayDispatch>>()

    useEffect(() => {
        updateCurrentLocation()
        callGetTodayPray()
    }, [])

    return <Container>
        <Navigation />
        <Body />
        <BottomNavigation />
    </Container>

    function callGetTodayPray() {
        getTodayPray(new Date().getTime(), todayPrayDispatch)
    }

    function updateCurrentLocation() {
        updateCurrentLocationNonThunkFunction('pray', locationDispatch)
    }
}

export default TodayPrayerPresenter