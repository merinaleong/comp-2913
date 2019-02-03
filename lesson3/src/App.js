import React, { Component } from 'react';
import './App.css';

{/* Creating arrays outside of class just for this example */}
const fruits = ['Apples', 'Oranges', 'Peach'];

{/* Cannot render null/0/false/undefined values and objects like fruitob */}
const fruitob = [
    {name: 'Banana'},
    {name: 'Pineapple'},
    {name: 'Cherries'}
]

class App extends Component {
  render() {
      console.log(fruits);
      let fruitElements = [];
      for (let i = 0; i < fruits.length; i++) {
          fruitElements.push((
              <li key={fruits[i] + [i]}>
                {fruits[i]}
              </li>
          ));
      }
      console.log(fruitElements);
      return (
         <div className="App">
            <h1> Lists Examples </h1>
                <ol>
                    {fruitElements}
                </ol>

                <ul>
                    {fruits.map((fruit, index) => {
                        return (
                            <li key={fruit + index}>{fruit}</li>
                        );
                    })}
                </ul>
         </div>
      );
  }
}

export default App;
