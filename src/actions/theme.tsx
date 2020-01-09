import { Dispatch } from "react";
import { TOGGLE_THEME } from "./types.d";

interface toggleThemeDispatchType {
    type: string
}

export const toggleTheme = () => (dispatch: Dispatch<toggleThemeDispatchType>): void => {
    return dispatch({
        type: TOGGLE_THEME
    })
}