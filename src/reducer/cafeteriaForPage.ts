import { ReducerCafeteriaType } from '../types/index.d'
import { CAFETERIA_FOR_PAGE_FETCH } from '../actions/types.d'

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

export default function (state: ReducerCafeteriaType = initialState, action: ActionType): ReducerCafeteriaType {
    switch (action.type) {
        case CAFETERIA_FOR_PAGE_FETCH:
            return fetchMenu(state, action)

        default:
            return state
    }
}

function fetchMenu(state: ReducerCafeteriaType, action: ActionType): ReducerCafeteriaType {
    const { menu } = action
    return {
        ...state,
        ...menu
    }
}