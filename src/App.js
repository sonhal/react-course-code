import React from 'react';
import './App.css';
import Person from './Person/Person'

function App() {
  return (
    <div className="App">
        <h1>Hi I'm a React App!</h1>
        <Person />
    </div>
  );
  //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "REACT!!!"))
}

export default App;
