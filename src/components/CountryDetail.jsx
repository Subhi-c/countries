import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
export default function CountryDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const { country } = location.state || {};

  if (!country) {
    return <div>No item selected</div>;
  }
  function handleback() {
    navigate("/countries");
  }
  return (
    <>
      <div className="main">
        <div>
          <button onClick={handleback}>back</button>
        </div>
        <div className="d-flex mt-20">
          <div className="w-250">
            <img
              className="boxshadow"
              src={country.flags.png}
              alt={country.name}
            />
          </div>
          <div>
            <div>
              <h2>{country.name}</h2>
            </div>
            <div className="d-flex">
              <div>
                <div className="d-flex">
                  <p>Native Name :</p>
                  <p>{country.nativeName}</p>
                </div>
                <div className="d-flex">
                  <p>Population :</p>
                  <p>{country.population}</p>
                </div>
                <div className="d-flex">
                  <p>Region :</p>
                  <p>{country.region}</p>
                </div>
                <div className="d-flex">
                  <p>Sub Region</p>
                  <p>{country.subregion}</p>
                </div>
                <div className="d-flex">
                  <p>Capital :</p>
                  <p>{country.capital}</p>
                </div>
              </div>
              <div>
                <div className="d-flex">
                  <p>Top Level Domain :</p>
                  {country.topLevelDomain.map((i, index) => (
                    <p key={index}>{i}</p>
                  ))}
                </div>
                <div className="d-flex">
                  <p>Currencies</p>
                  {country.currencies.map((i, index) => (
                    <p key={index}>{i.code}</p>
                  ))}
                </div>
                <div className="d-flex">
                  <p>Languages :</p>
                  {country.languages.map((i, index) => (
                    <p key={index}>{i.name}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
