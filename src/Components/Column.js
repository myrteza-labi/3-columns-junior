import React from 'react'; 
import './Column.css'; 
import TextBox from './TextBox'; 

function Column(props){
    return(
        <section className={props.className}>
            {props.children}
        </section>
    )
}

export default Column; 