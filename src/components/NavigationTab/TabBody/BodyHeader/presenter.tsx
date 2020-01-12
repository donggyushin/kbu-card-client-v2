import React from 'react'
import styled from 'styled-components'
import NotLoggedInHeader from './NotLoggedIn'
import LoggedIn from './LoggedIn'


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width:100%;
`
interface IProps {
    isLoggedIn: boolean
    shutDownTabBar: () => void
}

const TabBodyHeader: React.FC<IProps> = ({
    isLoggedIn,
    shutDownTabBar
}) => {
    return <Container>
        {isLoggedIn ? <LoggedIn /> : <NotLoggedInHeader
            shutDownTabBar={shutDownTabBar}
        />}

    </Container>
}

export default TabBodyHeader