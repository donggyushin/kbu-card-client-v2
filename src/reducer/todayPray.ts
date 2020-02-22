import { ReducerTodayPrayType } from "../types/index.d";
import { GET_TODAY_PRAY, INIT_TODAY_PRAY } from "../actions/types.d";

interface ActionType {
    type: string
    todayPray: ReducerTodayPrayType
    studentPray: {
        name: string
        grade: number
        prays: string[]
    }[]
    ads: string[]
    todayPrayContent: string[]
    date: string
}

const initialState: ReducerTodayPrayType = {
    _id: "",
    year: 0,
    month: 0,
    day: 0,
    todayPrayContent: [],
    studentPray: [],
    ads: []
}

export default function (state = initialState, action: ActionType) {
    switch (action.type) {
        case GET_TODAY_PRAY:
            return getTodayPray(state, action)
        case INIT_TODAY_PRAY:
            return init(state, action)
        default:
            return state
    }
}

function init(state: ReducerTodayPrayType, action: ActionType): ReducerTodayPrayType {
    return {
        _id: "",
        year: 0,
        month: 0,
        day: 0,
        todayPrayContent: [],
        studentPray: [],
        ads: []
    }
}

function getTodayPray(state: ReducerTodayPrayType, action: ActionType): ReducerTodayPrayType {
    const { studentPray,
        ads,
        todayPrayContent,
        date } = action

    const dateObject = new Date(date)

    return {
        ...state,
        ads,
        studentPray,
        todayPrayContent,
        year: dateObject.getFullYear(),
        month: dateObject.getMonth(),
        day: dateObject.getDate()
    }
}