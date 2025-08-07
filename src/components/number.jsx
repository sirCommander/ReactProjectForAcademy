import React from "react";
import { useState } from "react";

import "../styles/number.css";

function Number({ initialValue }) {
const [value, setValue] = useState(initialValue);

let increaseNumber = () => {
    setValue(value + 1);
};
let decreaseNumber = () => {
    setValue(value - 1);
}

  return (
    <div className="number-container">
      <h2>Current Number: {value}</h2>
      <div className="button-group">
        <button onClick={increaseNumber}>Increase Number</button>
        <button onClick={decreaseNumber}>Decrease Number</button>
      </div>
    </div>
  );
}

export default Number;