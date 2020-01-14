import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(255,255,255);
    background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(250,250,250,1) 88%, rgba(255,255,255,1) 100%);
    cursor: pointer;
`

const ICon = styled.i``

interface IProps {
    turnOffStudentMobileCard: () => void
}

const BottomPresenter: React.FC<IProps> = ({
    turnOffStudentMobileCard
}) => {
    return <Container
        onClick={turnOffStudentMobileCard}
    >
        <ICon className="fas fa-chevron-down" />
    </Container>
}

export default BottomPresenter