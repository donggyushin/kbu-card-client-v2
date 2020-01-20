import React from 'react'
import styled from 'styled-components'
import TimeLine from './TimeLine'
import Right from './Right'

const Container = styled.div`
    display: grid;
    grid-template-columns: 21% 1fr;
`

const Presenter: React.FC = () => {
    return <Container>
        <TimeLine />
        <Right />
    </Container>
}

export default Presenter