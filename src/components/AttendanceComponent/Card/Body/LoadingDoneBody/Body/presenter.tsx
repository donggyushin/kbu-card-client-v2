import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { ReducerStateType } from '../../../../../../types/index.d'


const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:flex-start;
`

const Card = styled.div`
    width: 90%;
    display: grid;
    grid-template-rows: 40px 1fr;
    height: 100%;
`

const Text = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:14px;
`

const Header = styled.div`
    align-items:center;
    display:flex;
`

const Body = styled.div`
    overflow-y: scroll;
`

const Row = styled.div`
    display:grid;
    width:100%;
    grid-template-columns:repeat(5, 1fr);
`


const Presenter: React.FC = () => {
    const attendanceReducer = useSelector((state: ReducerStateType) => state.attendance)
    const tbody = attendanceReducer.tbody
    return <Container>
        <Card>
            <Header>
                <Row>
                    <Text>
                        날짜
                    </Text>
                    <Text>
                        출석
                    </Text>
                    <Text>
                        결석
                    </Text>
                    <Text>
                        지각
                    </Text>
                    <Text>
                        기타
                    </Text>
                </Row>
            </Header>
            <Body>
                {tbody.map((cell, i) => {
                    const month = cell[0].substr(5, 2)
                    const day = cell[0].substr(8, 2)
                    return <Row
                        style={{
                            height: 40
                        }}
                        key={i}>
                        <Text
                            style={{
                                fontSize: 10
                            }}
                        >
                            {month}/{day}
                        </Text>
                        <Text>
                            {cell[2]}
                        </Text>
                        <Text>
                            {cell[3]}
                        </Text>
                        <Text>
                            {cell[4]}
                        </Text>
                        <Text>
                            {cell[5]}
                        </Text>
                    </Row>
                })}
            </Body>

        </Card>
    </Container>
}

export default Presenter