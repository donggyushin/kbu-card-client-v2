import React, { useEffect, useState, Dispatch } from 'react'
import styled from 'styled-components'
import { COLORS } from '../../../../../consts/colors'
import { useSelector, useDispatch } from 'react-redux'
import { ReducerStateType } from '../../../../../types/index.d'
import { putMileageCurrent } from '../../../../../actions/mileage'

interface IContainerProps {
    activated: boolean
}

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background:${(props: IContainerProps) => props.activated ? COLORS.white : COLORS.weakGray};
    color:${(props: IContainerProps) => props.activated ? COLORS.black : COLORS.deepGray};
`

const Number = styled.div`
    font-size:19px;
`

const Text = styled.div`
    font-size:11px;
`

interface IputMileageCurrentDispatch {
    type: string
    newCurrent: "" | "IN" | "OUT"
}

interface IProps {
    count: number
    label: string
    name: "" | "IN" | "OUT"
}

const Presenter: React.FC<IProps> = ({
    count,
    label,
    name
}) => {
    const [activated, setActivated] = useState(false)
    const current = useSelector((state: ReducerStateType) => state.mileage.current)
    const dispatchMileage = useDispatch<Dispatch<IputMileageCurrentDispatch>>()

    useEffect(() => {
        setActivated(current === name)
    }, [current])

    return <Container
        activated={activated}
        onClick={() => {
            onClickCategory(name, current)
        }}
    >
        <Number>{count}</Number>
        <Text>{label}</Text>
    </Container>

    function onClickCategory(newCurrent: "" | "IN" | "OUT", current: "" | "IN" | "OUT") {
        if (newCurrent === current) {
            putMileageCurrent("", dispatchMileage)
        } else {
            putMileageCurrent(newCurrent, dispatchMileage)
        }
    }

}
export default Presenter