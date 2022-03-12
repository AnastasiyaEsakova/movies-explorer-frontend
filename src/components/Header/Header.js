import React from "react";
import './Header.css'

function Header(props) {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo"></div>
              <div className="header__nav-container">
                { props.children}
              </div>
      </div>
    </header>

  );
}

export default Header;
