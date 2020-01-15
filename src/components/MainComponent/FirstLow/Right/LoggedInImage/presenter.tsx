import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../../../../consts/colors'
import { useSelector } from 'react-redux'
import { ReducerStateType } from '../../../../../types/index.d'

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
`

const MileageIcon = styled.i`
    font-size: 33px;
`

const Text = styled.div`
    font-weight: 600;
    position: relative;
    top: 20px;
    font-size: 11px;
    color: ${COLORS.gray};
`


interface IProps { }

const LoggedInImage: React.FC<IProps> = () => {
    const mileageReducer = useSelector((state: ReducerStateType) => state.mileage)
    return <Container>
        <MileageIcon
            className="far fa-money-bill-alt"
        />
        <Text>{mileageReducer.balance}</Text>
    </Container>
}

export default LoggedInImage