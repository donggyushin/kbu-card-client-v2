import { ReducerAttendanceType, ReducerAttendanceSummaryType, ReducerAttendanceExtraType, ReducerAttendanceDetailType } from "../types/index.d";
import { ATTENDANCE_ON, ATTENDANCE_OFF, FETCH_ATTENDANCE, SORT_ATTENDANCES, ATTENDANCE_DETAIL_LIST_TABLE_ON, ATTENDANCE_DETAIL_LIST_TABLE_OFF, CLICK_SPECIFIC_ATTENDANCE_INFO } from "../actions/types.d";
import { ATTENDANCE, ABSENCE, LATE, ETC } from "../consts/attendancesTypes";

interface ActionType {
    type: string
    lectureCode: string
    color: string
    summary: ReducerAttendanceSummaryType
    thead: string[]
    tbody: string[][]
    extra: ReducerAttendanceExtraType
    attendances: ReducerAttendanceDetailType[]
    absences: ReducerAttendanceDetailType[]
    lates: ReducerAttendanceDetailType[]
    etcs: ReducerAttendanceDetailType[]
    specificAttendance: string
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
    color: "",
    attendances: [],
    absences: [],
    lates: [],
    etcs: [],
    detailListTable: false,
    specificAttendanceInfo: ""
}

export default function (state: ReducerAttendanceType = initialState, action: ActionType) {
    switch (action.type) {

        case ATTENDANCE_ON:
            return turnOnAttendance(state, action)
        case ATTENDANCE_OFF:
            return turnDownAttendance(state, action)
        case FETCH_ATTENDANCE:
            return fetchAttendance(state, action)
        case SORT_ATTENDANCES:
            return sortAttendances(state, action)
        case ATTENDANCE_DETAIL_LIST_TABLE_ON:
            return attendanceDetailListTableViewOn(state, action)
        case ATTENDANCE_DETAIL_LIST_TABLE_OFF:
            return attendanceDetailListTableViewOff(state, action)
        case CLICK_SPECIFIC_ATTENDANCE_INFO:
            return clickSpecificAttendanceInfo(state, action)
        default:
            return state
    }
}

function clickSpecificAttendanceInfo(state: ReducerAttendanceType, action: ActionType): ReducerAttendanceType {
    const { specificAttendance } = action

    let type: string = ""
    switch (specificAttendance) {
        case "출석":
            type = ATTENDANCE
            break;
        case "결석":
            type = ABSENCE
            break;
        case "지각":
            type = LATE
            break;
        case "기타":
            type = ETC
            break;
        default:
            break;
    }

    return {
        ...state,
        specificAttendanceInfo: type,
        detailListTable: true
    }
}


function attendanceDetailListTableViewOn(state: ReducerAttendanceType, action: ActionType): ReducerAttendanceType {
    return {
        ...state,
        detailListTable: true
    }
}

function attendanceDetailListTableViewOff(state: ReducerAttendanceType, action: ActionType): ReducerAttendanceType {
    return {
        ...state,
        detailListTable: false
    }
}

function sortAttendances(state: ReducerAttendanceType, action: ActionType): ReducerAttendanceType {
    const {
        attendances,
        etcs,
        absences,
        lates
    } = action
    return {
        ...state,
        attendances,
        etcs,
        absences,
        lates
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
        color: "",
        attendances: [],
        absences: [],
        lates: [],
        etcs: [],
        detailListTable: false,
        specificAttendanceInfo: ""
    }
}