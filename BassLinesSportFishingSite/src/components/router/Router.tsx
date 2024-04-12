import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../../../pages/Home";
import CharterPage from "../../../pages/Charters";
import BoatPage from "../../../pages/Boat";
import TripPage from "../../../pages/Trips";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/Charters" Component={CharterPage} />
        <Route path="/AboutUs" Component={BoatPage} />
        <Route path="/Trips" Component={TripPage} />
      </Routes>
    </Router>
  );
};

export default AppRouter;