import { Dispatch } from "react";
import { USER_LOGOUT } from "./types.d";

interface IDispatch {
    type: string
}

export const logoutThunkFunction = () => (dispatch: Dispatch<IDispatch>) => {
    return dispatch({
        type: USER_LOGOUT
    })
}