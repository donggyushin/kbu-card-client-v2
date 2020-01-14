import React, { Dispatch } from 'react'
import styled from 'styled-components'
import Button from './Button'
import { useSelector, useDispatch } from 'react-redux'
import { ReducerStateType } from '../../types/index.d'
import { Link } from 'react-router-dom'
import { UPDATE_CURRENT_LOCATION } from '../../actions/types.d'

const Container = styled.div`
    width: 100%;
    height: 7vh;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    background: #f5f6fa;
    position:fixed;
    bottom:0;
`

interface ILocationDispatch {
    type: string
    current: string
}

const BottomNavigation: React.FC = () => {

    const currentLocation: string = useSelector((state: ReducerStateType) => state.location.current)
    const locationDispatch = useDispatch<Dispatch<ILocationDispatch>>()

    const updateCurrentLocation = (nextLocation: string) => {
        locationDispatch({
            type: UPDATE_CURRENT_LOCATION,
            current: nextLocation
        })
    }


    return <Container>
        <Link
            style={{
                textDecoration: 'none',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
            onClick={() => updateCurrentLocation('home')}
            to={'/'}>
            <Button
                iconClassName="fas fa-home"
                name="home"
                current={currentLocation}
            />
        </Link>
        <Link
            style={{
                textDecoration: 'none',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
            to={'/cafeteria'}
            onClick={() => updateCurrentLocation('cafeteria')}
        >
            <Button
                iconClassName="fas fa-utensils"
                name="cafeteria"
                current={currentLocation}
            />
        </Link>
        <Link
            style={{
                textDecoration: 'none',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
            onClick={() => {
                updateCurrentLocation('pray')
            }}
            to={'/pray'}
        >
            <Button
                iconClassName="fas fa-praying-hands"
                name="pray"
                current={currentLocation}
            />
        </Link>
    </Container>
}

export default BottomNavigation