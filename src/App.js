import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'


class App extends Component {

  state = {
    persons: [
      {name: "Anne", age:21},
      {name: "Sondre", age: 25}
    ]
  }

  switchNameHandler = () => {
    console.log("Change!")
    const pers = this.state.persons
    const tmp = pers[0].name
    pers[0].name = pers[1].name
    pers[1].name = tmp
    this.setState({persons: pers})
  } 

  render(){
    return (
      <div className="App">
          <h1>Hi I'm a React App!</h1>
          <button onClick={this.switchNameHandler}>Switch Name</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.switchNameHandler}/>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler}>My Hobbies: Intercourse</Person>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "REACT!!!"))
  }
}



export default App;

