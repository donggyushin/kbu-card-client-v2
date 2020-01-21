import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import HtmlLink from './HtmlLink'
import { ReducerSchedulesCreatorType, ReducerSchedulesOrganizerType } from '../../../../types/index.d'
import { COLORS } from '../../../../consts/colors'

const Container = styled.div`
    padding-top: 16px;
    display: grid;
    grid-auto-rows: 65px;
    grid-template-columns: 88%;
    justify-content: center;
    grid-row-gap: 10px;
`

interface IProps {
    summary: string
    creator: ReducerSchedulesCreatorType
    organizer: ReducerSchedulesOrganizerType
    htmlLink: string
}

const Presenter: React.FC<IProps> = ({
    summary,
    creator,
    organizer,
    htmlLink
}) => {
    return <Container>
        <Card
            name="요약"
            color={COLORS.carrot}
            summary={summary}
        />
        <Card
            name="작성자"
            color={COLORS.seaColor}
            creator={creator}
        />
        <Card
            name="작성조직"
            color={COLORS.lightYellow}
            organizor={organizer}
        />
        <HtmlLink
            htmlLink={htmlLink}
        />
    </Container>
}

export default Presenter