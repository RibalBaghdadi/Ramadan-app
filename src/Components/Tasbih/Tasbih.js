import React, { useState } from "react";
import "./Tasbih.css";

function Tasbih() {
  const [nb, setNb] = useState(0);
  const add = () => {
    setNb(nb + 1);
  };
  if (nb > 99) {
    setNb(0);
  }

  const reset = () => {
    setNb(0);
  };
  return (
    <div>
      <h1 className="hd">مسبحة</h1>
      <div className="container">
        <div className="nb">
          <b>{nb}</b> <br />
        </div>

        <div>
          <button className="btn" onClick={add}>
            سبح
          </button>{" "}
          <br />
          <button className="btn" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Tasbih;
