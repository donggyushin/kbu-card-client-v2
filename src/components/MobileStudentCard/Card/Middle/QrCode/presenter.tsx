import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { ReducerStateType } from '../../../../../types/index.d'
import QrCodeButton from './Button'
import Code from './Code'

const Container = styled.div`
opacity:1;
`

const Presenter: React.FC = () => {
    const mcuReducer = useSelector((state: ReducerStateType) => state.mcu)
    const { hasQrcode } = mcuReducer;
    return <Container>
        {hasQrcode ? <Code /> : <QrCodeButton />}
    </Container>
}

export default Presenter