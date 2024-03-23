import { useState } from "react";
import Logo from "../assets/img/hunger-bites.jpg";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Title = () => {
  return (
    // <h1 id="title" key="h1"> Indus Feast</h1>
    <Link href="/">
      <img className="h-28 pl-2" src={Logo} alt="restaurant-logo" />
    </Link>
  );
};

const HeaderComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();
  return (
    <main>
      <div className="flex justify-between shadow-lg bg-sky-300 sm:bg-sky-50 md:bg-sky-200">
        <Title />
        <div className="nav-bar-items">
          <ul className="flex py-10">
            <li className="px-2">
              <Link to="/">Home</Link>
            </li>
            <li className="px-2">
              <Link to="/about">About</Link>
            </li>
            <li className="px-2">
              <Link to="/instamart">Instamart</Link>
            </li>
            <li className="px-2">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="px-2">Cart</li>
          </ul>
        </div>
        <h1>{isOnline ? "✅" : "🔴"}</h1>
        {isLoggedIn ? (
          <button className="p-2"
            onClick={() => {
              setIsLoggedIn(false);
            }}
          >
            LogOut
          </button>
        ) : (
          <button className="p-2"
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
