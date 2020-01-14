import React, { useState, Dispatch } from 'react'
import styled, { keyframes } from 'styled-components'
import { BoxShadowObject } from '../../../consts/boxShadow'
import Top from './Top'
import Middle from './Middle'
import Bottom from './Bottom'
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
    width: 80%;
    max-width: 400px;
    margin-top: 44px;
    height: 75vh;
    background: white;
    border-radius: 3px;
    box-shadow:${BoxShadowObject.typeOne};
    animation:${FromBottomToTop} 0.5s;
    display: grid;
    grid-template-rows: 7% 83% 10%;
`

const FromTopToBottom = keyframes`
    from {    
        top: 44px;
    }
    to {
        top: 100vh;
    }
`

const DisappearingContainer = styled.div`
    position: relative;
    width: 80%;
    max-width: 400px;
    top:100vh;
    height: 75vh;
    background: white;
    border-radius: 3px;
    box-shadow:${BoxShadowObject.typeOne};
    animation:${FromTopToBottom} 0.5s;
    display: grid;
    grid-template-rows: 7% 83% 10%;
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
            <Top />
            <Middle />
            <Bottom
                turnOffStudentMobileCard={turnOffStudentMobileCard}
            />
        </Container>
    } else {
        return <DisappearingContainer>
            <Top />
            <Middle />
            <Bottom
                turnOffStudentMobileCard={turnOffStudentMobileCard}
            />
        </DisappearingContainer>
    }


}

export default StudentCardPresenter