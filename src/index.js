import React from 'react';
import ReactDOM from 'react-dom';
import Xuefei from './Xuefei';
import Tsing from './Tsing';
import Christina from './Christina';
import './style/index.css';

ReactDOM.render(
  <Xuefei />,
  document.getElementById('Xuefei')
);
ReactDOM.render(
  <Tsing />,
  document.getElementById('Tsing')
);
ReactDOM.render(
  <Christina />,
  document.getElementById('Christina')
);
