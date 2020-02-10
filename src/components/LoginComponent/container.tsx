import React from 'react'
import Presenter from './presenter'
import { connect } from 'react-redux'
import { ReducerStateType } from '../../types/index.d'
import { turnOnAlert } from '../../actions/modal'
import { loginUserThunkFunction } from '../../actions/user'
import { loadingOn } from '../../actions/loading'


interface IProps {
    isLoggedIn: boolean
    turnOnAlert: (title: string, text: string, callBack?: () => void) => void
    loginUserThunkFunction: (id: string, pw: string) => void
    loadingOn: () => void
}

interface ReducerPropsType {
    isLoggedIn: boolean
}

interface IState {
    id: string
    pw: string
}

class LoginComponentContainer extends React.Component<IProps, IState> {
    state: IState = {
        id: "",
        pw: ""
    }
    componentDidMount() {
        const { isLoggedIn, turnOnAlert } = this.props;
        if (isLoggedIn) {
            // 로그인 한 유저는 들어올수 없음
            // 경고장을 보여준 뒤 main page 로 쫓아내주기
            turnOnAlert('경고', '로그인을 한 유저는 이곳에 들어올 수 없습니다. ', this.goHome)
        }
    }

    render() {
        const {
            id,
            pw
        } = this.state
        const {
            handleInput,
            login
        } = this
        return <Presenter
            id={id}
            pw={pw}
            handleInput={handleInput}
            login={login}
        />
    }

    login = () => {
        const {
            id,
            pw
        } = this.state
        this.props.loginUserThunkFunction(id, pw)
        console.log('3')
    }

    handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name: string = event.target.name
        const value: string = event.target.value

        this.setState({
            ...this.state,
            [name]: value
        })
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
    turnOnAlert,
    loginUserThunkFunction,
    loadingOn
})(LoginComponentContainer)