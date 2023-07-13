import React from "react";
import Resturant from "./Components/Restaurant";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import MainNavbar from "./Components/MainNavbar";
import Cart from "./Components/Cart";
import Registration from "./Components/Registration";
import Login from "./Components/Login";
import Details from "./Components/Details";
import CheckOut from "./Components/CheckOut";

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <MainNavbar/>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/food" element={<Resturant />} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/" element={<Registration/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/details" element={<Details/>}/>
          <Route path="/placeorder" element={<CheckOut/>}/>

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}
