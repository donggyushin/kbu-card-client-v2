import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: grid;
    grid-template-columns: 27px repeat(5,1fr);
`
const Empty = styled.div``

const Text = styled.div`
    display:flex;
    justify-content:center;
`

const TimeTableHeaderPresenter: React.FC = () => {
    return <Container>
        <Empty />
        <Text>월</Text>
        <Text>화</Text>
        <Text>수</Text>
        <Text>목</Text>
        <Text>금</Text>
    </Container>
}

export default TimeTableHeaderPresenter