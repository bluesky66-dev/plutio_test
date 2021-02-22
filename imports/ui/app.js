import { Meteor } from 'meteor/meteor';
import React, { Fragment } from 'react';
import {NavBar} from './components/NavBar/NavBar';
import {Page} from './pages/Page';
import './app.css';

const App = () => {
  Meteor.subscribe('tasks');
  return (
  <Fragment>
    <NavBar />
    <Page />
  </Fragment>
)
};

export default App;
