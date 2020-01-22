import { ReducerMCUType } from "../types/index.d";
import { FETCH_MCU, MCU_LOADING, MCU_OFF } from "../actions/types.d";

interface ActionType {
    type: string
    img: string
    token: string
    iat: number
    exp: number
}

const initialState: ReducerMCUType = {
    loading: false,
    expanded: false,
    img: "",
    hasQrcode: false,
    token: "",
    iat: 0,
    exp: 0
}

export default function (state: ReducerMCUType = initialState, action: ActionType) {
    switch (action.type) {
        case FETCH_MCU:
            return fetchMcu(state, action)
        case MCU_LOADING:
            return loading(state, action)
        case MCU_OFF:
            return shutOff(state, action)
        default:
            return state;
    }
}

function shutOff(state: ReducerMCUType, action: ActionType): ReducerMCUType {
    return {
        loading: false,
        expanded: false,
        img: "",
        hasQrcode: false,
        token: "",
        iat: 0,
        exp: 0
    }

}

function loading(state: ReducerMCUType, action: ActionType): ReducerMCUType {
    return {
        ...state,
        loading: true
    }

}

function fetchMcu(state: ReducerMCUType, action: ActionType): ReducerMCUType {
    const {
        img,
        token,
        iat,
        exp
    } = action
    return {
        ...state,
        loading: false,
        img,
        token,
        iat,
        exp,
        hasQrcode: true
    }
}