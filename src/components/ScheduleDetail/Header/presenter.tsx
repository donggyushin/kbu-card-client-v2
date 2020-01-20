import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../../consts/colors'

const Container = styled.div`
    background:${COLORS.seaColor};
    color:${COLORS.white};
    display:flex;
    align-items:center;
    justify-content:center;
    position:relative;
`

const XButton = styled.i`
    position:absolute;
    top:0;
    left:0;
    color:white;
    font-size:25px;
    padding:9px;
`

const Text = styled.div`
    font-weight: 700;
    font-size: 18px;
`

interface IProps {
    turnOffScheduleDetail: () => void
}

const Presenter: React.FC<IProps> = ({
    turnOffScheduleDetail
}) => {
    return <Container>
        <Text>August 2020</Text>
        <XButton
            onClick={turnOffScheduleDetail}
            className="fas fa-times" />
    </Container>
}

export default Presenter