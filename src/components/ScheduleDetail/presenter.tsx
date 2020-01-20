import React, { useState, Dispatch } from 'react'
import styled, { keyframes } from 'styled-components'
import Header from './Header'
import Body from './Body'
import { useDispatch } from 'react-redux'
import { SCHEDULE_DETAIL_OFF } from '../../actions/types.d'

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
    top:0;
    left:0;
    width:100%;
    height:100vh;
    background:white;
    z-index: 1;
    display: grid;
    grid-template-rows: 20% 1fr;
    animation:${FromBottomToTop} 0.5s;
`

const FromTopToBottom = keyframes`
    from {
        top:0;
    }
    to{
        top:100vh;
    }
`

const DisappearingContainer = styled.div`
    position:absolute;
    top:100vh;
    left:0;
    width:100%;
    height:100vh;
    background:white;
    z-index: 1;
    display: grid;
    grid-template-rows: 20% 1fr;
    animation:${FromTopToBottom} 0.5s;
`

interface IScheduleDetailDispatch {
    type: string
}

const Presenter: React.FC = () => {

    const [off, setOff] = useState(false)
    const scheduleDetailDispatch = useDispatch<Dispatch<IScheduleDetailDispatch>>()


    if (off) {
        return <DisappearingContainer>
            <Header
                turnOffScheduleDetail={turnOffScheduleDetail}
            />
            <Body />
        </DisappearingContainer>
    } else {

        return <Container>
            <Header
                turnOffScheduleDetail={turnOffScheduleDetail}
            />
            <Body />
        </Container>
    }

    function turnOffScheduleDetail() {
        setOff(true)
        setTimeout(() => {
            scheduleDetailDispatch({
                type: SCHEDULE_DETAIL_OFF
            })
        }, 500);
    }
}

export default Presenter