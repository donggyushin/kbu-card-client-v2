import React from 'react'
import styled from 'styled-components'
import KbuCardText from './Kbucard'
import Profile from './Profile'

const Container = styled.div`
    width:1072px;
    display:flex;
    justify-content:space-between;
    height:90px;
    align-items:center;
`

const UpperBarPresenter: React.FC = () => {
    return <Container>
        <KbuCardText />
        <Profile />
    </Container>
}

export default UpperBarPresenter