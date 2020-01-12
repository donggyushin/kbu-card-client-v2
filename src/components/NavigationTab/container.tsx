import React from 'react'
import Presenter from './presenter'
import { connect } from 'react-redux'
import { ReducerStateType } from '../../types/index.d'
import { turnOffTab } from '../../actions/tab'
import { logoutThunkFunction } from '../../actions/user'

interface IProps {
    turnOffTab: () => void
    isLoggedIn: boolean
    logoutThunkFunction: () => void
}

interface IState {
    disappearingTab: boolean
}

class NavigationTab extends React.Component<IProps, IState> {

    state: IState = {
        disappearingTab: false
    }

    render() {
        const {
            disappearingTab
        } = this.state
        const {
            disappearTabBar,
            logoutUser
        } = this;
        const {
            isLoggedIn
        } = this.props;
        return <Presenter
            disappearingTab={disappearingTab}
            disappearTabBar={disappearTabBar}
            isLoggedIn={isLoggedIn}
            logoutUser={logoutUser}
        />
    }

    logoutUser = () => {
        this.disappearTabBar()
        setTimeout(() => {
            this.props.logoutThunkFunction()
        }, 200);

    }

    disappearTabBar = () => {
        const { turnOffTab } = this.props;
        this.setState({
            disappearingTab: true
        })
        setTimeout(() => {
            turnOffTab()
        }, 200);
    }

}

const mapStateToProps = (state: ReducerStateType) => {
    return {
        isLoggedIn: state.user.isLoggedIn
    }
}



export default connect(mapStateToProps, {
    turnOffTab,
    logoutThunkFunction
})(NavigationTab)