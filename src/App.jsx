import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header"; //We can do this too instead of the below two import structures.
import BodyComponent from "./components/Body";
import FooterComponent from "./components/Footer";


const WebsiteLayout = () => {
  return (
    // <React.Fragment>
    <>
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
    </>
    // </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<WebsiteLayout />);