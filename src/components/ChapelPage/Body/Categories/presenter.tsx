import React, { useState } from 'react'
import styled from 'styled-components'
import Category from './Category'
import { useSelector } from 'react-redux'
import { ReducerStateType } from '../../../../types/index.d'

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
`



const Presenter: React.FC = () => {

    const current: string = useSelector((state: ReducerStateType) => state.chapel.current)

    return <Container>
        <Category
            label={'출석'}
            name="attendance"
            current={current}
        />
        <Category
            label={'지각'}
            name="late"
            current={current}
        />
        <Category
            label={'비고'}
            name="etc"
            current={current}
        />
        <Category
            label={'결석'}
            name="absence"
            current={current}
        />
    </Container>
}

export default Presenter