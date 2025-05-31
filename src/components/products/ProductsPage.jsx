import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Quantity from "./Quantity";
import { toast } from "react-toastify";

const ProductsPage = (props) => {
  const [producatCategory, setProducatCategory] = useState([]);
  const params = useParams();
  const category = props.category || params.category;
  const getData = async (category) => {
    try {
      const response = await axios.get(
        `http://localhost:5645/api/products/${category}`
      );

      setProducatCategory(response.data);
    } catch (error) {
      toast.error("faild to load ")
    }
  };

  useEffect(() => {
    if (category) {
      getData(category);
    }
  }, [category]);

  return (
    <div className="w-full pt-24 max-lg:pt-36 bg-gray-100">
      <div className="p-4 text-3xl font-semibold">{category}</div>
      <div className="grid grid-cols-1 mx-12 pb-12    sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 justify-items-center">
        {producatCategory.map((item) => (
          <Link to={`products/DetaildProduct/${item._id}`} key={item._id}>
            <div
              className="w-60  border bg-white  p-6 flex flex-col rounded-xl justify-center items-center border-gray-200 max-md:w-[90%]  h-auto"
              key={item._id}
            >
              <img src={item.images[0]} alt="" />
              <p className="text-md font-semibold">{item.productName}</p>
              <p className="text-gray-400 self-start rounded-lg p-2">
                {item.unit}
              </p>
              <div className="flex gap-20">
                <p className="text-md font-semibold">{item.price}</p>
                <Quantity
                  product={{
                    productId: item._id,
                    productName: item.productName,
                    price: item.price,
                    unit: item.unit,
                     images: Array.isArray(item.images) ? item.images[0] : item.images,
                     quantity: item.quantity,
                  }}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
