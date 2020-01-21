import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../../../../consts/colors'
import { BoxShadowObject } from '../../../../../consts/boxShadow'

const Container = styled.div`
    border-radius:4px;
    background:${COLORS.carrot};
    color:${COLORS.white};
    display:flex;
    justify-content:center;
    align-items:center;
    box-shadow:${BoxShadowObject.typeOne};
    position: relative;
    top: 27px;
    font-weight:600;
`

interface IProps {
    htmlLink: string
}

const Presenter: React.FC<IProps> = ({
    htmlLink
}) => {

    return <Container onClick={buttonClicked}>
        GOOGLE Calendar
    </Container>

    function buttonClicked() {
        window.open(htmlLink)
    }
}

export default Presenter