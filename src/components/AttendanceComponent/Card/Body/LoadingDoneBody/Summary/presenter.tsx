import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../../../../../consts/colors'
import Categories from './Categories'
import Datas from './Datas'


const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 14% 1fr;
    overflow-y:scroll;
    /* border-bottom:1px solid ${COLORS.weakGray}; */
`


const Presenter: React.FC = () => {

    return <Container>
        <Categories />
        <Datas />
    </Container>
}

export default Presenter