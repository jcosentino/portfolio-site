declare module 'react-date-range' {
    import * as React from "react";
    import * as moment from "moment-timezone";

    export type AnyDate = string | moment.Moment;
    export type DateFunc = (now: moment.Moment) => AnyDate;
    export type DateInputType = AnyDate | DateFunc;
    export type LanguageType =
        | "cn"
        | "jp"
        | "fr"
        | "it"
        | "de"
        | "ko"
        | "es"
        | "ru"
        | "tr";
    export type SizeType = number;

    export interface DateContainerType {
        date: moment.Moment;
    }

    export interface CalendarTheme {
        DateRange?: React.CSSProperties;
        Calendar?: React.CSSProperties;
        Day?: React.CSSProperties;
        DayPassive?: React.CSSProperties;
        DayHover?: React.CSSProperties;
        DayToday?: React.CSSProperties;
        DaySunday?: React.CSSProperties;
        DaySpecialDay?: React.CSSProperties;
        DayActive?: React.CSSProperties;
        DaySelected?: React.CSSProperties;
        DayStartEdge?: React.CSSProperties;
        DayEndEdge?: React.CSSProperties;
        DayInRange?: React.CSSProperties;
        Weekday?: React.CSSProperties;
        MonthAndYear?: React.CSSProperties;
        MonthButton?: React.CSSProperties;
        MonthArrow?: React.CSSProperties;
        MonthArrowPrev?: React.CSSProperties;
        MonthArrowNext?: React.CSSProperties;
        PredefinedRanges?: React.CSSProperties;
        PredefinedRangesItem?: React.CSSProperties;
        PredefinedRangesItemActive?: React.CSSProperties;
    }

    export interface Range {
        startDate?: moment.Moment;
        endDate?: moment.Moment;
    }

    export interface CommonCalendarProps {
        format?: string;
        firstDayOfWeek?: number;
        theme?: CalendarTheme;
        onInit?: (range: Range) => void;
        onChange?: (range: Range) => void;
        minDate?: DateInputType;
        maxDate?: DateInputType;
        lang?: LanguageType;
    }

    export interface CalendarProps extends CommonCalendarProps {
        date: DateInputType;
    }

    export class Calendar extends React.Component<CalendarProps> {}

    export interface DateRangeProps extends Range, CommonCalendarProps {
        linkedCalendars?: boolean;
        calendars?: number;
        ranges?: object;
        twoStepChange?: boolean;
        rangedCalendars?: boolean;
        specialDays?: DateContainerType[];
        className?: string;
        editableDateInputs?: boolean;
        months?: number;
        direction: string;
        showMonthArrow?: boolean;
        showMonthAndYearPickers?: boolean;
        dragSelectionEnabled?: boolean;
    }

    export class DateRange extends React.Component<DateRangeProps> {}

    export class DateRangePicker extends React.Component<DateRangeProps> {}

    export type DateRangeIndex =
        | "Today"
        | "Yesterday"
        | "Last 7 Days"
        | "Last 30 Days";

    export interface DateRangeObject {
        startDate: (now: moment.Moment) => moment.Moment;
        endDate: (now: moment.Moment) => moment.Moment;
    }
    export const defaultRanges: {
        [measure: string]: DateRangeObject;
    };
}
