import React from 'react'
import styled from 'styled-components'
import TimeLine from './TimeLine'
import Right from './Right'
import { ReducerSchedulesDateType, ReducerSchedulesCreatorType, ReducerSchedulesOrganizerType } from '../../../types/index.d'

const Container = styled.div`
    display: grid;
    grid-template-columns: 21% 1fr;
`

interface IProps {
    start: ReducerSchedulesDateType
    end: ReducerSchedulesDateType | undefined
    summary: string
    creator: ReducerSchedulesCreatorType
    organizer: ReducerSchedulesOrganizerType
    htmlLink: string
}

const Presenter: React.FC<IProps> = ({
    start,
    end,
    creator,
    organizer,
    summary,
    htmlLink
}) => {
    return <Container>
        <TimeLine
            start={start}
            end={end}
        />
        <Right
            creator={creator}
            organizer={organizer}
            summary={summary}
            htmlLink={htmlLink}
        />
    </Container>
}

export default Presenter