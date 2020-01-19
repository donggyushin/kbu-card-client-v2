import React, { Dispatch } from 'react'
import styled from 'styled-components'
import { COLORS } from '../../../../../../../../consts/colors'
import { useDispatch } from 'react-redux'
import { CLICK_SPECIFIC_ATTENDANCE_INFO } from '../../../../../../../../actions/types.d'

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`

const BigText = styled.div`
    color:${COLORS.indigo};
    font-size:22px;
    font-weight:600;
`

const Label = styled.div`
    font-size:12px;
    color:${COLORS.gray};
`

interface IProps {
    dataText: number
    label: string
}

interface IclickSpecificAttendanceInfoDispatch {
    type: string
    specificAttendance: string
}

const Presenter: React.FC<IProps> = ({
    dataText,
    label
}) => {
    const clickSpecificAttendanceInfoDispatch = useDispatch<Dispatch<IclickSpecificAttendanceInfoDispatch>>()

    const containerClicked = () => {
        clickSpecificAttendanceInfoDispatch({
            type: CLICK_SPECIFIC_ATTENDANCE_INFO,
            specificAttendance: label
        })
    }
    return <Container
        onClick={containerClicked}
    >
        <BigText>
            {dataText}
        </BigText>
        <Label>
            {label}
        </Label>
    </Container>
}

export default Presenter