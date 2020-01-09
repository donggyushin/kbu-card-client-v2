import React from 'react'
import styled from 'styled-components'
import CardPresenter from '../Card'

const Container = styled.div`
    display:grid;
    grid-template-rows:repeat(1, 300px);
    grid-template-columns:repeat(4, 1fr);
    column-gap:15px;
`


const TopPresenter: React.FC = () => {
    return <Container>
        <CardPresenter
            imageName="cafeteria.jpg"
            title="오늘의 학식"
            desc="오늘의 학식 메뉴를 보고 학식을 먹을지 말지 결정해보아요."
        />
        <CardPresenter
            imageName="calendar.jpg"
            title="학사 일정"
            desc="우리 학교 학사일정, 그동안 보기 귀찮고 힘드셨죠? 갓글 캘린더와 연동된 KBU card 어플리케이션만의 학사일정 보기!"
        />
        <CardPresenter
            imageName="bulletinboard.jpg"
            title="공지사항"
            desc="장학금이나 방학숙제 관련된 공지사항, 놓쳐선 안돼죠"
        />
        <CardPresenter
            imageName="card.jpg"
            title="온라인 학생증"
            desc="온라인 학생증만으로의 채플 출석을 바라며..."
        />
    </Container>
}

export default TopPresenter