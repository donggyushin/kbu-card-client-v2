import React from 'react'
import styled from 'styled-components'

const Container = styled.div``

interface IProps {
    todayPrays: string[]
}

const Presenter: React.FC<IProps> = () => {
    return <Container>
        TodayPray contents
    </Container>
}

export default Presenter