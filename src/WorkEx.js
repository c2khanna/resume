import React, { PropTypes } from 'react';
import moment from 'moment';

const WorkEx = ({
  data,
}) => {
  const { jobTitle, company, technologies, startDate, endDate, description } = data;
  return (
    <div className="pb2">
      <div className="f4 mb1">
        <span className="fw6 ttc">{jobTitle}, </span>
        <span className="ttu">{company}</span>
      </div>
      <div>
        ({technologies.join(' | ')})
        &nbsp;-&nbsp;
        <span className="silver">
          {moment(startDate).format('MMMM YYYY')} - {(moment(endDate).isValid()) ?
            moment(endDate).format('MMMM YYYY') : 'Present'}
        </span>
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
