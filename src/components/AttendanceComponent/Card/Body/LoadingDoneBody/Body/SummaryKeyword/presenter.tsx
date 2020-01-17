import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../../../../../../consts/colors'
import KeywordContainer from './KeywordContainer'

const Container = styled.div`
    display: grid;
    width: 90%;
    grid-template-rows: 31px 1fr;
`

const Label = styled.div`
    display: flex;
    align-items: center;
    color:${COLORS.deepGray};
    font-weight:600;
`

const Presenter: React.FC = () => {
    return <Container>
        <Label>
            Summary keyword
        </Label>
        <KeywordContainer />
    </Container>
}

export default Presenter