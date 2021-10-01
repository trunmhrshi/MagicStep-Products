import React from 'react'
import '../Components/Card.css'

const Heading = () =>{
    return(
        <>
        <div className="row">
          <div className="col-4">
            <h4>My Products <span style={{color:"grey"}}>9</span></h4>
          </div>
          <div className="col-4">
            <p id="val">Value $3996</p>
          </div>
        </div>
        </>
    );
}

export default Heading;