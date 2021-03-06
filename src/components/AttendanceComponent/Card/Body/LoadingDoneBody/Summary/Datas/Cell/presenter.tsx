import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { ReducerAttendanceDetailType, ReducerStateType } from '../../../../../../../../types/index.d'
import { useSelector } from 'react-redux'
import { COLORS } from '../../../../../../../../consts/colors'

const Container = styled.div`
display:grid;
    grid-template-columns: 50% 50%;
    font-size:14px;
    color:${COLORS.black};
`

const Date = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`

const Icon = styled.i`
    display:flex;
    align-items:center;
    justify-content:center;
`

interface IProps {
    data: ReducerAttendanceDetailType
}

const Presenter: React.FC<IProps> = ({
    data
}) => {
    const [iconClassName, setIconClassName] = useState("")
    const [month, setMonth] = useState("월")
    const [day, setDay] = useState("일")
    const current = useSelector((state: ReducerStateType) => state.attendance.current)
    useEffect(() => {
        setIconClassName(getIconClassName(current, data.classification))
        setMonthFunction()
        setDayFunction()
    }, [current, data])

    return <Container>
        <Date>
            {month} {day}
        </Date>
        <Icon className={iconClassName} />
    </Container>
    function setDayFunction() {
        setDay(data.date.substr(8, 2) + '일')
    }

    function setMonthFunction() {
        setMonth(data.date.substr(5, 2) + '월')
    }

    function getIconClassName(current: string, classification: "" | "ATTENDANCE" | "LATE" | "ABSENCE" | "ETC"): string {
        let result = ""

        switch (classification) {
            case "":

                break;
            case "ATTENDANCE":
                result = "fas fa-check"
                break;
            case "LATE":
                result = "far fa-clock"
                break;
            case "ABSENCE":
                result = "fas fa-times"
                break;
            case "ETC":
                result = "fas fa-tags"
                break;

            default:
                break;
        }

        return result
    }

}

export default Presenter