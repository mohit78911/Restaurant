import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
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
          localStorage.setItem("cartItems", true);
          history("/food");
        }
      }
    }
  };

  const defaultTheme = createTheme();
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "90vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://t4.ftcdn.net/jpg/02/75/39/23/360_F_275392381_9upAWW5Rdsa4UE0CV6gRu2CwUETjzbKy.jpg)',
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "dark"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }} 
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} sx={{backgroundColor:"rgb(255, 255, 255,0.3)"}} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
               
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "rgb(190, 66, 66)" }}>
            </Avatar>
            <Typography component="h1" variant="h5">
              LOGIN
            </Typography>
            <Box component="form" noValidate onSubmit={addData} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={getData}
                
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={getData}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 ,backgroundColor:"rgb(190, 66, 66)"}}
              >
                Sign In
              </Button>
              <Grid container></Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default Login;
