import { ReducerMileageType } from "../types/index.d";
import { MILEAGE_GET_BALANCE } from "../actions/types.d";

interface ActionType {
    type: string
    balance: number
}

const initialState: ReducerMileageType = {
    balance: 0
}

export default function (state: ReducerMileageType = initialState, action: ActionType) {
    switch (action.type) {
        case MILEAGE_GET_BALANCE:
            return mileageGetBalance(state, action)
        default:
            return state
    }
}

function mileageGetBalance(state: ReducerMileageType, action: ActionType): ReducerMileageType {
    const { balance } = action
    return {
        ...state,
        balance
    }
}