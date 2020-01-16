export interface ReducerThemeType {
    lightTheme: boolean
}

export interface ReducerLoadingType {
    loading: boolean
}

export interface ReducerModalType {
    open: boolean
    title: string
    text: string
    callBack: (param?: any) => void
}

export interface ReducerLocationType {
    current: string
}

export interface ReducerNavigationTabType {
    visiable: boolean
}

export interface ReducerUserType {
    isLoggedIn: boolean
    email: string
    name: string
    profile: string
    sid: string
    cid: string
    exp: number
    major: string
}

export interface ReducerRoutingType {
    route: boolean
    to: string
}

export interface IChapelSummary {
    daysOfWeek: number
    duty: number
    attendance: number
    late: number
    sure: number
}


export interface ReducerChapelType {
    summary: IChapelSummary
    thead: string[]
    tbody: string[][]
    selected: string
    selectable: string[]
}

export interface ReducerMileageType {
    balance: number
}

export interface ReducerMobiledStudentCardType {
    visible: boolean
}

export interface ReducerTimeTableType {
    thead: string[]
    tbody: string[][][]
    startTime: number
    endTime: number
}

export interface ReducerAttendanceSummaryType {
    attendace: number
    absence: number
    late: number
    etc: number
}

export interface ReducerAttendanceExtraType {
    lectureCode: string
    classCode: string
    className: string
    studentName: string
}

export interface ReducerAttendanceType {
    visible: boolean
    loading: boolean
    thead: string[]
    tbody: string[][]
    summary: ReducerAttendanceSummaryType
    extra: ReducerAttendanceExtraType
    lectureCode: string
    color: string
}

export interface ReducerStateType {
    user: ReducerUserType
    theme: ReducerThemeType
    navigationTab: ReducerNavigationTabType
    modal: ReducerModalType
    routing: ReducerRoutingType
    location: ReducerLocationType
    loading: ReducerLoadingType
    chapel: ReducerChapelType
    mobildStudentCard: ReducerMobiledStudentCardType
    mileage: ReducerMileageType
    timeTable: ReducerTimeTableType
    colorSet: any
    lectureCode: any
    attendance: ReducerAttendanceType
}