import React from 'react'
import styled from 'styled-components'

interface IProps {
    text: string
}

const Container = styled.div`
    font-size:12px;
    cursor:pointer;
    color: gray;
    font-weight: 500;
`

const ButtonPresenter: React.FC<IProps> = ({
    text
}) => {
    return <Container>
        {text}
    </Container>
}

export default ButtonPresenter