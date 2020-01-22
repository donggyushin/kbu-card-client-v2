import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    cursor: pointer;
`

const ICon = styled.i``

interface IProps {
    qrcodeComponentOff: () => void
}

const Presenter: React.FC<IProps> = ({
    qrcodeComponentOff
}) => {
    return <Container onClick={qrcodeComponentOff}>
        <ICon className="fas fa-chevron-down"></ICon>
    </Container>
}

export default Presenter