import React, { createContext } from "react";

import Data from "./Components/Data";
import Heading from "./Components/Heading";
import "./Components/Card.css";
import FullCard from "./Components/FullCard";

const Iprice = createContext();
const Icolour = createContext();
const Iname = createContext();
const Iitem = createContext();

function App(props) {
  return (
    <div>
      <Iprice.Provider value={Data[0].price}>
        <Icolour.Provider value={Data[0].colour}>
          <Iname.Provider value={Data[0].name}>
            <Iitem.Provider value={Data[0].item}>
              <div className="container">
                <Heading />
                <FullCard />
                <FullCard />
                <FullCard />

              <p style={{ textAlign: "right", color: "#2ECC71" }} >
                
                <button className="extra-butt-color ">
                  <i className="fas fa-plus-circle fa-4x "></i>
                </button>
              </p>
              </div>
            </Iitem.Provider>
          </Iname.Provider>
        </Icolour.Provider>
      </Iprice.Provider>
    </div>
  );
}

export default App;
export { Iprice, Icolour, Iitem, Iname };
