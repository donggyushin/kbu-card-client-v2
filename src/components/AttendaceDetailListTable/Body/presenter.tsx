import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Cell from './Cell'
import { useSelector } from 'react-redux'
import { ReducerStateType, ReducerAttendanceDetailType, ReducerAttendanceType } from '../../../types/index.d'
import { ABSENCE, ATTENDANCE, LATE, ETC } from '../../../consts/attendancesTypes'

const Container = styled.div`
    display: grid;
    grid-auto-rows: 54px;
    padding-bottom:54px;
    width:100%;
    height:100%;
    overflow-y:scroll;
`

const Presenter: React.FC = () => {
    const specificInfo: string = useSelector((state: ReducerStateType) => state.attendance.specificAttendanceInfo)
    const attendanceReducer = useSelector((state: ReducerStateType) => state.attendance)
    const [cells, setCells] = useState<ReducerAttendanceDetailType[]>([])


    useEffect(() => {
        setCells(fetchAttendanceDatas(specificInfo, attendanceReducer))
    }, [])


    const fetchAttendanceDatas = (specific: string, attendanceReducer: ReducerAttendanceType): ReducerAttendanceDetailType[] => {
        switch (specific) {
            case ABSENCE:

                return attendanceReducer.absences
            case ATTENDANCE:

                return attendanceReducer.attendances
            case LATE:

                return attendanceReducer.lates
            case ETC:

                return attendanceReducer.etcs
            default:
                return []
        }
    }

    return <Container>
        {cells.map((cell, i) => {
            return <Cell date={cell.date} time={cell.time} key={i} />
        })}
    </Container>
}

export default Presenter