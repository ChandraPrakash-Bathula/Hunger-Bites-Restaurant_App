import { useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);

  return (
    <>
      <h1>Profile Component</h1>
      <h2>Name : {props.name}</h2>
      <h3>Count: {count}</h3>
      <h3>Count: {count2}</h3>
      <button
        onClick={() => {
          setCount(1);
          setCount2(2);
        }}
      >
        Toggle
      </button>
    </>
  );
};

export default Profile;
