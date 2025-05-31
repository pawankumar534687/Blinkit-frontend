import React, { useEffect, useState } from "react";
import Quantity from "../products/Quantity";
import Addresses from "./Addresses";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
const Payment = () => {
  const [localData, setLocalData] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const Total = location.state?.totalPrice || 0;
 
  const getData = () => {
    const cardString = localStorage.getItem("cartQuantities");
    if (!cardString) return {};
    try {
      return JSON.parse(cardString);
    } catch (error) {
      toast.error("Invalid cart JSON", error);
      return {};
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

  useEffect(() => {
    const cartData = localStorage.getItem("cartQuantities");
    if (!cartData) return;
    try {
      const parsedData = JSON.parse(cartData);
      const productData = Object.values(parsedData);
      setProducts(productData);
    } catch (error) {
      toast.error(error);
    }
  }, []);

  const sendData = async () => {
    const fillterProductitem = products.map((item) => ({
      productId: item.productId,
      productName: item.productName,
      price: item.price
    ? Number(item.price.replace(/[^0-9.]/g, ""))
    : null,


      quantity: Number(item.quantity),
      unit: item.unit,
      image: Array.isArray(item.images) ? item.images[0] : item.images,
    }));

    const userId = localStorage.getItem("userId");

    if (!userId) {
      toast.error("User not logged in.");

      return;
    }

    try {
      const alldata = {
        products: fillterProductitem,
        totalAmount: Total,
        address: selectedAddress,
        userId,
      };
      if (!selectedAddress) {
        toast.error("Please select an address before placing the order.");
        return;
      }

      const response = await axios.post(
        "https://blinkit-backend-oyn1.onrender.com/api/order",
        alldata,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success("Order placed successfully");
      localStorage.removeItem("cartQuantities");
    products.forEach((item, index) => {
  console.log(`Product ${index + 1} price:`, item.price);
});


      navigate("/accounts/myorder");
    } catch (error) {
      toast.error("Invalid cart JSON");
      return {};
    }
  };

  return (
    <div className="pt-24 ">
      <div className=" flex max-lg:flex-col max-lg:w-full max-lg:justify-center max-lg:items-center justify-between lg:m-12 ">
        <div className="flex flex-col gap-6 p-4 max-lg:w-[90%]  bg-white  rounded-2xl">
          {localData.map((item) => (
            <div
              key={item.productId}
              className="flex justify-center items-center  gap-4 w-full"
            >
              <img
                className="w-20 h-auto border  border-gray-300 rounded-2xl"
                src={item.images}
                alt=""
              />
              <div className="w-[50%]">
                <p className="text-[13px]">{item.productName}</p>
                <p className="text-[13px] text-gray-500">{item.unit}</p>
                <p className="font-semibold text-[13px]">{item.price}</p>
              </div>{" "}
              <div>
                <span>item</span>
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
                  readOnly={true}
                  onQuantityChange={refreshCart}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="w-[40%] max-lg:w-[90%]">
          <Addresses onAddressSelect={setSelectedAddress} />
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={sendData}
          className="bg-[rgb(12,131,31)] text-white px-6 py-2 rounded-lg"
        >
          {Total} ₹ Place order
        </button>
      </div>
    </div>
  );
};

export default Payment;
