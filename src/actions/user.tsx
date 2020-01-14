import { Dispatch } from "react";
import { USER_LOGOUT, USER_LOGIN, LOADING_OFF, USER_GET_PROFILE, USER_GET_IMAGE, TURN_ON_ALERT } from "./types.d";
import axios from 'axios'
import { END_POINT } from '../consts/endpoint'

interface IImageDispatch {
    type: string
    img: string
}

interface IImageData {
    img: string
}

export const userGetProfileImageNonThunkFunction = (jwtToken: string, dispatch: Dispatch<IImageDispatch>) => {
    axios.get(`${END_POINT}users/profiles/image`, {
        headers: {
            'Authorization': jwtToken
        }
    })
        .then(res => {
            console.log('response from getting user image', res)
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
            console.log('response from get profile: ', res)

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
    axios.get(`${END_POINT}users/profiles/profile`, {
        headers: {
            'Authorization': jwtToken
        }
    })
        .then(res => {
            console.log('response from get profile: ', res)

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


export const loginUserThunkFunction = (id: string, pw: string) => (dispatch: Dispatch<IDispatch>) => {
    axios.post(`${END_POINT}auth/login`, {
        id,
        pw
    }, {
        withCredentials: true
    })
        .then(res => {

            console.log('status code = ', res.status)


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
                window.location.href = '/'
            } else if (res.status === 400) {
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