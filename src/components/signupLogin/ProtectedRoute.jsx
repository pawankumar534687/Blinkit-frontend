import React from "react";
import useAuthStatus from "./useAuthStatus";

const ProtectedRoute = ({ children,onLoginRequired  }) => {
  const { isLoggedIn } = useAuthStatus();



  
  if (isLoggedIn === null) {
    return <div>Loading...</div>;
  }

  if (!isLoggedIn.loggedIn) {
    onLoginRequired?.();
    return null;
  }

  return children;
};

export default ProtectedRoute;
