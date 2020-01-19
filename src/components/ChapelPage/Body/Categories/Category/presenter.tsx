import React, { Dispatch, useState, useEffect } from 'react'
import styled from 'styled-components'
import { COLORS } from '../../../../../consts/colors'
import { useDispatch, useSelector } from 'react-redux'
import { CHAPEL_UPDATE_CURRENT } from '../../../../../actions/types.d'
import { ReducerStateType } from '../../../../../types/index.d'

interface IContainerProps {
    activated: boolean
}

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    color:${(props: IContainerProps) => props.activated ? COLORS.black : COLORS.deepGray};
    background:${(props: IContainerProps) => props.activated ? COLORS.white : COLORS.lightGray};
`

interface IchapelUpdateCurrentDispatch {
    type: string
    current: string
}

interface IProps {
    label: string
    name: string
    current: string
}

const Presenter: React.FC<IProps> = ({
    label,
    name,
    current
}) => {

    const activated: boolean = current === name
    const chapelReducer = useSelector((state: ReducerStateType) => state.chapel)
    const chapelUpdateCurrentDispatch = useDispatch<Dispatch<IchapelUpdateCurrentDispatch>>()
    const [count, setCount] = useState(0)


    useEffect(() => {
        if (name === 'attendance') {
            setCount(chapelReducer.attendances.length)
        } else if (name === 'etc') {
            setCount(chapelReducer.etcs.length)
        } else if (name === 'absence') {
            setCount(chapelReducer.absences.length)
        } else if (name === 'late') {
            setCount(chapelReducer.lates.length)
        }
    }, [chapelReducer])

    const categoryClicked = (name: string) => {
        chapelUpdateCurrentDispatch({
            type: CHAPEL_UPDATE_CURRENT,
            current: name
        })
    }

    return <Container
        activated={activated}
        onClick={() => {
            categoryClicked(name)
        }}
    >
        {label} ({count})
    </Container>
}

export default Presenter;