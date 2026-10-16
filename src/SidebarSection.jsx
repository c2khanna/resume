import React from 'react';
import PropTypes from 'prop-types';

const SidebarSection = ({
  heading,
  children,
}) => {
  return (
    <div className="tr pb3">
      <div className="f3 mb1 ttu">{heading}</div>
      <div>{children}</div>
    </div>
  );
};

SidebarSection.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default SidebarSection;
