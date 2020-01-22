import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { ReducerStateType, ReducerChapelOneDataType } from '../../../../types/index.d'
import Cell from './Cell'

const Container = styled.div`
        display: grid;
    grid-auto-rows: 48px;
    overflow-y:scroll;
`

const Presenter: React.FC = () => {

    const current: string = useSelector((state: ReducerStateType) => state.chapel.current)
    const chapelReducers = useSelector((state: ReducerStateType) => state.chapel)
    const [chapelDatas, setChapelDatas] = useState<ReducerChapelOneDataType[]>([])

    useEffect(() => {
        console.log('current: ', current)

        if (current === 'attendance') {
            setChapelDatas(chapelReducers.attendances)
        } else if (current === 'late') {
            setChapelDatas(chapelReducers.lates)
        }
        else if (current === 'etc') {
            setChapelDatas(chapelReducers.etcs)
        } else if (current === 'absence') {
            setChapelDatas(chapelReducers.absences)
        } else {
            setChapelDatas(chapelReducers.chapelDatas)
        }
    }, [current, chapelReducers])

    return <Container>
        {chapelDatas.map((data, i) => {
            return <Cell
                data={data}
                key={i} />
        })}
    </Container>
}

export default Presenter