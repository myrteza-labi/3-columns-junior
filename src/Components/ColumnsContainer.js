import React from 'react'; 
import './ColumnsContainer.css'; 
import Column from './Column'; 
import Icon from './Icon'; 


function ColumnsContainer(){
    return(
        <div className="ColumnsContainer">

            <Column>
                <Icon/>
                <h2 className="ColumnTitle"></h2>
                <p className="simpleText"></p>
            </Column>

            <Column>
                <Icon/>
                <h2 className="ColumnTitle"></h2>
                <p className="simpleText"></p>
            </Column>

            <Column>
                <Icon/>
                <h2 className="ColumnTitle"></h2>
                <p className="simpleText"></p>
            </Column>
            
        </div>
    )
}

export default ColumnsContainer; 