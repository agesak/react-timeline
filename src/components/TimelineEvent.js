import React from 'react';
import Timeline from './Timeline';
import './TimelineEvent.css';
import Timestamp from './Timestamp';
import PropTypes from 'prop-types';

const TimelineEvent = (props) => {

  return (
  <div>
    <ul>
      <li>Person: {props.person}</li>
      <li>Status: {props.status}</li>
      <li>Timestamp: <Timestamp time={props.timeStamp}/></li>
    </ul>
  </div>
  );
};

TimelineEvent.propTypes = {
  person: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired
};

export default TimelineEvent;