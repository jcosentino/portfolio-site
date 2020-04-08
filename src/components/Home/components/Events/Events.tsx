import React from 'react';
import './Events.scss';
import { HomeMenu } from '../Shared';
import { IEvents } from 'custom_types/events_types';

const EVENTS: IEvents.EventItem[] = [
  {
    "title": "Microsoft Recruitment Event",
    "gmap_url": "https://maps.google.com/maps?q=15010%20NE%2036th%20St%20%2392%2C%20Redmond%2C%20WA%2098052&t=&z=13&ie=UTF8&iwloc=&output=embed",
    "location": "Microsoft HQ @ Redmond, WA",
    "date": "January 27-30, 2020",
    "info_url": "https://careers.microsoft.com/us/en/",
    "blurb": `On-site events showcasing the Microsoft headquarters and 
              to screen potential candidates for open positions in the company.`
  },
  {
    "title": "Google Sandbox Machine Learning Lab",
    "gmap_url": "https://maps.google.com/maps?q=85%2010th%20avenue&t=&z=13&ie=UTF8&iwloc=&output=embed",
    "location": "Google @ New York, NY",
    "date": "November 16, 2018",
    "info_url": "https://sandbox.withgoogle.com/highlights",
    "blurb": `Workshop and seminar about Google's uses of machine learning, how Google+ 
              aided in AI technologies, and how JavaScript is just as capable as Python in the 
              world of ML.`
  },
  {
    "title": "Electronic Frontier Foundation Meetup",
    "gmap_url": "https://maps.google.com/maps?q=38%20W%2026th%20St%2C%20New%20York%2C%20NY%2010010%2C%20USA&t=&z=13&ie=UTF8&iwloc=&output=embed",
    "location": "Flatiron Hall @ New York, NY",
    "date": "July 20, 2018",
    "info_url": "https://supporters.eff.org/join-efa",
    "blurb": "EFF hosted a happy hour meetup, coming all the way from San Francisco, CA."
  },
  {
    "title": "Lime Connect NYC Recruitment Reception",
    "gmap_url": "https://maps.google.com/maps?q=50%20Vanderbilt%20Ave%2C%20New%20York%2C%20NY%2010017%2C%20USA&t=&z=13&ie=UTF8&iwloc=&output=embed",
    "location": "Vanderbilt @ New York, NY",
    "date": "September 11, 2017",
    "info_url": "https://www.limeconnect.com/programs/page/recruitment-receptions",
    "blurb": "Attended a recruitment event hosted by Lime Connect NYC."
  },
  {
    "title": "CUNY Hackathon 2017s",
    "gmap_url": "https://maps.google.com/maps?q=315%20Hudson%20St%2C%20New%20York%2C%20NY%2010013%2C%20United%20States&t=&z=13&ie=UTF8&iwloc=&output=embed",
    "location": "Galvanize @ New York, NY",
    "date": "April 28-30, 2017",
    "info_url": "https://cunystartups.com/2017-spring-hackathon/",
    "blurb": "My team made a \"Ball in a Cup\" using C# and Unity3d."
  },
  {
    "title": "Saturday Python Study Group",
    "gmap_url": "https://maps.google.com/maps?q=568%20broadway%2C%20new%20york&t=&z=13&ie=UTF8&iwloc=&output=embed",
    "location": "WeWork Charging Bull, New York, NY",
    "date": "February 25, 2017",
    "info_url": "https://www.meetup.com/learn-python-nyc/events/mztggmywkbcb/",
    "blurb": "Python experts tutored newbies and advanced Python users alike."
  },
  {
    "title": "Tokyo .NET Developers Meetup",
    "gmap_url": "https://maps.google.com/maps?q=jp%20tower&t=&z=13&ie=UTF8&iwloc=&output=embed",
    "location": "JP Tower @ Chiyoda, Tokyo",
    "date": "January 17, 2017",
    "info_url": "https://www.meetup.com/Tokyo-NET-Developers-Meetup/",
    "blurb": "Engineers from Medidata presented the wonders of .NET and some uses of F#."
  },
  {
    "title": "Serverless in the P2P Web",
    "gmap_url": "https://maps.google.com/maps?q=33%20irving%20place%20new%20york&t=&z=13&ie=UTF8&iwloc=&output=embed",
    "location": "Serverless @ New York, NY",
    "date": "October 21, 2016",
    "info_url": "https://www.meetup.com/Serverless-NYC/events/234738007/",
    "blurb": "An engineer from Austin, TX presented the Beeker browser with serverless web capabilities."
  },
  {
    "title": "Google Project Tango Hackathon",
    "gmap_url": "https://maps.google.com/maps?q=Staten%20Island%20MakerSpace%2C%20450%20Front%20St%2C%20Unit%20B%2C%20Staten%20Island%2C%20NY%2C%20us%2C%2010304&t=&z=13&ie=UTF8&iwloc=&output=embed",
    "location": "MakerSpace NYC @ Staten Island, NY",
    "date": "April 9, 2016",
    "info_url": "https://www.meetup.com/NYCVRU/events/229862118/",
    "blurb": "Hackathon to build a VR application using Google's Project Tango software."
  }
];

const anchorId: string = 'Events';
const headerTitle: string = 'Events';
const renderItems: string[] = EVENTS.map((event: IEvents.EventItem) => event.title);

function createEvent(gmap_url: string,
                     location: string,
                     date: string,
                     info_url: string,
                     blurb: string,
                     index: number
  ): React.ReactFragment {
  return (
    <React.Fragment key={index}>
      <p>Location: {location}</p>
      <div className='google-map'>
        <iframe src={gmap_url} 
                title={location} >
        </iframe>
      </div>
      <p>Date: {date}</p>
      <p>URL: <a href={info_url} target='blank' rel='noopener noreferrer'>
                {info_url}
              </a>
      </p>
      <p>Blurb: {blurb}</p>
    </React.Fragment>
  );
}

function generateEvents(): React.ReactFragment[] {
  return EVENTS.map((event: IEvents.EventItem, index: number) => 
    createEvent(event.gmap_url,
      event.location,
      event.date,
      event.info_url,
      event.blurb,
      index
    )
  );
}

const customDiv: React.ReactFragment[] = (generateEvents());

export function Events(): JSX.Element {
  return (
    <div>
      <HomeMenu anchorId={anchorId}
                headerTitle={headerTitle}
                renderItems={renderItems}
                customDiv={customDiv} />
    </div>
  );
}