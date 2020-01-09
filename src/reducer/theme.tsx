import { ReducerThemeType } from "../types/index.d";
import { TOGGLE_THEME } from "../actions/types.d";

interface ActionType {
    type: string
}

const initialState: ReducerThemeType = {
    lightTheme: localStorage.getItem('dark') ? false : true
}

export default function (state: ReducerThemeType = initialState, action: ActionType) {
    switch (action.type) {
        case TOGGLE_THEME:
            return toggleTheme(state, action)
        default:
            return state
    }
}

const toggleTheme = (state: ReducerThemeType, action: ActionType): ReducerThemeType => {
    if (state.lightTheme) {
        localStorage.setItem('dark', 'dark')
    } else {
        localStorage.removeItem('dark')
    }
    return {
        ...state,
        lightTheme: !state.lightTheme
    }
}