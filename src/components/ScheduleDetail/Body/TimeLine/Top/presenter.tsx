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
    color:${COLORS.charcol};
`

const Text = styled.div`
    font-weight: 200;
    color:${COLORS.charcol};
`

const YellowBadge = styled.div`
    background:${COLORS.charcol};
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

    let day
    if (start.dateTime) {

        day = parseInt(start.dateTime.substr(8))
    } else {
        day = parseInt(start.date.substr(8))
    }
    const [dayName, setDayName] = useState("")

    useEffect(() => {
        if (start.dateTime) {
            setDayName(getDayName(start.dateTime))
        } else {
            setDayName(getDayName(start.date))
        }

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