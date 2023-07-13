import React from "react";
import "./CheckOut.css";
import { useSelector } from "react-redux";

export default function CheckOut() {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <div>
      
        {cartItems.map((value, i) => (
          <>
          <div className="mainOrderBox">
            <div className="secondClass ">
                <h3 className="stylingText">YOUR ORDER HAS BEEN PLACED <span style={{fontWeight:"bold",fontFamily:"DM Serif Text"}}>{value.name.toUpperCase()}</span></h3>
                <img src={value.image} width={50} height={50} style={{borderRadius:"10px"}} className="imgClass"/>
            </div>
          </div>
          </>
        ))}
      
    </div>
  );
}
