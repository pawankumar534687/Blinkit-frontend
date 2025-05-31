import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <Link to="/products/pan corner">
        <div className="w-full">
          <img
            className="max-lg:hidden  px-8 lg:w-[99%]"
            src="hero-img/hero-1.png"
            alt="hero-page"
          />
        </div>
      </Link>
      <div className="flex justify-center px-14 gap-6 w-full pt-4 max-lg:hidden">
        <Link className="w-[33%] h-60" to="/products/Pharma & Wellness">
        <img
          
          src="hero-img/pharmacy.png"
          alt="pharmacy"
        />
        </Link>
        <Link className="w-[33%] h-60" to="/products/Pet Care">
        <img  src="hero-img/Pet.png" alt="Pet" />
        </Link>
        <Link className="w-[33%] h-60"  to="/products/Baby Care">
        <img
          
          src="hero-img/babycare.png"
          alt="babycare"
        />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
