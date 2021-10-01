import React,{useContext} from 'react'
import '../Components/Card.css'
import {Iprice,Icolour,Iitem,Iname} from '../App'

function CardInfo(props) {
    const contextprice = useContext(Iprice)
    const contextcolour = useContext(Icolour)
    const contextitem = useContext(Iitem)
    const contextname = useContext(Iname)

    return (
        <div >
            <div className="col mt-1 extra-space-div">
          <div className="app ">
          <h6>{contextname}  <button className="extra-icon"><i className="far fa-edit"></i></button></h6> 
          <p> {contextprice} </p>
          <p>{contextcolour}</p>
          <p>{contextitem}</p>
          <p className="row ml-0">
            <i className="fas fa-toggle-off fa-2x"></i>
          <button className="extra-icon-trash"><i style={{color: "black"}} className="far fa-trash-alt"></i></button>
          </p>
         </div>
        </div>
        </div>
    )
}

export default CardInfo
