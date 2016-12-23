import React, { PropTypes } from 'react';
import SidebarList from './SidebarList';
import moment from 'moment';

const Sidebar = ({
  languages,
  technologies,
  links,
  education,
}) => {
  return (
    <div>
      <div className="tr pb4">
        <div className="f3 mb2">Contact Info</div>
        {
          links.map((link, index) => (
            <div key={index}>
              <span className="pr1">
                {link.type}:
              </span>
              <a className="link" href={link.ref}>
                {link.display}
              </a>
            </div>
          ))
        }
      </div>
      <SidebarList
        className="pb4"
        items={getSortedLanguages(languages)}
        title="Languages"/>
      <SidebarList
        className="pb4"
        items={technologies} title="Technologies"/>
      <div className="tr pb4">
        <div className="f3 mb2">Education</div>
        <div>
          <div>Candidate for {education.university.degree}</div>
          <div>{moment(education.university.startDate).format('MMMM YYYY')} - Present</div>
        </div>
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
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
  education: PropTypes.object.isRequired,
};

export default Sidebar;
