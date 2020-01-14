import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { ReducerStateType } from '../../../../../../types/index.d'
import { COLORS } from '../../../../../../consts/colors'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
`

const ChurchIcon = styled.i`
    font-size: 34px;
`

const Text = styled.div`
    font-weight: 600;
    position:relative;
    top:20px;
    font-size: 11px;
    color:${COLORS.gray};
`

const ProgressBarContainer = styled.div`
    position:absolute;
    display: flex;
    justify-content: center;
    width:80%;
`

interface IProps { }

const DynamicPresenter: React.FC<IProps> = () => {


    const chapelReducer = useSelector((state: ReducerStateType) => state.chapel)
    const total = chapelReducer.summary.duty
    const current = chapelReducer.summary.sure

    const [percentage, setPercentage] = useState(0)

    const value = (current / total * 100) * 0.7

    useEffect(() => {
        setPercentage(value)
    })




    return <Container>
        <ProgressBarContainer>
            <CircularProgressbar
                value={percentage}
                styles={buildStyles({
                    // Rotation of path and trail, in number of turns (0-1)
                    rotation: 0.65,

                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'butt',

                    // Text size
                    textSize: '16px',

                    // How long animation takes to go from one percentage to another, in seconds
                    pathTransitionDuration: 0.8,

                    // Can specify path transition in more detail, or remove it entirely
                    // pathTransition: 'none',

                    // Colors
                    pathColor: `rgba(62, 152, 199, 0.7)`,
                    textColor: '#f88',
                    trailColor: 'white',
                    backgroundColor: '#3e98c7',
                })}
            />

        </ProgressBarContainer>
        <ChurchIcon
            className="fas fa-church"
        />
        <Text>
            {current} / {total}
        </Text>
    </Container>
}

export default DynamicPresenter