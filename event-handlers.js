// Be aware of onClick, onMouseEnter, onMouseLeave, onKeyDown, onKeyUp, onChange
// Low Priority, save for another class: onFocus, onBlue, onChange, onSubmit 

import React, { Component } from 'react';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            color: 'blue'
        };

        this.handleClick = this.handleClick.bind(this);
    }

    // Must bind in constructor
    handleClick(e){
        console.log(e);
        this.setState({color: 'green'});
    }

    handleClickLink(e){
        e.preventDefault();
    }

  render() {
    return (
      <div className="App">
            <button style={{backgroundColor: this.state.color}}
            onClick={this.handleClick} > Click Me </button> 
            <a onClick={this.handleClickLink} href= "www.google.ca"> Google </a>
      </div>
    );
  }
}

export default App;
