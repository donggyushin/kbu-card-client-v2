import React, { useState, Dispatch } from 'react'
import styled, { keyframes } from 'styled-components'
import Header from './Header'
import Body from './Body'
import { useDispatch } from 'react-redux'
import { MCU_OFF } from '../../actions/types.d'

const FromBottomToTop = keyframes`
    from {
        top:100vh;
    }
    to {
        top:0;
    }   
`

const Container = styled.div`
    position:absolute;
    width:100%;
    height:100%;
    background:white;
    top:0;
    left:0;
    animation:${FromBottomToTop} 0.5s;
    display: grid;
    grid-template-rows: 8% 1fr;
`

const FromTopToBottom = keyframes`
    from {
        top:0;
    }
    to {
        top:100vh;
    }   
`

const DContainer = styled.div`
    position:absolute;
    width:100%;
    height:100%;
    background:white;
    top:100vh;
    left:0;
    animation:${FromTopToBottom} 0.5s;
    display: grid;
    grid-template-rows: 8% 1fr;
`

interface ImscDispatch {
    type: string
}

const Presenter: React.FC = () => {

    const [down, setDown] = useState(false)
    const mscDispatch = useDispatch<Dispatch<ImscDispatch>>()

    if (down) {
        return <DContainer>
            <Header
                qrcodeComponentOff={qrcodeComponentOff}
            />
            <Body
                qrcodeComponentOff={qrcodeComponentOff}
            />
        </DContainer>

    } else {
        return <Container>
            <Header
                qrcodeComponentOff={qrcodeComponentOff}
            />
            <Body
                qrcodeComponentOff={qrcodeComponentOff}
            />
        </Container>
    }



    function qrcodeComponentOff() {
        setDown(true)
        setTimeout(() => {
            mscDispatch({
                type: MCU_OFF
            })
        }, 500);
    }

}

export default Presenter
