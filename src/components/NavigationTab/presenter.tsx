import React from 'react'
import styled, { keyframes } from 'styled-components'
import { COLORS } from '../../consts/colors'
import TabBody from './TabBody'



const fromRightToLeft = keyframes`
    from {
        top:100vh;
    }

    to {
        top:0;
    }
`

const fromLeftToRight = keyframes`
    from {
        top:0;
    }

    to {
        top:100vh;
    }
`

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0, 0.5);
    z-index:2;
`

const Tab = styled.div`
    width:100%;
    background:white;
    height:100%;
    position: relative;
    animation:${fromRightToLeft} 0.5s;
`

const DisappearingTabComponent = styled.div`
    width:100%;
    background:white;
    height:100%;
    position: relative;
    top:100vh;
    animation:${fromLeftToRight} 0.2s;
`

const XIconContainer = styled.div`
    display:flex;
    width:100%;
    justify-content:flex-start;
`

const XIcon = styled.div`
    color:${COLORS.gray};
    padding-right:20px;
    padding-left:20px;
    font-size: 33px;
    font-weight: 100;
    cursor:pointer;
`

interface IProps {
    disappearingTab: boolean
    disappearTabBar: () => void
    isLoggedIn: boolean
    logoutUser: () => void
}

const TabPresenter: React.FC<IProps> = ({
    disappearingTab,
    disappearTabBar,
    isLoggedIn,
    logoutUser
}) => {

    return <Container>
        {disappearingTab ? <DisappearingTabComponent>
            <XIconContainer>
                <XIcon
                    onClick={disappearTabBar}
                >x</XIcon>
            </XIconContainer>

            <TabBody
                isLoggedIn={isLoggedIn}
                logoutUser={logoutUser}
                shutDownTabBar={disappearTabBar}
            />
        </DisappearingTabComponent> : <Tab>
                <XIconContainer>
                    <XIcon
                        onClick={disappearTabBar}
                    >
                        x
                    </XIcon>
                </XIconContainer>
                <TabBody
                    isLoggedIn={isLoggedIn}
                    logoutUser={logoutUser}
                    shutDownTabBar={disappearTabBar}
                />
            </Tab>}



    </Container>
}

export default TabPresenter