import React, { PropTypes } from 'react';
import Sidebar from './Sidebar';
import WorkEx from './WorkEx';
import Project from './Project';
import SectionContainer from './SectionContainer';
import PSDILogo from './assets/psdi.png';

const Resume = ({
  data,
}) => {
  return (
    <div className="h-100 flex flex-column">
      <div className="white flex title-bg-color items-center">
        <div className="pl5 pv4 w-90">
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
        <div className="w-10">
          <img src={PSDILogo} alt="PSDI Logo" height="100" width="100"/>
        </div>
      </div>
      <div className="flex flex-auto">
        <div className="w-25 pa3 heading-bg-color">
          <Sidebar
            languages={data.skills.languages}
            libraries={data.skills.libraries}
            technologies={data.skills.technologies}
            certifications={data.skills.certifications}
            education={data.education}
            links={data.links}/>
        </div>
        <div className="w-75 pl3 pt2 pr3">
          <SectionContainer heading="Work Experience">
            {
              data.experience.jobs.map((job, i) => {
                return job.isDisplayed ? <WorkEx key={i} data={job}/> : null;
              })
            }
          </SectionContainer>
          <SectionContainer heading="Projects">
            {
              data.experience.projects.map((project, i) => {
                return project.isDisplayed ? <Project key={i} data={project}/> : null;
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
