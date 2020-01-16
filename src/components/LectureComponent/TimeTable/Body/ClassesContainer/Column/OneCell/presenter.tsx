import React, { Dispatch } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { ReducerStateType } from '../../../../../../../types/index.d'
import { ATTENDANCE_ON } from '../../../../../../../actions/types.d'

interface IContainerProps {
    height: number
    backgroundColor: string
}

const Container = styled.div`
    width:100%;
    height:${(props: IContainerProps) => props.height + 'px'};
    background:${(props: IContainerProps) => props.backgroundColor};
    color:white;
    opacity:0.8;
`

const ClassName = styled.div`
    font-size:12px;
    padding:4px;
    opacity: 1;
    font-weight: 600;
`

interface IProps {
    height: number
    cellInfo: string[]
}

interface IattendaceDispatch {
    type: string
    lectureCode: string
    color: string
}

const CellPresenter: React.FC<IProps> = ({
    height,
    cellInfo
}) => {

    const colorSetReducer = useSelector((state: ReducerStateType) => state.colorSet)
    const lectureCodeReducer = useSelector((state: ReducerStateType) => state.lectureCode)
    const backgroundColor = colorSetReducer[cellInfo[0]]
    const lectureCode = lectureCodeReducer[cellInfo[0]]
    const attendaceDispatch = useDispatch<Dispatch<IattendaceDispatch>>()

    const cellClicked = () => {
        attendaceDispatch({
            type: ATTENDANCE_ON,
            lectureCode,
            color: backgroundColor
        })
    }

    return <Container
        onClick={cellClicked}
        height={height}
        backgroundColor={backgroundColor}
    >
        <ClassName>
            {cellInfo[0]}
        </ClassName>
    </Container>
}

export default CellPresenter