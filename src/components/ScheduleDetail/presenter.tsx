import React, { useState, Dispatch } from 'react'
import styled, { keyframes } from 'styled-components'
import Header from './Header'
import Body from './Body'
import { useDispatch, useSelector } from 'react-redux'
import { SCHEDULE_DETAIL_OFF } from '../../actions/types.d'
import { ReducerStateType } from '../../types/index.d'

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
    const scheduleDetailReducer = useSelector((state: ReducerStateType) => state.scheduleDetail)

    const { start, end, summary, creator, organizer, htmlLink } = scheduleDetailReducer;


    if (off) {
        return <DisappearingContainer>
            <Header
                turnOffScheduleDetail={turnOffScheduleDetail}
                start={start}
            />
            <Body
                start={start}
                end={end}
                summary={summary}
                creator={creator}
                organizer={organizer}
                htmlLink={htmlLink}
            />
        </DisappearingContainer>
    } else {

        return <Container>
            <Header
                start={start}
                turnOffScheduleDetail={turnOffScheduleDetail}
            />
            <Body
                start={start}
                end={end}
                summary={summary}
                creator={creator}
                organizer={organizer}
                htmlLink={htmlLink}
            />
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