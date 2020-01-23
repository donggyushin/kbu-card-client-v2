import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { ReducerMileageDataType, ReducerStateType } from '../../../../types/index.d'
import Cell from './Cell'
import { useSelector } from 'react-redux'

const Container = styled.div`
    overflow-y: scroll;
    display: grid;
    grid-auto-rows: 80px;
`

const Presenter: React.FC = () => {
    const [cells, setCells] = useState<ReducerMileageDataType[]>([])
    const current = useSelector((state: ReducerStateType) => state.mileage.current)
    const mileageReducer = useSelector((state: ReducerStateType) => state.mileage)


    useEffect(() => {
        setCells(setCellsFunc(current))
    }, [current, mileageReducer])

    return <Container>
        {cells.map((cell, i) => {
            return <Cell cell={cell} key={i} />
        })}
    </Container>

    function setCellsFunc(current: "" | "IN" | "OUT"): ReducerMileageDataType[] {
        let cells: ReducerMileageDataType[] = []

        switch (current) {
            case "":
                console.log('1')
                cells = mileageReducer.datas
                break;
            case "IN":
                console.log('2')
                cells = mileageReducer.inDatas
                break;
            case "OUT":
                console.log('3')
                cells = mileageReducer.outDatas
                break;

            default:
                console.log('4')
                break;
        }

        console.log('cells: ', cells)

        return cells
    }
}

export default Presenter