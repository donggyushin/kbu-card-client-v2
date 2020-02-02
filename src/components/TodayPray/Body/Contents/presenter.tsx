import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { ReducerStateType } from '../../../../types/index.d'
import StudentPrays from './StudentPrays'
import TodayPrayContents from './TodayPraysContents'
import Ads from './Ads'

const Container = styled.div`
    display: grid;
    grid-template-rows: 40% 35% 1fr;
`

const Presenter: React.FC = () => {

    const todayPrayReducer = useSelector((state: ReducerStateType) => state.todayPray)

    return <Container>
        <StudentPrays studentPrays={todayPrayReducer.studentPray} />
        <TodayPrayContents todayPrays={todayPrayReducer.todayPrayContent} />
        <Ads ads={todayPrayReducer.ads} />
    </Container>
}

export default Presenter