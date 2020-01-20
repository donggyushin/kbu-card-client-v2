import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: grid;
    grid-template-rows: 32% 1fr;
    justify-content: flex-end;
    padding-right: 10px;
`

const Presenter: React.FC = () => {
    return <Container>
        time line
    </Container>
}

export default Presenter