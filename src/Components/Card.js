import React from 'react'
import '../Components/Card.css'
import CardInfo from './CardInfo';
import CardImage from './CardImage';
const Card = (props) =>{
    return(
        <>
        <div className="col-12 col-md-4 col-lg-4 ">
        <div className="row  ">
        <div className="col extra-mob-align">
            <CardImage />
        </div>
        
        <CardInfo />
    
      </div>
    </div>
        </>
    );
}

export default Card;
// export {Iimage}