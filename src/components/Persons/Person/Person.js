import React from 'react';
import styles from './Person.css'


const person = (props) => {
    console.log("[Person.js] render...", props)
    return (
        <div className={styles.Person}>       
            <p onClick={props.click}>I'm a {props.name} and I am {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
    )
}

export default person;