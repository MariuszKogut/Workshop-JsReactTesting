import './theme/styles.scss';
const logo = require('./logo.svg');

import * as React from 'react';
import Caluclator from './components/Calculator';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React - tweaked by F2C</h2>
        </div>
        <Caluclator/>
      </div>
    );
  }
}