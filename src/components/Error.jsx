import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  const {status, statusText} = err;
  return (
    <div>
      <h1>Oops!!</h1>
      <h2>Something Went Wrong</h2>
      <h3>{status + " : " + statusText}</h3>
    </div>
  );
};

export default Error;
