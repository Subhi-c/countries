import { useState } from "react";
import Data from "../data.json";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Country() {
  const [dataCountry, setdataCountry] = useState([]);
  const [searchvalue, setsearchvalue] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setdataCountry(Data);
    console.log(Data, "Data");
    console.log(dataCountry, "dataCountry");
  }, []);
  function handleDetail(country) {
    console.log(country);
    navigate("/details", { state: { country } });
  }
  function handleSearch(e) {
    const value = e.target.value;
    setsearchvalue(value);
    const filtered = Data.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setdataCountry(filtered);
  }
  return (
    <>
      <div className="Search">
        <div>
          <input
            type="text"
            name="search"
            placeholder="search for a country"
            value={searchvalue}
            onChange={handleSearch}
          />
        </div>
        <div></div>
      </div>
      <div>
        {dataCountry.length == 0 ? (
          <div>No Results Found</div>
        ) : (
          <div className="grid-container">
            {dataCountry.map((country, index) => (
              <div
                className="grid-item"
                key={index}
                onClick={() => handleDetail(country)}
              >
                <div className="img">
                  <img src={country.flags.png} alt="" />
                </div>
                <div className="CountryDatas">
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
            ))}{" "}
          </div>
        )}
      </div>
    </>
  );
}
