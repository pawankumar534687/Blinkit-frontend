import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
const AddAdress = ({ onBack }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const userId = localStorage.getItem("userId");
      const payload = { ...data, userId };

      await axios.post("http://localhost:5645/api/getaddress", payload, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      
      window.location.reload()
      
      onBack();
      toast.success("Address created successfully");
    } catch (error) {
      toast.error("Failed to create address. Please try again.");

    }
  };

  return (
    <div>
      <div className="fixed  top-0 bottom-0 left-0  right-0 bg-black/50 flex items-center  justify-center z-[9999] ">
        <div className="bg-white  w-[40%] max-lg:w-[70%] max-md:w-[80%] max-sm:w-[90%] rounded-3xl p-6   ">
          <div className="flex justify-between  pb-4">
            <h2 className="font-semibold text-xl">Enter complete address</h2>
            <button className="font-bold  items-end" onClick={onBack}>
              ✕
            </button>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col">
              <label className="text-sm" htmlFor="houseNo">
                Flat/ House no /Building Name
              </label>
              <input
                id="houseNo"
                placeholder="Flat/ House no /Building Name "
                className="mb-4 placeholder:text-sm border-gray-400 border mt-2 h-10 rounded-xl"
                type="text"
                {...register("houseNo", {
                  required: "Flat/ House no /Building Name is required",
                })}
              />
              {errors.houseNo && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.houseNo.message}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label className="text-sm" htmlFor="area">
                Street / Locality / Area
              </label>
              <input
                id="area"
                placeholder=" Street / Locality / Area"
                className="mb-4 placeholder:text-sm border-gray-400 border mt-2 h-10 rounded-xl"
                type="text"
                {...register("area", {
                  required: " Street / Locality / Area Name is required",
                })}
              />
              {errors.area && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.area.message}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label className="text-sm" htmlFor="city">
                City
              </label>
              <input
                id="city"
                placeholder="Enter your City "
                className="mb-4 placeholder:text-sm border-gray-400 border mt-2 h-10 rounded-xl"
                type="text"
                {...register("city", { required: " city is required" })}
              />
              {errors.city && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.city.message}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label className="text-sm" htmlFor="state">
                State
              </label>
              <input
                id="state"
                placeholder="Enter your State "
                className="mb-4 placeholder:text-sm border-gray-400 border mt-2 h-10 rounded-xl"
                type="text"
                {...register("state", { required: " state  is required" })}
              />
              {errors.state && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.state.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="mx-auto border flex justify-center items-center border-[rgb(13,202,240)] text-[rgb(13,202,240)] hover:bg-[rgb(13,202,240)] hover:text-white px-4 py-2 rounded-xl transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAdress;
