import React, { useEffect, useState, Dispatch } from 'react'
import styled from 'styled-components'
import { Calendar } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import { fetchScheduleNonThunkFunction } from '../../../actions/schedule'
import { ReducerSchedulesEventType, ReducerStateType, ReducerScheduleType, ReducerSchedulesOrganizerType, ReducerSchedulesCreatorType, ReducerSchedulesDateType } from '../../../types/index.d'
import { useDispatch, useSelector } from 'react-redux'
import { COLORS } from '../../../consts/colors'
import { SCHEDULE_DETAIL_ON } from '../../../actions/types.d'

const Container = styled.div`
    min-height:83vh;
    width:100%;
`

interface IfetchScheduleNonThunkFunctionDispatch {
    type: string
    kind: string
    summary: string
    items: ReducerSchedulesEventType[]
}

interface IScheduleDetailOnDispatch {
    type: string
    id: string
    summary: string
    start: ReducerSchedulesDateType,
    end?: ReducerSchedulesDateType,
    creator: ReducerSchedulesCreatorType,
    organizer: ReducerSchedulesOrganizerType,
    htmlLink: string
}


const Presenter: React.FC = () => {

    const scheduleDispatch = useDispatch<Dispatch<IfetchScheduleNonThunkFunctionDispatch>>()
    const kbuEventItems = useSelector((state: ReducerStateType) => state.schedule.kbu.items)
    const offDaysEventItems = useSelector((state: ReducerStateType) => state.schedule.offdays.items)
    const scheduleDetailDispatch = useDispatch<Dispatch<IScheduleDetailOnDispatch>>()

    const [oneTime, setOneTime] = useState(0)
    const [calendarRender, setCalendarRender] = useState(0)


    useEffect(() => {

        setCalendarRender(calendarRender + 1)
        if (oneTime === 0) {
            fetchScheduleNonThunkFunction(scheduleDispatch)
            setOneTime(oneTime + 1)
        }
        const calendarEl = document.getElementById("calendar")

        const kbuItems = kbuEventItems.map((item, i) => {
            return {
                id: item.id,
                title: item.summary,
                start: item.start.date,
                end: item.end?.date
            }
        })

        const offDayItems = offDaysEventItems.map((item, i) => {
            return {
                id: item.id,
                title: item.summary,
                start: item.start.date,
                end: item.end?.date
            }
        })

        if (calendarEl) {
            const calendar = new Calendar(calendarEl, {
                plugins: [dayGridPlugin, interactionPlugin],
                eventLimit: true,
                views: {
                    dayGrid: {
                        eventLimit: 4
                    }
                },
                eventSources: [
                    // kbu event source
                    {
                        events: kbuItems,
                        color: COLORS.seaColor,
                        textColor: 'white',
                    },
                    // offdays event source
                    {
                        events: offDayItems,
                        color: COLORS.lightYellow,
                        textColor: 'white'
                    }
                ],
                eventClick

            })
            if (calendarRender === 2) {
                calendar.render()
            }
        }
    }, [
        kbuEventItems,
        offDaysEventItems
    ])

    function eventClick(info: any) {
        const eventId = info.event.id
        const kbuEvent = findOneKbuEvent(eventId)
        const offDayEvent = findOneOffDayEvent(eventId)

        if (kbuEvent) {
            const event = kbuEvent

            const { id, summary, start, end, creator, organizer, htmlLink } = event
            scheduleDetailDispatch({
                type: SCHEDULE_DETAIL_ON,
                id,
                summary,
                start,
                end,
                creator,
                organizer,
                htmlLink
            })

        } else if (offDayEvent) {
            const event = offDayEvent

            const { id, summary, start, end, creator, organizer, htmlLink } = event
            scheduleDetailDispatch({
                type: SCHEDULE_DETAIL_ON,
                id,
                summary,
                start,
                end,
                creator,
                organizer,
                htmlLink
            })
        }






    }

    function findOneKbuEvent(id: string): ReducerSchedulesEventType {
        const event = kbuEventItems.filter(kbuEvent => kbuEvent.id === id)[0]
        return event
    }

    function findOneOffDayEvent(id: string): ReducerSchedulesEventType {
        const event = offDaysEventItems.filter(offDayEvent => offDayEvent.id === id)[0]
        return event
    }


    return <Container id="calendar">

    </Container>
}

export default Presenter