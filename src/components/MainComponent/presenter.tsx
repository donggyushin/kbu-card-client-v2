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

    useEffect(() => {
        window.addEventListener('beforeinstallprompt', function (event) {
            // not show the default browser install app prompt
            event.preventDefault();

            // add the banner here or make it visible
            // …

            // save the event to use it later
            // (it has the important prompt method and userChoice property)
            // @ts-ignore
            window.promptEvent = event;

        });
        checkUserHasPwa()
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
        {pwa === false && <InstallButton onClick={addToHomeScreen}>Install</InstallButton>}

    </Container>

    function checkUserHasPwa() {
        if (window.matchMedia('(display-mode: standalone)').matches) {
            // do things here  
            // set a variable to be used when calling something  
            // e.g. call Google Analytics to track standalone use   
            setPwa(true)
        }
    }

    function addToHomeScreen() {
        // show the install app prompt
        // @ts-ignore
        window.promptEvent.prompt();

        // handle the Decline/Accept choice of the user
        // @ts-ignore
        window.promptEvent.userChoice.then(function (choiceResult) {
            // hide the prompt banner here
            // …

            if (choiceResult.outcome === 'accepted') {
                console.info('mm User accepted the A2HS prompt');
            } else {
                console.info('mm User dismissed the A2HS prompt');
            }
            // @ts-ignore
            window.promptEvent = null;
        }); 
}
    }

export default MainComponentPresenter