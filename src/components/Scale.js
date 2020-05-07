import React from "react";

export default function Scale() {
  return (
    <div className="scale">
      <h2>Infected:</h2>
      <p className="scale-square"> {">="} 150,000</p>
      <p className="scale-square"> {"<"} 150,000</p>
      <p className="scale-square"> {"<"} 50,000</p>
      <p className="scale-square"> {"<"} 20,000</p>
      <p className="scale-square"> {"<"} 5,000</p>
      <p className="scale-square"> {"<"} 1,000</p>
      <p className="scale-square"> {"<"} 100</p>
      <p className="scale-square"> {"="} 0</p>
      <p className="scale-square"> no data</p>
    </div>
  );
}
