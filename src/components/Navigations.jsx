import React from "react";

function Navigations() {
  return (
    <nav className="container">
      <div className="logo">
        <img src="/images/image.png" alt="Nike logo" />
      </div>
      <ul>
        <li href="">Home</li>
        <li href="">Location</li>
        <li href="">About</li>
        <li href="">Contact</li>
      </ul>

      <button>Login </button>
    </nav>
  );
}

export default Navigations;
