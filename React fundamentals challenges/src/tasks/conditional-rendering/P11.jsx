import React from "react";

const P11 = ({ isLoggedIn }) => {
  return <div>{isLoggedIn ? "Welcome Back" : "Please Log in"}</div>;
};

export default P11;
