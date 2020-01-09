import React from 'react'
import styled from 'styled-components'
import NavigationBar from '../../global/NavigationBar'
import UpperBar from '../../global/UpperBar'
import BodyPresenter from './Body'
import Copyright from '../../global/Copyright'

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`

const MainPagePresenter: React.FC = () => {
    return <Container>
        <UpperBar />
        <NavigationBar />
        <BodyPresenter />
        <Copyright />
    </Container>
}

export default MainPagePresenter