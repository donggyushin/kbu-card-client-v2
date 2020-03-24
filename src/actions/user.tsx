import { Dispatch } from "react";
import { USER_LOGOUT, USER_LOGIN, LOADING_OFF, USER_GET_PROFILE, USER_GET_IMAGE, TURN_ON_ALERT, LOADING_ON } from "./types.d";
import axios from 'axios'
import { END_POINT, END_POINT_UNIV } from '../consts/endpoint'
import { encrypt } from '../utils/cryptr'
import { ENCRYPTED_USER_ID, ENCRYPTED_USER_PASSWORD } from '../consts/localStorageKeys'

interface IImageDispatch {
    type: string
    img: string
}

interface IImageData {
    img: string
}

export const userGetProfileImageNonThunkFunction = (jwtToken: string, dispatch: Dispatch<IImageDispatch>) => {
    axios.get(`${END_POINT_UNIV}users/photo`, {
        headers: {
            'Authorization': jwtToken
        }
    })
        .then(res => {

            if (res.status === 200) {
                const { img }: IImageData = res.data.data
                dispatch({
                    type: USER_GET_IMAGE,
                    img
                })
            } else if (res.status === 304) {
                console.log('User profile img not modified!')
            }
        })
        .catch(err => {
            console.log(`Error occured actions/user.tsx userGetProfileImageNonThunkFunction`)
            console.error(err)
        })
}






interface IDispatch {
    type: string
    token?: string
    sid?: string
    name?: string
    major?: string
    jwtToken?: string
    title?: string
    text?: string
    callBack?: (param: any) => void
}

interface IGetProfileData {
    sid: string
    name: string
    major: string
}

export const userGetProfileThunkFunction = (jwtToken: string) => (dispatch: Dispatch<IDispatch>) => {
    axios.get(`${END_POINT}users/profiles/profile`, {
        headers: {
            'Authorization': jwtToken
        }
    })
        .then(res => {


            if (res.status === 200) {

                const { sid, name, major }: IGetProfileData = res.data.data
                dispatch({
                    type: USER_GET_PROFILE,
                    sid,
                    name,
                    major
                })

            } else if (res.status === 304) {
                console.log(`Profile data not modified`)
            }

        })
        .catch(err => {
            console.log(`Error occured actions/user.tsx userGetProfileThunkFunction`)
            console.error(err)
        })
}

export const userGetProfileNonThunkFunction = (jwtToken: string, dispatch: Dispatch<IDispatch>) => {
    axios.get(`${END_POINT_UNIV}users/profile`, {
        headers: {
            'Authorization': jwtToken
        }
    })
        .then(res => {


            if (res.status === 200) {

                const { sid, name, major }: IGetProfileData = res.data.data
                dispatch({
                    type: USER_GET_PROFILE,
                    sid,
                    name,
                    major
                })

            } else if (res.status === 304) {
                console.log(`Profile data not modified`)
            }

        })
        .catch(err => {
            console.log(`Error occured actions/user.tsx userGetProfileThunkFunction`)
            console.error(err)
        })
}

export const logoutNonThunkFunction = (dispatch: Dispatch<IDispatch>) => {
    return dispatch({
        type: USER_LOGOUT
    })
}


export const logoutThunkFunction = () => (dispatch: Dispatch<IDispatch>) => {
    return dispatch({
        type: USER_LOGOUT
    })
}

export interface IuserLoginDispatch {
    type: string
    token?: string
    jwtToken?: string
    title?: string
    text?: string
    callBack?: () => void
}

export const replaceJwtTokenThunk = (id: string, pw: string) => (dispatch: Dispatch<IuserLoginDispatch>) => {

    const encryptedUserId = encrypt(id)
    const encryptedPassword = encrypt(pw)
    localStorage.setItem(ENCRYPTED_USER_ID, encryptedUserId)
    localStorage.setItem(ENCRYPTED_USER_PASSWORD, encryptedPassword)
    axios.post(`${END_POINT}auth/login`, {
        id,
        pw
    }, {
        withCredentials: true
    })
        .then(res => {
            if (res.status === 200) {
                const jwtToken: string = res.headers['authorization']
                const token: string = jwtToken.split(' ')[1]
                dispatch({
                    type: USER_LOGIN,
                    token,
                    jwtToken
                })
                window.location.reload()
            }
        })
}

export const replaceJwtToken = async (id: string, pw: string, dispatch: Dispatch<IuserLoginDispatch>) => {
    const encryptedUserId = encrypt(id)
    const encryptedPassword = encrypt(pw)
    localStorage.setItem(ENCRYPTED_USER_ID, encryptedUserId)
    localStorage.setItem(ENCRYPTED_USER_PASSWORD, encryptedPassword)
    axios.post(`${END_POINT}auth/login`, {
        id,
        pw
    }, {
        withCredentials: true
    })
        .then(res => {
            if (res.status === 200) {
                const jwtToken: string = res.headers['authorization']
                const token: string = jwtToken.split(' ')[1]
                dispatch({
                    type: USER_LOGIN,
                    token,
                    jwtToken
                })
                window.location.reload()
            }
        })
}

export const loginNonThunk = (id: string, pw: string, dispatch: Dispatch<IuserLoginDispatch>) => {
    dispatch({
        type: LOADING_ON
    })
    // return;

    axios.post(`${END_POINT}auth/login`, {
        id,
        pw
    }, {
        withCredentials: true
    })
        .then(res => {
            if (res.status === 200) {
                const jwtToken: string = res.headers['authorization']
                const token: string = jwtToken.split(' ')[1]
                dispatch({
                    type: USER_LOGIN,
                    token,
                    jwtToken
                })
                dispatch({
                    type: LOADING_OFF
                })
                localStorage.setItem(ENCRYPTED_USER_ID, id)
                localStorage.setItem(ENCRYPTED_USER_PASSWORD, pw)
                window.location.href = '/'
            } else {
                dispatch({
                    type: LOADING_OFF
                })
                dispatch({
                    type: TURN_ON_ALERT,
                    title: "경고",
                    text: "한국성서대학교 서버 인트라넷이 현재 불안정합니다.",
                    callBack: undefined
                })
            }
        })
        .catch(err => {
            console.error(err)
            dispatch({
                type: LOADING_OFF
            })
            dispatch({
                type: USER_LOGOUT
            })
            dispatch({
                type: TURN_ON_ALERT,
                title: "경고",
                text: "네트워크 에러 발생. 관리자에게 문의해주세요. 한국성서대 컴쏘 일동 -",
                callBack: () => {
                    window.location.href = '/'
                }
            })
        })
}


export const loginUserThunkFunction = (id: string, pw: string) => (dispatch: Dispatch<IDispatch>) => {
    dispatch({
        type: LOADING_ON
    })

    axios.post(`${END_POINT_UNIV}auth/login`, {
        id,
        pw
    }, {
        withCredentials: true
    })
        .then(res => {
            console.log("res: ", res)
            if (res.status === 200) {

                const jwtToken: string = res.headers['authorization']
                const token: string = jwtToken.split(' ')[1]

                dispatch({
                    type: USER_LOGIN,
                    token,
                    jwtToken
                })

                dispatch({
                    type: LOADING_OFF
                })
                const encryptedUserId = id
                const encryptedPassword = pw
                localStorage.setItem(ENCRYPTED_USER_ID, encryptedUserId)
                localStorage.setItem(ENCRYPTED_USER_PASSWORD, encryptedPassword)
                window.location.href = '/'
            } else if (res.status === 400) {
                console.log('비밀번호가 틀렸을때 혹은 인트라넷 서버 망가졌을때')
                dispatch({
                    type: LOADING_OFF
                })
                dispatch({
                    type: TURN_ON_ALERT,
                    title: "경고",
                    text: "한국성서대학교 서버 인트라넷이 현재 불안정합니다.",
                    callBack: undefined
                })

            }


        })
        .catch(err => {
            console.log('비밀번호가 틀렸을때')
            dispatch({
                type: LOADING_OFF
            })
            dispatch({
                type: TURN_ON_ALERT,
                title: "경고",
                text: "아이디와 패스워드가 일치하지 않습니다",
                callBack: undefined
            })
            console.error(`[actions/user.tsx]Error occured:${err}`)
        })


}