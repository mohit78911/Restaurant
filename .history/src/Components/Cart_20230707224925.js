import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementItem,
  incrementItem,
  removeItem,
  toggleCart,
} from "../store/slice/CartSlice";
import "./Cart.css";

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
  return (
    <>
      <div className="boxOfCart">
        {cartQuentity === 0 ? (
          <h1>Cart is Empty</h1>
        ) : (
          <section className="main-card--cointainer ">
            {cartItems.map((value, i) => (
              <div className="card-container" key={i}>
                <div className="card">
                  <div className="card-body">
                    
                    <p>
                      Quantity :  
                      <span style={{ color: " white", fontSize: "25px" }}>
                        { value.quantity}
                      </span>
                    </p>
                    <h2 className="card-title">{value.name}</h2>

                    <div className="card-read">Read</div>
                  </div>
                  <img src={value.image} alt="" className="card-media" />

                  <div>
                    <button
                      className="btn btn-warning m-2"
                      onClick={() => increamentProducts(value.id)}
                    >
                      Increase
                    </button>
                    <button
                      className="btn btn-warning m-2"
                      onClick={() => decreamentProducts(value.id)}
                    >
                      Decreament
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => removeHandler(value.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </section>
        )}
      </div>
    </>
  );
}

export default Cart;