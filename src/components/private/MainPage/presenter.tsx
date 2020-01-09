import React from 'react'
import styled from 'styled-components'
import NavigationBar from '../../global/NavigationBar'
import UpperBar from '../../global/UpperBar'
import CafeteriaLinkCard from './FirstLow'

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`

const MainPagePresenter: React.FC = () => {
    return <Container>
        <UpperBar />
        <NavigationBar />
        <CafeteriaLinkCard />
    </Container>
}

export default MainPagePresenter