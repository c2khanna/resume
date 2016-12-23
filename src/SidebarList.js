import React, { PropTypes } from 'react';

const SidebarList = ({
  items,
}) => {
  return (
    <div className="list">
      {
        items.map((item, index) => (
          <div className="pb1" key={index}>
            {item}
          </div>
        ))
      }
    </div>
  );
};

SidebarList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SidebarList;
