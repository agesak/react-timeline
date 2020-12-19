import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (timelineEvents) => {
  // console.log(timelineEvents)
  

  const what = timelineEvents.events.map((timelineEvent, index) => {
    return(
    <li key={index}>
    <TimelineEvent person={timelineEvent.person}
    status={timelineEvent.status} timeStamp={timelineEvent.timeStamp}/>
    </li>
    )
  });

  // console.log(what);

  return what;
}

export default Timeline;