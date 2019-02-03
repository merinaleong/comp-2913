// State starts with creating a Constructor() within app.js
// Console Log Order: Constructor, componentWillMount(), Render, ComponentDidMount() 
// Should you want multiple Clock components, create a class Clock to return this.props.date.toString() 
// componentWillReceiveProps() used when you are detecting a props change, doesn't run until after mount, but everytime afterwards
// All Mount() methods, can only be called once

class App extends Component {
    counstructor(props) {
        super (props);
        console.log('constructor'); 
        this.state = {
            date: new Date()
        };
    }
    
    componentWillMount(){
        console.log('componentWillMount()');
    }

    componentDidMount() {
        console.log('componentDidMount');
        setInterval(() => { //ES6 Syntax
            //this.state.date = new Date(); logistically works but WRONG React doesn't change state to objects 
            const newState = {
                date: new Date(), 
                color: this.state.color === 'red' ? 'blue' ? 'red'
            };
            this.setState(newState); // tells React to refresh
            //this.state.color = 'green'; WRONG, needs to be call before setState
            console.log(this.state);
        }, 1000);
    } 

    componentDidUpdate(){ // when a value changes, update the new id, and patch for data. Instead of unmounting and remounting
        //if ()
        console.log("componentDidUpdate");
    }

    componentDidCatch(){ // used to handle errors, like routing user to another page. Should be placed top level. Only catches components that live below it aka children components. 
        console.log('componentDidCatch');
    }

    render() {
        console.log('render');
        return (
            <div classname="App" style={{backgroundColor: this.state.color}}>
                {this.state.date.toString()}
                <p> </p>
            </div>
        );
    }
}


