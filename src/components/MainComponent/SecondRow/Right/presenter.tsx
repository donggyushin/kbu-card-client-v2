import React, { useState, Dispatch } from 'react'
import styled from 'styled-components'
import { Redirect, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { ReducerStateType } from '../../../../types/index.d'
import { TURN_ON_ALERT } from '../../../../actions/types.d'
import { COLORS } from '../../../../consts/colors'

const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    height:100%;
    color:${COLORS.black};
`

const Korean = styled.div`
    font-weight: 600;
`

const English = styled.div`
    font-size: 12px;
    margin-top:7px;
`


interface IModalDispatch {
    type: string
    title: string
    text: string
    callBack?: (param: any) => void
}


const RightPresenter: React.FC = () => {

    const [redirect, setRedirect] = useState(false)
    const userReducer = useSelector((state: ReducerStateType) => state.user)
    const modalDispatch = useDispatch<Dispatch<IModalDispatch>>()

    const containerClicked = () => {
        if (userReducer.isLoggedIn) {



        } else {
            // 로그인이 안되어있으면 경고창을 띄워주고 로그인 화면으로 보내주기
            modalDispatch({
                type: TURN_ON_ALERT,
                title: '경고',
                text: '해당 페이지는 로그인을 해야 이동이 가능합니다. 로그인후 이용해주세요. ',
                callBack: RedirectToLogin
            })
        }
    }

    const RedirectToLogin = () => {
        setRedirect(true)
    }

    if (redirect) {
        return <Redirect to="/login" />
    } else {

        if (userReducer.isLoggedIn) {
            return <Link
                style={{
                    textDecoration: 'none'
                }}
                to="/lecture">
                <Container>
                    <Korean>
                        수업
    </Korean>
                    <English>
                        Lecture
    </English>
                </Container>
            </Link>
        } else {

            return <Container onClick={containerClicked}>
                <Korean>
                    수업
    </Korean>
                <English>
                    Lecture
    </English>
            </Container>
        }


    }

}

export default RightPresenter