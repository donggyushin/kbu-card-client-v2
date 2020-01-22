import React from 'react'
import styled from 'styled-components'
import QrCodeButton from './Button'

const Container = styled.div`
opacity:1;
`

const Presenter: React.FC = () => {
    return <Container>
        <QrCodeButton />
    </Container>
}

export default Presenter