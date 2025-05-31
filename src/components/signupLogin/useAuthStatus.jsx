import React, { useEffect, useState } from "react";
import axios from "axios";

const useAuthStatus = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const response = await axios.get(
          "https://blinkit-backend-oyn1.onrender.com/api/checkLogin",
          {
            withCredentials: true,
          }
        );
        setIsLoggedIn({
          loggedIn: response.data.loggedIn,
          phone: response.data.phone || null,
        });
      } catch (error) {
        setIsLoggedIn({ loggedIn: false, phone: null });
      }
    };
    checkLogin();
  }, []);

  return { isLoggedIn, setIsLoggedIn };
};

export default useAuthStatus;
