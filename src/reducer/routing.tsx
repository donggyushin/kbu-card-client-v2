import { ReducerRoutingType } from '../types/index.d'
import { ROUTING_ON, ROUTING_OFF } from '../actions/types.d'

interface ActionType {
    type: string
    to: string
}

const initialState: ReducerRoutingType = {
    route: false,
    to: ""
}

export default function (state: ReducerRoutingType = initialState, action: ActionType) {
    switch (action.type) {
        case ROUTING_ON:
            return redirecting(state, action)
        case ROUTING_OFF:
            return cancelRedirectingMode(state, action)
        default:
            return state
    }
}

function cancelRedirectingMode(state: ReducerRoutingType, action: ActionType): ReducerRoutingType {
    return {
        ...state,
        route: false,
        to: ""
    }
}

function redirecting(state: ReducerRoutingType, action: ActionType): ReducerRoutingType {
    const { to } = action
    return {
        ...state,
        to,
        route: true
    }
}