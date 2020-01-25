import React from 'react'
import styled from 'styled-components'
import { BarLoader, ScaleLoader } from 'react-spinners'
import { COLORS } from '../../consts/colors'

const Container = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
`

const LoadingPresenter: React.FC = () => {
    return <Container>
        <ScaleLoader color={COLORS.lightBlue} />
    </Container>
}

export default LoadingPresenter