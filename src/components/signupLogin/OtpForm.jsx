import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const OtpForm = ({ phoneNumber, onClose }) => {
    const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const Submit = async (data) => {
    try {
      const userOTP = data.otp;
      const formattedNumber = `+91${phoneNumber}`;
      const res = await axios.post(
        "http://localhost:5645/api/verifyOtp",
        {
          phone: formattedNumber,
          userOTP: userOTP,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
       localStorage.setItem("userId", res.data.userId);



      navigate("/");
      onClose();
       window.location.reload();
       toast.success("you are logedin successfully")
    } catch (error) {
      toast.error(
        "OTP verification failed:"
        
      );
    }
  };

  return (
    <div className="flex justify-center items-center flex-col ">
      <div className="relative w-full h-16">
        <button onClick={onClose}>
          <img
            className="w-4 h-4 absolute top-0 right-100 cursor-pointer"
            src="/hero-img/back.png"
            alt=""
          />
        </button>
      </div>
      <h3 className=" font-semibold text-2xl pb-12">OTP Verification</h3>

      <p>We have sent a verification code to </p>
      <span className="font-semibold text-xl">+91-{phoneNumber}</span>
      <div className="flex gap-4 p-12">
        <form onSubmit={handleSubmit(Submit)}>
          <div>
            <input
              type="text"
              maxLength="4"
              className="w-16 h-16 text-center text-xl border  rounded"
              {...register("otp", { required: "Please enter OTP" })}
            />
            {errors.otp && (
              <span className="text-red-500">{errors.otp.message}</span>
            )}
          </div>
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500"
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default OtpForm;
