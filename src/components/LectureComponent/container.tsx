import React from 'react'
import Presenter from './presenter'
import { connect } from 'react-redux'
import { ReducerStateType } from '../../types/index.d'
import { fetchTimeTableThunkFunction } from '../../actions/timeTable'
import { logoutThunkFunction } from '../../actions/user'
import { turnOnAlert } from '../../actions/modal'
import { updateCurrentLocationRedux } from '../../actions/location'
import { fetchLectureCodeThunkFunction } from '../../actions/lectureCode'
import { fetchLecturesThunkFunction } from '../../actions/lecture'
import { replaceJwtTokenThunk } from '../../actions/user'
import { ENCRYPTED_USER_ID, ENCRYPTED_USER_PASSWORD } from '../../consts/localStorageKeys'
import { decrypt } from '../../utils/cryptr'
import Axios from 'axios'
import { END_POINT_UNIV } from '../../consts/endpoint'

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
        const { fetchTimeTableThunkFunction } = this.props;
        this.props.updateCurrentLocationRedux('lecture')



        const id = localStorage.getItem("asjdhjsakd")
        const pw = localStorage.getItem("aslkdjaslkd")

        if (id && pw) {
            Axios.post(`${END_POINT_UNIV}auth/login`, {
                id,
                pw
            }, {
                withCredentials: true
            })
                .then(res => {
                    const jwtToken: string = res.headers['authorization']
                    localStorage.setItem('kbucard', jwtToken)
                    fetchTimeTableThunkFunction(jwtToken)
                    this.props.fetchLectureCodeThunkFunction(jwtToken)
                    this.props.fetchLecturesThunkFunction(jwtToken)
                })
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