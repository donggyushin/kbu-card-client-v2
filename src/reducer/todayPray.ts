import { ReducerTodayPrayType } from "../types/index.d";
import { GET_TODAY_PRAY } from "../actions/types.d";

interface ActionType {
    type: string
    todayPray: ReducerTodayPrayType
}

const initialState: ReducerTodayPrayType = {
    _id: "",
    year: 0,
    month: 0,
    day: 0,
    writer: {
        _id: "",
        name: "",
        email: "",
        phone: ""
    },
    todayPrayContent: [],
    studentPray: [],
    ads: []
}

export default function (state = initialState, action: ActionType) {
    switch (action.type) {
        case GET_TODAY_PRAY:
            return getTodayPray(state, action)
        default:
            return state
    }
}

function getTodayPray(state: ReducerTodayPrayType, action: ActionType): ReducerTodayPrayType {
    const { todayPray } = action
    return {
        ...state,
        ...todayPray
    }
}