import React, { Fragment, ReactFragment } from 'react';
import './Projects.scss';
import { IProjects } from 'custom_types/projects_types';
import { PROJECT_ITEMS } from 'constants/constants';
import { HomeMenu, TechIconsDisplay, ImagePanel } from '../Shared';

const anchorId: string = 'Projects';
const headerTitle: string = 'Projects';
const renderItems: string[] = PROJECT_ITEMS.map((proj: IProjects.ProjectItem) => proj.project);

function activeLink(link: string | string[]): string {
  return (link === '' || link.length === 0) ? 'inactive-project-item' : '';
}

function codeLinks(code_links: string[]): ReactFragment {
  return (
    <p>
      <span className="project-label">Code Links:</span>
      <br />
      {code_links.map((code_link) => (
        <Fragment key={code_link}>
          <a
            href={code_link}
            target="blank"
            rel="noopener noreferrer"
          >
            {code_link}
          </a>
          <br />
        </Fragment>
      ))}
    </p>
  );
}

function screenShots(screenshots: string[]): JSX.Element {
  return (
    <div className="project-img-section">
      <ImagePanel photoList={screenshots} captionTags={[]} />
    </div>
  );
}

function createProject(
  blurb: string,
  time: string,
  key_tech: string[],
  code_links: string[],
  host_link: string,
  display_link: string,
  screenshots: string[],
): JSX.Element {
  return (
    <div className="project-item">
      <p>
        <span className="project-label">About this app:</span>
        <br />
        <span className="project-about-section">{blurb}</span>
      </p>
      <p>
        <span className="project-label">Completed: </span>
        <span className="project-completed-section">{time}</span>
      </p>
      <div className="project-key_tech">
        <TechIconsDisplay iconsList={key_tech} />
      </div>
      <div className={activeLink(code_links)}>
        {codeLinks(code_links)}
      </div>
      <div className={activeLink(host_link)}>
        <p>
          <span className="project-label">Hosted at:</span>
          <br />
          <a
            href={host_link}
            target="blank"
            rel="noopener noreferrer"
          >
            {display_link}
          </a>
        </p>
      </div>
      <div className={activeLink(screenshots)}>
        <p className="project-label">Screenshots:</p>
        {screenShots(screenshots)}
      </div>
    </div>
  );
}

function generateProjects(): ReactFragment[] {
  return PROJECT_ITEMS.map((proj: IProjects.ProjectItem) => (
    <>
      {createProject(
        proj.blurb,
        proj.time,
        proj.key_tech,
        proj.code_links,
        proj.host_link,
        proj.display_link,
        proj.screenshots,
      )}
    </>
  ));
}

const customDiv: ReactFragment[] = (generateProjects());

function Projects(): JSX.Element {
  return (
    <div>
      <HomeMenu
        anchorId={anchorId}
        headerTitle={headerTitle}
        renderItems={renderItems}
        customDiv={customDiv}
      />
    </div>
  );
}

export default Projects;
