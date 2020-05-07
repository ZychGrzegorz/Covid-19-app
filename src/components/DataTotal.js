import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import NumberFormat from "react-number-format";
export default function DataTotal(props) {
  const [worldData, setWorldData] = useState(null);

  useEffect(() => {
    setWorldData(props.totalData);
  }, [props]);
  useEffect(() => {
    if (worldData) {
      let pSelected = document.querySelectorAll(".dataTotal p");

      pSelected.forEach((p) => {
        p.classList.remove("update");

        setTimeout(() => {
          p.classList.add("update");
        }, 1);
      });
    }
  }, [worldData]);

  return (
    <div className="dataTotal">
      {worldData ? (
        <>
          <p>World: </p>
          <p>
            confirmed:{" "}
            <NumberFormat
              value={worldData[0].confirmed}
              displayType={"text"}
              thousandSeparator={true}
            />{" "}
          </p>
          <p>
            recovered:{" "}
            <NumberFormat
              value={worldData[0].recovered}
              displayType={"text"}
              thousandSeparator={true}
            />{" "}
          </p>
          <p>
            critical:{" "}
            <NumberFormat
              value={worldData[0].critical}
              displayType={"text"}
              thousandSeparator={true}
            />{" "}
          </p>
          <p>
            deaths:{" "}
            <NumberFormat
              value={worldData[0].deaths}
              displayType={"text"}
              thousandSeparator={true}
            />{" "}
          </p>
          <p>
            last update:{" "}
            <Moment parse="YYYY-MM-DD HH:mm" date={worldData[0].lastUpdate} />
          </p>
        </>
      ) : (
        <>
          <p></p>
          <p></p>
          <span>Loading...</span>
          <p></p>
          <p></p>
        </>
      )}
    </div>
  );
}
