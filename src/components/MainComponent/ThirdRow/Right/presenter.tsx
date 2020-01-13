import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`

const Korean = styled.div`
    font-weight: 600;
`

const English = styled.div`
    font-size: 12px;
    margin-top:7px;
`

const RightPresenter: React.FC = () => {
    return <Container>
        <Korean>모바일 학생증</Korean>
        <English>Mobild ID Card</English>
    </Container>
}

export default RightPresenter