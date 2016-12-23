import React, { PropTypes } from 'react';
import cx from 'classnames';

const SidebarList = ({
  title,
  items,
  className = '',
  style = {},
}) => {
  return (
    <div className={cx('tr', className)} style={style}>
      <div className="f3 mb2">{title}</div>
      <div className="list">
        {
          items.map((item, index) => (
            <div className="pb1" key={index}>
              {item}
            </div>
          ))
        }
      </div>
    </div>
  );
};

SidebarList.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default SidebarList;
