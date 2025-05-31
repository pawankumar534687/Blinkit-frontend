import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
      <div className="text-6xl animate-bounce mb-4">😕</div>
      <h1 className="text-5xl font-bold text-gray-800 transition-opacity duration-700 opacity-100">
        404
      </h1>
      <p className="text-lg text-gray-600 mt-2 mb-6 animate-pulse">
        Oops! Page not found.
      </p>
      <Link
        to="/"
        className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-transform hover:scale-105"
      >
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
