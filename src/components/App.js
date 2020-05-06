import React, { useState, useEffect } from "react";
import "../scss/App.scss";
import Countries from "./Countries";
import DataSelected from "./DataSelected";
import DataTotal from "./DataTotal";
import Scale from "./Scale";
import { API } from "./API";

const App = () => {
  const [data, getData] = useState([]);
  const [totalData, getTotalData] = useState();
  const [selectedCountry, setSelectedCountry] = useState();
  const { fetchAll, fetchTotal } = API();
  useEffect(() => {
    fetchAll(getData);
    fetchTotal(getTotalData);
  }, []);
  // d-flex justify-content-center
  return (
    <main>
      <div className="App title">
        <h1 className="">Covid 19 around the world</h1>
      </div>

      <div
        className="map-container"
        //  style={{ zIndex: "9", background: "transparent" }}
      >
        <Countries data={data} setSelectedCountry={setSelectedCountry} />
      </div>

      <DataTotal totalData={totalData} getTotalData={getTotalData} />

      <DataSelected
        data={data}
        getData={getData}
        selectedCountry={selectedCountry}
      />

      <Scale />
    </main>
  );
};

export default App;
