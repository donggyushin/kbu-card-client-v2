import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { ReducerMileageDataType } from '../../../../../types/index.d'
import { COLORS } from '../../../../../consts/colors'
import currencyFormatter from 'currency-formatter'

const Container = styled.div`
    display: grid;
    grid-template-columns: 74% 1fr;
    border-bottom:1px solid ${COLORS.weakGray};
`

const Left = styled.div`
    padding-left: 11px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Date = styled.div`
    font-size:11px;
`

const Cost = styled.div`
    font-size:15px;
    margin-top:4px;
`

const Content = styled.div`
font-size:12px;
`


const Right = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const ICon = styled.i`
    font-size: 12px;
`

interface IProps {
    cell: ReducerMileageDataType
}

const Presenter: React.FC<IProps> = ({ cell }) => {

    const [iconClassName, setIconClassName] = useState("")

    useEffect(() => {

        setIconClassName(setIconClassNameFunc(cell.classification))
    }, [cell])

    return <Container>
        <Left>
            <Date>
                {cell.date}
            </Date>
            <Cost>
                {/* {cell.cost} */}
                {formatCost()}
            </Cost>
            <Content>
                {cell.content}
            </Content>
        </Left>
        {/* <Right>
            <ICon
                className={iconClassName} />
        </Right> */}
    </Container>

    function formatCost() {
        return currencyFormatter.format(cell.cost, {
            symbol: '원',
            thousand: ',',
            precision: 0,
            format: '%v %s'
        })
    }

    function setIconClassNameFunc(classification: "" | "IN" | "OUT"): string {
        if (classification === "OUT") {
            return "fas fa-minus"
        } else {
            return "fas fa-plus"
        }
    }

}

export default Presenter