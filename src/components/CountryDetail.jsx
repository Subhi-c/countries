import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
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
      <div>
        <Navbar />
      </div>
      <div className="main">
        <div className="contentDiv">
          <div className="btndiv">
            <button onClick={handleback}>Back</button>
          </div>
          <div className="d-flex mt-20">
            <div className="w-250">
              <img
                className="boxshadow"
                src={country.flags.png}
                alt={country.name}
              />
            </div>
            <div className="Details">
              <div className="CountryName d-flex">
                <h2>{country.name}</h2>
              </div>
              <div className="d-flex">
                <div>
                  <div className="d-flex-start p-bot-10px">
                    <p className="bold">Native Name :</p>
                    <p>{country.nativeName}</p>
                  </div>
                  <div className="d-flex-start p-bot-10px">
                    <p className="bold">Population :</p>
                    <p>{country.population}</p>
                  </div>
                  <div className="d-flex-start p-bot-10px">
                    <p className="bold">Region :</p>
                    <p>{country.region}</p>
                  </div>
                  <div className="d-flex-start p-bot-10px">
                    <p className="bold">Sub Region</p>
                    <p>{country.subregion}</p>
                  </div>
                  <div className="d-flex-start p-bot-10px">
                    <p className="bold">Capital :</p>
                    <p>{country.capital}</p>
                  </div>
                </div>
                <div>
                  <div className="d-flex-start p-bot-10px">
                    <p className="bold">Top Level Domain :</p>
                    {country.topLevelDomain.map((i, index) => (
                      <p key={index}>{i}</p>
                    ))}
                  </div>
                  <div className="d-flex-start p-bot-10px">
                    <p className="bold">Currencies</p>
                    {country.currencies.map((i, index) => (
                      <p key={index}>{i.code}</p>
                    ))}
                  </div>
                  <div className="d-flex-start p-bot-10px">
                    <p className="bold">Languages :</p>
                    {country.languages.map((i, index) => (
                      <p key={index}>{i.name}</p>
                    ))}
                  </div>
                </div>
              </div>
              {country.borders && (
                <div className="d-flex-row p-20">
                  <p className="bold">Border Countries :</p>
                  <div className="d-flex-row">
                    {country.borders.map((border, i) => (
                      <p key={i} className="border">
                        {border}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
