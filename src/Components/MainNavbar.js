import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./MainNavbar.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../store/slice/CartSlice";

export default function MainNavbar() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const cartQuentity = cartItems.length;

  const navigate = useNavigate()
  const handleCartOpen = (open) => {
    dispatch(toggleCart(open));
    navigate("./cart")

  };
  return (
    <div>
      <nav className="mainClassNavbar">
        <div className="navLogo">Fast Food</div>
        <div className="navbtn">
          <NavLink
            to="/ "
            className="btn"
            style={({ isActive }) => {
              return { color: isActive ? "yellowgreen" : "" };
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/food"
            className="btn"
            style={({ isActive }) => {
              return { color: isActive ? "yellowgreen" : "" };
            }}
          >
            Food
          </NavLink>
          {cartItems.length === 0 ? null : <div className="btn"  onClick={() => handleCartOpen(true)}>
            <i className="fa fa-shopping-bag btn2" style={{ fontSize: "36px" }}>
              {cartQuentity}
            </i>
          </div>} 
          
        </div>
      </nav>
    </div>
  );
}
