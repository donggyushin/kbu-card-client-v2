import React, { useState } from 'react'
import styled from 'styled-components'
import { COLORS } from '../../../../consts/colors'
import { Redirect } from 'react-router-dom'
import Cafeteria from './Cafeteria'

const Container = styled.div`
    border-bottom:1px solid ${COLORS.weakGray};
    display: grid;
    grid-template-rows: 22% 1fr;
`

const Text = styled.div`
display:flex;
align-items:center;
padding-left:10px;
font-size:11px;
`

const Presenter: React.FC = () => {
    const [redirect, setRedirect] = useState(false)

    if (redirect) {
        return <Redirect to="/notice" />
    } else {

        return <Cafeteria />
    }


    function redirectFunc() {
        setRedirect(true)
    }
}

export default Presenter