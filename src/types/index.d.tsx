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
    callBack: () => void
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
}

export interface ReducerRoutingType {
    route: boolean
    to: string
}

export interface ReducerStateType {
    user: ReducerUserType
    theme: ReducerThemeType
    navigationTab: ReducerNavigationTabType
    modal: ReducerModalType
    routing: ReducerRoutingType
    location: ReducerLocationType
    loading: ReducerLoadingType
}