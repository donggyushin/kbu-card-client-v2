import React from 'react'
import styled from 'styled-components'
import Card from './Card'

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    display: flex;
    backdrop-filter: blur(1.5px);
    justify-content: center;
`

const AttendanceComponentPresenter: React.FC = () => {
    return <Container className={"attendance__container"}>
        <Card />
    </Container>
}

export default AttendanceComponentPresenter