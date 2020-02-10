import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../../../../consts/colors'
import { ReducerSchedulesCreatorType, ReducerSchedulesOrganizerType } from '../../../../../types/index.d'

const Container = styled.div`
    background-color: rgba(0,114,255,0.1);
    background: rgba(0,114,255,0.1);
    color: ${COLORS.charcol};
    border-radius: 4px;
    display: grid;
    grid-template-columns: 77% 1fr;
`

const Left = styled.div`
    padding-top:4px;
    padding-left:7px;
    display:flex;
    flex-direction:column;
    word-break: break-all;

`

const BigText = styled.div`
    font-size: 15px;
    font-weight: 600;
`

const ThinText = styled.div`
    font-size:11px;
`

const Right = styled.div`
    display:flex;
    align-items:flex-end;
    justify-content:flex-end;
    padding-bottom:4px;
    padding-right:7px;
`

interface BadgeProp {
    color: string
}

const Badge = styled.div`
    background: ${(props: BadgeProp) => props.color};
    color: white;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border-radius: 4px;
    font-size: 12px;
    padding: 0px 3px;
`

interface IProps {
    name: string
    summary?: string
    creator?: ReducerSchedulesCreatorType
    organizor?: ReducerSchedulesOrganizerType
    color: string
}

const Presenter: React.FC<IProps> = ({
    name,
    summary,
    creator,
    organizor,
    color
}) => {
    return <Container>
        <Left>
            {summary && <BigText>
                {summary}
            </BigText>}
            {creator && <>
                <BigText>
                    {creator.displayName}
                </BigText>
                <ThinText>
                    {creator.email.substr(0, 2) !== 'ko' && creator.email}
                </ThinText>
            </>}
            {organizor?.displayName && <>
                <BigText>
                    {organizor.displayName}
                </BigText>
                {/* <ThinText>
                    {organizor.email.substr(0, 2) !== 'ko' && organizor.email}
                </ThinText> */}
            </>}

        </Left>
        <Right>
            <Badge
                color={COLORS.charcol}
            >
                {name}
            </Badge>
        </Right>
    </Container>
}

export default Presenter