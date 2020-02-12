import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Navigation from '../NavigationBar'
import BottomNavigation from '../BottomNavigation'
import Body from './Body'
import { Helmet } from 'react-helmet'
import { COLORS } from '../../consts/colors'

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    overflow:hidden;
`

const InstallButton = styled.div`
    position: absolute;
    top: 28px;
    right: 68px;
    background: ${COLORS.carrot};
    color: white;
    padding: 2px 11px;
    border-radius: 4px;
    cursor: pointer;
`

const MainComponentPresenter: React.FC = () => {

    const [pwa, setPwa] = useState(false)
    let deferredPrompt: any = null;

    useEffect(() => {
        window.addEventListener('beforeinstallprompt', function (event) {
            deferredPrompt = event;
            showInstallPromotion();

        });
    }, [])

    return <Container>
        <Helmet>
            <meta charSet="utf-8" />
            <meta name="description" content="한국성서대학교 대표 모바일 전용 인트라넷 웹 어플리케이션 성서봇" />
            <title>성서봇 | 한국성서대학교 대표 모바일 전용 인트라넷 웹 어플리케이션 성서봇</title>
        </Helmet>
        <Navigation />
        <Body />
        <BottomNavigation />
        {pwa === true && <InstallButton onClick={addToHomeScreen}>Install</InstallButton>}

    </Container>

    function showInstallPromotion() {
        setPwa(true)
    }


    function addToHomeScreen() {
        deferredPrompt.prompt();
        deferredPrompt.userChoice
            .then((choiceResult: any) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the A2HS prompt')
                } else {
                    console.log('User dismissed the A2HS prompt')
                }
                deferredPrompt = null;
            })

    
    }
}

export default MainComponentPresenter