import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const MyOrder = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [hide, setHide] = useState(false);

  const getAllOrder = async () => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      toast.error("User not logged in");
      return;
    }
    try {
      const response = await axios.get(
        `https://blinkit-backend-oyn1.onrender.com/api/allOrders/${userId}`
      );
      const sortedOrders = response.data.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      setAllOrders(sortedOrders);
    } catch (error) {}
  };

  useEffect(() => {
    getAllOrder();
  }, []);

  const updateStatus = async (orderId, status) => {
    try {
      const response = await axios.put(
        `https://blinkit-backend-oyn1.onrender.com/api/orders/${orderId}/status`,
        { status }
      );

      getAllOrder();

      toast.success(status);
    } catch (error) {
      toast.error("Error updating status:", error);
    }
  };

  return (
    <div className=" h-screen w-[100%] border-t border-b border-r border-gray-300 p-4 overflow-y-auto ">
      {allOrders.map((item) => (
        <div
          key={item._id}
          className="bg-white border border-gray-300  p-4 rounded-2xl font-semibold mb-4  text-sm"
        >
          <div
            className={
              item.status === "pending"
                ? "text-amber-300"
                : item.status === "delivered"
                ? "text-[rgb(12,131,31)]"
                : item.status === "cancelled"
                ? "text-red-500"
                : ""
            }
          >
          {item.status}
          </div>
          <div>
            <p>Order Date: {new Date(item.createdAt).toLocaleString()}</p>
          </div>

          <div className=" p-2">
            <div className="flex justify-between">
              <img
                className="w-24 rounded-2xl border border-gray-300"
                src={item.products[0].image}
                alt=""
              />
              <div className="flex flex-col pt-2 ">
                <span>quantity : {item.products[0].unit}</span>
                <span>₹ {item.totalAmount}</span>
              </div>
            </div>

            <div className="flex justify-center items-center  ">
              {item.status === "pending" ? (
                <div className="gap-6 flex ">
                  <button
                    onClick={() => updateStatus(item._id, "cancelled")}
                    className="bg-red-700 text-white text-[12px] rounded-4xl p-2"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => updateStatus(item._id, "delivered")}
                    className="bg-[rgb(12,131,31)] text-white text-[12px] rounded-4xl p-2"
                  >
                    Delivered
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyOrder;
