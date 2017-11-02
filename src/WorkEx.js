import React, { PropTypes } from 'react';
import moment from 'moment';

const WorkEx = ({
  data,
}) => {
  const { jobTitle, company, startDate, endDate, description } = data;
  return (
    <div>
      <div className="f4 mb1">
        <span className="fw6 ttc">{jobTitle}, </span>
        <span className="ttu">{company}</span>
      </div>
      <div className="silver">
        {moment(startDate).format('MMMM YYYY')} -
        {(moment(endDate).isValid()) ?
          moment(endDate).format('MMMM YYYY') : 'Present'}
      </div>
      <ul className="mt1">
        {
          description.map((line, index) => {
            return <li className="mb1" key={index}>{line}</li>;
          })
        }
      </ul>
    </div>
  );
};

WorkEx.propTypes = {
  data: PropTypes.object.isRequired,
};

export default WorkEx;
