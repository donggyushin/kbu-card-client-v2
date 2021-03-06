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
    padding:0px 7px;
    box-shadow:${BoxShadowObject.typeOne};
`

interface IProps {
    end: ReducerSchedulesDateType
}

const Presenter: React.FC<IProps> = ({
    end
}) => {


    let day

    if (end.dateTime) {
        day = parseInt(end.dateTime.substr(8))
    } else {

        day = parseInt(end.date.substr(8))
    }

    const [dayName, setDayName] = useState("")

    useEffect(() => {
        if (end.dateTime) {
            setDayName(getDayName(end.dateTime))
        } else {
            setDayName(getDayName(end.date))
        }

    }, [])

    return <Container>
        <TextContainer>
            <YellowBadge>
                To
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