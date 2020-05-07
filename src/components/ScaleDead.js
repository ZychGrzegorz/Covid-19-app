import React from "react";

export default function ScaleDead() {
  return (
    <div className="scale">
      <h2>Deaths:</h2>
      <p className="scale-square"> {">="} 20,000</p>
      <p className="scale-square"> {"<"} 20,000</p>
      <p className="scale-square"> {"<"} 5,000</p>
      <p className="scale-square"> {"<"} 1,000</p>
      <p className="scale-square"> {"<"} 500</p>
      <p className="scale-square"> {"<"} 100</p>
      <p className="scale-square"> {"<"} 10</p>
      <p className="scale-square"> {"="} 0</p>
      <p className="scale-square"> no data</p>
    </div>
  );
}
