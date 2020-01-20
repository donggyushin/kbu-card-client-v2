import { ReducerSchedulesTypes, ReducerSchedulesEventType } from "../types/index.d";
import { FETCH_KBU_SCHEDULE, FETCH_OFFDAYS_SCHEDULE } from "../actions/types.d";

interface ActionType {
    type: string
    kind: string
    summary: string
    items: ReducerSchedulesEventType[]
}


// eventSources[0] 은 우리학교 일정이 될 것임
const initialState: ReducerSchedulesTypes = {
    kbu: {
        kind: "",
        summary: "",
        items: []
    },
    offdays: {
        kind: "",
        summary: "",
        items: []
    }
}

export default function (state: ReducerSchedulesTypes = initialState, action: ActionType) {
    switch (action.type) {
        case FETCH_KBU_SCHEDULE:
            return fetchKbuSchedule(state, action)
        case FETCH_OFFDAYS_SCHEDULE:
            return fetchOffdaysSchedule(state, action)
        default:
            return state
    }
}

function fetchOffdaysSchedule(state: ReducerSchedulesTypes, action: ActionType): ReducerSchedulesTypes {
    const { kind, summary, items } = action;
    return {
        ...state,
        offdays: {
            kind,
            summary,
            items
        }
    }

}

function fetchKbuSchedule(state: ReducerSchedulesTypes, action: ActionType): ReducerSchedulesTypes {
    const { kind, summary, items } = action
    return {
        ...state,
        kbu: {
            kind,
            summary,
            items
        }
    }
}
