import React from "react";

const P2 = () => {
  let isLoggedIn = true;
  return (
    <div>
      {(isLoggedIn && <span>Logged In</span>) || <span>Logged out</span>}
      {/* OR */}
      {isLoggedIn ? <span>Logged In</span> : <span>Logged out</span>}
    </div>
  );
};

export default P2;
