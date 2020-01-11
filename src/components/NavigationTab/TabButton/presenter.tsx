import React from 'react'
import styled from 'styled-components'

interface IProps {
    text: string
    iconClassName: string
}

const Container = styled.div`
    display:flex;
    align-items:center;
    padding-left: 10px;
    color:black;
`

const Icon = styled.i``

const Text = styled.div`
    font-size: 15px;
    margin-left: 10px;
`

const NavigationTabButton: React.FC<IProps> = ({
    text,
    iconClassName
}) => {
    return <Container>
        <Icon
            className={iconClassName}
        />
        <Text>
            {text}
        </Text>
    </Container>
}

export default NavigationTabButton