import { ReducerLocationType } from "../types/index.d";
import { UPDATE_CURRENT_LOCATION } from "../actions/types.d";

interface ActionType {
    type: string
    current: string
}

const initialState: ReducerLocationType = {
    current: ""
}

export default function (state: ReducerLocationType = initialState, action: ActionType) {
    switch (action.type) {
        case UPDATE_CURRENT_LOCATION:
            return updateCurrentLocation(state, action)
        default:
            return state;
    }
}

function updateCurrentLocation(state: ReducerLocationType, action: ActionType): ReducerLocationType {
    const { current } = action
    return {
        ...state,
        current
    }
}