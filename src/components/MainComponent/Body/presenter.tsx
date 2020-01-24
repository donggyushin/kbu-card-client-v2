import React from 'react'
import styled from 'styled-components'
import One from './One'
import Two from './Two'
import Three from './Three'
import Four from './Four'
import Five from './Five'

const Container = styled.div`
    width: 100%;
    height: 83vh;
    display: grid;
    grid-template-rows: 14% 29% 29% 15% 13%;
    grid-template-columns: 95%;
    justify-content: center;
`

const Presenter: React.FC = () => {
    return <Container>
        <One />
        <Two />
        <Three />
        <Four />
        <Five />
    </Container>
}

export default Presenter