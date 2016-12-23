import React, { PropTypes } from 'react';
import Sidebar from './Sidebar';
import WorkEx from './WorkEx';
import Project from './Project';
import SectionContainer from './SectionContainer';

const Resume = ({
  data,
}) => {
  return (
    <div className="h-100 pv3">
      <div className="f1 tc pb1">{data.name}</div>
      <div className="f4 tc pb3">
        {data.education.university.term} {data.education.university.program}
      </div>
      <div className="flex">
        <div className="w-25 pl3 pr2">
          <Sidebar
            languages={data.skills.languages}
            technologies={data.skills.technologies}
            education={data.education}
            links={data.links}/>
        </div>
        <div className="w-75 pl2 pr3">
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
