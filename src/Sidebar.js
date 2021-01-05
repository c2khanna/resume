import React, { PropTypes } from 'react';
import SidebarList from './SidebarList';
import SidebarSection from './SidebarSection';
import moment from 'moment';

const Sidebar = ({
  languages,
  libraries,
  technologies,
  links,
  education,
  certifications,
}) => {
  return (
    <div className="h-100 flex flex-column justify-between">
      <div>
        <SidebarSection heading="Languages">
          <SidebarList items={getSortedLanguages(languages)}/>
        </SidebarSection>
        <SidebarSection heading="Libraries & Frameworks">
          <SidebarList items={libraries}/>
        </SidebarSection>
        <SidebarSection heading="Technologies">
          <SidebarList items={technologies}/>
        </SidebarSection>
        <SidebarSection heading="Certifications">
          {
            certifications.map((certificate, index) => (
              <div key={index} className="pb1">
                <a className="link" href={certificate.ref}>
                  {certificate.display}
                </a>
              </div>
            ))
          }
        </SidebarSection>
        <SidebarSection heading="Contacts">
          {
            links.map((link, index) => (
              <div key={index} className="pb1">
                <span className="pr1">
                  {link.type}:
                </span>
                <a className="link" href={link.ref}>
                  {link.display}
                </a>
              </div>
            ))
          }
        </SidebarSection>
      </div>
      <div>
        <SidebarSection heading="Education">
          <div className="b pb1">{education.university.name}</div>
          <div className="pb1">{education.university.degree}</div>
          <div>{moment(education.university.startDate).format('MMMM YYYY')} -
            &nbsp;{moment(education.university.endDate).format('MMMM YYYY')}</div>
        </SidebarSection>
      </div>
    </div>
  );
};

function getSortedLanguages(languages) {
  return languages
    .sort((a, b) => {
      if (a.proficiency > b.proficiency) return -1;
      if (a.proficiency < b.proficiency) return 1;
      return 0;
    })
    .map((language) => language.name);
}

Sidebar.propTypes = {
  languages: PropTypes.arrayOf(PropTypes.object).isRequired,
  libraries: PropTypes.arrayOf(PropTypes.string).isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
  education: PropTypes.object.isRequired,
  certifications: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Sidebar;
