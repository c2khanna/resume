import React, { PropTypes } from 'react';
import moment from 'moment';

const Project = ({
  data,
}) => {
  const { name, technologies, links, startDate, endDate, description } = data;
  return (
    <div>
      <div className="f4 mb1 flex">
        <span className="b ttc">{name}</span>
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
        &nbsp;-&nbsp;
        <span className="silver">
          { moment(startDate).format('MMMM YYYY')}
        </span>
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

function ParenthasizedList(items) {
  return `(${items.join(' | ')})`
}

Project.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Project;
