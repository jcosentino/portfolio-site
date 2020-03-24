import React from 'react';
import './Experience.scss';
import { HomeMenu } from '../Shared';
import 'react-date-range/dist/styles.css'; // react-date-range main css file
import 'react-date-range/dist/theme/default.css'; // react-date-range theme css file
import { DateRange } from 'react-date-range';

const EXPERIENCE_ROLES = [
  {
    "title": "Prudential Financial",
    "location": "Newark, NJ",
    "duration": "4/1/2018,3/3/2019",
    "company_logo": "prudential.jpg",
    "info_url": "https://www.prudential.com/",
    "key_tech": "angular.png,typescript.jpg,spring.png",
    "code_link": "",
    "host_link": ""
  },
  {
    "title": "Goodwill Industries NY / NJ",
    "location": "Queens, NY",
    "duration": "12/10/2018,3/1/2019",
    "company_logo": "goodwill.png",
    "info_url": "https://www.goodwillnynj.org/",
    "key_tech": 'nodejs.png',
    "code_link": "",
    "host_link": ""
  },
  {
    "title": "Bloomberg LP",
    "location": "New York, NY",
    "duration": "4/2/2018,6/28/2018",
    "company_logo": "bloomberg.jpg",
    "info_url": "https://www.bloomberg.com/",
    "key_tech": "rails.png,reactjs.jpg",
    "code_link": "",
    "host_link": ""
  },
  {
    "title": "College of Staten Island OTS",
    "location": "Staten Island, NY",
    "duration": "3/9/2016,2/8/2018",
    "company_logo": "cunycsi.jpg",
    "info_url": "https://www.csi.cuny.edu/online-resources/office-information-technology-services",
    "key_tech": "",
    "code_link": "",
    "host_link": ""
  },
  {
    "title": "RFCUNY",
    "location": "Staten Island, NY",
    "duration": "4/15/2016,9/15/2017",
    "company_logo": "rfcuny.jpg",
    "info_url": "https://www.rfcuny.org/RFWebsite/",
    "key_tech": "nodejs.png",
    "code_link": "",
    "host_link": ""
  }
];

export function Experience(){
  const anchorId = 'Experience';
  const headerTitle = 'Experience';
  const renderItems = EXPERIENCE_ROLES.map(exp => exp.title);
  const isPotrait = window.matchMedia('(orientation: portrait)').matches;
  const monthsCount = isPotrait ? 0 : 2;

  function activeLink(link){
    return link === '' ? 'inactive-exp-link' : '';
  }

  function keyTech(tech){
    const techList = tech.split(',');
    if(techList[0] === ''){ return ''; }
    return techList.map(techItem => 
      <React.Fragment key={techItem}>
        <img src={`software/${techItem}`}
            className='experience-key_tech-icon'
            alt={techItem}
            title={techItem} />
      </React.Fragment>
    );
  }

  function createEvent(title,
                       location,
                       duration,
                       company_logo,
                       info_url,
                       key_tech,
                       code_link,
                       host_link,
                       index){
    const dates = duration.split(',');
    const startDate = dates[0];
    // Need to account for current job(s)
    const endDate = dates[1] === 'current' ? new Date() : dates[1];

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
        <DateRange className='experience-data-range'
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
          />
        <div className='key_tech_icons'>{keyTech(key_tech)}</div>
        <p className={activeLink(code_link)}>Code: {code_link}</p>
        <p className={activeLink(host_link)}>Hosted application: {host_link}</p>
      </React.Fragment>
    );
  }

  function generateEvents(){
    return EXPERIENCE_ROLES.map((exp, index) => 
      createEvent(exp.title,
        exp.location,
        exp.duration,
        exp.company_logo,
        exp.info_url,
        exp.key_tech,
        exp.code_link,
        exp.host_link,
        index
      )
    );
  }

  const customDivs = (generateEvents());

  return (
    <div>
      <HomeMenu anchorId={anchorId}
                headerTitle={headerTitle}
                renderItems={renderItems}
                customDivs={customDivs} />
    </div>
  );
}
