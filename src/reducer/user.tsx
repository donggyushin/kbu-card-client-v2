import { ReducerUserType } from "../types/index.d";
import { USER_LOGIN, USER_LOGOUT, USER_GET_PROFILE, USER_GET_IMAGE } from "../actions/types.d";
import { ENCRYPTED_USER_PASSWORD, ENCRYPTED_USER_ID } from '../consts/localStorageKeys'
import jwt from 'jsonwebtoken'

interface ActionType {
    type: string
    user: ReducerUserType
    token: string
    jwtToken: string
    sid: string
    name: string
    major: string
    img: string
}

const initialState: ReducerUserType = {
    isLoggedIn: localStorage.getItem('kbucard') ? true : false,
    email: "",
    name: "",
    profile: "",
    sid: "",
    cid: "",
    exp: 0,
    major: ""
}

export default function (state: ReducerUserType = initialState, action: ActionType) {
    switch (action.type) {
        case USER_LOGIN:
            return userLogin(state, action)
        case USER_LOGOUT:
            return userLogout(state, action)
        case USER_GET_PROFILE:
            return userGetProfile(state, action)
        case USER_GET_IMAGE:
            return userGetImage(state, action)
        default:
            return state
    }
}

function userGetImage(state: ReducerUserType, action: ActionType): ReducerUserType {
    const { img } = action;
    return {
        ...state,
        profile: img
    }
}


function userGetProfile(state: ReducerUserType, action: ActionType): ReducerUserType {
    const { name, major, sid } = action
    return {
        ...state,
        name,
        major,
        sid
    }
}


function userLogout(state: ReducerUserType, action: ActionType): ReducerUserType {

    window.localStorage.removeItem('kbucard');
    window.localStorage.removeItem(ENCRYPTED_USER_ID)
    window.localStorage.removeItem(ENCRYPTED_USER_PASSWORD)

    window.location.href = '/'
    return {
        ...state,
        isLoggedIn: false
    }
}

function userLogin(state: ReducerUserType, action: ActionType): ReducerUserType {

    const { token, jwtToken } = action
    window.localStorage.setItem('kbucard', jwtToken)



    return {
        ...state,
        isLoggedIn: true,
        sid: "",
        cid: "",
        exp: 0
    }
}