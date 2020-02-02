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

export default function MaterialUIPickers() {
    // The first commit of Material-UI
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(
        new Date(),
    );

    const fetchingMenuDispatch = useDispatch<Dispatch<IFetchMenuDispatch>>()

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };

    useEffect(() => {
        callFetchingMenuApi()
    }, [selectedDate])

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">

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

            </Grid>
        </MuiPickersUtilsProvider>
    );

    function callFetchingMenuApi() {
        if (selectedDate) {
            fetchMenu(selectedDate.getTime(), fetchingMenuDispatch)
        }
    }
}