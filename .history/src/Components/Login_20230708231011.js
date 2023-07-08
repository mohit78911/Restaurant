import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";
import { Button } from "@mui/material";

function Login() {
  const history = useNavigate();
  const [values, setValues] = useState({
    email: "",
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

    const getUserData = localStorage.getItem("loginData");

    const { email, password } = values;

    if (email === "") {
      toast.error("email field is empty", { position: "top-right" });
    } else if (password === "") {
      toast.error("Password field is empty", { position: "top-right" });
    } else {
      if (getUserData && getUserData.length) {
        const userData = JSON.parse(getUserData);
        const loginDataCheck = userData.filter((a, b) => {
          return a.email === email && a.password === password;
        });
        if (loginDataCheck.length === 0) {
          toast.error("invalid details", { position: "top-right" });
        } else {
          console.log("login SuccessFully");
          localStorage.setItem("isLoggedIn", true);
          localStorage.setItem("login", true);
          localStorage.setItem("isFoodContainer", true);
          localStorage.setItem("cartItems",true)
          history("/food");
        }
      }
    }
  };
  return (
    <div className="mainContainer">
      <form onSubmit={addData} className="form-container">
        <input
          placeholder="Email"
          type="email"
          name="email"
          onChange={getData}
        />
        <br />
        <input
          placeholder="Password"
          type="password"
          name="password"
          onChange={getData}
        />
        <br />
        <Button type="submit" variant="contained" className="m-2">
          Login
        </Button>
        <p>
          Don't have Accout <Link to="/"> Register </Link>
        </p>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Login;
