import React, { Dispatch } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { TURN_ON_ALERT, ROUTING_ON, ROUTING_OFF } from '../../../../../../actions/types.d'
import { ReducerStateType } from '../../../../../../types/index.d'
import { Redirect } from 'react-router'

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
`

const ChurchIcon = styled.i`
    font-size: 34px;
`

const Text = styled.div`
    font-weight: 600;
    position:relative;
    top:20px;
`

interface IDispatch {
    type: string
    title?: string
    text?: string
    callBack?: () => void
    to?: string
}

interface IProps { }

const NormalImagePresenter: React.FC<IProps> = () => {
    const dispatch = useDispatch<Dispatch<IDispatch>>()
    const routing = useSelector((state: ReducerStateType) => state.routing)
    function containerClicked() {
        return dispatch({
            type: TURN_ON_ALERT,
            title: "로그인을 해주세요.",
            text: "해당 페이지로 이동하려면 로그인이 필요합니다. 로그인 페이지로 이동합니다.",
            callBack: goLoginPage
        })
    }
    function goLoginPage() {
        dispatch({
            type: ROUTING_ON,
            to: '/login'
        })
    }


    if (routing.route) {
        setTimeout(() => {
            dispatch({
                type: ROUTING_OFF
            })
        }, 500);
        return <Redirect push to={routing.to} />
    }
    else {
        return <Container
            onClick={containerClicked}
        >
            <ChurchIcon
                className="fas fa-church"
            />
            <Text>채플</Text>
        </Container>

    }


}

export default NormalImagePresenter