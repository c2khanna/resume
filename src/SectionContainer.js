import React, { PropTypes } from 'react';

const SectionContainer = ({
  heading,
  children,
}) => {
  return (
    <div className="pa2 pb0 pt3">
      <div className="f3 ttu pa2 pb1 heading-bg-color">{heading}</div>
      <div className="mt3">
        {children}
      </div>
    </div>
  );
};

SectionContainer.propTypes = {
  children: PropTypes.node.isRequired,
  heading: PropTypes.string.isRequired,
};

export default SectionContainer;
