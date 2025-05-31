import React from "react";
import { Link } from "react-router-dom";

const UsefullLinks = () => {
  return (
    <div className="max-lg:hidden w-[25%] mt-16 ml-12">
        <h2 className="text-2xl font-semibold mb-6 ">Useful Links</h2>
      <div className="grid grid-cols-3 gap-4">
        <Link className="text-lg text-gray-600">About</Link>
        <Link className="text-lg text-gray-600">Privacy</Link>
        <Link className="text-lg text-gray-600">Partner</Link>
        <Link className="text-lg text-gray-600">Careers</Link>
        <Link className="text-lg text-gray-600">Terms</Link>
        <Link className="text-lg text-gray-600">Franchise</Link>
        <Link className="text-lg text-gray-600">Blog</Link>
        <Link className="text-lg text-gray-600">FAQs</Link>
        <Link className="text-lg text-gray-600">Seller</Link>
        <Link className="text-lg text-gray-600">Press</Link>
        <Link className="text-lg text-gray-600">Security</Link>
        <Link className="text-lg text-gray-600">Warehouse</Link>
        <Link className="text-lg text-gray-600">Lead</Link>
        <Link className="text-lg text-gray-600">Mobile</Link>
        <Link className="text-lg text-gray-600">Deliver</Link>
        <Link className="text-lg text-gray-600">Value</Link>
        <Link className="text-lg text-gray-600">Contact</Link>
        <Link className="text-lg text-gray-600">Resources</Link>
      </div>
    </div>
  );
};

export default UsefullLinks;
