import React from 'react'
import styled from 'styled-components'
import CafeteriaImage from './CafeteriaImage'
import Infomation from './Infomation'

const Container = styled.div`
    display:flex;
    flex-direction:column;
`

const CafeteriaPresenter: React.FC = () => {
    return <Container>
        <CafeteriaImage />
        <Infomation />
    </Container>
}

export default CafeteriaPresenter