import React, { Component } from "react";
import { Navigate, Link, Redirect } from "react-router-dom";
import { useState } from "react";
import "./LoginComponent.css";

const LoginComponent = () => {
  const [isLoading, setLoader] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [authenticated, setAuth] = useState(false);

  const onLogin = () => {
    const name = document.getElementById("usrname").value;
    const pwd = document.getElementById("pwd").value;
    let content;

    (async () => {
      const rawResponse = await fetch(
        "http://localhost:8080/api/person/login",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userName: name.toString(),
            pwd: pwd.toString(),
          }),
        }
      );
      content = rawResponse.status;
      if (content === 202) {
        if (typeof Storage !== "undefined") {
          localStorage.setItem("currentUser", name.toString());
          setAuth(true);
        } else {
          console.log("Sorry! No Web Storage support..");
        }
      } else {
        setInvalid(true);
      }
    })();
    setLoader(false);
  };
  if (authenticated) {
    console.log("navigate");
    return <Navigate to="/profile" />;
  }
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Lamasocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input
              id="usrname"
              type="text"
              placeholder="Enter Username"
              name="uname"
              required
              className="loginInput"
            />
            <input
              type="password"
              placeholder="Enter Password"
              id="pwd"
              required
              className="loginInput"
            />
            <button className="loginButton" type="submit" onClick={onLogin}>
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
