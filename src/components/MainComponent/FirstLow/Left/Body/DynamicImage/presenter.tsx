import React from 'react'
import styled from 'styled-components'

const Container = styled.div``

interface IProps { }

const DynamicPresenter: React.FC<IProps> = () => {
    return <Container>
        Dynamic Image
    </Container>
}

export default DynamicPresenter