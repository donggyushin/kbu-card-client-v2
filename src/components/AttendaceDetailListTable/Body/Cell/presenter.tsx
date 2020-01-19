import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { COLORS } from '../../../../consts/colors'
import { useSelector } from 'react-redux'
import { ReducerStateType } from '../../../../types/index.d'
import { ATTENDANCE, ABSENCE, LATE, ETC } from '../../../../consts/attendancesTypes'

const Container = styled.div`
    align-items:center;
    border-bottom:1px solid ${COLORS.weakGray};
    display: grid;
    grid-template-columns: 29% 22% 1fr;
`

const Text = styled.div`
    font-size:12px;
    color:${COLORS.deepGray};
    display: flex;
    justify-content: center;
`

const IconContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`

const ICon = styled.i`
`

interface IProps {
    date: string
    time: string
}

const Presenter: React.FC<IProps> = ({
    date,
    time
}) => {

    const specificInfo: string = useSelector((state: ReducerStateType) => state.attendance.specificAttendanceInfo)
    const [classNameForIcon, setClassName] = useState("")


    useEffect(() => {
        setClassName(setClassNameForIcon(specificInfo))
    }, [])

    const setClassNameForIcon = (specificInfoName: string): string => {
        let className = ""
        switch (specificInfoName) {
            case ATTENDANCE:
                className = "fas fa-check"
                break;
            case ABSENCE:
                className = "fas fa-times"
                break;
            case LATE:
                className = "far fa-clock"
                break;
            case ETC:
                className = "fas fa-tag"
                break;

            default:
                break;
        }
        return className
    }

    return <Container>
        <Text>
            {date}
        </Text>
        <Text>
            {time}
        </Text>
        <IconContainer>
            <ICon className={classNameForIcon} />
        </IconContainer>
    </Container>
}

export default Presenter;