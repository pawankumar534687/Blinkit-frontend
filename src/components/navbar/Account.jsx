import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import useAuthStatus from "../signupLogin/useAuthStatus";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Account() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useAuthStatus();

  const logout = async () => {
    try {
      const response = await axios.get("https://blinkit-backend-oyn1.onrender.com/api/logout", {
        withCredentials: true,
      });

      setIsLoggedIn({ loggedIn: false, phone: null });
      navigate("/");
      window.location.reload();
      toast.success("Logout successfully")
    } catch (error) {
      toast.error("Logout failed");
    }
  };

  return (
    <div className="relative inline-block ">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1"
      >
        Account <span>▼</span>
      </button>

      {open && (
        <div className="absolute  bg-white shadow-lg right-[1px]  z-10 mt-4 rounded-2xl p-12 w-60">
          <h3 className=" font-semibold text-xl">My Account</h3>
          <h3 className="mb-6">{isLoggedIn.phone}</h3>
          <Link
            to="/accounts/myorder"
            className="block py-2 hover:bg-gray-100  no-underline cursor-pointer text-sm text-gray-600"
          >
            My Orders
          </Link>
          <Link
            to="/accounts/address"
            className="block py-2 hover:bg-gray-100 no-underline cursor-pointer text-sm text-gray-600"
          >
            Saved Addresses
          </Link>

          <Link
            to="/accounts/giftcards"
            className="block  py-2 hover:bg-gray-100 no-underline cursor-pointer text-sm text-gray-600"
          >
            E-Gift Cards
          </Link>
          <Link
            to="https://blinkit.com/faq"
            className="block  py-2 hover:bg-gray-100 no-underline cursor-pointer text-sm text-gray-600"
          >
            FAQ's
          </Link>
          <Link
            to="/accounts/accountprivacy"
            className="block  py-2 hover:bg-gray-100 no-underline cursor-pointer text-sm text-gray-600"
          >
            Account Privacy
          </Link>
          <div className="block  py-2 hover:bg-gray-100 no-underline cursor-pointer text-sm text-gray-600">
            <button onClick={logout}>Logout </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Account;
