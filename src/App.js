import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'


class App extends Component {

  state = {
    persons: [
      {name: "Anne", age:21},
      {name: "Sondre", age: 25}
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    const pers = this.state.persons
    pers[0].name = newName;
    pers[1].name = newName;
    this.setState({persons: pers})
  }
  
  nameChangedHandler = (event) => {
    const pers = this.state.persons
    pers[1].name = event.target.value;
    this.setState({persons: pers})
  }

  togglePersonsHandler = () => {
    this.setState({showPersons: !this.state.showPersons})
  }

  render(){
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
          <h1>Hi I'm a React App!</h1>
          <button style={style}  onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {this.state.showPersons ?
            <div>
              <Person 
                name={this.state.persons[0].name} 
                age={this.state.persons[0].age} 
                click={this.switchNameHandler.bind(this, "Sondre")}
                />
              <Person 
                name={this.state.persons[1].name}
                age={this.state.persons[1].age} 
                click={this.switchNameHandler.bind(this, "Anne")}
                changed={this.nameChangedHandler}>
                  My Hobbies: Intercourse
              </Person>
            </div> : null
          }

      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "REACT!!!"))
  }
}



export default App;

