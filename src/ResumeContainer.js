import React, { PropTypes } from 'react';
import cx from 'classnames';

const width = 1024;
const height = 11 / 8.5 * width;

const baseStyles = {
  width: `${width}px`,
  height: `${height}px`,
};

const ResumeContainer = ({
  children,
  style = {},
  className = '',
}) => (
  <div
    style={{ ...baseStyles, ...style }}
    className={cx('center', className)}>
    {children}
  </div>
);

ResumeContainer.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default ResumeContainer;
