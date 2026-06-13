import React from "react";
import "./Header.css";
import { FaLanguage } from "react-icons/fa";

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <img
          className="logo-img"
          src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Netflix-Logo.png"
          alt="Netflix Logo"
        />
      </div>
      <div className="header-right">
        <FaLanguage />
        <select className="language-btn">
          <option value="en">English</option>
          <option value="ml">Malayalam</option>
          <option value="hi">Hindi</option>
        </select>
        <button className="signin-btn">Sign In</button>
      </div>
    </div>
  );
}

export default Header;
