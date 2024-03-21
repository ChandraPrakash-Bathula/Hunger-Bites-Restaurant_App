import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import ProfileFunctionalComponent from "./Profile"



const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>Restaurant details page</p>
      {/* <Outlet /> */}
      <Profile name={"ClassComponentName"} />
      <ProfileFunctionalComponent name={"Chandu"} />
    </div>
  );
};

export default About;
