import React, {useEffect} from 'react';
import styles from './Cockpit.css'

const Cockpit = ( props ) => {
    useEffect(() => {
        console.log("Use effect");

        setTimeout(() => {
            alert("Boom!");
        }, 1000)
    }, [props.persons]);

    const classes = [];
    let btnClass = '';

    if(props.showPersons){
        btnClass = styles.Red;
    }
    if(props.persons.length <= 2){
        classes.push(styles.red);
      }
    if(props.persons.length <= 1){
        classes.push(styles.bold);
    }

   return ( <div className={styles.Cockpit}>
        <h1>{props.title}</h1>
        <p className={classes.join(' ')}>Persons</p>
        <button className={btnClass} onClick={props.clicked}>Toggle Persons</button>
    </div>)
};

export default Cockpit;