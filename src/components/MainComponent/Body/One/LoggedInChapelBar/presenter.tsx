import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { ProgressBar } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { ReducerStateType } from '../../../../../types/index.d';
import { Redirect } from 'react-router-dom';

const Container = styled.div`
        display: grid;
    grid-template-columns: 74% 1fr;
`

const Left = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:100%;
`;

const Right = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:12px;
`

const Icon = styled.i`
    margin-left:7px;
`

const Presenter: React.FC = () => {

    const chapelReducer = useSelector((state: ReducerStateType) => state.chapel)
    const { duty, sure } = chapelReducer.summary
    const [percent, setPercent] = useState(0)
    const [redirect, setRedirect] = useState(false)

    useEffect(() => {
        setPercent(getPercentage)
    }, [chapelReducer])

    if (redirect) {
        return <Redirect to="/chapel" />
    } else {

        return <Container onClick={redirectFunc}>
            <Left>
                <ProgressBar style={{
                    width: '90%'
                }} now={percent}
                    label={`${sure}/${duty}`}
                />
            </Left>
            <Right>
                상세보기 <Icon className="fas fa-chevron-right" />
            </Right>
        </Container>
    }

    function redirectFunc() {
        setRedirect(true)
    }


    function getPercentage(): number {
        return Math.floor(sure / duty * 100)
    }
}

export default Presenter