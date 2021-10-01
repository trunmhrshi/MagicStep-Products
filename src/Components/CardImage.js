import React from 'react'
import iphone from '../Images/iphone.png';


function CardImage(props) {
   
    return (
        <div>
          <img src={iphone} alt="" style={{width:"150px" , height:"174px"}} />        
        </div>
    )
}

export default CardImage


