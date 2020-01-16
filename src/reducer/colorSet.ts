import { SET_COLOR_SET } from "../actions/types.d"

interface ActionType {
    type: string
    colorSet: any
}

const initialState: any = {

}

export default function (state = initialState, action: ActionType) {
    switch (action.type) {

        case SET_COLOR_SET:
            return setColorSet(state, action)

        default:
            return state
    }
}

function setColorSet(state: any, action: ActionType): any {

    return {
        ...state,
        ...action.colorSet
    }
}