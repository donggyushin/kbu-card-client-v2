import React from 'react'
import styled from 'styled-components'
import Top from './Top'
import Bottom from './Bottom'
import { ReducerSchedulesDateType } from '../../../../types/index.d'

const Container = styled.div`
    display: grid;
    grid-template-rows: 32% 1fr;
    justify-content: flex-end;
    padding-right: 10px;
`

interface IProps {
    start: ReducerSchedulesDateType
    end: ReducerSchedulesDateType | undefined
}

const Presenter: React.FC<IProps> = ({
    start,
    end
}) => {
    return <Container>
        <Top
            start={start}
        />
        {end && <Bottom
            end={end}
        />}

    </Container>
}

export default Presenter