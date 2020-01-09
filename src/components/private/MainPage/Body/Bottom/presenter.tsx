import React from 'react'
import styled from 'styled-components'
import CardPresenter from '../Card'

const Container = styled.div`
    display:grid;
    grid-template-rows:repeat(1, 100%);
    grid-template-columns:repeat(3, 1fr);
    column-gap:15px;
`


const Bottom: React.FC = () => {
    return <Container>
        <CardPresenter
            imageName="church.jpg"
            title="채플 출석조회"
            desc="채플은 빠짐없이 다 들으셨나요?"
        />
        <CardPresenter
            imageName="clock.jpg"
            title="시간표"
            desc="지각하지 말자!"
        />
        <CardPresenter
            imageName="mileage.jpg"
            title="마일리지"
            desc="혹시 다른 사람이 쓰진 않았는지 확인해볼까?"
        />

    </Container>
}

export default Bottom