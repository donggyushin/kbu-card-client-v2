import React, { Dispatch } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { mobileStudentCardOn } from '../../../../../actions/mobileStudentCard'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
`

interface IMobileStudentCardDispatch {
    type: string
}

const Presenter: React.FC = () => {

    const studentCardDispatch = useDispatch<Dispatch<IMobileStudentCardDispatch>>()

    return <Container
        onClick={turnOnMobileStudentCard}
    >
        모바일 학생증
    </Container>

    function turnOnMobileStudentCard() {
        mobileStudentCardOn(studentCardDispatch)
    }
}

export default Presenter