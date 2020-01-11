import React from 'react'
import Presenter from './presenter'
import { connect } from 'react-redux'
import { ReducerStateType } from '../../types/index.d'
import { turnOffTab } from '../../actions/tab'

interface IProps {
    turnOffTab: () => void
    isLoggedIn: boolean
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
            leftIconClicked
        } = this;
        const {
            isLoggedIn
        } = this.props;
        return <Presenter
            disappearingTab={disappearingTab}
            leftIconClicked={leftIconClicked}
            isLoggedIn={isLoggedIn}
        />
    }


    leftIconClicked = () => {
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
    turnOffTab
})(NavigationTab)