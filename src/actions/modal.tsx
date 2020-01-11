import { Dispatch } from "react";
import { TURN_ON_ALERT } from "./types.d";

interface IDispatch {
    type: string
    text: string
    title: string,
    callBack?: () => void
}

export const turnOnAlert = (title: string, text: string, callBack?: () => void) => (dispatch: Dispatch<IDispatch>) => {
    dispatch({
        type: TURN_ON_ALERT,
        title,
        text,
        callBack
    })
}