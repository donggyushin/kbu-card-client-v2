import React, { Dispatch } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { ReducerStateType } from '../../../../../../../types/index.d'
import { Tabs, Tab, Paper } from '@material-ui/core'
import { putAttendanceCurrent } from '../../../../../../../actions/attendance'

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`

interface IAttendanceDispatch {
    type: string
    newCurrent: "" | "ATTENDANCE" | "ETC" | "ABSENCE" | "LATE"
}

const Presenter: React.FC = () => {

    const current = useSelector((state: ReducerStateType) => state.attendance.current)
    const attendanceDispatch = useDispatch<Dispatch<IAttendanceDispatch>>()
    const attendanceReducer = useSelector((state: ReducerStateType) => state.attendance)

    const allNum = attendanceReducer.all.length;
    const attendanceNum = attendanceReducer.attendances.length;
    const latesNum = attendanceReducer.lates.length;
    const absenceNum = attendanceReducer.absences.length;
    const etcsNum = attendanceReducer.etcs.length

    const handleChange = (event: React.ChangeEvent<{}>, newValue: "" | "ATTENDANCE" | "ETC" | "ABSENCE" | "LATE") => {
        putAttendanceCurrent(newValue, attendanceDispatch)
    }

    return <Container>
        <Paper square>
            <Tabs
                value={current}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
            >
                <Tab value={""} label={`전체 (${allNum})`} />
                <Tab value={"ATTENDANCE"} label={`출석 (${attendanceNum})`} />
                <Tab value={"LATE"} label={`지각 (${latesNum})`} />
                <Tab value={"ABSENCE"} label={`결석 (${absenceNum})`} />
                <Tab value={"ETC"} label={`비고 (${etcsNum})`} />
            </Tabs>
        </Paper>
    </Container>
}

export default Presenter