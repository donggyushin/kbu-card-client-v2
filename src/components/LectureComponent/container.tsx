import React from 'react'
import Presenter from './presenter'
import { connect } from 'react-redux'
import { ReducerStateType } from '../../types/index.d'
import { fetchTimeTableThunkFunction } from '../../actions/timeTable'
import { logoutThunkFunction } from '../../actions/user'
import { verifyToken } from '../../utils/decodeToken'
import { turnOnAlert } from '../../actions/modal'
import { updateCurrentLocationRedux } from '../../actions/location'
import { fetchLectureCodeThunkFunction } from '../../actions/lectureCode'

interface IProps {
    fetchTimeTableThunkFunction: (jwtToken: string) => void
    logoutThunkFunction: () => void
    turnOnAlert: (title: string, text: string, callBack?: (param: any) => void) => void
    updateCurrentLocationRedux: (current: string) => void
    fetchLectureCodeThunkFunction: (jwtToken: string) => void
}

class LecturePageContainer extends React.Component<IProps> {

    componentDidMount() {
        const tokenChecked: boolean = verifyToken()
        const { fetchTimeTableThunkFunction } = this.props;
        this.props.updateCurrentLocationRedux('lecture')

        if (tokenChecked) {

            const jwtToken: string | null = localStorage.getItem('kbucard')
            if (jwtToken) {

                fetchTimeTableThunkFunction(jwtToken)
                this.props.fetchLectureCodeThunkFunction(jwtToken)
            } else {
                this.props.turnOnAlert('경고', '로그인 상태가 불안정합니다. 다시 로그인해주세요.')
                this.props.logoutThunkFunction()
                setTimeout(() => {
                    window.location.href = '/'
                }, 1000);
            }

        } else {
            // 토큰이 만료되었다면 만료되었다는 메시지를 띄워준다. 
            this.props.turnOnAlert('경고', '토큰이 만료되었습니다. ')

            // 토큰이 만료되어졌다면 로그아웃 시켜주고 다시 메인페이지로 복귀시켜준다. 

            this.props.logoutThunkFunction()
            setTimeout(() => {
                window.location.href = '/'
            }, 1000);

        }
    }

    render() {
        return <Presenter />
    }
}

const mapStateToProps = (state: ReducerStateType) => {
    return {}
}

export default connect(mapStateToProps, {
    fetchTimeTableThunkFunction,
    logoutThunkFunction,
    turnOnAlert,
    updateCurrentLocationRedux,
    fetchLectureCodeThunkFunction
})(LecturePageContainer)