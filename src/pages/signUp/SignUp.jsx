import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const history = useHistory();

  const auth = getAuth();

  const [state, setState] = useState({
    email: "",
    password: "",
    cPassword: "",
  });

  const { email, password, cPassword } = state;

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(e);
    if (email && password && cPassword) {
      setState({ email: "", password: "", cPassword: "" });

      try {
        const result = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        ); //it is a promise
        localStorage.setItem("currentUser", JSON.stringify(result));
        console.log(result);
        window.location.href = "/";
        toast.success("Registration Successful");
      } catch (err) {
        console.log(err);
        toast.error("Registration Failed");
      }
    } else {
      toast.error("Please fill all the fields");
    }
  };

  return (
    <div className="h-screen flex md:flex-row flex-col py-5 justify-evenly items-center">
      <div className="h-2/3">
        <lottie-player
          src="https://assets5.lottiefiles.com/packages/lf20_gjmecwii.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        />
      </div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1.5 },
        }}
        noValidate
        autoComplete="off"
      >
        <div className="flex flex-col md:px-10 md:py-8 p-2 shadow-xl md:w-[500px] bg-white">
          <h1 className="py-2.5 mx-2.5 md:text-4xl text-3xl font-semibold border-b-2">
            Register / Sign Up
          </h1>

          <TextField
            id="outlined-textarea"
            label="Email Id"
            placeholder="Email Id"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
          <TextField
            id="outlined-textarea"
            label="Password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
          <TextField
            id="outlined-textarea"
            label="Confirm Password"
            placeholder="Confirm Password"
            name="cPassword"
            value={cPassword}
            onChange={handleInputChange}
          />

          <button className="btn-signup m-3" onClick={handleSubmit}>
            SIGN UP
          </button>
          <h1 className="py-3 mx-3 md:text-lg text-md font-medium border-t-2">
            Already registered, Click here to{" "}
            <span
              className="font-bold hover:underline underline-offset-1 cursor-pointer"
              onClick={() => history.push("/signin")}
            >
              Login
            </span>
          </h1>
        </div>
      </Box>
    </div>
  );
};

export default SignUp;
