import React, { PropTypes } from 'react';

const SidebarSection = ({
  heading,
  children,
}) => {
  return (
    <div className="tr pb4">
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
