import React from 'react'
import styled from 'styled-components'
import { ReducerCafeteriaMenusType } from '../../../../../types/index.d'


const Container = styled.div`
    display: grid;
    grid-template-rows: 17% 1fr;
    
`

const Header = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`

const Label = styled.div`
    font-weight:600;
    font-size:14px;
`

const Body = styled.div``

const MenusContainer = styled.div`
    padding-left:14px;
    display:flex;
    flex-direction:column;
    
`

const Menu = styled.div`
    margin-top:4px;
    margin-bottom:4px;
    font-size:14px;
`

interface IProps {
    menu: ReducerCafeteriaMenusType
    label: string
}

const Presenter: React.FC<IProps> = ({
    menu,
    label
}) => {
    return <Container>
        <Header><Label>{label}</Label></Header>
        <Body>
            <MenusContainer>
                {menu.menus.map((menu, i) => {
                    return <Menu key={i}>{menu}</Menu>
                })}
            </MenusContainer>
        </Body>
    </Container>
}

export default Presenter