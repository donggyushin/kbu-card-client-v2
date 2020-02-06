import 'date-fns';
import React, { Dispatch, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import {
    IGetTodayPrayDispatch,
    getTodayPray
} from '../../../../actions/todayPray'
import { useDispatch } from 'react-redux';
import styled from 'styled-components'

const DateDiv = styled.div`
    position: absolute;
    top: 22px;
    font-size: 13px;
    font-weight: 600;
    right: 48%;
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

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };

    useEffect(() => {
        const input = document.getElementById("date-picker-dialog") as HTMLInputElement
        input.disabled = true
    }, [])

    useEffect(() => {
        callFetchingTodayPray()
        setYear(selectedDate?.getFullYear() || 2020)
        setMonth(selectedDate?.getMonth() || 0)
        setDay(selectedDate?.getDate() || 0)
        getDayName()
    }, [selectedDate])

    const getTodayPrayDispatch = useDispatch<Dispatch<IGetTodayPrayDispatch>>()

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid className="datepicker-container" container justify="space-around">
                <DateDiv>{year}년 {month}월 {day}일 {dayName}요일</DateDiv>
                <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="날짜를 선택해주세요!"
                    format="MM/dd/yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }}
                />
            </Grid>
        </MuiPickersUtilsProvider>
    );

    function getDayName(): void {
        const week = ['일', '월', '화', '수', '목', '금', '토']
        const dayOfWeek = week[selectedDate?.getDay() || 0];
        setDayName(dayOfWeek)
    }

    function callFetchingTodayPray() {
        if (selectedDate) {
            getTodayPray(selectedDate.getTime(), getTodayPrayDispatch)
        }
    }
}