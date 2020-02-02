import React from 'react'
import styled from 'styled-components'

const Container = styled.div``

interface IProps {
    ads: string[]
}

const Presenter: React.FC<IProps> = () => {
    return <Container>
        ads
    </Container>
}

export default Presenter