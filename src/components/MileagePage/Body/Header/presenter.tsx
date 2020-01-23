import React, { useState } from 'react'
import styled from 'styled-components'
import Category from './Category'
import { useSelector } from 'react-redux'
import { ReducerStateType } from '../../../../types/index.d'

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
`

const Presenter: React.FC = () => {

    const mileageReducer = useSelector((state: ReducerStateType) => state.mileage)
    const inDatas = mileageReducer.inDatas
    const outDatas = mileageReducer.outDatas
    return <Container>
        <Category
            name="OUT"
            label="출금"
            count={outDatas.length}
        />
        <Category
            name="IN"
            label="입금"
            count={inDatas.length}
        />
    </Container>

}

export default Presenter