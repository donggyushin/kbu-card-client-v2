import { ReducerModalType } from '../types/index.d'
import { TURN_ON_ALERT, TURN_DOWN_ALERT } from '../actions/types.d'


interface ActionType {
    type: string
    title: string
    text: string
    callBack: () => void
}

const initialState: ReducerModalType = {
    open: false,
    title: "",
    text: "",
    callBack: () => { }
}

export default function (state: ReducerModalType = initialState, action: ActionType) {
    switch (action.type) {
        case TURN_ON_ALERT:
            return turnOnModal(state, action)
        case TURN_DOWN_ALERT:
            return turnDownModal(state, action)
        default:
            return state
    }
}

function turnDownModal(state: ReducerModalType, action: ActionType): ReducerModalType {
    return {
        ...state,
        title: "",
        text: "",
        open: false,
        callBack: () => { }
    }
}

function turnOnModal(state: ReducerModalType, action: ActionType): ReducerModalType {
    const {
        title,
        text,
        callBack
    } = action;

    return {
        ...state,
        title,
        text,
        open: true,
        callBack
    }

}