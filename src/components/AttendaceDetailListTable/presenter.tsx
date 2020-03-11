import React, { useState, Dispatch } from 'react'
import styled, { keyframes } from 'styled-components'
import Header from './Header'
import Body from './Body'
import { useDispatch } from 'react-redux'
import { ATTENDANCE_DETAIL_LIST_TABLE_OFF } from '../../actions/types.d'

const FromBottomToTop = keyframes`
    from {
        top:100vh;
    }
    to {
        top:0;
    }
`

const FromTopToBottom = keyframes`
    from {
        top:0;
    }
    to {
        top:100vh;
    }
`

const DisappearingContainer = styled.div`
    position:absolute;
    width:100%;
    height:100%;
    top:100vh;
    left:0;
    background:white;
    animation:${FromTopToBottom} 0.5s;
    display: grid;
    grid-template-rows: 8% 1fr;
`

const Container = styled.div`
    position:absolute;
    width:100%;
    height:100%;
    top:0;
    left:0;
    background:white;
    animation:${FromBottomToTop} 0.5s;
    display: grid;
    grid-template-rows: 8% 1fr;
`

interface IAttendanceDetailViewOffDispatch {
    type: string
}

const Presenter: React.FC = () => {

    const [tableView, setTableView] = useState(true)
    const attendanceDetailViewOffDispatch = useDispatch<Dispatch<IAttendanceDetailViewOffDispatch>>()

    const onclickHeader = () => {
        setTableView(false)
        setTimeout(() => {
            attendanceDetailViewOffDispatch({
                type: ATTENDANCE_DETAIL_LIST_TABLE_OFF
            })
        }, 500);
    }

    if (tableView) {
        return <Container className={"attendance_detail_container"}>
            <Header
                onclickHeader={onclickHeader}
            />
            <Body />
        </Container>
    } else {
        return <DisappearingContainer>
            <Header
                onclickHeader={onclickHeader}
            />
            <Body />
        </DisappearingContainer>
    }


}

export default Presenter