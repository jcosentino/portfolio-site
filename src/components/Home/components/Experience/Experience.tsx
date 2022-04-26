import React, { Fragment, ReactFragment } from 'react';
import './Experience.scss';
import { IExperience } from 'custom_types/experience_types';
import { CURRENT_JOB, EXPERIENCE_ITEMS } from 'constants/constants';
import { HomeMenu, TechIconsDisplay, CalendarItem } from '../Shared';

const ANCHOR_ID: string = 'Experience';
const HEADER_TITLE: string = 'Experience';
const RENDER_ITEMS: string[] = EXPERIENCE_ITEMS.map((exp) => exp.title);
const START_DATE_LABEL: string = 'Start Date';
const END_DATE_LABEL: string = 'End Date';

function createDateItem(dateEntryLabel: string, calDate: Date): JSX.Element {
  return (
    <div className="date-item">
      <p className="date-item-label">{dateEntryLabel}</p>
      <CalendarItem calendarDate={calDate} />
    </div>
  );
}

function createEvent(
  title: string,
  location: string,
  duration: IExperience.DurationExp,
  company_logo: string,
  info_url: string,
  key_tech: string[],
  index: number,
): ReactFragment {
  const { startDate } = duration;
  // Need to account for current job(s)
  const endDate: string = duration.endDate === CURRENT_JOB ? '' : duration.endDate;
  const startDateElemeent: any = createDateItem(START_DATE_LABEL, new Date(startDate));
  const endDateElement: any = endDate ? createDateItem(END_DATE_LABEL, new Date(endDate))
    : <div className="active-job" />;

  return (
    <Fragment key={index}>
      <div className="company-logo-title">
        <a
          href={info_url}
          target="blank"
          rel="noopener noreferrer"
        >
          <img
            src={`companies/${company_logo}`}
            className="experience-company-logo"
            alt={title}
            title={title}
          />
        </a>
      </div>
      <p>
        Location:
        {' '}
        {location}
      </p>
      <div className="experience-calendar-container">
        {startDateElemeent}
        {endDateElement}
      </div>
      <TechIconsDisplay iconsList={key_tech} />
    </Fragment>
  );
}

function generateEvents(): ReactFragment[] {
  return EXPERIENCE_ITEMS.map((exp: IExperience.ExperienceRole, index: number) => createEvent(
    exp.title,
    exp.location,
    exp.duration,
    exp.company_logo,
    exp.info_url,
    exp.key_tech,
    index,
  ));
}

const CUSTOM_DIV: ReactFragment[] = (generateEvents());

function Experience(): JSX.Element {
  return (
    <div>
      <HomeMenu
        anchorId={ANCHOR_ID}
        headerTitle={HEADER_TITLE}
        renderItems={RENDER_ITEMS}
        customDiv={CUSTOM_DIV}
      />
    </div>
  );
}

export default Experience;
