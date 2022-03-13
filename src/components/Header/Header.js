import React from "react";
import './Header.css';
import { Link } from 'react-router-dom'

function Header(props) {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo"></Link>
              <div className="header__nav-container">
                { props.children}
              </div>
      </div>
    </header>

  );
}

export default Header;
