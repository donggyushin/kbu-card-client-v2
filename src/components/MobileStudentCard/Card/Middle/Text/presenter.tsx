import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display:flex;
    align-items:flex-end;
    justify-content:center;
    font-weight:500;
`

const Presenter: React.FC = () => {
    return <Container>
        밑의 버튼을 눌러서 큐알 코드를 발급 받으세요.
    </Container>
}

export default Presenter