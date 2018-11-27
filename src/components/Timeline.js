import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  const events = props.events.map((event) => {
    return <TimelineEvent person={event.person}
    status={event.status}
    timeStamp={event.timeStamp}
    key={event.person}
    />
  });

  return(
    <section className="timeline">
      {events}
    </section>

  );

}

export default Timeline;
//
// const timelineEvents = timelineData.events.map((event) => {
//   return <TimelineEvent
//   person={event.person}
//   status={event.status}
//   timestamp={event.timeStamp}
//   key={event.timeStamp}
//   />
// })
//
// <section className='timeline-event'>
//   <p className='event-person'>{props.person}</p>
//   <p  className='event-status'>{props.status}</p>
//   <p  className='event-time'><Timestamp title={props.timestamp}/></p>
// </section>
