import React, { useState, useEffect, useReducer } from "react";
import NumberFormat from "react-number-format";
import Moment from "react-moment";

export default function DataSelected({ data, selectedCountry }) {
  const [country, setCountry] = useState("");

  useEffect(() => {
    // console.log("selected", selectedCountry); //co najechane
    data.forEach((el) => {
      // console.log(el);
      if (el.country === selectedCountry) {
        // console.log("fituje", el);
        setCountry(el);
      }
    });
  }, [selectedCountry]);
  // });
  useEffect(() => {
    if (country) {
      let pSelected = document.querySelectorAll(".dataSelected p");
      pSelected.forEach((p) => {
        p.classList.remove("update");
        setTimeout(() => {
          p.classList.add("update");
        }, 1);
      });
    }
  }, [country]);
  return (
    <div className="dataSelected">
      {country ? (
        <>
          <p>{country.country}:</p>
          <p>
            confirmed:{" "}
            <NumberFormat
              className="bold"
              value={country.cases.total}
              displayType={"text"}
              thousandSeparator={true}
            />{" "}
          </p>
          <p>
            recovered:{" "}
            <NumberFormat
              className="bold"
              value={country.cases.recovered}
              displayType={"text"}
              thousandSeparator={true}
            />{" "}
          </p>
          <p>
            critical:{" "}
            <NumberFormat
              className="bold"
              value={country.cases.critical}
              displayType={"text"}
              thousandSeparator={true}
            />{" "}
          </p>
          <p>
            deaths:{" "}
            <NumberFormat
              className="bold"
              value={country.deaths.total}
              displayType={"text"}
              thousandSeparator={true}
            />{" "}
          </p>

          <p>
            last update:{" "}
            <Moment
              className="bold"
              parse="YYYY-MM-DD HH:mm"
              date={country.time}
            />{" "}
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
