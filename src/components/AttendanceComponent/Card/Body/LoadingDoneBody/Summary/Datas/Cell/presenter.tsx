import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { ReducerAttendanceDetailType, ReducerStateType } from '../../../../../../../../types/index.d'
import { useSelector } from 'react-redux'

const Container = styled.div`
display:grid;
    grid-template-columns: 45% 37% 1fr;
`

const Date = styled.div`
    display:flex;
    align-items:center;
    padding-left:10px;
`

const Time = styled.div`
    display:flex;
    align-items:center;
    padding-left:10px;
`

const Icon = styled.i`
    display:flex;
    align-items:center;
    padding-left:10px;
`

interface IProps {
    data: ReducerAttendanceDetailType
}

const Presenter: React.FC<IProps> = ({
    data
}) => {
    const [iconClassName, setIconClassName] = useState("")
    const current = useSelector((state: ReducerStateType) => state.attendance.current)
    useEffect(() => {
        setIconClassName(getIconClassName(current, data.classification))
    }, [current, data])

    return <Container>
        <Date>
            {data.date}
        </Date>
        <Time>
            {data.time}
        </Time>
        <Icon className={iconClassName} />
    </Container>

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