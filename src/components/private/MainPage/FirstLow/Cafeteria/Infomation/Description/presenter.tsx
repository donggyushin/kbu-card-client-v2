import React from 'react'
import styled from 'styled-components'
// @ts-ignore
import LinesEllipsis from 'react-lines-ellipsis'

const Container = styled.div`
    color:rgba(0, 0, 0, 0.54);
cursor:pointer;
display:-webkit-box;
fill:rgba(0, 0, 0, 0.54);
font-family:medium-content-sans-serif-font, "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", Geneva, Arial, sans-serif;
font-style:normal;
font-weight:400;
line-height: 20px;
    font-size: 12px;
`

const DescriptionPresenter: React.FC = () => {
    return <Container>
        <LinesEllipsis
  text='중식 김치찌개, 감자탕, 쌀밥, 고등어구이, 간장게장, 도롱뇽무침
  석식 어쩌고, 저쩌고, 이러쿵, 저러쿵, 가나다, 라마바, 사아자
  고정 고정은, 고정이지
  데일리 김치볶음밥, 배고프다'
  maxLine='3'
  ellipsis='...'
  trimRight
  basedOn='letters'
/>
        
    </Container>
}

export default DescriptionPresenter