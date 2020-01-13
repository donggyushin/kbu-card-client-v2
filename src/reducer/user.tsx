import { ReducerUserType } from "../types/index.d";
import { USER_LOGIN, USER_LOGOUT } from "../actions/types.d";
import jwt from 'jsonwebtoken'

interface ActionType {
    type: string
    user: ReducerUserType
    token: string
}

const initialState: ReducerUserType = {
    isLoggedIn: localStorage.getItem('kbucard') ? true : false,
    email: "",
    name: "",
    profile: "",
    sid: "",
    cid: "",
    exp: 0
}

export default function (state: ReducerUserType = initialState, action: ActionType) {
    switch (action.type) {
        case USER_LOGIN:
            return userLogin(state, action)
        case USER_LOGOUT:
            return userLogout(state, action)
        default:
            return state
    }
}

function userLogout(state: ReducerUserType, action: ActionType): ReducerUserType {

    window.localStorage.removeItem('kbucard');

    window.location.href = '/'
    return {
        ...state,
        isLoggedIn: false
    }
}

function userLogin(state: ReducerUserType, action: ActionType): ReducerUserType {

    const { token } = action
    const decoded: any = jwt.decode(token)
    const { sid, cid, exp } = decoded
    window.localStorage.setItem('kbucard', token)

    return {
        ...state,
        isLoggedIn: true,
        sid,
        cid,
        exp
    }
}