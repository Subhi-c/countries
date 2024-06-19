import { useState } from "react";
import Data from "../data.json";
import { useEffect } from "react";
function Country() {
  const [dataCountry, setdataCountry] = useState([]);
  useEffect(() => {
    setdataCountry(Data);
    console.log(Data, "Data");
    console.log(dataCountry, "dataCountry");
  }, []);
  return (
    <>
      <div className="grid-container">
        {dataCountry.map((country, index) => (
          <div className="grid-item" key={index}>
            <div className="img">
              <img src={country.flags.svg} alt="" />
            </div>
            <div>
              <div className="d-flex name">
                <p className="h-1">{country.name}</p>
              </div>
              <div className="d-flex">
                <p className="h-2">Population: </p>
                <p>{country.population}</p>
              </div>
              <div className="d-flex">
                <p className="h-2">Region: </p>
                <p>{country.region}</p>
              </div>
              <div className="d-flex">
                <p className="h-2">Capital: </p>
                <p>{country.capital}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Country;
