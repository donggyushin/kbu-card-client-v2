import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { ReducerStateType } from '../../../../../../types/index.d'

const Container = styled.div`
    width: 100%;
    margin-top: 5px;
    height: auto;
    z-index: 2;
    display: flex;
    justify-content: center;
`

const ProfileImage = styled.img`
    width: 90%;
    margin-top: 5px;
    z-index: 2;
    max-height: 240px;
    object-fit: contain;
`



const Presenter: React.FC = () => {
    const userProfileimageSrc = useSelector((state: ReducerStateType) => state.user.profile)
    const sid = useSelector((state: ReducerStateType) => state.user.sid)

    return <Container>
        <ProfileImage
            src={sid === '201303024' ? '/chrisHemsworth.jpeg' : `data:image/png;base64, ${userProfileimageSrc}`}
        />
    </Container>
}

export default Presenter