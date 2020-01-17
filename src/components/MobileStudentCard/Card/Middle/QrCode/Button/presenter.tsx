import React from 'react'
import styled from 'styled-components'
import { Button } from '@material-ui/core'

const Container = styled.div`
    display:flex;
    justify-content:center;
    padding-top:47px;
`

const Presenter: React.FC = () => {
    return <Container>
        <Button variant="outlined" color="primary">
            QR CODE 발급받기
</Button>
    </Container>
}

export default Presenter