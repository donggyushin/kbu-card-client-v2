import { ReducerTimeTableType } from '../types/index.d'
import { TIME_TABLE_FETCH } from '../actions/types.d'

export interface ActionType {
    type: string
    tbody: string[][][]
    thead: string[]
    startTime: number
    endTime: number
}

const initialState: ReducerTimeTableType = {
    tbody: [],
    thead: [],
    startTime: 0,
    endTime: 0
}

export default function (state: ReducerTimeTableType = initialState, action: ActionType) {
    switch (action.type) {
        case TIME_TABLE_FETCH:
            return fetchTimeTable(state, action)
        default:
            return state
    }
}

function fetchTimeTable(state: ReducerTimeTableType, action: ActionType): ReducerTimeTableType {
    const { thead, tbody, startTime, endTime } = action
    return {
        ...state,
        thead,
        tbody,
        startTime,
        endTime
    }
}