import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import OtpForm from "./OtpForm";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const LoginModel = ({ onClose }) => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showChild, setShowChild] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,10}$/.test(value)) {
      setPhoneNumber(value);
    }
  };

  const Submit = async (data) => {
    try {
      const formattedNumber = `+91${data.phone}`;
      const res = await axios.post(
        "https://blinkit-backend-oyn1.onrender.com/api/send-otp",
        {
          phone: formattedNumber,
        },
        {
          withCredentials: true,
        }
      );

     
      setShowChild(true);
       toast.success("otp send successfully");
    } catch (error) {
      toast.error("Sorry only developer can login")
    }
  };
const handleBack = () => {
  if (window.location.pathname === "/") {
    onClose();
   
  } else {
     navigate(-1);
   
  }
};


  return (
    <div className="fixed top-0 bottom-0 left-0  right-0 bg-black/50 flex items-center  justify-center z-[9999] ">
      <div className="bg-white w-[40%] max-lg:w-[70%] max-md:w-[80%] max-sm:w-[90%] rounded-3xl p-6 flex justify-center items-center flex-col">
        {!showChild && (
          <>
          
            <div className="relative w-full h-6 ">
              <button onClick={handleBack}>
                <img
                  className="w-4 h-4 absolute top-0 left-0 cursor-pointer"
                  src="/hero-img/back.png"
                  alt=""
                />
              </button>
            </div>
            <img
              className="w-22 h-22 mb-4"
              src="/hero-img/blinkitblack.png"
              alt=""
            />
            <h1 className="text-3xl font-bold">India's last minute app</h1>
            <h3 className="text-xl p-2 font-semibold">Log in or Sign up</h3>
            <form onSubmit={handleSubmit(Submit)}>
              <div>
                <div className="flex gap-4   border-gray-400 border rounded-2xl p-4">
                  <span className=" font-semibold mt-[1px] text-lg">+91</span>
                  <input
                    type="text"
                    className="placeholder:font-semibold  text-lg focus:outline-none w-72"
                    placeholder="Enter mobile number"
                    value={phoneNumber}
                    onInput={handleInputChange}
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Phone number must be 10 digits",
                      },
                    })}
                  />
                </div>
                {errors.phone && (
                  <span className="text-red-500">{errors.phone.message}</span>
                )}
              </div>
              <div className="flex justify-center mt-6 w-[100%]">
                <button
                  className="text-xl font-semibold rounded-2xl p-4 w-[100%] text-white  bg-gray-400 hover:bg-gray-500"
                  type="submit"
                >
                  Continue
                </button>
              </div>
            </form>
          </>
        )}
        {showChild && <OtpForm phoneNumber={phoneNumber} onClose={onClose} />}
        <p className="mt-8">
          By continuing, you agree to our Terms of service & Privacy policy
        </p>
      </div>
    </div>
  );
};

export default LoginModel;
