import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementItem,
  incrementItem,
  removeItem,
  toggleCart,
} from "../store/slice/CartSlice";
import "./Cart.css";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

function Cart() {
  const disptach = useDispatch();
  const { isCartOpen, cartItems } = useSelector((state) => state.cart);

  const handleCloseCart = (close) => {
    disptach(toggleCart(close));
  };

  const removeHandler = (id) => {
    disptach(removeItem(id));
  };

  const increamentProducts = (id) => {
    disptach(incrementItem(id));
  };

  const decreamentProducts = (id) => {
    disptach(decrementItem(id));
  };
  const cartQuentity = cartItems.length;

  const checkOutHandler = () => {
    toast.success("Congratulations! Your Food is Commig "+ , {
      position: "top-center",
    });
  };
  return (
    <>
      <div className="boxOfCart">
        <div className="btnContain">
          <button className="btn btn-primary">
            <Link style={{ color: "white", textDecoration: "none" }} to="/food">
              Add More Products
            </Link>
          </button>
        </div>
        {cartQuentity === 0 ? (
          <h1 className="empty-class">Cart is Empty</h1>
        ) : (
          <section className="main-card--cointainer ">
            {cartItems.map((value, i) => (
              <div className="card-container" key={i}>
                <div className="card">
                  <div className="card-body">
                    <p>
                      Quantity : &nbsp;
                      <span style={{ color: " white", fontSize: "25px" }}>
                        {value.quantity}
                      </span>
                    </p>
                    <h2 className="card-title">{value.name}</h2>
                  </div>
                  <img src={value.image} alt="" className="card-media" />
                  <h3 className="card-price">
                    Price : {value.price * value.quantity}
                  </h3>
                  <div>
                    <button
                      className="btn btn-warning m-1"
                      onClick={() => increamentProducts(value.id)}
                    >
                      +
                    </button>
                    <button
                      className="btn btn-warning m-1"
                      onClick={() => decreamentProducts(value.id)}
                    >
                      -
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => removeHandler(value.id)}
                    >
                      <div
                        className="fa fa-trash-o"
                        style={{ fontSize: "18px" }}
                      ></div>
                    </button>
                  </div>
                  <button
                    className="btn btn-dark mt-1"
                    onClick={() => checkOutHandler()}
                  >
                    CHECKOUT
                  </button>
                </div>
              </div>
            ))}
          </section>
        )}
      </div>
      <ToastContainer/>
    </>
  );
}

export default Cart;
