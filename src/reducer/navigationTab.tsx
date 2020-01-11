import { ReducerNavigationTabType } from "../types/index.d";
import { TURN_ON_TAB, TURN_OFF_TAB } from "../actions/types.d";

interface ActionType {
    type: string
}

const initialState: ReducerNavigationTabType = {
    visiable: false
}

export default function (state: ReducerNavigationTabType = initialState, action: ActionType) {
    switch (action.type) {

        case TURN_ON_TAB:
            return turnOnTab(state, action)

        case TURN_OFF_TAB:
            return turnOffTab(state, action)

        default:
            return state
    }
}

function turnOnTab(state: ReducerNavigationTabType, action: ActionType): ReducerNavigationTabType {
    return {
        ...state,
        visiable: true
    }
}

function turnOffTab(state: ReducerNavigationTabType, action: ActionType): ReducerNavigationTabType {
    return {
        ...state,
        visiable: false
    }
}