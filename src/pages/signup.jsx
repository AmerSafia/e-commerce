import React, { useState } from "react";
import { Input } from "../components/common/input";
import { auth } from "../api/auth";
const Signup = () => {
  const [signup, setSignup] = useState({});
  const [error, setError] = useState("");

  const onSetSignup = (event) => {
    const { value, name } = event.target;
    setSignup({
      ...signup,
      [name]: value,
    });
  };

  const register = async (event) => {
    event.preventDefault();
    try {
      const res = await auth.signup(signup);
      if (!res.success) {
        setError(res.message);
      } else {
        setError("");
        const { email, id } = res;
        localStorage.setItem("logger", JSON.stringify({ email, id, password }));
      }
    } catch (error) {
      console.log(error);
    }
  
  };
  return (
    <div className="container card-style card-style-width">
      <div className="d-flex justify-content-between mb-5 ">
        <h2> Sign Up</h2>
        <div>
          <i
            className="fa fa-facebook-official  fa-2x mx-2"
            aria-hidden="true"
          ></i>
          <i className="fa fa-twitter fa-2x" aria-hidden="true"></i>
        </div>
      </div>
      <form className="container px-0 mt-2">
        <Input label="Username" name="username" onSetInput={onSetSignup} />
        <Input
          label="Email"
          name="email"
          type="email"
          onSetInput={onSetSignup}
        />
        <Input
          type="password"
          label="Password"
          name="password"
          onSetInput={onSetSignup}
        />
        <button
          type="submit"
          onClick={register}
          className="btn w-100 mt-2 mb-3"
        >
          Sign Up
        </button>
      </form>
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default Signup;
