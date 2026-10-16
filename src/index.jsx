import React from 'react';
import ReactDOM from 'react-dom/client';
import Resume from './Resume';
import ResumeContainer from './ResumeContainer';
import data from './data';
import 'tachyons/css/tachyons.min.css';
import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="bg-light-silver avenir sans-serif">
      <ResumeContainer className="bg-white">
        <Resume data={data}/>
      </ResumeContainer>
    </div>
  </React.StrictMode>
);
