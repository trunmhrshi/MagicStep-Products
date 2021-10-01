import React from "react";
import Card from "./Card";
import "../Components/Card.css";

export const FullCard = () => {
  return (
    <div>
      <div className="row">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default FullCard;
