import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    background: black;
    color: white;
`

const ICon = styled.i`
    margin-left: 17px;
`

interface IProps {
    onclickHeader: () => void
}

const Presenter: React.FC<IProps> = ({
    onclickHeader
}) => {
    return <Container
        onClick={onclickHeader}
    >
        <ICon className={"fas fa-chevron-down"} />
    </Container>
}

export default Presenter