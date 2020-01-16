import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`

const BigText = styled.div``

const Label = styled.div``

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