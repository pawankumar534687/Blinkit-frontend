import React, { useEffect, useState } from "react";
import Quantity from "../products/Quantity";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const MyCart = ({ onRemove }) => {
  const [localData, setLocalData] = useState([]);

  const getData = () => {
    const cardString = localStorage.getItem("cartQuantities");
    if (!cardString) return {};
    try {
      return JSON.parse(cardString);
    } catch (error) {
      toast.error("Invalid cart JSON")
      return {}
    }
  };

  const refreshCart = () => {
    const objectData = getData();
    const itemsArray = Object.values(objectData);
   
    setLocalData(itemsArray);
  };

  useEffect(() => {
    refreshCart();
  }, []);

  const result = localData.reduce((sum, item) => {
   const numericPrice = item.price ? parseFloat(item.price.slice(1)) : 0;

    const quantity = Number(item.quantity) || 0;
    return sum + numericPrice * quantity;
  }, 0);

  const realResulte = result + 2 + 25;

  return (
    <div className="fixed inset-0 bg-black/50 z-[9998] flex justify-end max-lg:justify-center">
  <div
   className="
  bg-gray-100 flex flex-col fixed z-[9999]
  top-0 right-0 bottom-0
  md:left-auto md:w-[45%]        
  lg:w-[30%]                     

  max-md:inset-y-0 max-md:mx-auto max-md:left-0 max-md:right-0 max-md:top-0 max-md:bottom-0
  max-md:w-[90%] max-md:h-[90%] max-md:rounded-xl  

  shadow-lg
"
  >
        <div className=" justify-between     bg-white  top-0 flex  items-center p-4">
          <h2 className="text-lg font-semibold">My Cart</h2>
          <button className=" cursor-pointer font-bold" onClick={onRemove}>
            ✕
          </button>
        </div>
        <div className="overflow-y-auto  m-4 mt-6   ">
          {localData.length === 0 ? (
            <p> No data here</p>
          ) : (
            <div className="flex flex-col gap-6 p-4  bg-white  rounded-2xl">
              {localData.map((item) => (
                <div
                  key={item.productId}
                  className="flex justify-center items-center  gap-4 w-full"
                >
                  <img
                    className="w-20 h-auto border  border-gray-300 rounded-2xl "
                    src={item.images}
                    alt=""
                  />
                  <div className="w-[50%]">
                    <p className="text-[13px]">{item.productName}</p>
                    <p className="text-[13px] text-gray-500">{item.unit}</p>
                    <p className="font-semibold text-[13px]">{item.price}</p>
                  </div>
                  <Quantity
                    product={{
                      productId: item.productId,
                      productName: item.productName,
                      price: item.price,
                      unit: item.unit,
                      images: Array.isArray(item.images)
                        ? item.images[0]
                        : item.images,
                      quantity: item.quantity,
                    }}
                    onQuantityChange={refreshCart}
                  />
                </div>
              ))}
            </div>
          )}

          {localData.length > 0 && (
            <div className="bg-white mt-4 p-4 rounded-2xl ">
              <h4 className="font-semibold text-md mb-2">Bill Deatails</h4>
              <div className="flex mb-2 justify-between">
                <div className="flex gap-2 ">
                  <img
                    className="w-6 "
                    src="account-icons/compliant.png"
                    alt=""
                  />
                  <p className="text-[13px] text-gray-800">Items total</p>
                </div>
                <p className="text-[13px] text-gray-800"> ₹{result}</p>
              </div>
              <div className="flex mb-2 justify-between">
                <div className="flex gap-2 ">
                  <img
                    className="w-6 "
                    src="account-icons/delivery.png"
                    alt=""
                  />
                  <p className="text-[13px] text-gray-800">Delivery charge</p>
                </div>
                <p className="text-[13px] text-gray-800">₹{25}</p>
              </div>
              <div className="flex mb-2 justify-between">
                <div className="flex gap-2 ">
                  <img className="w-6 " src="account-icons/bag.png" alt="" />
                  <p className="text-[13px] text-gray-800">Handling charge</p>
                </div>
                <p className="text-[13px] text-gray-800">₹{2}</p>
              </div>
              <div className="flex mb-2 justify-between">
                <p className="font-semibold text-sm">Grand total</p>
                <p className="font-semibold text-sm">₹{realResulte}</p>
              </div>
            </div>
          )}
          <div className="bg-white mt-4 p-4 rounded-2xl ">
            <h3 className="font-semibold text-md">Cancellation Policy</h3>
            <p className="text-[13px] text-gray-500">
              Orders cannot be cancelled once packed for delivery. In case of
              unexpected delays, a refund will be provided, if applicable.
            </p>
          </div>
        </div>
        {localData.length > 0 && (
          <div className="bg-white m-4  mt-4">
            <Link
              to="/payment"
              onClick={onRemove}
              state={{ totalPrice: realResulte }}
              className="bg-[rgb(12,131,31)] flex rounded-xl p-2 text-white justify-between items-center"
            >
              <div className="flex flex-col">
                <span className="font-semibold text-sm">₹{realResulte}</span>
                <span className=" text-sm">TOTAL</span>
              </div>
              <p>Proceed To Pay </p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCart;
