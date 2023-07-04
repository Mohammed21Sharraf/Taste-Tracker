import React, { useEffect, useState } from "react";
import "./Login.scss";
import logo from "../../../../img/newlogotxt.png";
import { useNavigate } from "react-router-dom";
import { register, login } from "../../../../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((store) => store.user);

  const [formData, setFormData] = useState({
    loginEmail: "",
    loginPassword: "",
  });
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    role: "restaurantOwner",
  });

  const loginDataChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const registerDataChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const { loginEmail, loginPassword } = formData;
  const { name, email, password, role } = userInfo;

  const registerSubmit = (e) => {
    e.preventDefault();
    const userData = { name, email, password, role };
    dispatch(register(userData));
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    const loginData = { loginEmail, loginPassword };
    dispatch(login(loginData));
  };

  useEffect(() => {
    if (isAuthenticated && role === "restaurantOwner") {
      navigate("/form");
    }
  });

  const handleSignUpClick = () => {
    const container = document.querySelector(".container");
    container.classList.add("sign-up-mode");
  };

  const handleSignInClick = () => {
    const container = document.querySelector(".container");
    container.classList.remove("sign-up-mode");
  };

  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form className="sign-in-form" onSubmit={loginSubmit}>
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                name="loginEmail"
                placeholder="Email"
                required
                value={loginEmail}
                onChange={loginDataChange}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                name="loginPassword"
                placeholder="Password"
                required
                value={loginPassword}
                onChange={loginDataChange}
              />
            </div>
            <input type="submit" value="Login" className="btn solid" />
          </form>

          <form action="#" className="sign-up-form" onSubmit={registerSubmit}>
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                placeholder="Username"
                required
                name="name"
                value={name}
                onChange={registerDataChange}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input
                type="email"
                placeholder="Email"
                required
                name="email"
                value={email}
                onChange={registerDataChange}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                required
                name="password"
                value={password}
                onChange={registerDataChange}
              />
            </div>
            <div className="user-type-field">
              <select name="role" value={role} onChange={registerDataChange}>
                <option value="restaurantOwner">Restaurant Owner</option>
                <option value="user">User</option>
              </select>
            </div>
            <input type="submit" className="btn" value="Sign Up" />
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here?</h3>
            <p>Sign Up Now!</p>
            <button className="btn transparent" onClick={handleSignUpClick}>
              Sign up
            </button>
          </div>
          <img src={logo} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us?</h3>
            <p>Sign In Now!</p>
            <button className="btn transparent" onClick={handleSignInClick}>
              Sign in
            </button>
          </div>
          <img src={logo} className="image" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
