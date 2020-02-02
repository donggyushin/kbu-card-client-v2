import React from 'react'
import styled from 'styled-components'
import MenuCard from './MenuCard'
import { useSelector } from 'react-redux'
import { ReducerStateType } from '../../../../types/index.d'
import { BoxShadowObject } from '../../../../consts/boxShadow'

const Container = styled.div`
    display: grid;
    justify-content: center;
    grid-template-columns: 48% 48%;
    grid-template-rows: repeat(2,1fr);
    border-radius:4px;
    box-shadow:${BoxShadowObject.typeOne};
`

const Presenter: React.FC = () => {
    const menuReducer = useSelector((state: ReducerStateType) => state.cafeteriaForPage)

    return <Container>
        <MenuCard menu={menuReducer.lunch} label="오늘의 중식" />
        <MenuCard menu={menuReducer.dinner} label="오늘의 석식" />
        <MenuCard menu={menuReducer.daily} label="오늘의 데일리" />
        <MenuCard menu={menuReducer.fix} label="오늘의 고정메뉴" />
    </Container>
}

export default Presenter