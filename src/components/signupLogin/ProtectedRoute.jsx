import React from "react";
import useAuthStatus from "./useAuthStatus";

const ProtectedRoute = ({ children, onLoginRequired }) => {
  const { isLoggedIn } = useAuthStatus();

  if (isLoggedIn === null) {
    return <div>Website may load slowly due to free hosting...</div>;
  }

  if (!isLoggedIn.loggedIn) {
    onLoginRequired?.();
    return null;
  }

  return children;
};

export default ProtectedRoute;
