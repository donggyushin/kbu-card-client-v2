export interface ReducerThemeType {
    lightTheme: boolean
}

export interface ReducerUserType {
    isLoggedIn: boolean
    email: string
    name: string
}

export interface ReducerStateType {
    user: ReducerUserType
    theme: ReducerThemeType
}