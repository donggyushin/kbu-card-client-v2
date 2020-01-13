import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`

const Korean = styled.div`
    font-weight: 600;
`

const English = styled.div`
    font-size: 12px;
    margin-top:7px;
`

const LeftPresenter: React.FC = () => {
    return <Container>
        <Korean>
            학사일정
        </Korean>
        <English>
            Schedule
        </English>
    </Container>
}

export default LeftPresenter