import { FETCH_LECTURE_CODE } from "../actions/types.d"

interface ActionType {
    type: string
    lectureCode: any
}

const initialState: any = {}

export default function (state = initialState, action: ActionType) {
    switch (action.type) {
        case FETCH_LECTURE_CODE:
            return fetchLectureCode(state, action)
        default:
            return state
    }
}

function fetchLectureCode(state: any, action: ActionType) {
    return {
        ...state,
        ...action.lectureCode
    }
}