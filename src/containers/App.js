import React, { Component } from 'react';
import styles from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {


  constructor(props){
    super(props)
    console.log("[App.js] constructor")
  }

  state = {
    persons: [
      {id: 'a2d', name: "Anne", age:21, text: "Boom"},
      {id: 'asd', name: "Sondre", age: 25}
    ],
    showPersons: false
  }

  static getDerivedStateFromProps(props, state){
    console.log("[App.js] getDerivedStateFromProps", props)
    return state;
  }

  componentDidMount() {
    console.log("[App.js] component did mount")

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
    if(personIndex < 0){return;}
    const persons = [...this.state.persons]
    persons[personIndex].name = event.target.value
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    this.setState({showPersons: !this.state.showPersons})
  }

  render(){
    console.log("[App.js] render");
    let persons = null;

    if(this.state.showPersons){
        persons = (
            <Persons 
              persons={this.state.persons} 
              clicked={this.deletePersonHandler} 
              changed={this.nameChangedHandler}  
            />
        );
    }

    return (
        <div className={styles.App}>
          <Cockpit
            title={this.props.appTitle} 
            showPersons={this.state.showPersons} 
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}
            />
           {persons}
        </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "REACT!!!"))
  }
}

export default App;