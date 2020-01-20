import { ReducerScheduleDetailTypes, ReducerSchedulesDateType, ReducerSchedulesCreatorType, ReducerSchedulesOrganizerType } from '../types/index.d'
import { SCHEDULE_DETAIL_OFF, SCHEDULE_DETAIL_ON } from '../actions/types.d'

interface ActionType {
    type: string
    id: string
    summary: string
    start: ReducerSchedulesDateType,
    end?: ReducerSchedulesDateType,
    creator: ReducerSchedulesCreatorType,
    organizer: ReducerSchedulesOrganizerType
    htmlLink: string
}

const initialState: ReducerScheduleDetailTypes = {
    visible: false,
    id: "",
    summary: "",
    start: {
        date: ""
    },
    end: {
        date: ""
    },
    creator: {
        email: "",
        displayName: ""
    },
    organizer: {
        email: "",
        displayName: ""
    },
    htmlLink: ""
}

export default function (state = initialState, action: ActionType) {
    switch (action.type) {
        case SCHEDULE_DETAIL_ON:
            return turnOnScheduleDetail(state, action)
        case SCHEDULE_DETAIL_OFF:
            return turnOffScheduleDetail(state, action)
        default:
            return state
    }
}

function turnOffScheduleDetail(state: ReducerScheduleDetailTypes, action: ActionType): ReducerScheduleDetailTypes {
    return {
        visible: false,
        id: "",
        summary: "",
        start: {
            date: ""
        },
        end: {
            date: ""
        },
        creator: {
            email: "",
            displayName: ""
        },
        organizer: {
            email: "",
            displayName: ""
        },
        htmlLink: ""
    }
}

function turnOnScheduleDetail(state: ReducerScheduleDetailTypes, action: ActionType): ReducerScheduleDetailTypes {
    const {
        id,
        summary,
        start,
        end,
        creator,
        organizer,
        htmlLink
    } = action
    return {
        ...state,
        visible: true,
        id,
        summary,
        start,
        end,
        creator,
        organizer,
        htmlLink
    }
}