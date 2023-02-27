import React from "react";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-light" style="background-color: #e3f2fd;">
        <a className="navbar-brand" href="#">
          <img
            src="/docs/4.0/assets/brand/bootstrap-solid.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          Spotify
        </a>
      </nav>
    </>
  );
}

export default Navbar;
