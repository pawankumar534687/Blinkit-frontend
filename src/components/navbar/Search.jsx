import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSearchParams, Link } from "react-router-dom";
import Quantity from "../products/Quantity";
import { toast } from "react-toastify";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const [results, setResults] = useState([]);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      const fetchResults = async () => {
        if (!query) return;

        try {
          const res = await axios.get(
            `http://localhost:5645/api/products/search?query=${query}`
          );
          setResults(res.data);
        } catch (error) {
          toast.error("Search error:", error.message);
        }
      };

      fetchResults();
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [query]);

  return (
    <div className="pt-32 px-4 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {results.map((item) => (
          <Link to={`/products/DetaildProduct/${item._id}`} key={item._id}>
            <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center">
              <img
                src={item.images[0]}
                alt={item.productName}
                className="h-40 w-auto object-contain mb-2"
              />
              <p className="text-md font-semibold text-center">{item.productName}</p>
              <p className="text-gray-500 text-sm">{item.unit}</p>
              <div className="flex justify-between items-center w-full mt-2">
                <p className="text-md font-semibold">{item.price}</p>
                <Quantity
                  product={{
                    productId: item._id,
                    productName: item.productName,
                    price: item.price,
                    unit: item.unit,
                    images: Array.isArray(item.images)
                      ? item.images[0]
                      : item.images,
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

export default Search;
