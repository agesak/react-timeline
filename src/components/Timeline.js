import React from 'react';
import PropTypes from 'prop-types';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (timelineEvents) => {
  
  const Events = timelineEvents.events.map((timelineEvent, index) => {
    return(
    <div key={index}>
    <TimelineEvent person={timelineEvent.person}
    status={timelineEvent.status} timeStamp={timelineEvent.timeStamp}/>
    </div>
    )
  });

  return (
    <div className="timeline">
      {Events}
    </div>
  )

}

Timeline.propTypes = {
  events: PropTypes.array.isRequired
};

export default Timeline;