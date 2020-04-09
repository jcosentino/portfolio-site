import React from 'react';
import './Experience.scss';
import { HomeMenu } from '../Shared';
import 'react-date-range/dist/styles.css'; // react-date-range main css file
import 'react-date-range/dist/theme/default.css'; // react-date-range theme css file
import { DateRange } from 'react-date-range';
import { TechIconsDisplay } from '../Shared/TechIconsDiplay/TechIconsDisplay';
import { IExperience } from 'custom_types/experience_types';

const EXPERIENCE_ROLES: IExperience.ExperienceRole[] = [
  {
    "title": "Prudential Financial",
    "location": "Newark, NJ",
    "duration": {
      "startDate": '4/1/2019',
      "endDate": '3/3/2020'
    },
    "company_logo": "prudential.jpg",
    "info_url": "https://www.prudential.com/",
    "key_tech": [
      "angular.png",
      "typescript.jpg",
      "spring.png",
      "sql.png"
    ]
  },
  {
    "title": "Goodwill Industries NY / NJ",
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
      "endDate": "6/28/2018"
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

const anchorId: string = 'Experience';
const headerTitle: string = 'Experience';
const renderItems: string[] = EXPERIENCE_ROLES.map(exp => exp.title);
const monthsCount: number = 1;

function createEvent(title: string,
                     location: string,
                     duration: IExperience.DurationExp,
                     company_logo: string,
                     info_url: string,
                     key_tech: string[],
                     index: number
  ): React.ReactFragment {
  const startDate: string = duration.startDate;
  // Need to account for current job(s)
  const endDate: Date | string = duration.endDate === 'current' ? new Date() : duration.endDate;

  return (
    <React.Fragment key={index}>
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
      {/* <DateRange 
                className='experience-date-range'
                editableDateInputs={false}
                ranges={[{
                  "startDate": new Date(startDate),
                  "endDate": new Date(endDate)
                }]}
                months={monthsCount}
                direction='horizontal'
                showMonthArrow={false}
                showMonthAndYearPickers={false}
                dragSelectionEnabled={false}
        />   */}
      <TechIconsDisplay iconsList={key_tech} />
    </React.Fragment>
  );
}

function generateEvents(): React.ReactFragment[] {
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

const customDiv: React.ReactFragment[] = (generateEvents());

export function Experience(): JSX.Element {
  return (
    <div>
      <HomeMenu anchorId={anchorId}
                headerTitle={headerTitle}
                renderItems={renderItems}
                customDiv={customDiv} />
    </div>
  );
}
