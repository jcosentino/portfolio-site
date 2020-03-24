import React from 'react';
import './Projects.scss';
import { HomeMenu } from '../Shared';

const IN_PROGRESS = 'In Progess...'

const PROJECTS = [
  {
    "project": "Doctor Appointment Scheduler",
    "blurb": "bvjbn fvcjbnjf",
    "time": `${IN_PROGRESS}`,
    "key_tech": "angular.png,reactjs.jpg,python.png,aws.jpg,typescript.jpg",
    "code_links": [
      "https://github.com/jcosentino/doctor-appointment-scheduler-angular",
      "https://github.com/jcosentino/doctor-appointment-scheduler-reactjs",
      "https://github.com/jcosentino/doctor-appointment-scheduler-API-flask"
    ],
    "host_link": "",
    "screenshots": [
      "doctor_app_frontend.png",
      "doctor_app_backend.png"
    ]
  },
  {
    "project": "Portfolio Website",
    "blurb": "fgbshbhfdvsngfbfdbfd",
    "time": "3/24/2020",
    "key_tech": "angular.png,typescript.jpg,spring.png",
    "code_links": [
      "https://github.com/jcosentino/portfolio-site"
    ],
    "host_link": "https://jcosentino.me/",
    "screenshots": [
      "portfolio_site.png"
    ]
  },
  {
    "project": "Goodwill PO Search / Indexer",
    "blurb": "fdsgvgdgvfds",
    "time": "2/28/2019",
    "key_tech": "nodejs.jpg",
    "code_links": [
      "https://github.com/jcosentino/po_search_app"
    ],
    "host_link": "",
    "screenshots": [
      "po_search_app.png"
    ]
  },
  {
    "project": "RFCUNY Honors Research",
    "blurb": "testtest",
    "time": "9/15/2017",
    "key_tech": "nodejs.jpg",
    "code_links": [],
    "host_link": "",
    "screenshots": [
      "research_app_1.png",
      "research_app_2.png",
      "research_app_3.png"
    ]
  },
  {
    "project": "CUNY Tech Prep - NYC TTP",
    "blurb": 'testestrewr',
    "time": "6/23/2017",
    "key_tech": "nodejs.jpg,reactjs.jpg,sql.png",
    "code_links": [],
    "host_link": "https://cunytechprep.nyc/",
    "screenshots": []
  }
];

export function Projects() {
  const anchorId = 'Projects';
  const headerTitle = 'Projects';
  const renderItems = PROJECTS.map(proj => proj.project);

  function activeLink(link){
    return (link === '' || link.length === 0) ? 'inactive-project-item' : '';
  }

  function codeLinks(code_links){
    return code_links.map(code_link => 
      <React.Fragment key={code_link}>
        <p>Code Link:<br></br>
          <a href={code_link}
            target='blank' rel='noopener noreferrer'>
              {code_link}
          </a>
        </p>
      </React.Fragment>
    );
  }

  function screenShots(screenshots){
    return screenshots.map(sn => 
      <p>{sn}</p>
    );
  }

  function createProject(blurb,
                         time,
                         key_tech,
                         code_link,
                         host_link,
                         screenshots
    ){
      return (
        <div className='project-item'>
          <p>About this app:<br></br>{blurb}</p>
          <p>Completed: {time}</p>
          <div className='project-key_tech'>
            {key_tech}
          </div>
          <div className={activeLink(code_link)}>
            {codeLinks(code_link)}
          </div>
          <div className={activeLink(host_link)}>
            <p>Hosted at:<br></br>
              <a href={host_link}
                target='blank' rel='noopener noreferrer'>
                  {host_link}
              </a>
            </p>
          </div>
          <div className={activeLink(screenshots)}>
            {screenShots(screenshots)}
          </div>
        </div>
      );
    }

  function generateProjects(){
    return PROJECTS.map(proj =>
    <>
      {createProject(proj.blurb,
                     proj.time,
                     proj.key_tech,
                     proj.code_links,
                     proj.host_link,
                     proj.screenshots
      )}
    </>
    );
  }

  const customDiv = (generateProjects());

  return (
    <div>
      <HomeMenu anchorId={anchorId}
                headerTitle={headerTitle}
                renderItems={renderItems}
                customDiv={customDiv} />
    </div>
  );
}
