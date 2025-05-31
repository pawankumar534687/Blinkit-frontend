import React from "react";
import { Link } from "react-router-dom";
const Categories = () => {
    return (
        <div className="max-lg:hidden w-[75%] mt-16 ml-12">
            <div className="flex gap-8">
                <h2 className="text-2xl font-semibold mb-6 ">Categories</h2>
                <Link to="/allproducts" className="text-[21px] text-[rgb(12,131,31)]">see all</Link>
            </div>

            <div className="grid grid-cols-3 gap-2">
                <Link className="text-lg text-gray-600">Vegetables & Fruits</Link>
                <Link className="text-lg text-gray-600">Dairy & Breakfast</Link>
                <Link className="text-lg text-gray-600">Munchies</Link>
                <Link className="text-lg text-gray-600">Cold Drinks & Juices</Link>
                <Link className="text-lg text-gray-600">Instant & Frozen Food</Link>
                <Link className="text-lg text-gray-600">Tea, Coffee & Health Drinks</Link>
                <Link className="text-lg text-gray-600">Bakery & Biscuits</Link>
                <Link className="text-lg text-gray-600">Sweet Tooth</Link>
                <Link className="text-lg text-gray-600">Atta, Rice & Dal</Link>
                <Link className="text-lg text-gray-600">Dry Fruits, Masala & Oil</Link>
                <Link className="text-lg text-gray-600">Sauces & Spreads</Link>
                <Link className="text-lg text-gray-600">Chicken, Meat & Fish</Link>
                <Link className="text-lg text-gray-600">Paan Corner</Link>
                <Link className="text-lg text-gray-600">Organic & Premium</Link>
                <Link className="text-lg text-gray-600">Baby Care</Link>
                <Link className="text-lg text-gray-600">Pharma & Wellness</Link>
                <Link className="text-lg text-gray-600">Cleaning Essentials</Link>
                <Link className="text-lg text-gray-600">Home & Office</Link>
                <Link className="text-lg text-gray-600">Ice Creams & Frozen Desserts</Link>
                <Link className="text-lg text-gray-600">Personal Care</Link>
                <Link className="text-lg text-gray-600">Pet Care</Link>
                <Link className="text-lg text-gray-600">Beauty & Cosmetics</Link>
                <Link className="text-lg text-gray-600">Magazines</Link>
                <Link className="text-lg text-gray-600">Fashion & Accessories</Link>
                <Link className="text-lg text-gray-600">Electronics & Electricals</Link>
                <Link className="text-lg text-gray-600">Stationery Needs</Link>
                <Link className="text-lg text-gray-600">Books</Link>
                <Link className="text-lg text-gray-600">Toys & Games</Link>
                <Link className="text-lg text-gray-600">Print Store</Link>
                <Link className="text-lg text-gray-600">E-Gift Cards</Link>
            </div>
        </div>
    );
};

export default Categories;
