import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import NumberFormat from "react-number-format";
export default function DataTotal(props) {
  const [worldData, setWorldData] = useState(null);

  useEffect(() => {
    setWorldData(props.totalData);
  }, [props]);
  // if (props) {
  //   const { confirmed, critical, deaths, recovered, lastUpdate } = props;
  // }
  // console.log(props);
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
          <p>Loading...</p>
          <p></p>
          <p></p>
        </>
      )}
    </div>
  );
}
