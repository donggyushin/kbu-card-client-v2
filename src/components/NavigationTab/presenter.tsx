import React from 'react'
import styled, { keyframes } from 'styled-components'
import { COLORS } from '../../consts/colors'
import NavigationTabButton from './TabButton'
import { Link } from 'react-router-dom'

interface IProps {
    disappearingTab: boolean
    leftIconClicked: () => void
    isLoggedIn: boolean
}

const fromRightToLeft = keyframes`
    from {
        right: 250px;
    }

    to {
        right:0px;
    }
`

const fromLeftToRight = keyframes`
    from {
        right: 0px;
    }

    to {
        right:250px;
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
    width:200px;
    background:white;
    height:100%;
    position: relative;
    animation:${fromRightToLeft} 0.5s;
`

const DisappearingTabComponent = styled.div`
    width:200px;
    background:white;
    height:100%;
    position: relative;
    right:250px;
    animation:${fromLeftToRight} 0.2s;
`

const LeftIconContainer = styled.div`
    display:flex;
    width:100%;
    justify-content:flex-end;
`

const LeftIcon = styled.i`
    color:${COLORS.gray};
    padding-right:20px;
    padding-left:20px;
    font-size:30px;
    cursor:pointer;
`

const TabPresenter: React.FC<IProps> = ({
    disappearingTab,
    leftIconClicked,
    isLoggedIn
}) => {

    return <Container>
        {disappearingTab ? <DisappearingTabComponent>
            <LeftIconContainer>
                <LeftIcon
                    className="fas fa-caret-left"
                />
            </LeftIconContainer>
            {!isLoggedIn && <NavigationTabButton
                text="로그인"
                iconClassName="fas fa-home"
            />}

        </DisappearingTabComponent> : <Tab>
                <LeftIconContainer>
                    <LeftIcon
                        className="fas fa-caret-left"
                        onClick={leftIconClicked}
                    />
                </LeftIconContainer>
                {!isLoggedIn && <Link
                    style={{
                        textDecoration: 'none'
                    }}
                    onClick={leftIconClicked}
                    to="/login">
                    <NavigationTabButton
                        text="로그인"
                        iconClassName="fas fa-home"
                    />
                </Link>}

            </Tab>}



    </Container>
}

export default TabPresenter