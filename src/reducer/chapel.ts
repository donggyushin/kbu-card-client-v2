import { ReducerChapelType, ReducerChapelOneDataType } from "../types/index.d";
import { CHAPEL_GET, SORING_CHAPEL, CHAPEL_UPDATE_CURRENT } from "../actions/types.d";

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
    attendances: ReducerChapelOneDataType[]
    lates: ReducerChapelOneDataType[]
    etcs: ReducerChapelOneDataType[]
    absences: ReducerChapelOneDataType[]
    current: string
    totalChapelDatas: ReducerChapelOneDataType[]
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
    selectable: [],
    current: "",
    attendances: [],
    etcs: [],
    lates: [],
    absences: [],
    chapelDatas: []
}

export default function (state: ReducerChapelType = initialState, action: ActionType) {
    switch (action.type) {

        case CHAPEL_GET:
            return getChapel(state, action)
        case SORING_CHAPEL:
            return sortingChapels(state, action)
        case CHAPEL_UPDATE_CURRENT:
            return updateCurrent(state, action)
        default:
            return state
    }
}

function updateCurrent(state: ReducerChapelType, action: ActionType): ReducerChapelType {
    const { current } = action
    return {
        ...state,
        current
    }
}

function sortingChapels(state: ReducerChapelType, action: ActionType): ReducerChapelType {
    const { etcs, lates, absences, attendances, totalChapelDatas } = action;
    return {
        ...state,
        etcs,
        lates,
        absences,
        attendances,
        chapelDatas: totalChapelDatas
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