import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    color:rgba(0, 0, 0, 0.84);
cursor:pointer;
display:-webkit-box;
fill:rgba(0, 0, 0, 0.84);
font-family:medium-content-sans-serif-font, "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Geneva, Arial, sans-serif;
font-size:24px;
font-style:normal;
font-weight:600;
letter-spacing:-0.42px;
line-height:28px;
margin-top: 20px;
    margin-bottom: 10px;
`

const TitlePresenter: React.FC = () => {
    return <Container>
        오늘의 학식
    </Container>
}

export default TitlePresenter