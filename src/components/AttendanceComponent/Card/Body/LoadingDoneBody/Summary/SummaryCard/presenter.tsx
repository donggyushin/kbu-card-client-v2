import React from 'react'
import styled from 'styled-components'
import { BoxShadowObject } from '../../../../../../../consts/boxShadow'
import Top from './Top'
import Bottom from './Bottom'

const Container = styled.div`
    box-shadow:${BoxShadowObject.typeOne};
    display: grid;
    grid-template-rows: repeat(2,1fr);
    border-radius:4px;
`

const Presenter: React.FC = () => {
    return <Container>
        <Top />
        <Bottom />
    </Container>
}

export default Presenter