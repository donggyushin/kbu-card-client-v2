import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { ReducerStateType } from '../../../../../types/index.d'

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: 60px;
`

const Block = styled.div`
    display: flex;
    justify-content: flex-end;
`

const TimeLinePresenter: React.FC = () => {
    const timeTableReducer = useSelector((state: ReducerStateType) => state.timeTable)
    const start = timeTableReducer.startTime
    const end = timeTableReducer.endTime
    const timeArray: number[] = []
    const [timeArrayState, setTimeArray] = useState([9])

    useEffect(() => {
        for (let i = start; i <= end; i++) {
            timeArray.push(i)

        }
        console.log('timeArray:', timeArray)
        setTimeArray(timeArray)
    }, [start, end])

    return <Container>
        {timeArrayState.map((time, i) => {
            return <Block key={i}>{time}</Block>
        })}
    </Container>
}

export default TimeLinePresenter