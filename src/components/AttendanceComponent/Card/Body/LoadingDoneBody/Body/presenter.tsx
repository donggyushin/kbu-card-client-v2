import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { ReducerStateType } from '../../../../../../types/index.d'
import { COLORS } from '../../../../../../consts/colors'
import TimeLine from './Time'
import SummaryKeyword from './SummaryKeyword'


const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:flex-start;
`

const Card = styled.div`
    margin-top: 18px;
    width: 90%;
    /* display: grid; */
    /* grid-template-rows: 60px 47px 57px; */
    height: 100%;
`

const CourseName = styled.div`

    display: flex;
    align-items: center;
    font-size: 24px;
    font-weight: 500;
    color:${COLORS.charcol};
`

const Presenter: React.FC = () => {
    const selectedCourse = useSelector((state: ReducerStateType) => state.lecture.selectedCourse)
    return <Container>
        <Card>
            <CourseName>
                {selectedCourse[1]}
            </CourseName>
            <TimeLine />
            <SummaryKeyword />
        </Card>
    </Container>
}

export default Presenter