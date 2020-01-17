import { ReducerLectureType, ReducerLectureTypeSelect } from "../types/index.d";
import { FETCH_LECTURES, SELECT_LECTURE } from "../actions/types.d";

interface ActionType {
    type: string
    tbody: string[][]
    thead: string[]
    select: ReducerLectureTypeSelect
    selectedCourse: string[]
}

const initialState: ReducerLectureType = {
    tbody: [],
    thead: [],
    select: {
        selectable: [],
        selected: ""
    },
    selectedCourse: []
}

export default function (state = initialState, action: ActionType) {
    switch (action.type) {
        case FETCH_LECTURES:
            return fetchLectures(state, action)
        case SELECT_LECTURE:
            return selectLecture(state, action)
        default:
            return state
    }
}

function selectLecture(state: ReducerLectureType, action: ActionType): ReducerLectureType {
    const { selectedCourse } = action
    return {
        ...state,
        selectedCourse
    }
}


function fetchLectures(state: ReducerLectureType, action: ActionType): ReducerLectureType {
    const { tbody, thead, select } = action
    return {
        ...state,
        tbody,
        thead,
        select
    }
}