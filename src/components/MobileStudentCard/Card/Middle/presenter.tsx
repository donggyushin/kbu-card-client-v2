import React from 'react'
import Text from './Text'
import QrCode from './QrCode'
import { useSelector } from 'react-redux'
import { ReducerStateType } from '../../../../types/index.d'
import './styles.css'



const MiddlePresenter: React.FC = () => {

    const userProfileimageSrc = useSelector((state: ReducerStateType) => state.user.profile)
    const UserReducer = useSelector((state: ReducerStateType) => state.user)
    const { name, major, sid } = UserReducer

    return <div className="mobile_student_card_container">
        {sid === '201303024' ? <img src={`/chrisHemsworth.jpeg`} alt="" className="mobile_student_card_container__profile" /> : <img src={`data:image/png;base64,${userProfileimageSrc}`} alt="" className="mobile_student_card_container__profile" />}
        <div className="mobile_student_card_container__name">
            {name}
        </div>
        <div className="mobile_student_card_container__sid">
            {sid}
        </div>
        <div className="mobile_student_card_container__major">
            {major}
        </div>
        <div className="mobile_student_card_container__text">
            밑의 버튼을 눌러 큐알 코드를 발급 받으세요
        </div>
        <QrCode />
    </div>
}

export default MiddlePresenter