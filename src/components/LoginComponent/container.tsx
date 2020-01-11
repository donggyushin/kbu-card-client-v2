import React from 'react'
import Presenter from './presenter'
import { connect } from 'react-redux'
import { ReducerStateType } from '../../types/index.d'
import { turnOnAlert } from '../../actions/modal'

interface IProps {
    isLoggedIn: boolean
    turnOnAlert: (title: string, text: string, callBack?: () => void) => void
}

interface ReducerPropsType {
    isLoggedIn: boolean
}

class LoginComponentContainer extends React.Component<IProps> {

    componentDidMount() {
        const { isLoggedIn, turnOnAlert } = this.props;
        if (isLoggedIn) {
            // 로그인 한 유저는 들어올수 없음
            // 경고장을 보여준 뒤 main page 로 쫓아내주기
            turnOnAlert('경고', '로그인을 한 유저는 이곳에 들어올 수 없습니다. ', this.goHome)
        }
    }

    render() {
        return <Presenter />
    }

    goHome = () => {
        window.location.href = '/'
    }

}

const mapStateToProps = (state: ReducerStateType): ReducerPropsType => {
    return {
        isLoggedIn: state.user.isLoggedIn
    }
}


export default connect(mapStateToProps, {
    turnOnAlert
})(LoginComponentContainer)