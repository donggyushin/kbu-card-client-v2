import { ReducerNoticeType, ReducerNoticeDataType } from '../types/index.d'
import { GET_NOTICES, APPEND_NEW_NOTICES } from '../actions/types.d'

interface ActionType {
    type: string
    datas: ReducerNoticeDataType[]
    minId: number
}

const initialState: ReducerNoticeType = {
    datas: [],
    minId: 0
}

export default function (state = initialState, action: ActionType) {
    switch (action.type) {
        case GET_NOTICES:
            return getNotices(state, action)
        case APPEND_NEW_NOTICES:
            return appendNewNotices(state, action)
        default:
            return state
    }
}

function appendNewNotices(state: ReducerNoticeType, action: ActionType): ReducerNoticeType {
    const { datas, minId } = action
    return {
        ...state,
        datas: [
            ...state.datas,
            ...datas
        ],
        minId
    }
}

function getNotices(state: ReducerNoticeType, action: ActionType): ReducerNoticeType {

    const { datas, minId } = action

    return {
        ...state,
        datas,
        minId
    }
}