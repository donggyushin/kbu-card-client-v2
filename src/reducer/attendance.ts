import { ReducerAttendanceType, ReducerAttendanceSummaryType, ReducerAttendanceExtraType } from "../types/index.d";
import { ATTENDANCE_ON, ATTENDANCE_OFF, FETCH_ATTENDANCE } from "../actions/types.d";

interface ActionType {
    type: string
    lectureCode: string
    color: string
    summary: ReducerAttendanceSummaryType
    thead: string[]
    tbody: string[][]
    extra: ReducerAttendanceExtraType
}

const initialState: ReducerAttendanceType = {
    loading: true,
    visible: false,
    tbody: [],
    thead: [],
    summary: {
        attendace: 0,
        absence: 0,
        etc: 0,
        late: 0
    },
    extra: {
        lectureCode: "",
        classCode: "",
        className: "",
        studentName: ""
    },
    lectureCode: "",
    color: ""
}

export default function (state: ReducerAttendanceType = initialState, action: ActionType) {
    switch (action.type) {

        case ATTENDANCE_ON:
            return turnOnAttendance(state, action)
        case ATTENDANCE_OFF:
            return turnDownAttendance(state, action)
        case FETCH_ATTENDANCE:
            return fetchAttendance(state, action)

        default:
            return state
    }
}

function fetchAttendance(state: ReducerAttendanceType, action: ActionType): ReducerAttendanceType {
    const {
        summary,
        thead,
        tbody,
        extra
    } = action
    return {
        ...state,
        summary,
        tbody,
        thead,
        extra,
        loading: false
    }
}

function turnOnAttendance(state: ReducerAttendanceType, action: ActionType): ReducerAttendanceType {
    const { lectureCode, color } = action
    return {
        ...state,
        visible: true,
        lectureCode,
        color
    }
}

function turnDownAttendance(state: ReducerAttendanceType, action: ActionType): ReducerAttendanceType {
    return {
        loading: true,
        visible: false,
        tbody: [],
        thead: [],
        summary: {
            attendace: 0,
            absence: 0,
            etc: 0,
            late: 0
        },
        extra: {
            lectureCode: "",
            classCode: "",
            className: "",
            studentName: ""
        },
        lectureCode: "",
        color: ""
    }
}