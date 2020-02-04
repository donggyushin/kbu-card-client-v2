import React, { useState } from 'react'
import styled from 'styled-components'
import { COLORS } from '../../../../../consts/colors'
import { Redirect } from 'react-router-dom'

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 74% 1fr;
    border-bottom:1px solid ${COLORS.weakGray};
`
const Left = styled.div`
    display: grid;
    grid-template-rows: 30% 1fr;
`

const TinyText = styled.div`
    font-size:11px;
    display:flex;
    align-items:center;
    padding-left:10px;

    `

const NomralText = styled.div`
    display:flex;
    padding-left:15px;
    margin-top:5px;
`

const Right = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:11px;
`
const Icon = styled.i`
    margin-left:7px;
`

const Image = styled.img`
    width: 37px;
    margin-left: 27%;
`

const Presenter: React.FC = () => {

    const [redirect, setRedirect] = useState(false)

    if (redirect) {
        return <Redirect to="/login" />
    } else {
        return <Container onClick={redirectFunc}>
            <Left>
                <TinyText>
                    마일리지
            </TinyText>
                <Image src="https://img.icons8.com/officel/80/000000/money.png" />
            </Left>
            <Right>로그인 <Icon className="fas fa-chevron-right" /></Right>
        </Container>
    }



    function redirectFunc() {
        setRedirect(true)
    }
}

export default Presenter