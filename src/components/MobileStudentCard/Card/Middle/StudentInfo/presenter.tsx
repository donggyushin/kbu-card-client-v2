import React from 'react'
import styled from 'styled-components'
import TextInfo from './Text'
import ProfileImage from './ProfileImage'

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
`

const Presenter: React.FC = () => {
    return <Container>
        <TextInfo />
        <ProfileImage />
    </Container>
}

export default Presenter