import React from "react";
import "./Navbar.css";
import ironhackLogo from "./assets/ironhack-logo-xs.png";
import menuLogo from "./assets/menu-top-xs.png";

function Navbar() {
  return (
    <div id="navbar">
      <section>
        <img width="50" src={ironhackLogo} alt="Ironhack logo" />
      </section>
      <section>
        <img width="30" src={menuLogo} alt="menu" />
      </section>
    </div>
  );
}

export default Navbar;
