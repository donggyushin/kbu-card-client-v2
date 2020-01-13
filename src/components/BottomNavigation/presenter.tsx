import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import { useSelector } from 'react-redux'
import { ReducerStateType } from '../../types/index.d'
import { Link } from 'react-router-dom'

const Container = styled.div`
    width: 100%;
    height: 7vh;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    background: #f5f6fa;
    position:fixed;
    bottom:0;
`

const BottomNavigation: React.FC = () => {

    const currentLocation: string = useSelector((state: ReducerStateType) => state.location.current)

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
            to={'/'}>
            <Button
                iconClassName="fas fa-home"
                name="home"
                current={currentLocation}
            />
        </Link>
        <Button
            iconClassName="fas fa-utensils"
            name="cafeteria"
            current={currentLocation}
        />
        <Button
            iconClassName="fas fa-praying-hands"
            name="pray"
            current={currentLocation}
        />
    </Container>
}

export default BottomNavigation