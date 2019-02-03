import React, { Component } from 'react';
import './App.css';

// Merina Leong A00988891

const initialListValue = '';

class App extends Component {

    state = {
        input: ['A Dozen Eggs', 'Detergent', 'Pasta'],
        listvalue: initialListValue
    }

    handleChange = (e) => {
        this.setState({
            listvalue: e.target.value
        });
    }

    handleClick = () => {
        const {input, listvalue} = this.state;

        if (listvalue === ''){
        } else {
            this.setState(() => ({
                input: input.concat(listvalue),
                listvalue: initialListValue
            }))
        }
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter'){
            this.setState({
                listvalue: e.target.value
            });
            this.handleClick();
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
        const {input, listvalue} = this.state;

        return (
            <div className="shopping-list">

                <h1><p>This Week's Shopping List </p></h1>
                <input
                    type='text'
                    placeholder="List Item"
                    value={listvalue}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />

                <button onClick={this.handleClick} className="add">Add to Shopping List</button>

                <ul>
                {
                    input.map((item, index) => {
                        return (
                        <div className="list" key={index}>
                            <li key={item}> {item} <button id="delete" onClick={() => this.handleDelete(index)}>Delete</button></li> </div>
                        )})}
                </ul>
            </div>
        );}}

export default App;