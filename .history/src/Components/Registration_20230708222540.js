import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Registration.css";
// import { Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";

function Registration() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    dob: "",
    password: "",
  });

  const getData = (e) => {
    const { value, name } = e.target;
    setValues(() => {
      return {
        ...values,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();
    const { name, email, dob, password } = values;
    if (name === "") {
      toast.error("name field is empty",{position:"top-right"});
    } else if (email === "") {
      toast.error("email field is empty",{position:"top-right"});
    } else if (dob === "") {
      toast.error("Date of Birth field is empty",{position:"top-right"});
    } else if (password === "") {
      toast.error("Password field is empty",{position:"top-right"});
    } else if (password.length < 6) {
      toast.error("Password must be 6 character",{position:"top-right"});
    } else {
      toast.success("Data Added SuccessFully",{position:"top-right"});
      localStorage.setItem("loginData", JSON.stringify([values]));
        console.log([values]);
       
    }
  };
  return (
    <div className="mainContainer">
      <form onSubmit={addData} className="form-container">
        <input placeholder="Name" type="text" name="name" onChange={getData} />
        <br />
        <input
          
          placeholder="Email"
          type="email"
          name="email"
          onChange={getData}
          
        />
        <br />
        <input placeholder="DOB" type="date" name="dob" onChange={getData} />
        <br />
        <input
          placeholder="Password"
          type="password"
          name="password"
          onChange={getData}
          onKeyDown={(e)=>{
            if(e.key === "Enter"){
              addData()
            }
          }}
        />
        <br />
        <button type="submit" variant="contained" className="m-2">Sign Up</button>
        <p>
          Already have account <Link to="/login"> Login </Link>
        </p>
      </form>
      <ToastContainer/>
    </div>
  );
}

export default Registration;
