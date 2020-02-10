import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../../../../consts/colors'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    
`

const IConContainer = styled.div`
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    width: 48px;
    height: 48px;
    background:${COLORS.lightGreen};
    cursor:pointer;
`

const Icon = styled.i`
    color:white;
`

const Text = styled.div`
    color:${COLORS.black};
    font-size: 12px;
    font-weight: 500;
    margin-top: 7px;
`

interface IProps {
    iconClassName: string
    text: string
    onClick?: () => void
}

const ButtonPresenter: React.FC<IProps> = ({
    text,
    iconClassName,
    onClick
}) => {
    return <Container onClick={onClick}>
        <IConContainer>
            <Icon className={iconClassName} />
        </IConContainer>
        <Text>{text}</Text>
    </Container>
}

export default ButtonPresenter