import { ReducerCafeteriaType } from '../types/index.d'
import { GET_MENU } from '../actions/types.d'

interface ActionType {
    type: string
    menu: ReducerCafeteriaType
}

const initialState: ReducerCafeteriaType = {
    _id: "",
    year: 0,
    month: 0,
    day: 0,
    lunch: {
        _id: "",
        menus: []
    },
    dinner: {
        _id: "",
        menus: []
    },
    fix: {
        _id: "",
        menus: []
    },
    daily: {
        _id: "",
        menus: []
    }
}

export default function (state = initialState, action: ActionType) {
    switch (action.type) {
        case GET_MENU:
            return getMenu(state, action)
        default:
            return state
    }
}

function getMenu(state: ReducerCafeteriaType, action: ActionType): ReducerCafeteriaType {
    const { menu } = action
    return {
        ...menu
    }
}