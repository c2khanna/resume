import React from 'react';
import ReactDOM from 'react-dom';
import Resume from './Resume';
import data from './data';
import 'tachyons/css/tachyons.min.css';

ReactDOM.render(
  <Resume data={data}/>,
  document.getElementById('root')
);
