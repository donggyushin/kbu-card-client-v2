import { ReducerUserType } from "../types/index.d";
import { USER_LOGIN, USER_LOGOUT } from "../actions/types.d";

interface ActionType {
    type: string
    user: ReducerUserType
    token: string
}

const initialState: ReducerUserType = {
    isLoggedIn: localStorage.getItem('kbucard') ? true : false,
    email: "",
    name: ""
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
    window.localStorage.setItem('kbucard', token)
    window.location.href = '/'
    return {
        ...state,
        isLoggedIn: true
    }
}