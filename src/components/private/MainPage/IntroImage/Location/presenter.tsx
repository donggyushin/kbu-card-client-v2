import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    position:absolute;
    bottom:20px;
    right:20px;
    font-size:11px;
`

const LocationTextPresenter: React.FC = () => {
    return <Container>
        01757 서울특별시 노원구 동일로 214길 32(상계동 205)
    </Container>
}

export default LocationTextPresenter