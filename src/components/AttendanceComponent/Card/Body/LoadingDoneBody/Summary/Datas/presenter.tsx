import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { ReducerAttendanceDetailType, ReducerStateType } from '../../../../../../../types/index.d'
import { useSelector } from 'react-redux'
import Cell from './Cell'

const Container = styled.div`
    display:grid;
    grid-auto-rows:40px;
    overflow-y:scroll;
    
`

const Presenter: React.FC = () => {

    const [datas, setDatas] = useState<ReducerAttendanceDetailType[]>([])
    const current = useSelector((state: ReducerStateType) => state.attendance.current)
    const attendanceReducer = useSelector((state: ReducerStateType) => state.attendance)

    useEffect(() => {
        switch (current) {
            case 'ATTENDANCE':
                setDatas(attendanceReducer.attendances)
                break;
            case 'LATE':
                setDatas(attendanceReducer.lates)
                break;
            case 'ETC':
                setDatas(attendanceReducer.etcs)
                break;
            case 'ABSENCE':
                setDatas(attendanceReducer.absences)
                break;
            case '':
                setDatas(attendanceReducer.all)
                break;

            default:
                break;
        }
    }, [current])

    return <Container>
        {datas.map((data, i) => {
            return <Cell data={data} key={i} />
        })}
    </Container>
}

export default Presenter