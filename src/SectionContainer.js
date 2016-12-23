import React, { PropTypes } from 'react';

const SectionContainer = ({
  heading,
  children,
}) => {
  return (
    <div className="pa2">
      <div className="f3">{heading}</div>
      <hr/>
      {children}
    </div>
  );
};

SectionContainer.propTypes = {
  children: PropTypes.node.isRequired,
  heading: PropTypes.string.isRequired,
};

export default SectionContainer;
