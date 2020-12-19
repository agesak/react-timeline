import React from 'react';
import PropTypes from 'prop-types';
import './TimelineEvent.css';
import Timestamp from './Timestamp';


const TimelineEvent = (props) => {
  return (
  <div className="timeline-event">
      <h3 className="event-person">{props.person}</h3>
      <span className="event-time"><Timestamp time={props.timeStamp}/></span>
      <p className="event-status">{props.status}</p>
  </div>
  );
};

TimelineEvent.propTypes = {
  person: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired
};

export default TimelineEvent;