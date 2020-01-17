import React from 'react'
import styled from 'styled-components'
import StudentInfo from './StudentInfo'
import Text from './Text'
import QrCode from './QrCode'

const Container = styled.div`
    display: grid;
    grid-template-rows: 39% 6% 55%;
    position:relative;
`

const WatermarkImage = styled.img`
    position:absolute;
    width: 100%;
    opacity: 0.1;
    margin-top: 63px;
`

const MiddlePresenter: React.FC = () => {
    return <Container>
        <WatermarkImage
            src={'/kbuwatermark.png'}
        />
        <StudentInfo />
        <Text />
        <QrCode />
    </Container>
}

export default MiddlePresenter