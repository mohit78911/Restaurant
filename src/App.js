import React from "react";
import Resturant from "./Components/Restaurant";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import MainNavbar from "./Components/MainNavbar";
import Cart from "./Components/Cart";

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <MainNavbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/food" element={<Resturant />} />
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
