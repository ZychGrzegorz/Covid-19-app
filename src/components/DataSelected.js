import React, { useState, useEffect } from "react";
import NumberFormat from "react-number-format";
import Moment from "react-moment";

export default function DataSelected({ data, selectedCountry }) {
  const [country, setCountry] = useState("");

  useEffect(() => {
    // console.log("selected", selectedCountry); //co najechane
    data.forEach((el) => {
      if (el.country === selectedCountry) {
        // console.log("fituje", el);
        setCountry(el);
      }
    });
  }, [selectedCountry]);

  return (
    <div className="dataSelected">
      {country ? (
        <>
          <p>{country.country}:</p>
          <p>
            confirmed:{" "}
            <NumberFormat
              value={country.confirmed}
              displayType={"text"}
              thousandSeparator={true}
            />{" "}
          </p>
          <p>
            recovered:{" "}
            <NumberFormat
              value={country.recovered}
              displayType={"text"}
              thousandSeparator={true}
            />{" "}
          </p>
          <p>
            critical:{" "}
            <NumberFormat
              value={country.critical}
              displayType={"text"}
              thousandSeparator={true}
            />{" "}
          </p>
          <p>
            deaths:{" "}
            <NumberFormat
              value={country.deaths}
              displayType={"text"}
              thousandSeparator={true}
            />{" "}
          </p>

          <p>
            last update:{" "}
            <Moment parse="YYYY-MM-DD HH:mm" date={country.lastUpdate} />{" "}
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
