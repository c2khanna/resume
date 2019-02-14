import React, { PropTypes } from 'react';
import Sidebar from './Sidebar';
import WorkEx from './WorkEx';
import Project from './Project';
import SectionContainer from './SectionContainer';

const Resume = ({
  data,
}) => {
  return (
    <div className="h-100 flex flex-column">
      <div className="white pv4 title-bg-color">
        <div className="f1 tc pb1 ttu">{data.name}</div>
        <div className="f4 tc">
          {data.subtitle}
        </div>
        <div className="tc f5">
          <a className="emailLink" href={data.email.ref}>
            {data.email.display}
          </a>
        </div>
      </div>
      <div className="flex flex-auto">
        <div className="w-25 pa3 heading-bg-color">
          <Sidebar
            languages={data.skills.languages}
            libraries={data.skills.libraries}
            technologies={data.skills.technologies}
            education={data.education}
            links={data.links}/>
        </div>
        <div className="w-75 pl3 pt2 pr3">
          <SectionContainer heading="Work Experience">
            {
              data.experience.jobs.map((job, i) => {
                return <WorkEx key={i} data={job}/>;
              })
            }
          </SectionContainer>
          <SectionContainer heading="Projects">
            {
              data.experience.projects.map((project, i) => {
                return <Project key={i} data={project}/>;
              })
            }
          </SectionContainer>
        </div>
      </div>
    </div>
  );
};

Resume.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Resume;
