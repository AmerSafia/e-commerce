import React, { useState } from "react";
import { Input } from "../components/common/input";
import { useHistory, Link } from "react-router-dom";
import { auth } from "../api/auth";
import { useAuthContext } from "../hooks/useAuthContext";
const Signup = () => {
  const [signup, setSignup] = useState({});
  const [error, setError] = useState("");
  const { dispatch } = useAuthContext();
  const history = useHistory();

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
      const { message, success, email, username, token, id } = await auth.login(
        login
      );
      if (success) {
        dispatch({
          type: "LOGIN",
          payload: { id, email, username, token },
        });
        history.push("/");
      } else {
        setError(message);
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
        <p>
          If you already have an account, just {"  "}<Link to="/Login">Login</Link>.
        </p>
      </form>
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default Signup;
