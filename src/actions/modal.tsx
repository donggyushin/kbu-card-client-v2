import { Dispatch } from "react";
import { TURN_ON_ALERT } from "./types.d";

interface IDispatch {
    type: string
    text: string
    title: string,
    callBack?: (param: any) => void
}

export const turnOnAlertNonThunkFunction = (title: string, text: string, dispatch: Dispatch<IDispatch>, callBack?: (param: any) => void) => {
    dispatch({
        type: TURN_ON_ALERT,
        title,
        text,
        callBack
    })
}

export const turnOnAlert = (title: string, text: string, callBack?: (param: any) => void) => (dispatch: Dispatch<IDispatch>) => {
    dispatch({
        type: TURN_ON_ALERT,
        title,
        text,
        callBack
    })
}