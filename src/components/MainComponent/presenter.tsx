import React from 'react'
import styled from 'styled-components'
import Navigation from '../NavigationBar'
import BottomNavigation from '../BottomNavigation'
import Body from './Body'
import { Helmet } from 'react-helmet'

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    overflow:hidden;
`


const MainComponentPresenter: React.FC = () => {



    return (<Container>
        <Helmet>
            <meta charSet="utf-8" />
            <meta name="description" content="한국성서대학교 대표 모바일 전용 인트라넷 웹 어플리케이션 성서봇" />
            <title>성서봇 | 한국성서대학교 대표 모바일 전용 인트라넷 웹 어플리케이션 성서봇</title>
        </Helmet>
        <Navigation />
        <Body />
        <BottomNavigation />

    </Container>)



}

export default MainComponentPresenter