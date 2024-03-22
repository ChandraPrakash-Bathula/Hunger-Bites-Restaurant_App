import { useState } from "react";
import Logo from "../assets/img/hunger-bites.jpg";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Title = () => {
  return (
    // <h1 id="title" key="h1"> Indus Feast</h1>
    <Link href="/">
      <img className="logo" src={Logo} alt="restaurant-logo" />
    </Link>
  );
};

const HeaderComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();
  return (
    <main>
      <div className="header-component">
        <Title />
        <div className="nav-bar-items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/instamart">Instamart</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>Cart</li>
          </ul>
        </div>
        <h1>{isOnline ? "✅" : "🔴"}</h1>
        {isLoggedIn ? (
          <button
            onClick={() => {
              setIsLoggedIn(false);
            }}
          >
            LogOut
          </button>
        ) : (
          <button
            onClick={() => {
              setIsLoggedIn(true);
            }}
          >
            LogIn
          </button>
        )}
      </div>
    </main>
  );
};

export default HeaderComponent;

/* In {} in jsx only Allowed only JS Expressions and statements */
/* In the case of individual imports and export we need to use the keyword 
export infront of the const variable and also while importing we need to write in {} like import {Title} from "Header"; */
