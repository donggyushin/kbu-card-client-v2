import React from 'react'
import styled from 'styled-components'
import TabBodyHeader from './BodyHeader'
import ButtonsContainer from './ButtonsContainer'


const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items:center;
`

interface IProps {
    isLoggedIn: boolean
    logoutUser: () => void
    shutDownTabBar: () => void
}
const TabBodyPresenter: React.FC<IProps> = ({
    isLoggedIn,
    logoutUser,
    shutDownTabBar
}) => {
    return <Container>
        <TabBodyHeader
            isLoggedIn={isLoggedIn}
            shutDownTabBar={shutDownTabBar}
        />
        <ButtonsContainer
            isLoggedIn={isLoggedIn}
            logoutUser={logoutUser}
            shutDownTabBar={shutDownTabBar}
        />
    </Container>
}

export default TabBodyPresenter