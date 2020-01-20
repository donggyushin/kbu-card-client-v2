import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { COLORS } from '../../../../consts/colors'

const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`

const Korean = styled.div`
    font-weight: 600;
    color:${COLORS.black};
`

const English = styled.div`
    font-size: 12px;
    margin-top:7px;
    color:${COLORS.black};
`

const LeftPresenter: React.FC = () => {
    return <Container>
        <Link
            style={{
                textDecoration: 'none'
            }}
            to="/schedule">
            <Korean>
                학사일정
        </Korean>
            <English>
                Schedule
        </English>
        </Link>
    </Container>
}

export default LeftPresenter