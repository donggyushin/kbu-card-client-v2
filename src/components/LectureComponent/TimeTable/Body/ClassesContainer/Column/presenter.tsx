import React from 'react'
import styled from 'styled-components'
import OneCell from './OneCell'
import { useSelector } from 'react-redux'
import { ReducerStateType } from '../../../../../../types/index.d'
import { stringTimeToMinutes } from '../../../../../../utils/timeConverter'


interface IHeightProps {
    height: number
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const CellContainer = styled.div`
    display:flex;
    flex-direction:column;
`

const Empty = styled.div`
    width:100%;
    height:${(props: IHeightProps) => props.height + 'px'};
`

interface IProps {
    oneDayClasses: string[][]
}

const ColumnPresenter: React.FC<IProps> = ({
    oneDayClasses
}) => {
    const startTime: number = useSelector((state: ReducerStateType) => state.timeTable.startTime)
    return <Container>
        {oneDayClasses.map((oneClass: string[], i) => {
            const cellHeight: number = stringTimeToMinutes(oneClass[3]) - stringTimeToMinutes(oneClass[2])

            if (i === 0) {
                // 첫 수업일때
                // 가장 첫 수업 시작 시간과, 해당 수업의 수업 시작 시간 차이 만큼의 공백을 준 후,

                const startTimeMinutes: number = startTime * 60
                const nowClassStartTimeString: string = oneClass[2]
                const nowClassStartTimeMinutes: number = stringTimeToMinutes(nowClassStartTimeString)



                const emptyCellHeight = nowClassStartTimeMinutes - startTimeMinutes

                // for (let i = startTimeMinutes; i < nowClassStartTimeMinutes; i++) {

                //     EmptyArray.push(<Empty key={i} />)
                // }
                return <CellContainer key={i}>
                    <Empty height={emptyCellHeight} />
                    <OneCell
                        height={cellHeight}
                        cellInfo={oneClass}
                    />
                </CellContainer>

                // 수업을 렌더링 해준다. 
            } else {
                // 가장 첫 수업이 아니라면, 이전 수업 시간의 끝나는 시간과, 해당 수업 시작 시간 차이만큼의
                // 공백을 준 후, 수업을 렌더링 해준다. 
                const previousClass = oneDayClasses[i - 1]
                const previousClassEndTimeMinutes: number = stringTimeToMinutes(previousClass[3])
                const nowClassStartTimeMinutes: number = stringTimeToMinutes(oneClass[2])
                const emptyCellHeight = nowClassStartTimeMinutes - previousClassEndTimeMinutes


                return <CellContainer key={i}>
                    <Empty height={emptyCellHeight} />
                    <OneCell
                        height={cellHeight}
                        cellInfo={oneClass}
                    />
                </CellContainer>

            }
        })}
    </Container>
}

export default ColumnPresenter