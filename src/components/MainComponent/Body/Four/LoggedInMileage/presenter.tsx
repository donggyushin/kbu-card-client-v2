import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { COLORS } from '../../../../../consts/colors'
import { useSelector } from 'react-redux'
import { ReducerStateType } from '../../../../../types/index.d'
import currencyFormatter from 'currency-formatter'
import { Redirect } from 'react-router-dom'

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 74% 1fr;
    border-bottom:1px solid ${COLORS.weakGray};
`
const Left = styled.div`
    display: grid;
    grid-template-rows: 30% 1fr;
`

const TinyText = styled.div`
    font-size:11px;
    display:flex;
    align-items:center;
    padding-left:10px;

    `

const NomralText = styled.div`
    display:flex;
    padding-left:15px;
    margin-top:5px;
`

const Right = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:11px;
`
const Icon = styled.i`
    margin-left:7px;
`

const Presenter: React.FC = () => {

    const mileageReducer = useSelector((state: ReducerStateType) => state.mileage)
    const [balance, setBalance] = useState("신동규 짱")
    const [redirect, setRedirect] = useState(false)

    useEffect(() => {
        formatMileageBalance()
    }, [mileageReducer])

    if (redirect) {
        return <Redirect to="/mileage" />
    } else {

        return <Container onClick={redirectFunc}>
            <Left>
                <TinyText>
                    마일리지
            </TinyText>
                <NomralText>{balance}</NomralText>
            </Left>
            <Right>상세보기 <Icon className="fas fa-chevron-right" /></Right>
        </Container>
    }

    function redirectFunc() {
        setRedirect(true)
    }


    function formatMileageBalance() {
        setBalance(currencyFormatter.format(mileageReducer.balance, {
            symbol: '원',
            thousand: ',',
            precision: 0,
            format: '%v %s'
        }))
    }

}

export default Presenter;