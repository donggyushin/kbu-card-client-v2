import { ReducerMobiledStudentCardType } from "../types/index.d";
import { MOBILE_STUDENT_CARD_ON, MOBILE_STUDENT_CARD_OFF } from "../actions/types.d";

interface ActionType {
    type: string
}

const initialState: ReducerMobiledStudentCardType = {
    visible: false
}

export default function (state: ReducerMobiledStudentCardType = initialState, action: ActionType) {
    switch (action.type) {

        case MOBILE_STUDENT_CARD_ON:
            return mobileStudentCardOn(state, action);

        case MOBILE_STUDENT_CARD_OFF:
            return mobileStudentCardOff(state, action)

        default:
            return state
    }
}

function mobileStudentCardOn(state: ReducerMobiledStudentCardType, action: ActionType): ReducerMobiledStudentCardType {
    return {
        ...state,
        visible: true
    }
}

function mobileStudentCardOff(state: ReducerMobiledStudentCardType, action: ActionType): ReducerMobiledStudentCardType {
    return {
        ...state,
        visible: false
    }
}