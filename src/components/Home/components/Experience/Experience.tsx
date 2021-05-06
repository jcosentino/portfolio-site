import React, { Fragment, ReactFragment } from 'react';
import './Experience.scss';
import { HomeMenu } from '../Shared';
import { TechIconsDisplay } from '../Shared/TechIconsDiplay/TechIconsDisplay';
import { IExperience } from 'custom_types/experience_types';
import { CalendarItem } from '../Shared/CalendarItem/CalendarItem';
import { CURRENT_JOB } from 'constants/constants';

const EXPERIENCE_ROLES: IExperience.ExperienceRole[] = [
  {
    "title": "American Express Company",
    "location": "New York, NY",
    "duration": {
      "startDate": '4/26/2021',
      "endDate": CURRENT_JOB
    },
    "company_logo": "americanexpress.png",
    "info_url": "https://www.americanexpress.com/",
    "key_tech": []
  },
  {
    "title": "Virtusa Corporation",
    "location": "Buffalo, NY",
    "duration": {
      "startDate": '6/5/2020',
      "endDate": '4/16/2021'
    },
    "company_logo": "virtusa.png",
    "info_url": "https://www.virtusa.com/",
    "key_tech": [
      "drools.png",
      "openshift.png",
      "spring.png"
    ]
  },
  {
    "title": "Prudential Insurance",
    "location": "Newark, NJ",
    "duration": {
      "startDate": '4/1/2019',
      "endDate": '3/3/2020'
    },
    "company_logo": "prudential.jpg",
    "info_url": "https://www.prudential.com/",
    "key_tech": [
      "angular.png",
      "jasmine.png",
      "spring.png",
      "sql.png",
      "typescript.jpg"
    ]
  },
  {
    "title": "Goodwill Industries NY",
    "location": "Queens, NY",
    "duration": {
      "startDate": '12/10/2018',
      "endDate": '3/1/2019'
    },
    "company_logo": "goodwill.png",
    "info_url": "https://www.goodwillnynj.org/",
    "key_tech": [
      "nodejs.png"
    ]
  },
  {
    "title": "Bloomberg LP",
    "location": "New York, NY",
    "duration": {
      "startDate": "4/2/2018",
      "endDate": "6/29/2018"
    },
    "company_logo": "bloomberg.jpg",
    "info_url": "https://www.bloomberg.com/",
    "key_tech": [
      "rails.png",
      "reactjs.jpg",
      "sql.png"
    ]
  },
  {
    "title": "College of Staten Island OTS",
    "location": "Staten Island, NY",
    "duration": {
      "startDate": "3/9/2016",
      "endDate": "2/8/2018"
    },
    "company_logo": "cunycsi.jpg",
    "info_url": "https://www.csi.cuny.edu/online-resources/office-information-technology-services",
    "key_tech": []
  },
  {
    "title": "RFCUNY",
    "location": "Staten Island, NY",
    "duration": {
      "startDate": "4/15/2016",
      "endDate": "9/15/2017"
    },
    "company_logo": "rfcuny.jpg",
    "info_url": "https://www.rfcuny.org/RFWebsite/",
    "key_tech": [
      "nodejs.png"
    ]
  }
];

const ANCHOR_ID: string = 'Experience';
const HEADER_TITLE: string = 'Experience';
const RENDER_ITEMS: string[] = EXPERIENCE_ROLES.map(exp => exp.title);
const START_DATE_LABEL: string = 'Start Date';
const END_DATE_LABEL: string = 'End Date';

function createDateItem(dateEntryLabel: string, calDate: Date): JSX.Element {
  return (
    <div className='date-item'>
      <p className='date-item-label'>{dateEntryLabel}</p>
      <CalendarItem cal_date={calDate} />
    </div>
  );
}

function createEvent(title: string,
                     location: string,
                     duration: IExperience.DurationExp,
                     company_logo: string,
                     info_url: string,
                     key_tech: string[],
                     index: number
  ): ReactFragment {
  const startDate: string = duration.startDate;
  // Need to account for current job(s)
  const endDate: string = duration.endDate === CURRENT_JOB ? '' : duration.endDate;
  const startDateElemeent: any = createDateItem(START_DATE_LABEL, new Date(startDate));
  const endDateElement: any = endDate ? createDateItem(END_DATE_LABEL, new Date(endDate))
                                      : <div className='active-job'></div>;

  return (
    <Fragment key={index}>
      <div className='company-logo-title'>
        <a href={info_url}
           target='blank' rel='noopener noreferrer'>
          <img src={`companies/${company_logo}`}
               className='experience-company-logo'
               alt={title}
               title={title} />
        </a>
      </div>
      <p>Location: {location}</p>
      <div className='experience-calendar-container'>
        {startDateElemeent}
        {endDateElement}
      </div>
      <TechIconsDisplay iconsList={key_tech} />
    </Fragment>
  );
}

function generateEvents(): ReactFragment[] {
  return EXPERIENCE_ROLES.map((exp: IExperience.ExperienceRole, index: number) => 
    createEvent(exp.title,
      exp.location,
      exp.duration,
      exp.company_logo,
      exp.info_url,
      exp.key_tech,
      index
    )
  );
}

const CUSTOM_DIV: ReactFragment[] = (generateEvents());

export function Experience(): JSX.Element {
  return (
    <div>
      <HomeMenu anchorId={ANCHOR_ID}
                headerTitle={HEADER_TITLE}
                renderItems={RENDER_ITEMS}
                customDiv={CUSTOM_DIV} />
    </div>
  );
}
