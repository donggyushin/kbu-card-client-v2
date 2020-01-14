import { ReducerChapelType } from "../types/index.d";
import { CHAPEL_GET } from "../actions/types.d";

interface ActionType {
    type: string
    daysOfWeek: number
    duty: number
    late: number
    attendance: number
    sure: number
    tbody: string[][]
    thead: string[]
    selected: string
    selectable: string[]
}

const initialState: ReducerChapelType = {
    summary: {
        daysOfWeek: 0,
        duty: 0,
        late: 0,
        attendance: 0,
        sure: 0
    },
    tbody: [],
    thead: [],
    selected: "",
    selectable: []
}

export default function (state: ReducerChapelType = initialState, action: ActionType) {
    switch (action.type) {

        case CHAPEL_GET:
            return getChapel(state, action)

        default:
            return state
    }
}

function getChapel(state: ReducerChapelType, action: ActionType): ReducerChapelType {
    const {
        daysOfWeek,
        duty,
        late,
        attendance,
        sure,
        selectable,
        selected,
        thead,
        tbody
    } = action



    return {
        ...state,
        summary: {
            daysOfWeek,
            duty,
            late,
            attendance,
            sure
        },
        selected,
        selectable,
        tbody,
        thead
    }
}