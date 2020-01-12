export interface ReducerThemeType {
    lightTheme: boolean
}

export interface ReducerModalType {
    open: boolean
    title: string
    text: string
    callBack: () => void
}

export interface ReducerNavigationTabType {
    visiable: boolean
}

export interface ReducerUserType {
    isLoggedIn: boolean
    email: string
    name: string
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
}