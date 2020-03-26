import React from 'react'
import styled from 'styled-components'
import { ReducerNoticeDataType } from '../../../../types/index.d'
import { COLORS } from '../../../../consts/colors'


const Container = styled.div`
    display:flex;
    flex-direction:column;
    padding-top: 5px;
    padding-bottom: 21px;
    border-bottom:1px solid ${COLORS.weakGray};
`
const Id = styled.div`
    font-size: 11px;
`

const Title = styled.div``

const Desc = styled.div`
    font-size: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
`

const CreatorAndDate = styled.div`
    display:flex;
    align-items:center;
    font-size: 10px;
`

const Text = styled.div``

interface IProps {
    data: ReducerNoticeDataType
}

const Presenter: React.FC<IProps> = ({ data }) => {
    return <Container onClick={clickNotice}>
        <Id>
            {data.id}
        </Id>
        <Title>
            {data.title}
        </Title>
        <Desc>
            {data.author}
        </Desc>
        <CreatorAndDate>
            <Text style={{
                marginRight: 7
            }}>{data.created_time_str}</Text>
            {/* <Text>{data.created_time_str}</Text> */}
        </CreatorAndDate>
    </Container>

    function clickNotice() {
        window.open(data.url)
    }
}

export default Presenter