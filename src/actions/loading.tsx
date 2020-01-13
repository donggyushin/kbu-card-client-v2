import { Dispatch } from "react";
import { LOADING_ON } from "./types.d";

interface IDispatch {
    type: string
}

export const loadingOn = () => (dispatch: Dispatch<IDispatch>) => {
    dispatch({
        type: LOADING_ON
    })
}