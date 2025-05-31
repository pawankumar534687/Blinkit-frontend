import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import Location from "./Location";
import Account from "./Account";
import { Link } from "react-router-dom";
import useAuthStatus from "../signupLogin/useAuthStatus";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Search from "./Search";

const Navbar = ({ onClickShow, onClickBill }) => {
  const { isLoggedIn } = useAuthStatus();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const [first, setfirst] = useState([]);

  useEffect(() => {
    const localData = localStorage.getItem("cartQuantities");
    if (localData) {
      try {
        const parseData = JSON.parse(localData);
        if (parseData && typeof parseData === "object") {
          const data = Object.values(parseData);
          setfirst(data);
        }
      } catch (error) {
        toast.error("Error parsing localStorage cartQuantities");
      }
    }
  }, []);

  if (isLoggedIn === null) return <p>Loading...</p>;

  const filler = first.map((item) => ({
    quantity: Number(item.quantity),
  }));

  const totalQuantity = filler.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="lg:flex fixed top-0 max-lg:justify-center  left-0 w-full bg-white shadow z-50 lg:justify-between lg:items-center gap-6 lg:h-24    lg:border-b  lg:border-b-neutral-200">
      <Logo />

      <div className="flex lg:justify-between items-center max-lg:justify-around lg:w-[70%]   m-4">
        <button className="lg:hidden" onClick={() => navigate(-1)}>
          <img className="w-6 h-6" src="/hero-img/back.png" alt="" />
        </button>
        <Location />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            navigate(`/search?query=${query}`);
          }}
          className="flex  lg:justify-start  justify-center bg-gray-100 rounded-2xl border border-gray-300 h-13    lg:items-center max-lg:w-[25%] lg:hidden   "
        >
          <button
            type="submit"
            className=" text-white  cursor-pointer rounded-r"
          >
            <img
              className="w-4 h-4  "
              src="/hero-img/search.png"
              alt=""
            />
          </button>
          <input
            type="text"
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className=" px-4 outline-0  py-2 w-[60%] "
          />
        </form>

        <div className="lg:hidden">
          {isLoggedIn.loggedIn ? (
            <div className="mt-4">
              <Account />
            </div>
          ) : (
            <button
              className="font-medium text-xl cursor-pointer"
              onClick={onClickShow}
            >
              <img
                src="/hero-img/user.png"
                className="lg:hidden w-6 h-6 cursor-pointer"
                alt=""
              />{" "}
            </button>
          )}
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            navigate(`/search?query=${query}`);
          }}
          className="flex  lg:justify-start  justify-center bg-gray-100 rounded-2xl border border-gray-300 h-13    lg:items-center max-lg:w-[25%] max-lg:hidden   lg:w-[80%]"
        >
          <button
            type="submit"
            className=" text-white  cursor-pointer rounded-r"
          >
            <img
              className="w-4 h-4 lg:ml-4 "
              src="/hero-img/search.png"
              alt=""
            />
          </button>
          <input
            type="text"
            placeholder="Search products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className=" px-4 outline-0  py-2 w-[60%] "
          />
        </form>

        <button
          onClick={onClickBill}
          className="text-md lg:hidden  font-semibold"
        >
          <div className="flex w-32 h-14 justify-center items-center text-white gap-2 bg-[rgb(12,131,31)] p-2 mr-4 rounded-xl">
            <img
              className="w-6 h-6 invert brightness-200"
              src="/hero-img/shopping.png"
              alt="shopping"
            />
            My Cart
          </div>
        </button>
      </div>

      <div className=" max-lg:hidden">
        {isLoggedIn.loggedIn ? (
          <Account />
        ) : (
          <button
            className="font-medium text-xl max-lg:hidden cursor-pointer"
            onClick={onClickShow}
          >
            Login
          </button>
        )}
      </div>
      <button
        onClick={onClickBill}
        className="text-md max-lg:hidden lg:w-[15%] font-semibold"
      >
        <div className="flex w-32 h-14 justify-center items-center text-white gap-2 bg-[rgb(12,131,31)] p-2 mr-4 rounded-xl">
          <img
            className="w-6 h-6 invert brightness-200"
            src="/hero-img/shopping.png"
            alt="shopping"
          />
          My Cart
        </div>
      </button>
    </div>
  );
};

export default Navbar;
