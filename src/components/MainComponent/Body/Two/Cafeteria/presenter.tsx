import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick"
import Card from './Card'
import { useSelector } from 'react-redux'
import { ReducerStateType } from '../../../../../types/index.d'
import { COLORS } from '../../../../../consts/colors'

const Container = styled.div`
    border-bottom:1px solid ${COLORS.weakGray};

`

const Presenter: React.FC = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const cafeteriaReducer = useSelector((state: ReducerStateType) => state.cafeteria)
    const lunchMenus = cafeteriaReducer.lunch.menus
    const dinnerMenus = cafeteriaReducer.dinner.menus
    const dailyMenus = cafeteriaReducer.daily.menus
    const fixMenus = cafeteriaReducer.fix.menus
    return <Container>
        <Slider {...settings}>
            <Card
                label="오늘의 중식"
                menus={lunchMenus}
            />
            <Card
                label="오늘의 석식"
                menus={dinnerMenus}
            />
            <Card
                label="오늘의 데일리"
                menus={dailyMenus}
            />
            <Card
                label="오늘의 고정메뉴"
                menus={fixMenus}
            />
        </Slider>
    </Container>
}


export default Presenter