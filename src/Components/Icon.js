import React from 'react'; 
import './Icon.css'; 

function ColumnsContainer(props) {
    return(
        <img 
        alt={props.alt}
        src={props.src} 
        className="Icon"/>
    )
}

export default ColumnsContainer; 