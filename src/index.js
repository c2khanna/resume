import React from 'react';
import ReactDOM from 'react-dom';
import Resume from './Resume';
import ResumeContainer from './ResumeContainer';
import data from './data';
import 'tachyons/css/tachyons.min.css';

ReactDOM.render(
  <div className="bg-light-silver">
    <ResumeContainer className="bg-white">
      <Resume data={data}/>
    </ResumeContainer>
  </div>,
  document.getElementById('root')
);
