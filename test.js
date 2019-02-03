import React, { Component } from 'react';
import './App.css';

// Merina Leong A00988891

class App extends Component {

    state = {
        input: ['A Dozen Eggs', 'Detergent', 'Pasta'],
        listvalue: ''
    }

    handleChange = (e) => {
    this.setState({
                      listvalue: e.target.value
                  });
    console.log()
}

handleClick = () => {
    const {input, listvalue} = this.state;
    const initialListValue = '';

    if (listvalue === ''){
    } else {
        this.setState(() => ({
            input: input.concat(listvalue),
            listvalue: initialListValue
        }))
    }
}

handleKeyPress = (e) => {
    if (e.key === 13){
        this.setState({
            listvalue: e.target.value,
            {this.handleClick}
        })
    }
}

handleDelete = (id) => {
    const { input } = this.state;
    input.splice(id, 1);
    this.setState(() => ({
        input: input
    }));
}

render() {
    const {input} = this.state;

    return (
        <div className="shopping-list">

        <h1><p>This Week's Shopping List </p></h1>
    <input type='text'
    onChange={this.handleChange}
    onKeyPress={this.handleKeyPress}
    />

    <button onClick={this.handleClick} >Add to Shopping List</button>

    <ul>
    {
        input.map((item, index) => {
                return (
            <div>
            <li key={item}> {item} </li>
        <button onClick={() =>this.handleDelete(index)}>Delete</button>
    </div>
)
})
}
</ul>
    </div>
);
}
}

export default App;