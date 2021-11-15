import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { Alert, Container, Grid, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import loginImg from "../../../images/login.png";
import Loading from "../../Shared/Loading/Loading";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, isLoading, loginUser, signInWithGoogle, authError } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);

    e.preventDefault();
  };
  // Google Sign In Handler
  const hangleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };

  // Loading Sate

  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  //End Loading State

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sx={{ mt: 8 }} xs={12} md={6}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 600, color: "#2196f3" }}
            gutterBottom
            style={{
              display: "flex",
              justifyContent: "center",

              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <AccountCircleIcon sx={{ fontSize: "35px" }}> </AccountCircleIcon>
            Login
          </Typography>
          <form onSubmit={handleLoginSubmit}>
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Your Email"
              name="email"
              onChange={handleOnChange}
              variant="standard"
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            >
              {" "}
            </TextField>
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Your Password"
              type="password"
              name="password"
              onChange={handleOnChange}
              variant="standard"
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <LockIcon />
                  </InputAdornment>
                ),
              }}
            />

            <Button
              sx={{ width: "75%", m: 2 }}
              type="submit"
              variant="contained"
            >
              Login
            </Button>
            <NavLink style={{ textDecoration: "none" }} to="/register">
              <Button variant="text">New User? Please Register</Button>
            </NavLink>

            {isLoading && <Loading value={progress} />}
            {user?.email && (
              <Alert severity="success"> User created successfully</Alert>
            )}
            {authError && <Alert severity="error"> {authError}</Alert>}
          </form>
          <p>-----------or------------</p>
          <Button onClick={hangleGoogleSignIn} variant="contained">
            Google Sign In
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%", height: "600px" }} src={loginImg}></img>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
