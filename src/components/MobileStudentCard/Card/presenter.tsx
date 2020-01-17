import React, { useState, Dispatch } from 'react'
import styled, { keyframes } from 'styled-components'
import { BoxShadowObject } from '../../../consts/boxShadow'
import Middle from './Middle'
import Top from './Top'
import { useDispatch } from 'react-redux'
import { MOBILE_STUDENT_CARD_OFF } from '../../../actions/types.d'

const FromBottomToTop = keyframes`
    from {    
        top: 100vh;
    }
    to {
        top: 0;
    }
`

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    background: white;
    border-radius: 3px;
    box-shadow:${BoxShadowObject.typeOne};
    animation:${FromBottomToTop} 0.5s;
    display: grid;
    grid-template-rows: 7% 93%;
`

const FromTopToBottom = keyframes`
    from {    
        top: 0;
    }
    to {
        top: 100vh;
    }
`

const DisappearingContainer = styled.div`
    position: relative;
    width: 100%;
    top:100vh;
    height: 100vh;
    background: white;
    border-radius: 3px;
    box-shadow:${BoxShadowObject.typeOne};
    animation:${FromTopToBottom} 0.5s;
    display: grid;
    grid-template-rows: 7% 93%;
`

interface IDispatch {
    type: string
}

const StudentCardPresenter: React.FC = () => {
    const [visible, setVisible] = useState(true)

    const dispatch = useDispatch<Dispatch<IDispatch>>()

    const turnOffStudentMobileCard = () => {
        setVisible(false)
        setTimeout(() => {
            dispatch({
                type: MOBILE_STUDENT_CARD_OFF
            })
        }, 500);
    }

    if (visible) {

        return <Container>
            <Top
                turnOffStudentMobileCard={turnOffStudentMobileCard}
            />
            <Middle />
        </Container>
    } else {
        return <DisappearingContainer>

            <Top
                turnOffStudentMobileCard={turnOffStudentMobileCard}
            />
            <Middle />

        </DisappearingContainer>
    }


}

export default StudentCardPresenter