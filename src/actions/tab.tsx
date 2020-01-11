import { Dispatch } from "react";
import { TURN_ON_TAB, TURN_OFF_TAB } from "./types.d";

interface IDispatch {
    type: string
}

export const turnOnTab = () => (dispatch: Dispatch<IDispatch>) => {
    return dispatch({
        type: TURN_ON_TAB
    })
}

export const turnOffTab = () => (dispatch: Dispatch<IDispatch>) => {
    return dispatch({
        type: TURN_OFF_TAB
    })
}