import { ReducerMCUType } from "../types/index.d";

interface ActionType {
    type: string
}

const initialState: ReducerMCUType = {
    loading: true,
    expanded: false,
    img: "",
    hasQrcode: false
}

export default function (state: ReducerMCUType = initialState, action: ActionType) {
    switch (action.type) {

        default:
            return state;
    }
}