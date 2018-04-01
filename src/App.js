import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount(){
    const elem = document.getElementById('ipl-progress-indicator')
    if(elem){
      setTimeout(() => {
        elem.classList.add('available')
        setTimeout(() => {
          elem.outerHTML = ''
        }, 2000)
      }, 2000)
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React App</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
