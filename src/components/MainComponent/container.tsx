import React from 'react'
import Presenter from './presenter'
import { connect } from 'react-redux'
import { ReducerStateType } from '../../types/index.d'
import { updateCurrentLocationRedux } from '../../actions/location'

interface IProps {
    updateCurrentLocationRedux: (current: string) => void
}

class MainComponentContainer extends React.Component<IProps> {

    componentDidMount() {
        this.props.updateCurrentLocationRedux('home')
    }

    render() {
        return <Presenter />
    }
}

const mapStateToProps = (state: ReducerStateType) => {
    return {}
}

export default connect(
    mapStateToProps,
    { updateCurrentLocationRedux }
)(MainComponentContainer)