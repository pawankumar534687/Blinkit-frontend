import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import useAuthStatus from "../signupLogin/useAuthStatus";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Accounts = () => {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useAuthStatus();
  if (isLoggedIn === null) return <p>Loading...</p>;

  const logout = async () => {
    try {
      const response = await axios.get("http://localhost:5645/api/logout", {
        withCredentials: true,
      });
      setIsLoggedIn({ loggedIn: false, phone: null });
      navigate("/");
      window.location.reload();
      toast.success("you are Logout successfully")
    } catch (error) {
      toast.error("Logout failed please try again")
     
    }
  };

  return (
    <div className="w-full pt-36 bg-gray-50 min-h-screen">
      <div className="flex flex-col lg:flex-row w-full px-4 lg:px-48 pt-8">
        
        <div className="hidden lg:flex flex-col w-72 bg-white border border-gray-300">
          <h1 className="px-8 py-6  border-gray-300 font-semibold">
            {isLoggedIn.phone}
          </h1>

          <Link
            to="/accounts/address"
            className="flex gap-2 items-center text-gray-600 p-6 hover:bg-amber-100 border-b border-gray-300"
          >
            <img className="w-6" src="/account-icons/map.png" alt="Map" />
            My Addresses
          </Link>
          <Link
            to="/accounts/myorder"
            className="flex gap-2 items-center text-gray-600 p-6 hover:bg-amber-100 border-b border-gray-300"
          >
            <img className="w-6" src="/account-icons/compliant.png" alt="Orders" />
            My Orders
          </Link>
          <Link
            to="/accounts/giftcards"
            className="flex gap-2 items-center text-gray-600 p-6 hover:bg-amber-100 border-b border-gray-300"
          >
            <img className="w-6" src="/account-icons/gift-card.png" alt="Gift Card" />
            E-Gift Cards
          </Link>
          <Link
            to="/accounts/accountprivacy"
            className="flex gap-2 items-center text-gray-600 p-6 hover:bg-amber-100 border-b border-gray-300"
          >
            <img className="w-6" src="/account-icons/padlock.png" alt="Privacy" />
            Account Privacy
          </Link>
          <div
            onClick={logout}
            className="flex gap-2 items-center text-gray-600 p-6 cursor-pointer hover:bg-amber-100  border-gray-300"
          >
            <img className="w-6" src="/account-icons/user.png" alt="Logout" />
            Logout
          </div>
        </div>

       
        <div className="w-full lg:flex-1 bg-white border border-gray-300">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Accounts;
