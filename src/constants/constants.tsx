import { IEducation } from 'custom_types/education_types';
import { IEvents } from 'custom_types/events_types';
import { IExperience } from 'custom_types/experience_types';
import { IShared } from 'custom_types/MultiComponent/shared_types';
import { IProjects } from 'custom_types/projects_types';
import { HOST_URL, PO_SEARCH_HOST_ROUTE } from './external_urls';

// About
export const ABOUT_TEXT = 'I want to be admired like Steve Jobs, impactful like Linus Torvalds, and innovative like Whitney Wolfe Herd.';

// App
export const INTERNET_EXPLORER: string = 'ie';

// Education
export const CSI_LINK: string = 'https://www.csi.cuny.edu/';

export const EDUCATION_ITEMS: IEducation.EducationItem[] = [
  {
    degree: 'Bachelor of Science - Computer Science',
    gradDate: 'June 2017',
    klassNames: [
      {
        klassName: 'CSC 382: Analysis of Algorithms',
        url: 'https://csicuny.smartcatalogiq.com/2019-2020/Undergraduate-Catalog/Courses/CSC-Computer-Science/300/CSC-382',
      },
      {
        klassName: 'CSC 330: Object-Oriented Software Design',
        url: 'https://csicuny.smartcatalogiq.com/2019-2020/Undergraduate-Catalog/Courses/CSC-Computer-Science/300/CSC-330',
      },
      {
        klassName: 'CSC 326: Data Structures',
        url: 'https://csicuny.smartcatalogiq.com/2019-2020/Undergraduate-Catalog/Courses/CSC-Computer-Science/300/CSC-326',
      },
      {
        klassName: 'CSC 424: Databases',
        url: 'https://csicuny.smartcatalogiq.com/current/Undergraduate-Catalog/Courses/CSC-Computer-Science/400/CSC-424',
      },
      {
        klassName: 'CSC 430: Software Engineering',
        url: 'https://csicuny.smartcatalogiq.com/2019-2020/Undergraduate-Catalog/Courses/CSC-Computer-Science/400/CSC-430',
      },
      {
        klassName: 'CSC 450: Honors Workshop',
        url: 'https://csicuny.smartcatalogiq.com/en/current/Undergraduate-Catalog/Courses/CSC-Computer-Science/400/CSC-450',
      },
    ],
    extras: [
      'Studied Abroad in Tokyo, Japan - January 2017',
      'Graduated with Honors in Computer Science',
    ],
  },
  {
    degree: 'Minor - Mathematics',
    gradDate: 'June 2017',
    klassNames: [
      {
        klassName: 'MTH 349: Cryptology',
        url: 'https://csicuny.smartcatalogiq.com/current/Undergraduate-Catalog/Courses/MTH-Mathematics/300/MTH-349',
      },
      {
        klassName: 'MTH 338: Linear Algebra',
        url: 'https://csicuny.smartcatalogiq.com/2019-2020/Undergraduate-Catalog/Courses/MTH-Mathematics/300/MTH-338',
      },
      {
        klassName: 'MTH 311: Probability and Statistics',
        url: 'https://csicuny.smartcatalogiq.com/2019-2020/Undergraduate-Catalog/Courses/MTH-Mathematics/300/MTH-311',
      },
      {
        klassName: 'MTH 233: Calculus III',
        url: 'https://csicuny.smartcatalogiq.com/2018-2019/Undergraduate-Catalog/Courses/MTH-Mathematics/200/MTH-233',
      },
    ],
    extras: [],
  },
  {
    degree: 'Bachelor of Science - Psychology',
    gradDate: 'August 2014',
    klassNames: [
      {
        klassName: 'PSY 330: Cognitive Psychology Lab',
        url: 'https://csicuny.smartcatalogiq.com/2019-2020/Undergraduate-Catalog/Courses/PSY-Psychology/300/PSY-330',
      },
      {
        klassName: 'PSY 288: Cognitive Psychology',
        url: 'https://csicuny.smartcatalogiq.com/2019-2020/Undergraduate-Catalog/Courses/PSY-Psychology/200/PSY-288',
      },
      {
        klassName: 'PSY 242: Developmental Psychology',
        url: 'https://csicuny.smartcatalogiq.com/2019-2020/Undergraduate-Catalog/Courses/PSY-Psychology/200/PSY-242',
      },
      {
        klassName: 'PSY 232: Cognitive and Behavioral Neuroscience',
        url: 'https://csicuny.smartcatalogiq.com/2019-2020/Undergraduate-Catalog/Courses/PSY-Psychology/200/PSY-232',
      },
    ],
    extras: [],
  },
];

// Events
export const EVENT_ITEMS: IEvents.EventItem[] = [
  {
    title: 'Zillow Virtual Networking Series',
    gmap_url: 'https://maps.google.com/maps?q=1301%202nd%20Ave%20floor%2031%2C%20Seattle%2C%20WA%2098101&t=&z=13&ie=UTF8&iwloc=&output=embed',
    location: 'Zillow Group @ Seattle, WA',
    date: 'May 15, 2020',
    info_url: 'https://www.zillow.com/careers/',
    blurb: `Virtual event detailing the actions that Zillow 
                has taken to ensure a seamless transition to a remote
                world during the Covid-19 pandemic.`,
  },
  {
    title: 'Microsoft Information Event',
    gmap_url: 'https://maps.google.com/maps?q=15010%20NE%2036th%20St%20%2392%2C%20Redmond%2C%20WA%2098052&t=&z=13&ie=UTF8&iwloc=&output=embed',
    location: 'Microsoft HQ @ Redmond, WA',
    date: 'January 27-30, 2020',
    info_url: 'https://careers.microsoft.com/us/en/',
    blurb: `On-site events showcasing the Microsoft headquarters and 
                to screen potential candidates for open positions in the company.`,
  },
  {
    title: 'Google Sandbox Machine Learning Lab',
    gmap_url: 'https://maps.google.com/maps?q=85%2010th%20avenue&t=&z=13&ie=UTF8&iwloc=&output=embed',
    location: 'Google @ New York, NY',
    date: 'November 16, 2018',
    info_url: 'https://sandbox.withgoogle.com/highlights',
    blurb: `Workshop and seminar about Google's uses of machine learning, how Google+ 
                aided in AI technologies, and how JavaScript is just as capable as Python in the 
                world of ML.`,
  },
  {
    title: 'Electronic Frontier Foundation Meetup',
    gmap_url: 'https://maps.google.com/maps?q=38%20W%2026th%20St%2C%20New%20York%2C%20NY%2010010%2C%20USA&t=&z=13&ie=UTF8&iwloc=&output=embed',
    location: 'Flatiron Hall @ New York, NY',
    date: 'July 20, 2018',
    info_url: 'https://supporters.eff.org/join-efa',
    blurb: 'EFF hosted a happy hour meetup, coming all the way from San Francisco, CA.',
  },
  {
    title: 'Disability Inclusion at Facebook NY Fireside Chat',
    gmap_url: 'https://www.google.com/maps/embed/v1/place?q=770+Broadway+770+Broadway,+New+York,+NY+10003,+USA&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8',
    location: 'Facebook @ New York, NY',
    date: 'April 18, 2018',
    info_url: 'http://www.mydiversability.com/calendar/2018/4/18/outing-disability-inclusion-fb',
    blurb: 'Attended a disability inclusion discussion at Facebook in NYC.',
  },
  {
    title: 'Lime Connect NYC Recruitment Reception',
    gmap_url: 'https://maps.google.com/maps?q=50%20Vanderbilt%20Ave%2C%20New%20York%2C%20NY%2010017%2C%20USA&t=&z=13&ie=UTF8&iwloc=&output=embed',
    location: 'Vanderbilt @ New York, NY',
    date: 'September 11, 2017',
    info_url: 'https://www.limeconnect.com/programs/page/recruitment-receptions',
    blurb: 'Attended a recruitment event hosted by Lime Connect NYC.',
  },
  {
    title: 'CUNY Hackathon 2017s',
    gmap_url: 'https://maps.google.com/maps?q=315%20Hudson%20St%2C%20New%20York%2C%20NY%2010013%2C%20United%20States&t=&z=13&ie=UTF8&iwloc=&output=embed',
    location: 'Galvanize @ New York, NY',
    date: 'April 28-30, 2017',
    info_url: 'https://cunystartups.com/2017-spring-hackathon/',
    blurb: 'My team made a "Ball in a Cup" using C# and Unity3d.',
  },
  {
    title: 'Tokyo .NET Developers Meetup',
    gmap_url: 'https://maps.google.com/maps?q=jp%20tower&t=&z=13&ie=UTF8&iwloc=&output=embed',
    location: 'JP Tower @ Chiyoda, Tokyo',
    date: 'January 17, 2017',
    info_url: 'https://www.meetup.com/Tokyo-NET-Developers-Meetup/',
    blurb: 'Engineers from Medidata presented the wonders of .NET and some uses of F#.',
  },
  {
    title: 'Serverless in the P2P Web',
    gmap_url: 'https://maps.google.com/maps?q=33%20irving%20place%20new%20york&t=&z=13&ie=UTF8&iwloc=&output=embed',
    location: 'Serverless @ New York, NY',
    date: 'October 21, 2016',
    info_url: 'https://www.meetup.com/Serverless-NYC/events/234738007/',
    blurb: 'An engineer from Austin, TX presented the Beeker browser with serverless web capabilities.',
  },
  {
    title: 'Google Project Tango Hackathon',
    gmap_url: 'https://www.google.com/maps/embed/v1/place?q=450+Front+St,+Staten+Island,+NY+10304&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8',
    location: 'MakerSpace NYC @ Staten Island, NY',
    date: 'April 9, 2016',
    info_url: 'https://www.meetup.com/NYCVRU/events/229862118/',
    blurb: "Hackathon to build a VR application using Google's Project Tango software.",
  },
];

// Experience
export const CURRENT_JOB = 'current';
export const EXPERIENCE_ITEMS: IExperience.ExperienceRole[] = [
  {
    title: 'American Express Company',
    location: 'New York, NY',
    duration: {
      startDate: '4/26/2021',
      endDate: CURRENT_JOB,
    },
    company_logo: 'americanexpress.png',
    info_url: 'https://www.americanexpress.com/',
    key_tech: [],
  },
  {
    title: 'Virtusa Corporation',
    location: 'Buffalo, NY',
    duration: {
      startDate: '6/5/2020',
      endDate: '4/16/2021',
    },
    company_logo: 'virtusa.png',
    info_url: 'https://www.virtusa.com/',
    key_tech: [
      'drools.png',
      'openshift.png',
      'spring.png',
    ],
  },
  {
    title: 'Prudential Insurance',
    location: 'Newark, NJ',
    duration: {
      startDate: '4/1/2019',
      endDate: '3/3/2020',
    },
    company_logo: 'prudential.jpg',
    info_url: 'https://www.prudential.com/',
    key_tech: [
      'angular.png',
      'jasmine.png',
      'spring.png',
      'sql.png',
      'typescript.jpg',
    ],
  },
  {
    title: 'Goodwill Industries NY',
    location: 'Queens, NY',
    duration: {
      startDate: '12/10/2018',
      endDate: '3/1/2019',
    },
    company_logo: 'goodwill.png',
    info_url: 'https://www.goodwillnynj.org/',
    key_tech: [
      'nodejs.png',
    ],
  },
  {
    title: 'Bloomberg LP',
    location: 'New York, NY',
    duration: {
      startDate: '4/2/2018',
      endDate: '6/29/2018',
    },
    company_logo: 'bloomberg.jpg',
    info_url: 'https://www.bloomberg.com/',
    key_tech: [
      'rails.png',
      'reactjs.jpg',
      'sql.png',
    ],
  },
  {
    title: 'College of Staten Island OTS',
    location: 'Staten Island, NY',
    duration: {
      startDate: '3/9/2016',
      endDate: '2/8/2018',
    },
    company_logo: 'cunycsi.jpg',
    info_url: 'https://www.csi.cuny.edu/online-resources/office-information-technology-services',
    key_tech: [],
  },
  {
    title: 'RFCUNY',
    location: 'Staten Island, NY',
    duration: {
      startDate: '4/15/2016',
      endDate: '9/15/2017',
    },
    company_logo: 'rfcuny.jpg',
    info_url: 'https://www.rfcuny.org/RFWebsite/',
    key_tech: [
      'nodejs.png',
    ],
  },
];

// Footer
export const TWITTER: string = 'Twitter';
export const MEDIUM: string = 'Medium';
export const EMAIL_TEXT: string = 'Email';
export const LINKEDIN: string = 'LinkedIn';
export const GITHUB: string = 'Github';
export const RESUME_TEXT: string = 'Resume';
export const TWITTER_LINK: string = 'https://twitter.com/jcosentino91';
export const MEDIUM_LINK: string = 'https://medium.com/@jcosentino';
export const EMAIL_LINK: string = 'johnscosentino@gmail.com';
export const LINKEDIN_LINK: string = 'https://www.linkedin.com/in/john-cosentino/';
export const GITHUB_LINK: string = 'https://github.com/jcosentino';
export const RESUME_LINK: string = 'footer/resume.pdf';
export const FOOTER_DATA: IShared.ImgIconData[] = [
  {
    url: TWITTER_LINK,
    imageSrc: 'twitter.png',
    alt: TWITTER,
  },
  {
    url: MEDIUM_LINK,
    imageSrc: 'medium.png',
    alt: MEDIUM,
  },
  {
    url: `mailto:${EMAIL_LINK}?subject`,
    imageSrc: 'email.png',
    alt: EMAIL_TEXT,
  },
  {
    url: LINKEDIN_LINK,
    imageSrc: 'linkedin.png',
    alt: LINKEDIN,
  },
  {
    url: GITHUB_LINK,
    imageSrc: 'github.png',
    alt: GITHUB,
  },
  {
    url: RESUME_LINK,
    imageSrc: 'download.png',
    alt: RESUME_TEXT,
  },
];

// Header
export const UP_ARROW_KEY: string = 'up-arrow';
export const DOWN_ARROW_KEY: string = 'down-arrow';
export const FULL_NAME: string = 'John Cosentino';
export const EXPERIENCE: string = 'Experience';
export const EDUCATION: string = 'Education';
export const PROJECTS: string = 'Projects';
export const SOFTWARE: string = 'Software';
export const EVENTS: string = 'Events';
export const ABOUT: string = 'About';
export const HEADER_ITEMS: string[] = [
  'Experience',
  'Education',
  'Projects',
  'Software',
  'Events',
  'About',
];

// HomeLanding
export const PHOTOS: IShared.ImgIconData[] = [
  {
    imageSrc: 'self/me.jpg',
    caption: 'Me at a party circa 2017',
  },
  {
    imageSrc: 'self/1n.jpg',
    caption: 'In front of my departmental building after graduation',
  },
  {
    imageSrc: 'self/honors_convocation.jpg',
    caption: 'Honors Convocation 2017',
  },
  {
    imageSrc: 'self/honors_convocation_group.jpg',
    caption: 'Honors Convocation 2017 computer science group',
  },
  {
    imageSrc: 'self/hackathon_team.jpg',
    caption: 'My team at CUNY Hackathon',
  },
  {
    imageSrc: 'self/hackathon_crowd.jpg',
    caption: 'The CUNY Hackathon crowd during the presentations',
  },
  {
    imageSrc: 'self/hackathon_prizes.jpg',
    caption: 'The prizes at the hackathon',
  },
];

// IE Error
export const IE_ERROR_MSG: string = `Internet Explorer is not supported by
                             this website. Please use a different browser.`;
export const IE_HELP_LINK: string = 'This link might be useful.';

// Modal
export const MODAL_HELPER_TEXT: string = `Thank you for visiting my website!
                                  If you would like to see my Github
                                  page, click on the icon below:`;

// Projects
export const IN_PROGRESS: string = 'In Progress...';

export const PROJECT_ITEMS: IProjects.ProjectItem[] = [
  {
    project: 'Doctor Appointment Scheduler',
    blurb: `I wanted to re-create my college team's doctor 
              appointment schedule application. The original used
              C#, .NET, and MySQL. The new application will offer
              both, Angular and React + TypeScript, GUIs. The backend
              is written in Flask, a Python-based web framework.
              For datastore, MySQL is utilized. It has not yet 
              been uploaded to AWS; it is a work-in-progress.`,
    time: `${IN_PROGRESS}`,
    key_tech: [
      'angular.png',
      'jasmine.png',
      'reactjs.jpg',
      'python.png',
      'aws.jpg',
      'typescript.jpg',
    ],
    code_links: [
      'https://github.com/jcosentino/doctor-appointment-scheduler-angular',
      'https://github.com/jcosentino/doctor-appointment-scheduler-reactjs',
      'https://github.com/jcosentino/doctor-appointment-scheduler-API-flask',
    ],
    host_link: '',
    display_link: '',
    screenshots: [
      'project_screenshots/doctor_app_frontend_1.png',
      'project_screenshots/doctor_app_frontend_2.png',
      'project_screenshots/doctor_app_backend_1.png',
    ],
  },
  {
    project: 'Portfolio Website',
    blurb: 'It is the code that powers this very website.',
    time: '4/13/2020',
    key_tech: [
      'reactjs.jpg',
      'redux.png',
      'nodejs.png',
      'typescript.jpg',
      'webpack.png',
    ],
    code_links: [
      'https://github.com/jcosentino/portfolio-site',
    ],
    host_link: HOST_URL,
    display_link: HOST_URL,
    screenshots: [
      'project_screenshots/portfolio_site_1.png',
      'project_screenshots/portfolio_site_2.png',
    ],
  },
  {
    project: 'Purchase Order Search / Indexer',
    blurb: `This application was built in under a month, and it was designed to
              searched a Shared Drive and pull purchase order .pdf files and 
              image files. The purchase orders did not maintain a common style,
              so there was a great deal of parsing that needed to get done.`,
    time: '2/28/2019',
    key_tech: [
      'nodejs.png',
    ],
    code_links: [
      'https://github.com/jcosentino/po_search_app',
    ],
    host_link: PO_SEARCH_HOST_ROUTE,
    display_link: `${HOST_URL}${PO_SEARCH_HOST_ROUTE}`,
    screenshots: [
      'project_screenshots/po_search_app_1.png',
      'project_screenshots/po_search_app_2.png',
      'project_screenshots/po_search_app_3.png',
    ],
  },
  {
    project: 'RFCUNY Honors Research',
    blurb: `This was my honors research project from my undergraduate program.
              Two of my colleagues and I added to a visual system, which was 
              designed for cyber-defense competitions, features such as:
              Nagios3 monitoring for up and down URLs using http-checker,
              implementation of Flapjack.io into project,
              Caching of results in Redis database, etc.`,
    time: '9/15/2017',
    key_tech: [
      'nodejs.png',
    ],
    code_links: [],
    host_link: '',
    display_link: '',
    screenshots: [
      'project_screenshots/research_app_1.png',
      'project_screenshots/research_app_2.png',
      'project_screenshots/research_app_3.png',
    ],
  },
  {
    project: 'CUNY Tech Prep - NYC TTP',
    blurb: `CUNY Tech Prep is a year-long JavaScript bootcamp hosted by the 
              New York City Tech Talent Pipeline. They teach NodeJS, ReactJS, SQL
              concepts, OOP, data structures, and other topics not taught in-depth
              in school.`,
    time: '6/23/2017',
    key_tech: [
      'nodejs.png',
      'reactjs.jpg',
      'sql.png',
    ],
    code_links: [],
    host_link: 'https://cunytechprep.nyc/',
    display_link: 'https://cunytechprep.nyc/',
    screenshots: [
      'project_screenshots/ctp_project_1.png',
    ],
  },
];

// Software
export const SOFTWARE_ITEMS: IShared.ImgIconData[] = [
  {
    url: 'https://angular.io/',
    imageSrc: 'software/angular.png',
    alt: 'Angular',
  },
  {
    url: 'https://aws.amazon.com/',
    imageSrc: 'software/aws.jpg',
    alt: 'Amazon Web Services',
  },
  {
    url: 'https://www.drools.org/',
    imageSrc: 'software/drools.png',
    alt: 'Drools BRMS',
  },
  {
    url: 'https://palletsprojects.com/p/flask/',
    imageSrc: 'software/python.png',
    alt: 'Flask',
  },
  {
    url: 'https://jasmine.github.io/',
    imageSrc: 'software/jasmine.png',
    alt: 'Jasmine',
  },
  {
    url: 'https://nodejs.org/',
    imageSrc: 'software/nodejs.png',
    alt: 'Node JS',
  },
  {
    url: 'https://www.openshift.com/',
    imageSrc: 'software/openshift.png',
    alt: 'Openshift',
  },
  {
    url: 'https://reactjs.org/',
    imageSrc: 'software/reactjs.jpg',
    alt: 'React JS',
  },
  {
    url: 'https://redux.js.org/',
    imageSrc: 'software/redux.png',
    alt: 'Redux',
  },
  {
    url: 'https://rubyonrails.org/',
    imageSrc: 'software/rails.png',
    alt: 'Ruby On Rails',
  },
  {
    url: 'https://spring.io/',
    imageSrc: 'software/spring.png',
    alt: 'Spring',
  },
  {
    url: 'https://www.w3schools.com/sql/sql_intro.asp',
    imageSrc: 'software/sql.png',
    alt: 'SQL',
  },
  {
    url: 'https://www.typescriptlang.org/',
    imageSrc: 'software/typescript.jpg',
    alt: 'TypeScript',
  },
  {
    url: 'https://webpack.js.org/',
    imageSrc: 'software/webpack.png',
    alt: 'Webpack',
  },
];
