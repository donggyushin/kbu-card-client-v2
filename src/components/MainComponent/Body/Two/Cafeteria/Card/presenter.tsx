import React from 'react'
import styled from 'styled-components'
import { BoxShadowObject } from '../../../../../../consts/boxShadow'
import { COLORS } from '../../../../../../consts/colors'

const Container = styled.div`
    height:100%;
    display:grid;
    grid-template-rows:17% 1fr;
    border-radius:4px;
    box-shadow:${BoxShadowObject.typeOne};
`

const Row = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
`

const Label = styled.div`
    font-size:11px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-weight:600;
`

const IConContainer = styled.div``

const ICon = styled.i`
    font-size:12px;
    color:${COLORS.indigo};
`

const Menus = styled.div`
    padding-left:10px;
`

const Menu = styled.div`
    font-size:12px;
`

interface IProps {
    label: string
    menus: string[]
}

const Presenter: React.FC<IProps> = ({
    label,
    menus
}) => {
    return <Container>
        <Row>
            <IConContainer>
                <ICon className="fas fa-chevron-left"></ICon>
                <ICon className="fas fa-chevron-left"></ICon>
            </IConContainer>
            <Label>{label}</Label>
            <IConContainer>
                <ICon className="fas fa-chevron-right"></ICon>
                <ICon className="fas fa-chevron-right"></ICon>
            </IConContainer>
        </Row>
        <Menus>
            {menus.map((data, i) => {
                return <Menu key={i}>
                    {data}
                </Menu>
            })}
        </Menus>

    </Container>
}

export default Presenter