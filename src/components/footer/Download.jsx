import React from "react";
import { Link } from "react-router-dom";
const Download = () => {
  return (
    <div className="max-lg:hidden">
      <div className="flex justify-center items-center gap-6 mt-26">
        <p className="text-lg text-gray-600">
          &copy;Blink Commerce Private Limited, 2016-2025
        </p>

        <p className=" font-bold text-lg text-gray-600 ml-16"> Download App</p>
        <Link to="https://apps.apple.com/in/app/blinkit-grocery-in-10-minutes/id960335206">
          <img src="/hero-img/appstoreBadge.svg" alt="" />
        </Link>
        <Link to="https://play.google.com/store/apps/details?id=com.grofers.customerapp&hl=en_IN&gl=US&pli=1">
          <img src="/hero-img/googlePlayBadge.svg" alt="" />
        </Link>
        <Link to="https://www.facebook.com/blinkit.india/">
          <img className="w-12 h-12 " src="/hero-img/facebook.png" alt="" />
        </Link>
        <Link to="https://x.com/letsblinkit/">
          <img className="w-12 h-12 " src="/hero-img/twitter.png" alt="" />
        </Link>
        <Link to="https://www.instagram.com/letsblinkit/">
          <img className="w-12 h-12 " src="/hero-img/instagram.png" alt="" />
        </Link>
        <Link to="https://www.linkedin.com/company/letsblinkit/?originalSubdomain=in">
          <img className="w-12 h-12 " src="/hero-img/linkedin.png" alt="" />
        </Link>
        <Link to="https://www.threads.com/@letsblinkit">
          <img className="w-12 h-12 " src="/hero-img/threads.png" alt="" />
        </Link>
      </div>
      <p className="p-12 text-lg text-gray-600">
        “Blinkit” is owned & managed by "Blink Commerce Private Limited" and is
        not related, linked or interconnected in whatsoever manner or nature, to
        “GROFFR.COM” which is a real estate services business operated by
        “Redstone Consultancy Services Private Limited”.
      </p>
    </div>
  );
};

export default Download;
