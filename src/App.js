import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'


const App = props => {

  const [personsState, setPersonsState] = useState({
    persons: [
      {name: "Anne", age:21},
      {name: "Sondre", age: 25}
    ],
    otherState: "other value"
  });

  const switchNameHandler = () => {
    console.log("Change!")
    const tmp = personsState.persons[0].name
    personsState.persons[0].name = personsState.persons[1].name
    personsState.persons[1].name = tmp
    setPersonsState({...personsState})
  };

  return (
      <div className="App">
          <h1>Hi I'm a React App!</h1>
          <button onClick={switchNameHandler}>Switch Name</button>
          <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
          <Person name={personsState.persons[1].name} age={personsState.persons[1].age} >My Hobbies: Intercourse</Person>
      </div>
  );
}


export default App;

// class App extends Component {

//   state = {
//     persons: [
//       {name: "Anne", age:21},
//       {name: "Sondre", age: 25}
//     ]
//   }

//   switchNameHandler = () => {
//     console.log("Change!")
//     const pers = this.state.persons
//     const tmp = pers[0].name
//     pers[0].name = pers[1].name
//     pers[1].name = tmp
//     this.setState({persons: pers})
//   } 

//   render(){
//     return (
//       <div className="App">
//           <h1>Hi I'm a React App!</h1>
//           <button onClick={this.switchNameHandler}>Switch Name</button>
//           <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
//           <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >My Hobbies: Intercourse</Person>
//       </div>
//     );
//     //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "REACT!!!"))
//   }
// }
