import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser") || "null");
  return loggedInUser ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
