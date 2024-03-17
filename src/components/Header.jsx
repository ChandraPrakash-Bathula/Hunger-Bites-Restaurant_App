import { useState } from "react";
import Logo from "../assets/img/hunger.png"
const Title = () => {
  return (
    // <h1 id="title" key="h1"> Indus Feast</h1>
    <a href="/">
      <img
        className="logo"
        src={Logo}
        alt="restaurant-logo"
      />
    </a>
  );
};

const HeaderComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <main>
      <div className="header-component">
        <Title />
        <div className="nav-bar-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
        {isLoggedIn ? (
          <button
            onClick={() => {
              setIsLoggedIn(false);
            }}
          >
            LogOut
          </button>
        ) : (
          <button onClick={() => {
            setIsLoggedIn(true);
          }}>LogIn</button>
        )}
      </div>
    </main>
  );
};

export default HeaderComponent;

/* In {} in jsx only Allowed only JS Expressions and statements*/
/* In the case of individual imports and export we need to use the keyword export infront of the const variable and also while importing we need to write in {} like 
  import {Title} from "Header"; */