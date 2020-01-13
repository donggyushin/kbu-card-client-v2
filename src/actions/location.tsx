import { Dispatch } from "react";
import { UPDATE_CURRENT_LOCATION } from "./types.d";

interface IDispatch {
    type: string
    current: string
}

export const updateCurrentLocationRedux = (current: string) => (dispatch: Dispatch<IDispatch>) => {
    dispatch({
        type: UPDATE_CURRENT_LOCATION,
        current
    })
}