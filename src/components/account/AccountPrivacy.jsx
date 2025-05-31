import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AccountPrivacy = () => {
  const navigate = useNavigate();
  const deleteAccount = async () => {
    try {
      const response = await axios.delete("https://blinkit-backend-oyn1.onrender.com/api/user-delete", {
        withCredentials: true,
      });
      toast.success("delete succsessfully")
     
      navigate("/");

    } catch (error) {
      toast.error("delete Request failed please try again")
    }
  }; 
     
  return (
    <div className=" h-screen w-[100%] border-t border-b border-r border-gray-300 ">
      <div className="">
        <h2 className="font-semibold text-xl p-4">
          Account privacy and policy
        </h2>
        <p className="text-sm text-gray-600 p-4">
          We i.e. "Blink Commerce Private Limited", are committed to protecting
          the privacy and security of your personal information. Your privacy is
          important to us and maintaining your trust is paramount. This privacy
          policy explains how we collect, use, process and disclose information
          about you. By using our website/ app/ platform and affiliated
          services, you consent to the terms of our privacy policy (“Privacy
          Policy”) in addition to our ‘Terms of Use.’ We encourage you to read
          this privacy policy to understand the collection, use, and disclosure
          of your information from time to time, to keep yourself updated with
          the changes and updates that we make to this policy. This privacy
          policy describes our privacy practices for all websites, products and
          services that are linked to it. However this policy does not apply to
          those affiliates and partners that have their own privacy policy. In
          such situations, we recommend that you read the privacy policy on the
          applicable site. Should you have any clarifications regarding this
          privacy policy, please write to us at info@blinkit.com
        </p>
        <div className="justify-center items-center flex mt-2 w-[100%] ">
          <button onClick={deleteAccount} className="flex border-gray-300 border cursor-pointer  p-2 w-full justify-between items-center m-4 rounded-2xl">
            <div className="flex">
              <img
                className="w-8 h-8 flex flex-col justify-center items-center"
                src="/account-icons/delete.png"
                alt=""
              />
              <div>
                <h2 className="font-semibold text-md">
                  Request to delete account
                </h2>
                <h4 className="text-sm text-gray-500">
                  Request to closure of your account
                </h4>
              </div>
            </div>
            <img className="w-6 h-6" src="/account-icons/next.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountPrivacy;
