import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'


class App extends Component {

  state = {
    persons: [
      {id: 'a2d', name: "Anne", age:21, text: "Boom"},
      {id: 'asd', name: "Sondre", age: 25}
    ],
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }
  
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id ? true : false;
    })
    const persons = [...this.state.persons]
    persons[personIndex].name = event.target.value
    this.setState({persons: persons})
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

    let persons = null;

    if(this.state.showPersons){
        persons = (
          <div>
            {this.state.persons.map((person, index) => {
              return ( 
              <Person 
                name={person.name} 
                age={person.age} 
                key={person.id}
                click={ () => this.deletePersonHandler(index)}
                changed={(event) => this.nameChangedHandler(event, person.id)}>
                  {person.text}
              </Person>)
            })}
        </div>
        );
    }

    return (
      <div className="App">
          <h1>Hi I'm a React App!</h1>
          <button style={style}  onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "REACT!!!"))
  }
}

export default App;

