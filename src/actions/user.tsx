import { Dispatch } from "react";
import { USER_LOGOUT, USER_LOGIN, LOADING_OFF } from "./types.d";
import axios from 'axios'
import { END_POINT } from '../consts/endpoint'

interface IDispatch {
    type: string
    token?: string
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
            const jwtToken: string = res.headers['authorization']
            const token: string = jwtToken.split(' ')[1]
            dispatch({
                type: USER_LOGIN,
                token
            })
            dispatch({
                type: LOADING_OFF
            })
            window.location.href = '/'

        })
        .catch(err => {
            console.error(`[actions/user.tsx]Error occured:${err}`)
        })
}