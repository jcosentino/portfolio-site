import React from 'react';
import './CalendarItem.scss';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import { ICalendarItem } from 'custom_types/calendaritem_types';

function CalendarItem(props: ICalendarItem.CalendarItemProps): JSX.Element {
  const {
    calendarDate,
  } = props;

  const CAL_CLASS = 'calendar-item';

  return (
    <Calendar
      className={CAL_CLASS}
      calendarType="US"
      value={calendarDate}
    />
  );
}

export default CalendarItem;
