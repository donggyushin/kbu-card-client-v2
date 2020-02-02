import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height:100%;
    display:grid;
    grid-template-rows:17% 1fr;
`

const Label = styled.div`
    font-size:11px;
    display:flex;
    justify-content:center;
    align-items:center;
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
        <Label>{label}</Label>
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