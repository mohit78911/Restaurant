import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./MainNavbar.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../store/slice/CartSlice";

export default function MainNavbar() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const cartQuentity = cartItems.length;

  const navigate = useNavigate();
  const handleCartOpen = (open) => {
    dispatch(toggleCart(open));
    navigate("./cart");
  };

  const Login = localStorage.getItem("login");

  const isLoggedIn = localStorage.getItem("isLoggedIn");
  console.log(isLoggedIn);
  const location = useNavigate();

  const logOutHandler = () => {
    localStorage.setItem("login", false);
    localStorage.removeItem("login");
    localStorage.removeItem("isLoggedIn", false);
    localStorage.removeItem("loginData");
    localStorage.setItem("isFoodContainer", false);
    localStorage.removeItem("isFoodContainer");
    location("./");
    // window.location.reload()
  };

  const foodContainer = localStorage.getItem("isFoodContainer");
  const cartSlice = localStorage.getItem("cartItem")
  return (
    <div>
      <nav className="mainClassNavbar">
        <div className="navLogo">Fast Food</div>
        <div className="navbtn">
          <div className="btn">
            {!isLoggedIn && (
              <NavLink
                to="/login"
                className="btn"
                style={({ isActive }) => {
                  return { color: isActive ? "yellowgreen" : "" };
                }}
              >
                Login
              </NavLink>
            )}
          </div>

          <NavLink
            to="/home "
            className="btn"
            style={({ isActive }) => {
              return { color: isActive ? "yellowgreen" : "" };
            }}
          >
            Home
          </NavLink>
          {foodContainer ? (
            <NavLink
              to="/food"
              className="btn"
              style={({ isActive }) => {
                return { color: isActive ? "yellowgreen" : "" };
              }}
            >
              Food
            </NavLink>
          ) : null}

          {cartItems.length === 0 ? null : (
            <div className="btn" onClick={() => handleCartOpen(true)}>
              <i
                className="fa fa-shopping-bag btn2"
                style={{ fontSize: "36px" }}
              >
                {cartQuentity}
              </i>
            </div>
          )}
          <div className="btn">
            {Login ? (
              <div>
                <button onClick={logOutHandler} className="btn btn-danger">
                  LogOut
                </button>
              </div>
            ) : (
              <NavLink
                to="/ "
                className="btn"
                style={({ isActive }) => {
                  return { color: isActive ? "yellowgreen" : "" };
                }}
              >
                Sign Up
              </NavLink>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
