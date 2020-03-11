import React, { useState, Dispatch } from 'react'
import styled, { keyframes } from 'styled-components'
import { BoxShadowObject } from '../../../consts/boxShadow'
import { useSelector, useDispatch } from 'react-redux'
import { ReducerStateType } from '../../../types/index.d'
import AttendanceCardBody from './Body'
import { ATTENDANCE_OFF } from '../../../actions/types.d'


const FromBottomToTop = keyframes`
    from {
        top:100vh;
    }
    to {
        top:0
    }   
`

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    /* display: grid;
    grid-template-rows: 7% 93%; */
    background:white;
    box-shadow:${BoxShadowObject.typeOne};
    overflow:hidden;
    position: relative;
    animation:${FromBottomToTop} 0.5s;
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
    width: 100%;
    min-height: 100vh;
    top: 100vh;
    /* display: grid;
    grid-template-rows: 7% 93%; */
    background:white;
    box-shadow:${BoxShadowObject.typeOne};
    overflow:hidden;
    position: relative;
    animation:${FromTopToBottom} 0.5s;
`


interface IHeaderProps {
    backgroundColor: string
}

const Header = styled.div`
    background:${(props: IHeaderProps) => props.backgroundColor};
    display:flex;
    align-items:center;
    color:white;
    font-size:23px;
    font-weight:600;
`

const XbuttonContainer = styled.div`
    padding:12px;
`

const DownButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(255,255,255);
    background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(250,250,250,1) 88%, rgba(255,255,255,1) 100%);
    cursor: pointer;
`

const ICon = styled.i``

interface IAttendanceDispatch {
    type: string
}

const CardPresenter: React.FC = () => {
    const [visible, setVisible] = useState(true)
    const color: string = useSelector((state: ReducerStateType) => state.attendance.color)
    const attendaceDispatch = useDispatch<Dispatch<IAttendanceDispatch>>()

    const turnOffAttendaceView = () => {
        setVisible(false)
        setTimeout(() => {
            attendaceDispatch({
                type: ATTENDANCE_OFF
            })
        }, 500);
    }

    if (visible) {
        return <Container>
            <Header backgroundColor={color}>
                <XbuttonContainer
                    onClick={turnOffAttendaceView}
                >
                    <ICon className={"fas fa-times"} />
                </XbuttonContainer>
            </Header>
            <AttendanceCardBody />
            {/* <DownButton
                onClick={turnOffAttendaceView}
            >
                <ICon className="fas fa-chevron-down" />
            </DownButton> */}
        </Container>
    } else {
        return <DisappearingContainer>
            <Header backgroundColor={color}>
                <XbuttonContainer
                    onClick={turnOffAttendaceView}
                >
                    <ICon className={"fas fa-times"} />
                </XbuttonContainer>
            </Header>
            <AttendanceCardBody />
            {/* <DownButton>
                <ICon className="fas fa-chevron-down" />
            </DownButton> */}
        </DisappearingContainer>
    }
}

export default CardPresenter