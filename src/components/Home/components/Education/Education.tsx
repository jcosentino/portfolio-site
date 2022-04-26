import React, { Fragment, ReactFragment } from 'react';
import './Education.scss';
import { IEducation } from 'custom_types/education_types';
import { EDUCATION_ITEMS, CSI_LINK } from 'constants/constants';

function generateClassNames(class_names: IEducation.EduClassName[]): ReactFragment[] {
  return class_names.map((klass: IEducation.EduClassName) => (
    <Fragment key={klass.klassName}>
      <p>
        <span className="edu-classes-arrow">&#8605;</span>
        <a
          href={klass.url}
          target="blank"
          rel="noopener noreferrer"
        >
          {klass.klassName}
        </a>
      </p>
    </Fragment>
  ));
}

function loadExtras(extras: string[]): JSX.Element[] {
  return extras.map((extra: string) => (
    <p key={extra}>
      &bull;
      {extra}
      &bull;
    </p>
  ));
}

function createEduComponent(edu: IEducation.EducationItem): ReactFragment {
  const {
    degree,
    gradDate,
    klassNames: classNames,
    extras,
  } = edu;

  return (
    <Fragment key={`${degree} ${gradDate}-${classNames.length}`}>
      <li>
        <div className="degree-heading">
          {degree}
          <br />
          <span className="grad-date-label">{gradDate}</span>
        </div>
        <div className="edu-class-list">
          {generateClassNames(classNames)}
        </div>
        <div>
          {loadExtras(extras)}
        </div>
      </li>
    </Fragment>
  );
}

function generateEduComponents(): ReactFragment[] {
  return EDUCATION_ITEMS.map((edu: IEducation.EducationItem) => createEduComponent(edu));
}

function Education(): JSX.Element {
  return (
    <>
      <span className="anchor" id="Education" />
      <div className="home-item">
        <h1>Education</h1>
        <div className="education-items">
          <h4>The College of Staten Island - CUNY</h4>
          <a
            href={CSI_LINK}
            target="blank"
            rel="noopener noreferrer"
          >
            <img
              src="college/cunycsi_college.jpg"
              className="college-photo-csi"
              alt="CSI"
              title="CSI"
            />
          </a>
          <ul>
            {generateEduComponents()}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Education;
