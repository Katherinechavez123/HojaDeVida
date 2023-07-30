import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Academic from "./components/Academic";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Interest from "./components/Interest";
import Languages from "./components/Languages";
import Social from "./components/Social";
import Certificate from "./components/Certificate";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/portafolio" />} />
        <Route
          path="/portafolio"
          element={(
            <>
              <Header />
              <Profile />
              <Experience />
              <Certificate />
              <div className="container-skills-academic">
                <Skills />
                <Academic />
              </div>
              <div className="container-interest-lenguages">
                <Interest />
                <Languages />
              </div>
              <Social />
            </>
  )}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
