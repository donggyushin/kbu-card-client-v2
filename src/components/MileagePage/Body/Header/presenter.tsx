import React, { useState, Dispatch } from 'react'
import styled from 'styled-components'
import Category from './Category'
import { useSelector, useDispatch } from 'react-redux'
import { ReducerStateType } from '../../../../types/index.d'
import { Tabs, Tab, Paper } from '@material-ui/core'
import { putMileageCurrent } from '../../../../actions/mileage'

const Container = styled.div`
    /* display: grid;
    grid-template-columns: repeat(2,1fr); */
    display:flex;
    align-items:center;
    justify-content:center;
`

interface IMileageDispatch {
    type: string
    newCurrent: "" | "IN" | "OUT"
}

const Presenter: React.FC = () => {

    const mileageReducer = useSelector((state: ReducerStateType) => state.mileage)
    const inDatas = mileageReducer.inDatas
    const outDatas = mileageReducer.outDatas
    const current = useSelector((state: ReducerStateType) => state.mileage.current)
    const mileageDispatch = useDispatch<Dispatch<IMileageDispatch>>()

    const handleChange = (event: React.ChangeEvent<{}>, newValue: "" | "IN" | "OUT") => {
        putMileageCurrent(newValue, mileageDispatch)
    }

    return <Container>
        {/* <Category
            name="OUT"
            label="출금"
            count={outDatas.length}
        />
        <Category
            name="IN"
            label="입금"
            count={inDatas.length}
        /> */}
        <Paper style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center'
        }} square>
            <Tabs
                // style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
                value={current}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
            >
                <Tab style={{ width: '30%' }} value={""} label="전체" />
                <Tab style={{ width: '30%' }} value={"OUT"} label="출금" />
                <Tab style={{ width: '30%' }} value={"IN"} label="입금" />
            </Tabs>
        </Paper>
    </Container>

}

export default Presenter