import { ReducerUserType } from "../types/index.d";

interface ActionType {
    type: string
    user: ReducerUserType
    token: string
}

const initialState: ReducerUserType = {
    isLoggedIn: localStorage.getItem('kbucard') ? true : false,
    email: "",
    name: ""
}

export default function (state: ReducerUserType = initialState, action: ActionType) {
    switch (action.type) {

        default:
            return state
    }
}