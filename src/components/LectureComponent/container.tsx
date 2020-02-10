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
import { fetchLecturesThunkFunction } from '../../actions/lecture'
import { replaceJwtTokenThunk } from '../../actions/user'
import { ENCRYPTED_USER_ID, ENCRYPTED_USER_PASSWORD } from '../../consts/localStorageKeys'
import { decrypt } from '../../utils/cryptr'

interface IProps {
    fetchTimeTableThunkFunction: (jwtToken: string) => void
    logoutThunkFunction: () => void
    turnOnAlert: (title: string, text: string, callBack?: (param: any) => void) => void
    updateCurrentLocationRedux: (current: string) => void
    fetchLectureCodeThunkFunction: (jwtToken: string) => void
    fetchLecturesThunkFunction: (jwtToken: string) => void
    replaceJwtTokenThunk: (id: string, pw: string) => void
}

class LecturePageContainer extends React.Component<IProps> {

    componentDidMount() {
        let tokenChecked: boolean = verifyToken()
        const { fetchTimeTableThunkFunction } = this.props;
        this.props.updateCurrentLocationRedux('lecture')


        if (tokenChecked) {
            console.log('token checked')
            const jwtToken: string | null = localStorage.getItem('kbucard')
            if (jwtToken) {

                fetchTimeTableThunkFunction(jwtToken)
                this.props.fetchLectureCodeThunkFunction(jwtToken)
                this.props.fetchLecturesThunkFunction(jwtToken)

            } else {
                this.props.turnOnAlert('경고', '로그인 상태가 불안정합니다. 다시 로그인해주세요.')
                this.props.logoutThunkFunction()
                setTimeout(() => {
                    window.location.href = '/'
                }, 1000);
            }

        } else {
            // 토큰이 만료되었다면 만료되었다는 메시지를 띄워준다. 
            this.replaceJwtTokenFunc()

        }
    }

    render() {
        return <Presenter />
    }

    replaceJwtTokenFunc() {


        if (localStorage.getItem(ENCRYPTED_USER_ID) && localStorage.getItem(ENCRYPTED_USER_PASSWORD)) {

            const decryptedId = decrypt(localStorage.getItem(ENCRYPTED_USER_ID) as string)
            const decryptedPw = decrypt(localStorage.getItem(ENCRYPTED_USER_PASSWORD) as string)
            this.props.replaceJwtTokenThunk(decryptedId, decryptedPw)
        }



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
    fetchLectureCodeThunkFunction,
    fetchLecturesThunkFunction,
    replaceJwtTokenThunk
})(LecturePageContainer)