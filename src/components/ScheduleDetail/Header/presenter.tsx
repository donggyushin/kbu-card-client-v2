import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { COLORS } from '../../../consts/colors'
import { ReducerSchedulesDateType } from '../../../types/index.d'

const Container = styled.div`
    background:${COLORS.white};
    color:${COLORS.black};
    display:flex;
    align-items:center;
    justify-content:center;
    position:relative;
`

const XButton = styled.i`
    position:absolute;
    top:0;
    left:0;
    color:${COLORS.charcol};
    font-size:25px;
    padding:9px;
`

const Text = styled.div`
    font-weight: 700;
    font-size: 18px;
    color:${COLORS.charcol};
`

interface IProps {
    turnOffScheduleDetail: () => void
    start: ReducerSchedulesDateType
}

const Presenter: React.FC<IProps> = ({
    turnOffScheduleDetail,
    start
}) => {

    let year;
    if (start.dateTime) {
        year = start.dateTime.substr(0, 4);
    } else {

        year = start.date.substr(0, 4);
    }
    const [month, setMonth] = useState("")

    useEffect(() => {
        if (start.dateTime) {
            setMonth(getMonthName(start.dateTime.substr(5, 2)))
        } else {

            setMonth(getMonthName(start.date.substr(5, 2)))
        }
    }, [])
    // const month: string = getMonthName(start.date.substr(5, 2))

    return <Container>
        <Text>{month} {year}</Text>
        <XButton
            onClick={turnOffScheduleDetail}
            className="fas fa-times" />
    </Container>

    function getMonthName(month: string): string {
        const monthList = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'August', 'Sep', 'Oct', 'Nov', 'Dec']
        const convertedMonth = parseInt(month) - 1
        return monthList[convertedMonth]
    }
}

export default Presenter