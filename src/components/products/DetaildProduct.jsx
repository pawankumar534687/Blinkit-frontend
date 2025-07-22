import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Quantity from "./Quantity";
import { toast } from "react-toastify";
const DetaildProduct = () => {
  const [detailed, setdetailed] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const { id } = useParams();
  const detailedProduct = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5645/api/products/detaildProduct/${id}`
      );

      setdetailed(response.data);
      setSelectedImage(response.data.images?.[0]);
    } catch (error) {
      toast.error("faild to load")
    }
  };

  useEffect(() => {
    detailedProduct();
  }, []);

  return (
    <div className="w-[100%] flex pt-24 max-lg:pt-36  max-lg:flex-col border-b border-b-neutral-200   lg:h-screen ">
      <div className="w-[55%] border-r max-lg:w-[100%]  border-r-neutral-200 pb-12 lg:overflow-y-auto  ">
        <div className=" flex justify-center p-12 items-center flex-col border-b border-b-neutral-200 ">
          {selectedImage && (
            <img src={selectedImage} alt="Selected" className="w-[65%]" />
          )}
          <div className="flex gap-4 pt-8">
            {detailed?.images?.map((image, index) => (
              <img
                src={image}
                alt="img"
                key={index}
                className={` w-20 rounded-2xl  ${
                  selectedImage === image ? "border-2 border-green-600" : ""
                }`}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
        </div>
        <div className="flex px-6 lg:hidden justify-between">
          <div> 
            <p className="text-xl   ">
              MRP <span className="font-semibold">{detailed?.price}</span>
            </p>
            <p className="border-b border-b-neutral-200 pb-8 text-[12px] text-gray-500">
              (Inclusive of all taxes)
            </p>
          </div>
          <Quantity
            product={{
              productId: detailed?._id,
              productName: detailed?.productName,
              price: detailed?.price,
              unit: detailed?.unit,
              images: Array.isArray(detailed?.images)
                ? detailed?.images[0]
                : detailed?.images,
              quantity: detailed?.quantity,
            }}
          />
        </div>

        <div className="ml-12 pt-12 pr-6 ">
          <h3 className="text-3xl font-semibold   ">Product Details </h3>
          <h2 className="text-lg font-semibold mt-4">key Features</h2>
          {detailed?.keyFeatures?.map((item, index) => (
            <div className="text-gray-500" key={index}>
              {item}
            </div>
          ))}
          <h2 className="text-lg font-semibold mt-2">unit</h2>

          <p className="text-gray-500">{detailed?.unit}</p>
          <h2 className="text-lg font-semibold mt-2">FSSAI License</h2>

          <p className="text-gray-500">{detailed?.fssaiLicense}</p>
          {detailed?.returnPolicy?.length > 0 && (
            <>
              <h2 className="text-lg font-semibold mt-2">Ingredients</h2>
              {detailed.returnPolicy.map((item, index) => (
                <div className="text-gray-500" key={index}>
                  {item}
                </div>
              ))}
            </>
          )}
          <h2 className="text-lg font-semibold mt-2">Shelf Life</h2>

          <p className="text-gray-500">{detailed?.shelfLife}</p>
          <h2 className="text-lg font-semibold mt-2">Manufacturer Name</h2>

          <p className="text-gray-500">{detailed?.manufacturerName}</p>
          <h2 className="text-lg font-semibold mt-2">Country Of Origin</h2>

          <p className="text-gray-500">{detailed?.countryOfOrigin}</p>
          <h2 className="text-lg font-semibold mt-2">Seller Name</h2>

          <p className="text-gray-500">{detailed?.sellerName}</p>
          <h2 className="text-lg font-semibold mt-2">Seller Fssai</h2>

          <p className="text-gray-500">{detailed?.sellerFssai}</p>
          <h2 className="text-lg font-semibold mt-2">Description</h2>

          <p className="text-gray-500">{detailed?.description}</p>
          <h2 className="text-lg font-semibold mt-2">Disclaimer</h2>

          <p className="text-gray-500">{detailed?.disclaimer}</p>
        </div>
      </div>

      <div className="w-[45%] max-lg:w-[100%] p-12  ">
        <div>
          <h2 className="text-3xl font-semibold">{detailed?.productName}</h2>

          <p className="text-gray-500 py-4">{detailed?.unit}</p>
          <div className="flex max-lg:hidden justify-between">
            <div>
              <p className="text-xl   ">
                MRP <span className="font-semibold">{detailed?.price}</span>
              </p>
              <p className="border-b border-b-neutral-200 pb-8 text-[12px] text-gray-500">
                (Inclusive of all taxes)
              </p>
            </div>
            <Quantity
              product={{
                productId: detailed?._id,
                productName: detailed?.productName,
                price: detailed?.price,
                unit: detailed?.unit,
                images: Array.isArray(detailed?.images)
                  ? detailed?.images[0]
                  : detailed?.images,
                quantity: detailed?.quantity,
              }}
            />
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold py-6">Why shop from blinkit?</h3>
          <div className="flex gap-6">
            <img className="w-[10%]" src="/hero-img/superfast.png" alt="" />
            <div>
              <h5 className="text-sm ">Superfast Delivery</h5>
              <p className="text-sm text-gray-500">
                Get your order delivered to your doorstep at the earliest from
                dark stores near you.
              </p>
            </div>
          </div>
          <div className="flex gap-6 py-4">
            <img className="w-[10%]" src="/hero-img/bestprice.png" alt="" />
            <div>
              <h5 className="text-sm ">Best Prices & Offers</h5>
              <p className="text-sm text-gray-500">
                Best price destination with offers directly from the
                manufacturers.
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <img className="w-[10%]" src="/hero-img/wide.png" alt="" />
            <div>
              <h5 className="text-sm ">Wide Assortment</h5>
              <p className="text-sm text-gray-500">
                Choose from 5000+ products across food, personal care, household
                & other categories.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetaildProduct;
