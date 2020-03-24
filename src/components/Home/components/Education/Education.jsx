import React from 'react';
import './Education.scss';

const EDUCATION = [
  {
    "degree": "Computer Science BS",
    "grad_date": "June 2017",
    "class_names": [
      {
        "class_name": "Software Engineering",
        "url": "https://csicuny.smartcatalogiq.com/2019-2020/Undergraduate-Catalog/Courses/CSC-Computer-Science/400/CSC-430"
      },
      {
        "class_name": "Databases",
        "url": "https://csicuny.smartcatalogiq.com/current/Undergraduate-Catalog/Courses/CSC-Computer-Science/400/CSC-424"
      },
      {
        "class_name": "Analysis of Algorithms",
        "url": "https://csicuny.smartcatalogiq.com/2019-2020/Undergraduate-Catalog/Courses/CSC-Computer-Science/300/CSC-382"
      },
      {
        "class_name": "Object-Oriented Software Design",
        "url": "https://csicuny.smartcatalogiq.com/2019-2020/Undergraduate-Catalog/Courses/CSC-Computer-Science/300/CSC-330"
      },
      {
        "class_name": "Data Structures",
        "url": "https://csicuny.smartcatalogiq.com/2019-2020/Undergraduate-Catalog/Courses/CSC-Computer-Science/300/CSC-326"
      }
    ]
  },
  {
    "degree": "Mathematics Minor",
    "grad_date": "June 2017",
    "class_names": [
      {
        "class_name": "Cryptology",
        "url": "https://csicuny.smartcatalogiq.com/current/Undergraduate-Catalog/Courses/MTH-Mathematics/300/MTH-349"
      },
      {
        "class_name": "Linear Algebra",
        "url": "https://csicuny.smartcatalogiq.com/2019-2020/Undergraduate-Catalog/Courses/MTH-Mathematics/300/MTH-338"
      },
      {
        "class_name": "Probability and Statistics",
        "url": "https://csicuny.smartcatalogiq.com/2019-2020/Undergraduate-Catalog/Courses/MTH-Mathematics/300/MTH-311"
      },
      {
        "class_name": "Calculus III",
        "url": "https://csicuny.smartcatalogiq.com/2018-2019/Undergraduate-Catalog/Courses/MTH-Mathematics/200/MTH-233"
      }
    ]
  },
  {
    "degree": "Psychology BS",
    "grad_date": "August 2014",
    "class_names": [
      {
        "class_name": "Cognitive Psychology Lab",
        "url": "https://csicuny.smartcatalogiq.com/2019-2020/Undergraduate-Catalog/Courses/PSY-Psychology/300/PSY-330"
      },
      {
        "class_name": "Cognitive Psychology",
        "url": "https://csicuny.smartcatalogiq.com/2019-2020/Undergraduate-Catalog/Courses/PSY-Psychology/200/PSY-288"
      },
      {
        "class_name": "Developmental Psychology",
        "url": "https://csicuny.smartcatalogiq.com/2019-2020/Undergraduate-Catalog/Courses/PSY-Psychology/200/PSY-242"
      },
      {
        "class_name": "Cognitive and Behavioral Neuroscience",
        "url": "https://csicuny.smartcatalogiq.com/2019-2020/Undergraduate-Catalog/Courses/PSY-Psychology/200/PSY-232"
      }
    ]
  }
];

export function Education() {
  function generateClassNames(...class_names){
    return class_names.map(klass => 
      <>
        <p>{klass.class_name}</p>
        <a href={klass.url}
          target='blank' rel='noopener noreferrer'>
        </a>
      </>
    );
  }

  function createEduComponent(degree, grad_date, ...class_names){
    return (
      <li>
        <div>
          {degree}<span>{grad_date}</span>
        </div>
        {generateClassNames(class_names)}
      </li>
    );
  }

  function generateEduComponents(){
    return EDUCATION.map(edu => 
      createEduComponent(edu.degree, edu.grad_date, edu.class_names)
    );
  }

  return (
    <>
      <span className='anchor' id='Education'></span>
      <div className='home-item'>
        <h1>Education</h1>
        <div className='education-items'>
          <h4>The College of Staten Island - CUNY</h4>
          <img src={'college/cunycsi_college.jpg'}
               className='college-photo-csi'
               alt='CSI'
               title='CSI' />
          <ul>
            {generateEduComponents()}
          </ul>
        </div>
      </div>
    </>
  );
}
