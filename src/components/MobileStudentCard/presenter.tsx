import React from 'react'
import styled from 'styled-components'
import StudentCard from './Card'

const Container = styled.div`
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    backdrop-filter: blur(1.5px);
    display:flex;
    flex-direction:column;
    align-items:center;
`

interface IProps { }

const MobiledStudentCardPresenter: React.FC<IProps> = () => {
    return <Container>
        <StudentCard />
    </Container>
}

export default MobiledStudentCardPresenter