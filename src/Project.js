import React, { PropTypes } from 'react';
import moment from 'moment';

const Project = ({
  data,
}) => {
  const { name, technologies, links, startDate, description } = data;
  return (
    <div className="pb2">
      <div className="f4 mb1 flex">
        <span className="fw6 ttc">{name}</span>
        {
          links.map((link, i) => (
            <span key={i} className="flex items-center f5">
              &nbsp;-&nbsp;
              <a className="link" href={link.ref}>
                {link.display}
              </a>
            </span>
          ))
        }
      </div>
      <div>
        ({technologies.join(' | ')})
        {/* &nbsp;-&nbsp; */}
        {/* <span className="silver">
          { moment(startDate).format('MMMM YYYY')}
        </span> */}
      </div>
      <ul className="mt2">
        {
          description.map((line, index) => {
            return <li className="mb1" key={index}>{line}</li>;
          })
        }
      </ul>
    </div>
  );
};

Project.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Project;
