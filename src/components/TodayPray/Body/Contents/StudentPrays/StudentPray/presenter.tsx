import React from 'react'
import styled from 'styled-components'
import { ReducerTodayPrayStudentPrayType } from '../../../../../../types/index.d'
import { BoxShadowObject } from '../../../../../../consts/boxShadow'


const Container = styled.div`
    border-radius:3px;
    box-shadow:${BoxShadowObject.typeOne};
    padding: 7px;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
`

const NameAndGrade = styled.div`
    font-weight:500;
`

const PraysContainer = styled.div``

const Pray = styled.div`
    display:flex;
`

const Dotcontainer = styled.div`
    position: relative;
    top: 11px;
    margin-right: 5px;
`

const Dot = styled.div`
    width:3px;
    height:3px;
    border-radius:50%;
    background:black;
`

interface IProps {
    studentPray: ReducerTodayPrayStudentPrayType
}

const Presenter: React.FC<IProps> = ({
    studentPray
}) => {
    const { grade, name, prays } = studentPray

    return <Container>
        <NameAndGrade>{name} ({grade})</NameAndGrade>
        <PraysContainer>
            {prays.map((pray, i) => {
                return <Pray key={i}>
                    <Dotcontainer>
                        <Dot />
                    </Dotcontainer>
                    {pray}
                </Pray>
            })}
        </PraysContainer>
    </Container>
}

export default Presenter