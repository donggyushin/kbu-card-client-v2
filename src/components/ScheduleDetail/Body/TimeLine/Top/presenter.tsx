import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { COLORS } from '../../../../../consts/colors'
import { BoxShadowObject } from '../../../../../consts/boxShadow'
import { ReducerSchedulesDateType } from '../../../../../types/index.d'


const Container = styled.div`
    position:relative;
`
const TextContainer = styled.div`
    display:flex;
    flex-direction:column;
    margin-top:16px;
    align-items:flex-start;
`

const Number = styled.div`
    font-size:22px;
    color:${COLORS.seaColor};
`

const Text = styled.div`
    font-weight: 200;
    color:${COLORS.seaColor};
`

const YellowBadge = styled.div`
    background:${COLORS.lightYellow};
    color:${COLORS.white};
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:4px;
    font-size:12px;
    padding:0px 3px;
    box-shadow:${BoxShadowObject.typeOne};
`

interface IProps {
    start: ReducerSchedulesDateType
}

const Presenter: React.FC<IProps> = ({
    start
}) => {

    const day = parseInt(start.date.substr(8))
    const [dayName, setDayName] = useState("")

    useEffect(() => {
        setDayName(getDayName(start.date))
    }, [])

    return <Container>
        <TextContainer>
            <YellowBadge>
                From
            </YellowBadge>
            <Number>{day}</Number>
            <Text>{dayName}</Text>
        </TextContainer>
    </Container>

    function getDayName(date: string): string {
        var d = new Date(date);
        console.log(d)
        return d.toString().split(' ')[0];
    }
}

export default Presenter