import { useRouteError } from "react-router-dom";
const error = () => {
    const err = useRouteError();
  return (
    <div className="error">
        {console.log(err)}
        <div>Oops!!</div>
        <h3>Something went wrong</h3>
    </div>
  )
}

export default error;