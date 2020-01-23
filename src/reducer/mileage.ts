import { ReducerMileageType, ReducerMileageDataType } from "../types/index.d";
import { MILEAGE_GET_BALANCE, GET_MILEAGE, PUT_MILEAGE_CURRENT } from "../actions/types.d";

interface ActionType {
    type: string
    balance: number
    thead: string[]
    tbody: string[][]
    datas: ReducerMileageDataType[]
    inDatas: ReducerMileageDataType[]
    outDatas: ReducerMileageDataType[]
    newCurrent: "" | "IN" | "OUT"
}

const initialState: ReducerMileageType = {
    balance: 0,
    thead: [],
    tbody: [],
    datas: [],
    inDatas: [],
    outDatas: [],
    current: ""
}

export default function (state: ReducerMileageType = initialState, action: ActionType) {
    switch (action.type) {
        case MILEAGE_GET_BALANCE:
            return mileageGetBalance(state, action)
        case GET_MILEAGE:
            return getMileage(state, action)
        case PUT_MILEAGE_CURRENT:
            return putMileageCurrent(state, action)
        default:
            return state
    }
}

function putMileageCurrent(state: ReducerMileageType, action: ActionType): ReducerMileageType {
    const { newCurrent } = action
    return {
        ...state,
        current: newCurrent
    }
}

function getMileage(state: ReducerMileageType, action: ActionType): ReducerMileageType {
    const {
        datas,
        tbody,
        thead,
        inDatas,
        outDatas
    } = action
    return {
        ...state,
        datas,
        tbody,
        thead,
        inDatas,
        outDatas
    }
}

function mileageGetBalance(state: ReducerMileageType, action: ActionType): ReducerMileageType {
    const { balance } = action
    return {
        ...state,
        balance
    }
}