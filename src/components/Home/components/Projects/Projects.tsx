import React, { Fragment, ReactFragment } from 'react';
import './Projects.scss';
import { HomeMenu, TechIconsDisplay } from '../Shared';
import { ImagePanel } from '../Shared/ImagePanel/ImagePanel';
import { IProjects } from 'custom_types/projects_types';

const IN_PROGRESS: string = 'In Progress...'

const PROJECTS: IProjects.ProjectItem[] = [
  {
    "project": "Doctor Appointment Scheduler",
    "blurb": `I wanted to re-create my college team's doctor 
              appointment schedule application. The original used
              C#, .NET, and MySQL. The new application will offer
              both, Angular and React + TypeScript, GUIs. The backend
              is written in Flask, a Python-based web framework.
              For datastore, MySQL is utilized. It has not yet 
              been uploaded to AWS; it is a work-in-progress.`,
    "time": `${IN_PROGRESS}`,
    "key_tech": [
      "angular.png",
      "jasmine.png",
      "reactjs.jpg",
      "python.png",
      "aws.jpg",
      "typescript.jpg"
    ],
    "code_links": [
      "https://github.com/jcosentino/doctor-appointment-scheduler-angular",
      "https://github.com/jcosentino/doctor-appointment-scheduler-reactjs",
      "https://github.com/jcosentino/doctor-appointment-scheduler-API-flask"
    ],
    "host_link": "",
    "screenshots": [
      "project_screenshots/doctor_app_frontend_1.png",
      "project_screenshots/doctor_app_frontend_2.png",
      "project_screenshots/doctor_app_backend_1.png"
    ]
  },
  {
    "project": "Portfolio Website",
    "blurb": `It is the code that powers this very website.`,
    "time": "4/13/2020",
    "key_tech": [
      "reactjs.jpg",
      "redux.png",
      "nodejs.png",
      "typescript.jpg",
      "webpack.png"
    ],
    "code_links": [
      "https://github.com/jcosentino/portfolio-site"
    ],
    "host_link": "https://jcosentino.me/",
    "screenshots": [
      "project_screenshots/portfolio_site_1.png",
      "project_screenshots/portfolio_site_2.png"
    ]
  },
  {
    "project": "Purchase Order Search / Indexer",
    "blurb": `This application was built in under a month, and it was designed to
              searched a Shared Drive and pull purchase order .pdf files and 
              image files. The purchase orders did not maintain a common style,
              so there was a great deal of parsing that needed to get done.`,
    "time": "2/28/2019",
    "key_tech": [
      "nodejs.png"
    ],
    "code_links": [
      "https://github.com/jcosentino/po_search_app"
    ],
    "host_link": "http://ec2-54-174-168-44.compute-1.amazonaws.com:3215",
    "screenshots": [
      "project_screenshots/po_search_app_1.png",
      "project_screenshots/po_search_app_2.png",
      "project_screenshots/po_search_app_3.png"
    ]
  },
  {
    "project": "RFCUNY Honors Research",
    "blurb": `This was my honors research project from my undergraduate program.
              Two of my colleagues and I added to a visual system, which was 
              designed for cyber-defense competitions, features such as:
              Nagios3 monitoring for up and down URLs using http-checker,
              implementation of Flapjack.io into project,
              Caching of results in Redis database, etc.`,
    "time": "9/15/2017",
    "key_tech": [
      "nodejs.png"
    ],
    "code_links": [],
    "host_link": "",
    "screenshots": [
      "project_screenshots/research_app_1.png",
      "project_screenshots/research_app_2.png",
      "project_screenshots/research_app_3.png"
    ]
  },
  {
    "project": "CUNY Tech Prep - NYC TTP",
    "blurb": `CUNY Tech Prep is a year-long JavaScript bootcamp hosted by the 
              New York City Tech Talent Pipeline. They teach NodeJS, ReactJS, SQL
              concepts, OOP, data structures, and other topics not taught in-depth
              in school.`,
    "time": "6/23/2017",
    "key_tech": [
      "nodejs.png",
      "reactjs.jpg",
      "sql.png"
    ],
    "code_links": [],
    "host_link": "https://cunytechprep.nyc/",
    "screenshots": [
      "project_screenshots/ctp_project_1.png"
    ]
  }
];

const anchorId: string = 'Projects';
const headerTitle: string = 'Projects';
const renderItems: string[] = PROJECTS.map((proj: IProjects.ProjectItem) => proj.project);

function activeLink(link: string | string[]): string {
  return (link === '' || link.length === 0) ? 'inactive-project-item' : '';
}

function codeLinks(code_links: string[]): ReactFragment {
  return (
    <>
      <p>
        <span className='project-label'>Code Links:</span><br></br>
        {code_links.map(code_link => 
        <Fragment key={code_link}>
          <a href={code_link}
              target='blank' rel='noopener noreferrer'>
            {code_link}
          </a><br></br>
        </Fragment>
        )}
      </p>
    </>
  );
}

function screenShots(screenshots: string[]): JSX.Element {
  return (
    <div className='project-img-section'>
      <ImagePanel photoList={screenshots} captionTags={[]} />
    </div>
  );
}

function createProject(blurb: string,
                       time: string,
                       key_tech: string[],
                       code_links: string[],
                       host_link: string,
                       screenshots: string[]
  ): JSX.Element {
    return (
      <div className='project-item'>
        <p><span className='project-label'>About this app:</span><br></br>
          <span className='project-about-section'>{blurb}</span>
        </p>
        <p>
          <span className='project-label'>Completed: </span>
          <span className='project-completed-section'>{time}</span>
        </p>
        <div className='project-key_tech'>
          {<TechIconsDisplay iconsList={key_tech} />}
        </div>
        <div className={activeLink(code_links)}>
          {codeLinks(code_links)}
        </div>
        <div className={activeLink(host_link)}>
          <p><span className='project-label'>Hosted at:</span><br></br>
            <a href={host_link}
                target='blank' rel='noopener noreferrer'>
                {host_link}
            </a>
          </p>
        </div>
        <div className={activeLink(screenshots)}>
          <p className='project-label'>Screenshots:</p>
          {screenShots(screenshots)}
        </div>
      </div>
    );
  }

function generateProjects(): ReactFragment[] {
  return PROJECTS.map((proj: IProjects.ProjectItem) =>
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

const customDiv: ReactFragment[] = (generateProjects());

export function Projects(): JSX.Element {
  return (
    <div>
      <HomeMenu anchorId={anchorId}
                headerTitle={headerTitle}
                renderItems={renderItems}
                customDiv={customDiv} />
    </div>
  );
}
