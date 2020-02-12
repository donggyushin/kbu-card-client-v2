import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Navigation from '../NavigationBar'
import BottomNavigation from '../BottomNavigation'
import Body from './Body'
import { Helmet } from 'react-helmet'
import SnackBar from '../Snackbar'

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    overflow:hidden;
`


const MainComponentPresenter: React.FC = () => {

    const [ios, setIos] = useState(false)

    useEffect(() => {
        window.addEventListener('beforeinstallprompt', function (event) {
            event.preventDefault();
            //@ts-ignore
            window.promptEvent = event;

            if (window.matchMedia('(display-mode: standalone)').matches) {
                console.log('display-mode is standalone');

            } else {
                setIos(true)
                if (isIos()) {
                    if (isSafari()) {
                        //show ios version popup
                        setIos(true)
                    }
                }
            }

        });
    }, [])

    return (<Container>
        <Helmet>
            <meta charSet="utf-8" />
            <meta name="description" content="한국성서대학교 대표 모바일 전용 인트라넷 웹 어플리케이션 성서봇" />
            <title>성서봇 | 한국성서대학교 대표 모바일 전용 인트라넷 웹 어플리케이션 성서봇</title>
        </Helmet>
        <Navigation />
        <Body />
        <BottomNavigation />
        {ios && <SnackBar downloadApp={addToHomeScreen} />}
    </Container>)

    function isIos() {
        const userAgent = window.navigator.userAgent.toLowerCase();
        return /iphone|ipad|ipod/.test(userAgent);
    }


    function isSafari(): boolean {
        var ua = navigator.userAgent.toLowerCase();
        if (ua.indexOf('safari') != -1) {
            if (ua.indexOf('chrome') > -1) {
                return false
            } else {
                return true
            }
        }
        return false
    }



    function addToHomeScreen() {
        //@ts-ignore
        window.promptEvent.prompt();
        //@ts-ignore
        window.promptEvent.userChoice.then((choiceResult: any) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the A2HS prompt')
            } else {
                console.log('User dismissed the A2HS prompt')
            }
        })

    
    }
}

export default MainComponentPresenter