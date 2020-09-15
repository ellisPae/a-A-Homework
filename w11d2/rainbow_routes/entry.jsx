import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter,
} from 'react-router-dom';
import Rainbow from './components/rainbow.jsx';

const Root = () => (
  <HashRouter>
    <Rainbow />
  </HashRouter>
);
// makes the router available to all any descendent React Router
// components such as <Route /> and <Link />

document.addEventListener('DOMContentLoaded', () => {
  const main = document.getElementById('main');
  ReactDOM.render(
    <Root />,
    main
  );
});
