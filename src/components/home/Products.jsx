import React from "react";
import { Link } from "react-router-dom";
const Products = () => {
  return (
    <div className="lg:mt-6 max-lg:mt-24">
      <Link>
        <img
          src="hero-img/android_feed.png"
          className="lg:hidden w-full h-auto p-2 mt-4"
          alt="android_feed"
        />
      </Link>
      <h2 className="lg:hidden font-bold mt-4 ml-2 text-xl">
        Shop by category
      </h2>
      <div className="overflow-hidden">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10 xl:grid-cols-10 gap-4 px-4 lg:px-12">
          <Link to="/products/pan corner">
            <img
              className="w-full h-auto"
              src="products/paan-corner.png"
              alt=""
            />
          </Link>
          <Link to="/products/Dairy, Bread & Eggs">
            <img className="w-full h-auto" src="products/Slice.png" alt="" />
          </Link>
          <Link to="/products/Fruits & Vegetables">
            <img className="w-full h-auto" src="products/Slice-2.png" alt="" />
          </Link>
          <Link to="/products/Cold Drinks & Juices">
            <img
              className="w-full h-auto"
              src="products/colddrink.png"
              alt=""
            />
          </Link>
          <Link to="/products/Snacks & Munchies">
            <img className="w-full h-auto" src="products/snacks.png" alt="" />
          </Link>
          <Link to="/products/Breakfast & Instant Food">
            <img
              className="w-full h-auto"
              src="products/breackfast.png"
              alt=""
            />
          </Link>
          <Link to="/products/Sweet Tooth">
            <img
              className="w-full h-auto"
              src="products/sweettouch.png"
              alt=""
            />
          </Link>
          <Link to="/products/Bakery & Biscuits">
            <img className="w-full h-auto" src="products/beakery.png" alt="" />
          </Link>
          <Link to="/products/Tea, Coffee & Health Drink">
            <img className="w-full h-auto" src="products/tea.png" alt="" />
          </Link>

          <Link to="/products/Atta, Rice & Dal">
            <img className="w-full h-auto" src="products/atta.png" alt="" />
          </Link>
          <Link to="/products/Masala, Oil & More">
            <img
              className="w-full h-auto"
              src="products/masalaoil.png"
              alt=""
            />
          </Link>
          <Link to="/products/Sauces & Spreads">
            <img className="w-full h-auto" src="products/sauces.png" alt="" />
          </Link>

          <Link to="/products/Chicken, Meat & Fish">
            <img className="w-full h-auto" src="products/chicken.png" alt="" />
          </Link>

          <Link to="/products/Atta, Rice & Dal">
            <img className="w-full h-auto" src="products/organic.png" alt="" />
          </Link>

          <Link to="/products/Baby Care">
            <img className="w-full h-auto" src="products/babycare.png" alt="" />
          </Link>

          <Link to="/products/Pharma & Wellness">
            <img className="w-full h-auto" src="products/pharma.png" alt="" />
          </Link>

          <Link to="/products/Cleaning Essentials">
            <img className="w-full h-auto" src="products/cleaning.png" alt="" />
          </Link>

          <Link to="/products/Home & Office">
            <img
              className="w-full h-auto"
              src="products/homeoffice.png"
              alt=""
            />
          </Link>
          <Link to="/products/Atta, Rice & Dal">
            <img
              className="w-full h-auto"
              src="products/personalcare.png"
              alt=""
            />
          </Link>
          <Link to="/products/Pet Care">
            <img className="w-full h-auto" src="products/petcare.png" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
