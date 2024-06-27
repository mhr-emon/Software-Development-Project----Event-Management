import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Home";
import RentBuisnessSpace from "./components/Home/RentBuisnessSpace/RentBuisnessSpace";
import RentPhotographer from "./components/Home/RentPhotographer/RentPhotographer";
import MyAccount from "./components/Home/MyAccount/MyAccount";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/rent_buisness_space" element = {<RentBuisnessSpace/>} />
        <Route path="/rent_photographer" element = {<RentPhotographer/>} />
        <Route path="/my_account" element = {<MyAccount/>} />
      </Routes>
    </Router>
  );
}

export default App;
