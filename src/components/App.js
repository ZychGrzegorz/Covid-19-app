import React, { useState, useEffect } from "react";
import "../scss/App.scss";
import Countries from "./Countries";
import DataSelected from "./DataSelected";
import DataTotal from "./DataTotal";
import Scale from "./Scale";
import ScaleDead from "./ScaleDead";
import { API } from "./API";

const App = () => {
  const [data, getData] = useState([]);
  const [totalData, getTotalData] = useState();
  const [selectedCountry, setSelectedCountry] = useState();
  const [renderScale, setRenderScale] = useState(true);
  const { fetchAll, fetchTotal } = API();
  useEffect(() => {
    fetchAll(getData);
    fetchTotal(getTotalData);
  }, []);

  return (
    <main>
      <div></div>
      <div className="App title">
        <h1 className="">Covid 19 around the world</h1>
      </div>

      <div className="map-container">
        <Countries
          data={data}
          setSelectedCountry={setSelectedCountry}
          renderScale={renderScale}
          setRenderScale={setRenderScale}
        />
      </div>

      <DataTotal totalData={totalData} getTotalData={getTotalData} />

      <DataSelected
        data={data}
        getData={getData}
        selectedCountry={selectedCountry}
      />
      {renderScale ? <Scale /> : <ScaleDead />}
    </main>
  );
};

export default App;
