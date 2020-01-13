import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`

interface IConProps {
    matched: boolean
}

const Icon = styled.i`
    color:${(props: IConProps) => props.matched ? 'black' : 'gray'};
`

interface IProps {
    iconClassName: string
    name: string
    current: string
}

const BottomNavigationButtonPresenter: React.FC<IProps> = ({
    iconClassName,
    name,
    current
}) => {
    const matched: boolean = name === current
    return <Container>
        <Icon
            matched={matched}
            className={iconClassName} />
    </Container>
}

export default BottomNavigationButtonPresenter