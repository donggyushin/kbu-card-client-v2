import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../../../../consts/colors'

const Container = styled.div`
    padding: 7px;
    display: grid;
    grid-template-rows: 19% 1fr;
`

const Label = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${COLORS.weakGray};
`

const TodayPraysContainer = styled.div`
    overflow-y: scroll;
    padding: 7px;
    display:flex;
    flex-direction:column;
`

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
    todayPrays: string[]
}

const Presenter: React.FC<IProps> = ({ todayPrays }) => {

    return <Container>
        <Label>오늘의 기도</Label>
        <TodayPraysContainer>
            {todayPrays.map((pray, i) => {
                return <Pray key={i}>
                    <Dotcontainer>
                        <Dot />
                    </Dotcontainer>
                    {pray}
                </Pray>
            })}
        </TodayPraysContainer>
    </Container>
}

export default Presenter