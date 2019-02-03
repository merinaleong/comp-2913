import React, { Component } from 'react';
import './App.css';

class App extends Component {

    render() {

        constructor(props){
            super(props);

            this.state = {
                username: '',
                password: '',
                description: '',
                isMarried: false,
                gender: '',
                radio: 1
            };

            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }

        handleChange(e){
            // if (e.target.type === 'checkbox') {
            //    this.setState({[e.target.name]: e.target.checked});
            // } else {
            //    this.setState({[e.target.name]: e.target.value});
            // }
            //
            // OR:
            //
            // this.setState({[e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value});
            //
            // OR:
            //
            const { name, type, checked, value } = e.target;
            //
            // const name = e.target.name;
            // const type = e.target.type;
            // const checked = e.target.checked;
            // const value = e.target.value;
            this.setState({[name]: type === 'checkbox' ? checked : value});
        }

        handleSubmit(e){
            e.preventDefault();

        }

        return (
            console.log(this.state);
            <div className="App">
                <form onSubmit = {this.handleSubmit}>
                <input
                    name = 'username'
                    value = {this.state.username}
                    onChange = {this.handleChange}
                />
                <input
                    name = 'password'
                    type = 'password'
                    value = {this.state.password}
                    onChange = {this.handleChange}
                />
                <input
                    name = 'description'
                    value = {this.state.description}
                    onChange = {this.handleChange}
                />
                <select
                    name = 'gender'
                    value = {this.state.gender}
                    onChange={this.handleChange}
                >
                    <option value ="">
                    <option value ="Male"> Male </option>
                    <option value ="Female"> Female </option>
                </select>
                <input
                    name = 'isMarried'
                    type = 'checkbox'
                    value = {this.state.isMarried}
                    onChange = {this.handleChange}
                /> is Married
                <input name = 'radio' type = 'radio' value = '1' onChange = {this.handleChange}>
                <input name = 'radio' type = 'radio' value = '2' onChange = {this.handleChange}>
                <input name = 'radio' type = 'radio' value = '3'  onChange = {this.handleChange}>

                <button type ='submit'>Submit</button>

            </form>
            </div>
    );
    }
}

export default App;
