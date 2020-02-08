import 'date-fns';
import React, { Dispatch, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import {
    IFetchMenuDispatch,
    fetchMenu
} from '../../../../actions/cafeteriaForPage'
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import { COLORS } from '../../../../consts/colors';

const DateDiv = styled.div`
    position: absolute;
    top: 22px;
    font-size: 13px;
    font-weight: 600;
    right: 48%;
`

const ICon = styled.div`
    color:${COLORS.indigo};
    position:relative;
    bottom:4px;
`

const TodayButton = styled.div`
    position:absolute;
    top: 5%;
    right: 33%;
    font-size: 10px;
    border-radius: 3px;
    padding: 0px 3px;
    background: ${COLORS.lightBlue};
    color: white;
    font-weight: 600;
`

export default function MaterialUIPickers() {
    // The first commit of Material-UI
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(
        new Date(),
    );
    const [year, setYear] = React.useState(2020)
    const [month, setMonth] = React.useState(0)
    const [day, setDay] = React.useState(0)
    const [dayName, setDayName] = React.useState("")

    const fetchingMenuDispatch = useDispatch<Dispatch<IFetchMenuDispatch>>()

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };
    useEffect(() => {

        const input = document.getElementById("date-picker-dialog") as HTMLInputElement
        if (input) {
            input.disabled = true
        }
    })

    useEffect(() => {
        callFetchingMenuApi()
        setYear(selectedDate?.getFullYear() || 2020)
        setMonth(selectedDate?.getMonth() || 0)
        setDay(selectedDate?.getDate() || 0)
        getDayName()
    }, [selectedDate])

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid className="datepicker-container" container justify="space-around">
                <ICon onClick={leftButtonClicked} className="fas fa-chevron-circle-left" />
                <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="날짜를 선택해주세요"
                    format="MM/dd/yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
                <ICon onClick={rightButtonClicked} className="fas fa-chevron-circle-right" />
                <DateDiv>{year}년 {month}월 {day}일 {dayName}요일</DateDiv>
                {!isToday() && <TodayButton onClick={todayButtonClicked}>
                    TODAY
                </TodayButton>}

            </Grid>
        </MuiPickersUtilsProvider>
    );

    function leftButtonClicked() {
        if (selectedDate) {
            const yesterday = new Date(selectedDate.getTime())
            yesterday.setDate(yesterday.getDate() - 1)
            setSelectedDate(yesterday)
        }
    }

    function rightButtonClicked() {
        if (selectedDate) {
            const tomorrow = new Date(selectedDate.getTime())
            tomorrow.setDate(tomorrow.getDate() + 1)
            setSelectedDate(tomorrow)
        }
    }

    function todayButtonClicked() {
        setSelectedDate(new Date())
    }

    function isToday() {
        const todayDateObj = new Date()

        if (year === todayDateObj.getFullYear() &&
            month === todayDateObj.getMonth() &&
            day === todayDateObj.getDate()) {
            return true
        } else return false
    }

    function getDayName(): void {
        const week = ['일', '월', '화', '수', '목', '금', '토']
        const dayOfWeek = week[selectedDate?.getDay() || 0];
        setDayName(dayOfWeek)
    }

    function callFetchingMenuApi() {
        if (selectedDate) {
            fetchMenu(selectedDate.getTime(), fetchingMenuDispatch)
        }
    }
}