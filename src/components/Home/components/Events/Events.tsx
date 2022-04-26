import React, { Fragment, ReactFragment } from 'react';
import './Events.scss';
import { IEvents } from 'custom_types/events_types';
import { EVENT_ITEMS } from 'constants/constants';
import { HomeMenu } from '../Shared';

const anchorId: string = 'Events';
const headerTitle: string = 'Events';
const renderItems: string[] = EVENT_ITEMS.map((event: IEvents.EventItem) => event.title);

function createEvent(
  gmap_url: string,
  location: string,
  date: string,
  info_url: string,
  blurb: string,
  index: number,
): ReactFragment {
  return (
    <Fragment key={index}>
      <p>
        Location:
        {' '}
        {location}
      </p>
      <div className="google-map">
        <iframe
          src={gmap_url}
          title={location}
        />
      </div>
      <p>
        Date:
        {' '}
        {date}
      </p>
      <p>
        URL:
        {' '}
        <a href={info_url} target="blank" rel="noopener noreferrer">
          {info_url}
        </a>
      </p>
      <p>
        Blurb:
        {' '}
        {blurb}
      </p>
    </Fragment>
  );
}

function generateEvents(): ReactFragment[] {
  return EVENT_ITEMS.map((event: IEvents.EventItem, index: number) => createEvent(
    event.gmap_url,
    event.location,
    event.date,
    event.info_url,
    event.blurb,
    index,
  ));
}

const customDiv: ReactFragment[] = (generateEvents());

function Events(): JSX.Element {
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

export default Events;
