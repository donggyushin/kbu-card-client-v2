import { ReducerNoticeType, ReducerNoticeDataType } from '../types/index.d'
import { GET_NOTICES } from '../actions/types.d'

interface ActionType {
    type: string
    datas: ReducerNoticeDataType[]
}

const initialState: ReducerNoticeType = {
    datas: []
}

export default function (state = initialState, action: ActionType) {
    switch (action.type) {
        case GET_NOTICES:
            return getNotices(state, action)

        default:
            return state
    }
}

function getNotices(state: ReducerNoticeType, action: ActionType): ReducerNoticeType {
    return {
        ...state,
        datas: action.datas
    }
}