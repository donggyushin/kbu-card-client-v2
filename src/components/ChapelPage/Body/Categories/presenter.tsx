import React, { useState, Dispatch } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { ReducerStateType } from '../../../../types/index.d'
import { Tabs, Tab, Paper } from '@material-ui/core'
import { changeChapelCurrent } from '../../../../actions/chapel'

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`

interface IChapelDispatch {
    type: string
    current: "" | "absence" | "attendance" | "late" | "etc"
}

const Presenter: React.FC = () => {

    const current: string = useSelector((state: ReducerStateType) => state.chapel.current)
    const chapelDispatch = useDispatch<Dispatch<IChapelDispatch>>()
    const chapelReducer = useSelector((state: ReducerStateType) => state.chapel)
    const handleChange = (event: React.ChangeEvent<{}>, newValue: "" | "absence" | "attendance" | "late" | "etc") => {
        changeChapelCurrent(newValue, chapelDispatch)
    }

    const allNumber = chapelReducer.chapelDatas.length
    const attendanceNum = chapelReducer.attendances.length
    const latesNum = chapelReducer.lates.length
    const absenceNum = chapelReducer.absences.length
    const etcsNum = chapelReducer.etcs.length

    return <Container>
        <Paper square>
            <Tabs
                value={current}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
            >
                <Tab value={""} label={`전체 (${allNumber})`} />
                <Tab value={"attendance"} label={`출석 (${attendanceNum})`} />
                <Tab value={"late"} label={`지각 (${latesNum})`} />
                <Tab value={"absence"} label={`결석 (${absenceNum})`} />
                <Tab value={"etc"} label={`비고 (${etcsNum})`} />
            </Tabs>
        </Paper>
    </Container>



}

export default Presenter