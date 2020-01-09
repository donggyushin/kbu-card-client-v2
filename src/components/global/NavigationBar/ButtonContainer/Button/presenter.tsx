import React from 'react'
import styled from 'styled-components'

interface IProps {
    text: string
}

const Container = styled.div`
    font-size:13px;
    cursor:pointer;
    color: gray;
    font-weight: 500;
    margin-left:13px;
    margin-right:13px;
`

const ButtonPresenter: React.FC<IProps> = ({
    text
}) => {
    return <Container>
        {text}
    </Container>
}

export default ButtonPresenter