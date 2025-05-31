import React, { useState } from "react";
import AddAdress from "./AddAdress";
import axios from "axios";
import { useEffect } from "react";
import { toast } from "react-toastify";

const SavedAddresses = ({ onAddressSelect }) => {
  const [address, setAddress] = useState([]);
  const [locationForm, setLocationForm] = useState(false);
 
  
  useEffect(() => {
    const getAddress = async () => {
       const userId = localStorage.getItem("userId")
      try {
        const respose = await axios.get(`http://localhost:5645/api/alladdress/${userId}`);
        const resulte = respose.data;
        setAddress(resulte);
      } catch (error) {
        toast.error("Please add a address")
      }
    };
    getAddress();
  }, []);


  
  return (
    <div className="  w-[100%]  p-6     border-gray-300 ">
      <h2 className="text-2xl font-semibold">My addresses</h2>
      <button
        className="text-sm mt-4  text-[rgb(12,131,31)] font-semibold"
        onClick={() => setLocationForm(true)}
      >
        <span className="font-semibold text-2xl">+</span> Add new address
      </button>
      {locationForm && <AddAdress onBack={() => setLocationForm(false)} />}
      <hr />
      <div className="mt-8 ">
        {address.map((item, index) => (
          <div className="p-2 flex " key={item._id}>
            <img className="w-6 h-6 mr-4 " src="/account-icons/pin.png" alt="" />

            <div>
              <span className="mr-2">{item.houseNo}</span>
              <span className="mr-2">{item.area}</span>

              <span className="mr-2">{item.city}</span>

              <span className="mr-2">{item.state}</span>
              
              <input
                type="radio"
                name="selectedAddress"
                value={address.id}
               onChange={() => onAddressSelect(item)}
               className="cursor-pointer"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedAddresses;
