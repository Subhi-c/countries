import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainContent from "./Pages/MainContent";
import CountryDetail from "./components/CountryDetail";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/countries" element={<MainContent />} />
            <Route path="/details" element={<CountryDetail />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
