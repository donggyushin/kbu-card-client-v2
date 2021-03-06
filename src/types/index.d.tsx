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



export interface ReducerChapelOneDataType {
    year: number
    month: number
    day: number
    date: string
    time: string
    etc: string
    classification: "ATTENDANCE" | "LATE" | "ABSENCE" | ""
}

export interface ReducerChapelGeneralDataType {
    year: number
    month: number
    day: number
    date: string
    time: string
    classification: string
}

export interface ReducerChapelType {
    summary: IChapelSummary
    thead: string[]
    tbody: string[][]
    selected: string
    selectable: string[]
    etcs: ReducerChapelOneDataType[]
    attendances: ReducerChapelOneDataType[]
    lates: ReducerChapelOneDataType[]
    absences: ReducerChapelOneDataType[]
    chapelDatas: ReducerChapelOneDataType[]
    current: "" | "attendance" | "late" | "etc" | "absence"
}

export interface ReducerMileageDataType {
    content: string
    cost: number
    date: string
    classification: "" | "IN" | "OUT"
}

export interface ReducerMileageType {
    balance: number
    thead: string[]
    tbody: string[][]
    datas: ReducerMileageDataType[]
    inDatas: ReducerMileageDataType[]
    outDatas: ReducerMileageDataType[]
    current: "" | "IN" | "OUT"
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

export interface ReducerAttendanceDetailType {
    date: string
    time: string
    classification: 'ATTENDANCE' | 'LATE' | 'ABSENCE' | '' | 'ETC'
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
    attendances: ReducerAttendanceDetailType[]
    absences: ReducerAttendanceDetailType[]
    lates: ReducerAttendanceDetailType[]
    etcs: ReducerAttendanceDetailType[]
    all: ReducerAttendanceDetailType[]
    detailListTable: boolean
    specificAttendanceInfo: string
    current: 'ATTENDANCE' | 'LATE' | 'ABSENCE' | '' | 'ETC'
}

export interface ReducerMCUType {
    loading: boolean
    expanded: boolean
    img: string
    hasQrcode: boolean
    token: string
    iat: number
    exp: number
}

export interface ReducerLectureTypeSelect {
    selected: string
    selectable: string[]
}

export interface ReducerLectureType {
    thead: string[]
    tbody: string[][]
    select: ReducerLectureTypeSelect
    selectedCourse: string[]
}

export interface ReducerSchedulesCreatorType {
    email: string
    displayName: string
}

export interface ReducerSchedulesOrganizerType {
    email: string
    displayName: string
}

export interface ReducerSchedulesDateType {
    date: string
    dateTime?: string
}

export interface ReducerSchedulesEventType {
    id: string
    creator: ReducerSchedulesCreatorType
    organizer: ReducerSchedulesOrganizerType
    summary: string
    start: ReducerSchedulesDateType
    end?: ReducerSchedulesDateType
    htmlLink: string

}

export interface ReducerScheduleType {
    kind: string
    summary: string
    items: ReducerSchedulesEventType[]
}

export interface ReducerSchedulesTypes {
    kbu: ReducerScheduleType
    offdays: ReducerScheduleType
    birthdays: ReducerScheduleType
}

export interface ReducerScheduleDetailTypes {
    visible: boolean
    id: string
    summary: string
    start: ReducerSchedulesDateType
    end?: ReducerSchedulesDateType
    creator: ReducerSchedulesCreatorType
    organizer: ReducerSchedulesOrganizerType
    htmlLink: string
}

export interface ReducerNoticeDataType {
    id: number
    author: string
    title: string
    description: string
    url: string
    tag: string
    created_time_str: string
}

export interface ReducerNoticeType {
    datas: ReducerNoticeDataType[]
    minId: number
}

export interface ReducerCafeteriaMenusType {
    _id: string
    menus: string[]
}

export interface ReducerCafeteriaType {
    _id: string
    year: number
    month: number
    day: number
    lunch: ReducerCafeteriaMenusType
    dinner: ReducerCafeteriaMenusType
    fix: ReducerCafeteriaMenusType
    daily: ReducerCafeteriaMenusType
}

export interface ReducerTodayPrayWriterType {
    _id: string
    email: string
    name: string
    phone: string
}

export interface ReducerTodayPrayStudentPrayType {
    prays: string[]
    name: string
    grade: number
}

export interface ReducerTodayPrayType {
    _id: string
    year: number
    month: number
    day: number
    ads: string[]
    todayPrayContent: string[]
    studentPray: ReducerTodayPrayStudentPrayType[]
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
    mcu: ReducerMCUType
    lecture: ReducerLectureType
    schedule: ReducerSchedulesTypes
    scheduleDetail: ReducerScheduleDetailTypes
    notice: ReducerNoticeType
    cafeteria: ReducerCafeteriaType
    todayPray: ReducerTodayPrayType
    cafeteriaForPage: ReducerCafeteriaType
}