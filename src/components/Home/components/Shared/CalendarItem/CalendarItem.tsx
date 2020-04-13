import React from 'react';
import './CalendarItem.scss';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import { ICalendarItem } from 'custom_types/calendaritem_types';

export function CalendarItem(props: ICalendarItem.CalendarItemProps): JSX.Element {
    const {
        cal_date
    } = props;

    const CAL_CLASS = 'calendar-item';

    return <Calendar 
                    className={CAL_CLASS}
                    calendarType='US'
                    value = {cal_date}
            />
}
