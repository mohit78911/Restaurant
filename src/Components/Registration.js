import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Registration.css";
// import { Button } from "@mui/material";
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
  const location = useNavigate();
  const addData = (e) => {
    e.preventDefault();
    const { name, email, dob, password } = values;
    if (name === "") {
      toast.error("name field is empty", { position: "top-right" });
    } else if (email === "") {
      toast.error("email field is empty", { position: "top-right" });
    } else if (dob === "") {
      toast.error("Date of Birth field is empty", { position: "top-right" });
    } else if (password === "") {
      toast.error("Password field is empty", { position: "top-right" });
    } else if (password.length < 6) {
      toast.error("Password must be 6 character", { position: "top-right" });
    } else {
      toast.success("Data Added SuccessFully", { position: "top-right" });
      localStorage.setItem("loginData", JSON.stringify([values]));
      console.log([values]);
      setTimeout(() => {
        location("/login");
      }, 3000);
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
            backgroundImage:
              "url(https://t4.ftcdn.net/jpg/02/75/39/23/360_F_275392381_9upAWW5Rdsa4UE0CV6gRu2CwUETjzbKy.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "dark"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          sx={{ backgroundColor: "rgb(255, 255, 255,0.3)" }}
          square
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "rgb(190, 66, 66)" }}></Avatar>
            <Typography component="h1" variant="h5">
              REGISTER
            </Typography>
            <Box component="form" noValidate onSubmit={addData} sx={{ mt: 1 ,maxHeight:"50vh" }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoFocus
                onChange={getData}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="email"
                label="Email Address"
                type="email"
                id="email"
                autoComplete="email"
                onChange={getData}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="dob"
                label="Date Of Birth"
                type="date"
                id="dob"
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
                sx={{ mt: 3, mb: 2, backgroundColor: "rgb(190, 66, 66)" }}
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

export default Registration;
