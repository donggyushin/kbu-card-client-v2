import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width:400px;
    background-image:url('/cafeteria.jpg');
    background-size:cover;
    height:250px;
`

const CafeteriaImage: React.FC = () => {
    return <Container />
}

export default CafeteriaImage