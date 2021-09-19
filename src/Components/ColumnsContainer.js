import React from 'react'; 
import './ColumnsContainer.css'; 
import Column from './Column'; 
import Icon from './Icon'; 
import Button from './Button'; 
import SedanIcon from '../images/icon-sedans.svg'; 
import SuvIcon from '../images/icon-suvs.svg'; 
import LuxuryIcon from '../images/icon-luxury.svg'; 




function ColumnsContainer(){
    return(
        <div className="ColumnsContainer">

            <Column className={"Column sedansBackground"}>
                <Icon src={SedanIcon}/>
                <h2 className="ColumnTitle">
                    Sedans
                </h2>
                <p className="simpleText">
                    Choose a sedan for its affordabillity ans excellent
                    fuel economy. Ideal for cruising in the city or on 
                    your next road trip.
                </p>
                <Button className={'Button btnSedans'}/>
            </Column>

            <Column className={"Column suvsBackground"}>
                <Icon src={SuvIcon}/>
                <h2 className="ColumnTitle">
                    SUVS
                </h2>
                <p className="simpleText">
                    Take an SUV for its spacious interior, power,and 
                    versatility. Perfect for your next family vacation 
                    and off-road adventures. 
                </p>
                <Button className={'Button btnSuvs'}/>
            </Column>

            <Column className={"Column luxuryBackground"}>
                <Icon src={LuxuryIcon}/>
                <h2 className="ColumnTitle">
                    LUXURY
                </h2>
                <p className="simpleText">
                    Cruise in the best car brands without the bloated 
                    prices. Enjoy the enhanced comfort of a luxury 
                    rental and arrive in style. 
                </p>
                <Button className={'Button btnLuxury'}/>
            </Column>

        </div>
    )
}

export default ColumnsContainer; 