import { NavLink } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi"; // Game Icons collection, and Hamburger Menu is an icon representing a menu button.

import { useState } from "react";  // Controls whether the nav is open or closed in mobile

export const Headers = () => {
  const [show, setShow] = useState(false);  //Initially, the menu is hidden (false).

  //Function to toggle the state (show)
  const handleButtonToggle = () => {
    return setShow(!show);
  };

  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">
          <div className="Logo">
            <NavLink to="/">
              <h1>WorldAtlas</h1>
            </NavLink>
          </div>

          {/* If show is true, use class menu-mobile (for mobile). Else, use class menu-web (for desktop view) */}

          <nav className={show ? "menu-mobile" : "menu-web"}>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/country">Country</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>

          <div className="ham-menu">
            <button onClick={handleButtonToggle}>
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};