import axios from 'axios'
import GoogleCalendarEndPointObject from '../consts/googleCalendarEndpoint'
import { ReducerSchedulesEventType } from '../types/index.d'
import { Dispatch } from 'react'
import { FETCH_KBU_SCHEDULE, FETCH_OFFDAYS_SCHEDULE } from './types.d'

interface IfetchScheduleNonThunkFunctionData {
    kind: string
    summary: string
    items: ReducerSchedulesEventType[]
}

interface IfetchScheduleNonThunkFunctionDispatch {
    type: string
    kind: string
    summary: string
    items: ReducerSchedulesEventType[]
}

export const fetchScheduleNonThunkFunction = (dispatch: Dispatch<IfetchScheduleNonThunkFunctionDispatch>) => {
    axios.get(GoogleCalendarEndPointObject.kbu2020Schedule)
        .then(res => {

            if (res.status === 200) {
                const { kind, summary, items }: IfetchScheduleNonThunkFunctionData = res.data
                dispatch({
                    type: FETCH_KBU_SCHEDULE,
                    kind,
                    summary,
                    items
                })
            }
            fetchOffDaysSchedulesNonThunkFunction(dispatch)
        })
        .catch(err => {
            console.log('error occured at actions/schedule.ts fetchScheduleNonThunkFunction')
            console.error(err)
        })
}

export const fetchOffDaysSchedulesNonThunkFunction = (dispatch: Dispatch<IfetchScheduleNonThunkFunctionDispatch>) => {
    axios.get(GoogleCalendarEndPointObject.offDays)
        .then(res => {
            if (res.status === 200) {
                const { kind, summary, items }: IfetchScheduleNonThunkFunctionData = res.data
                dispatch({
                    type: FETCH_OFFDAYS_SCHEDULE,
                    kind,
                    summary,
                    items
                })
            }
        })
        .catch(err => {
            console.log('error occured at actions/schedule.ts fetchOffDaysSchedulesNonThunkFunction')
            console.error(err)
        })
}