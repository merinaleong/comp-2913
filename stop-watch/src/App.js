import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        console.log('constructor');
        this.state = {
            date: new Date();
        }
    }
  render() {
    return (
      <div classname="watch">
          </div>
    );
  }
}

export default App;
