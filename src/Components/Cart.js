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

  const checkOutHandler = (name) => {
    toast.success(
      "Congratulations! Your " + name.toUpperCase() + " is Commig ",
      {
        position: "top-center",
      }
    );
  };
  const [hurryUp, setHurryUp] = useState(true);
  const [products, setProducts] = useState(true);

  setTimeout(() => {
    setHurryUp(!hurryUp);
  }, 1000);
  
  setTimeout(() => {
    setProducts(!products);
  }, 1000);
  
  return (
    <>
      <div className="boxOfCart">
        <div className="btnContain">
          <button className="btn btn-primary" style={{ width: "150px" }}>
            <Link style={{ color: "white", textDecoration: "none" }} to="/food">
              {products ? "ADD MORE" : "PRODUCTS"}
            </Link>
          </button>
          {cartQuentity === 0 ? null : (
            <button className="btn btn-danger" style={{ width: "150px" }}>
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to="/placeorder"
              >
                {hurryUp ? "HURRY UP" : "PLACEORDER"}
              </Link>
            </button>
          )}
        </div>
        {cartQuentity === 0 ? (
          <div className="mainDivEmpty">
            <h1 className="empty-class">Cart is Empty</h1>
          </div>
        ) : (
          <>
            <h4
              style={{
                display: "flex",
                justifyContent: "center",
                fontFamily: "Cormorant Garamond",
                opacity: "0.8",
              }}
              className="mt-2"
            >
              YOU HAVE{" "}
              <span style={{ color: "red", textShadow: "0px 0px 3px black" }}>
                &nbsp;"{cartQuentity}"&nbsp;
              </span>{" "}
              FOOD ITEMS IN YOUR CART
            </h4>
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
                      onClick={() => checkOutHandler(value.name)}
                    >
                      CHECKOUT
                    </button>
                  </div>
                </div>
              ))}
            </section>
          </>
        )}
      </div>
      <ToastContainer />
    </>
  );
}

export default Cart;
