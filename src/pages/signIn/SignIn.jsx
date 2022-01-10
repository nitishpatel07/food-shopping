import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const auth = getAuth();

  const history = useHistory();

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const { email, password } = state;

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(e);
    if (email && password) {
      setState({ email: "", password: "" });

      try {
        const result = await signInWithEmailAndPassword(auth, email, password);
        localStorage.setItem("currentUser", JSON.stringify(result));
        console.log(result);
        window.location.pathname = "/";
        toast.success("Sign In Successful");
      } catch (err) {
        console.log(err);
        toast.error("Username or Password did not match");
      }
    } else {
      toast.error("Please fill all the fields");
    }
  };

  return (
    <div className="h-screen flex md:flex-row flex-col py-5 justify-evenly items-center">
      <div className="h-2/3 md:order-last">
        <lottie-player
          src="https://assets5.lottiefiles.com/packages/lf20_xlmz9xwm.json"
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
        <div className="flex flex-col md:order-first md:px-10 md:py-8 p-2 shadow-xl md:w-[500px] w-[350px] bg-white">
          <h1 className="py-2.5 mx-2.5 md:text-4xl text-3xl font-semibold border-b-2">
            Sign In
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

          <button className="btn-signup m-3" onClick={handleSubmit}>
            SIGN IN
          </button>
          <h1 className="py-3 mx-3 md:text-lg text-md font-medium border-t-2">
            Not yet registered, Click here to{" "}
            <span
              className="font-bold hover:underline underline-offset-1 cursor-pointer"
              onClick={() => history.push("/signup")}
            >
              Register
            </span>
          </h1>
        </div>
      </Box>
    </div>
  );
};

export default SignIn;
