import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../../../../../../../consts/colors'

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`

const BigText = styled.div`
    color:${COLORS.indigo};
    font-size:22px;
    font-weight:600;
`

const Label = styled.div`
    font-size:12px;
    color:${COLORS.gray};
`

interface IProps {
    dataText: number
    label: string
}

const Presenter: React.FC<IProps> = ({
    dataText,
    label
}) => {
    return <Container>
        <BigText>
            {dataText}
        </BigText>
        <Label>
            {label}
        </Label>
    </Container>
}

export default Presenter