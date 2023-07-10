import React, { useState } from "react";
import "./Style.css";
import { useDispatch } from "react-redux";
import { addItem } from "../store/slice/CartSlice";
import { toast, ToastContainer } from "react-toastify";
export default function Menu({ menuData }) {
  console.log(menuData);
  const [added, setAdded] = useState(false);

  const dispatch = useDispatch();

  const AddToCarthandle = (product) => {
    dispatch(addItem(product));
    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  const [userDetailsData,setUserDetailsData] = useState([])
const getDataHandler = ()=>{
  const getData =  localStorage.getItem("loginData")
  if(getData && getData.length){
    const userDetails = JSON.parse(getData)
  }
  setUserDetailsData(userDetails)
}


  return (
    <div>
      {
        userDetailsData.length === 0 ? "ERROR" : <h1>{userDetailsData[]}</h1>
      }
      <section className="main-card--cointainer ">
        {menuData.map((value, i) => (
          <div className="card-container" key={i}>
            <div className="card">
              <div className="card-body">
                <span className="card-number card-circle subtle">
                  {value.id}
                </span>
                <span className="card-author subtle">{value.category}</span>
                <h2 className="card-title">{value.name}</h2>
                <span className="card-description subtle">
                  {value.description}
                </span>
                <div className="card-read">Read</div>
              </div>
              <img src={value.image} alt="" className="card-media" />
              <span
                className="card-tag subtle "
                onClick={() => AddToCarthandle(value)}
              >
                {added ? "Added" : "ADD TO CART"}
              </span>
            </div>
          </div>
        ))}
      </section>
      <ToastContainer />
    </div>
  );
}
