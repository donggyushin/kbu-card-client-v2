import React from 'react'
import styled from 'styled-components'

interface IContainerProps {
    height: number
}

const Container = styled.div`
    width:100%;
    height:${(props: IContainerProps) => props.height + 'px'};
`

const ClassName = styled.div`
    font-size:12px;
    padding:4px;
`

interface IProps {
    height: number
    cellInfo: string[]
}

const CellPresenter: React.FC<IProps> = ({
    height,
    cellInfo
}) => {
    return <Container
        height={height}
    >
        <ClassName>
            {cellInfo[0]}
        </ClassName>
    </Container>
}

export default CellPresenter