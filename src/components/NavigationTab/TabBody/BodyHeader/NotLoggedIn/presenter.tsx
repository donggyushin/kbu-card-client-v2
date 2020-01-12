import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../../../../consts/colors'
import { Link } from 'react-router-dom'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid gainsboro;
    padding-bottom: 18px;
    width:100%;
`

const Image = styled.div`
    width:40px;
    height:40px;
    border-radius:4px;
    background:${COLORS.carrot};
    color:white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
`

const RoutingButtonToLoginPage = styled.div`
    color: black;
    border: 1px solid ${COLORS.weakGray};
    padding-top: 3px;
    padding-bottom: 3px;
    padding-left: 6px;
    padding-right: 6px;
    border-radius: 4px;
    margin-top: 10px;
    font-size: 12px;
    font-weight: 600;
`

interface IProps {
    shutDownTabBar: () => void
}

const NotLoggedInHeader: React.FC<IProps> = ({
    shutDownTabBar
}) => {
    return <Container>
        <Image>?</Image>
        <Link
            style={{
                textDecoration: 'none'
            }}
            onClick={shutDownTabBar}
            to={'/login'}>
            <RoutingButtonToLoginPage>
                성서봇 로그인
            </RoutingButtonToLoginPage>
        </Link>
    </Container>
}

export default NotLoggedInHeader