import React, { useState, useEffect, Dispatch } from 'react'
import styled from 'styled-components'
import { COLORS } from '../../../../../../../../consts/colors'
import { putAttendanceCurrent } from '../../../../../../../../actions/attendance'
import { useDispatch } from 'react-redux'

interface IContainerProps {
    activated: boolean
}

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    background:${(props: IContainerProps) => props.activated ? COLORS.white : COLORS.weakGray};
    color:${(props: IContainerProps) => props.activated ? COLORS.black : COLORS.deepGray};
`

const Text = styled.div`
    font-size:12px;
`

const Number = styled.div`
    font-size:19px;
`


interface IclickCategoryDispatch {
    type: string
    newCurrent: "" | "ATTENDANCE" | "ETC" | "ABSENCE" | "LATE"
}

interface IProps {
    name: "" | "ATTENDANCE" | "ETC" | "ABSENCE" | "LATE"
    label: string
    current: "" | "ATTENDANCE" | "ETC" | "ABSENCE" | "LATE"
    counter: number
}

const Presenter: React.FC<IProps> = ({
    name,
    label,
    current,
    counter
}) => {

    // const activated: boolean = name === current
    const [activated, setActivated] = useState(false)
    const attendanceDispatch = useDispatch<Dispatch<IclickCategoryDispatch>>()

    useEffect(() => {
        setActivated(name === current)
    }, [current])

    return <Container
        activated={activated}
        onClick={() => {
            clickCategory(name, attendanceDispatch, current)
        }}
    >
        <Number>
            {counter}
        </Number>
        <Text>
            {label}
        </Text>
    </Container>



    function clickCategory(name: "" | "ATTENDANCE" | "ETC" | "ABSENCE" | "LATE", dispatch: Dispatch<IclickCategoryDispatch>, current: "" | "ATTENDANCE" | "ETC" | "ABSENCE" | "LATE") {

        if (name === current) {
            putAttendanceCurrent("", dispatch)
        } else {
            putAttendanceCurrent(name, dispatch)

        }
    }


}

export default Presenter