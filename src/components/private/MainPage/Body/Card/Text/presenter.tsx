import React from 'react'
import styled from 'styled-components'

interface IProps {
    title: string
    desc: string
}

const Container = styled.div`
    display:flex;
    flex-direction:column;
`

const Title = styled.div`
    margin-top: 13px;
    margin-bottom: 5px;
    font-weight: 600;
`

const Description = styled.div`
    font-size: 13px;
    color: gray;
    line-height: 1.6;
`

const TextPresenter: React.FC<IProps> = ({
    title,
    desc
}) => {
    return <Container>
        <Title>
            {title}
        </Title>
        <Description>
            {desc}
        </Description>
    </Container>
}

export default TextPresenter