import React from "react";
import "./Footer.css";
import { logoImg } from "../../utils";
const Footer = () => {
  return (
    <div className="footer-section bg-slate-900 text-white mt-14 pt-[60px]">
      <div className="flex flex-col items-center justify-center">
        <p className="text-center font-semibold text-3xl max-w-3xl mb-12 max-sm:hidden">
          Subscribe to our newsletter so that you can get all of out products
          updates
        </p>
        <div className="max-sm:hidden">
          <input
            className="p-[20px] mr-6 max-sm:p-[10px]"
            type="email"
            placeholder="Enter your email"
          />
          <button className="p-[20px] bg-amber-50 text-black ml-8]">
            Subscribe
          </button>
        </div>
      </div>

      <div className="flex justify-between mx-20 mt-10 mb-12 max-sm:flex-col">
        <div>
          <img src={logoImg} alt="Logo" />
          <p className="w-[40%] max-sm:hidden">
            Explore, experiment, and expresss yourself with our extraordinary
            range of beauty products
          </p>
        </div>

        <div className="footer-grid-text max-sm:text-center max-sm:mt-7 ">
          <p className="mb-1 font-semibold text-[25px] max-sm:text-[14px] max-sm:mb-0 max-sm:font-normal ">
            Company
          </p>
          <p className="mb-1 font-semibold text-[25px] max-sm:text-[14px] max-sm:mb-0 max-sm:font-normal ">
            Categories
          </p>
          <p className="mb-1 font-semibold text-[25px] max-sm:text-[14px] max-sm:mb-0 max-sm:font-normal ">
            Legal
          </p>
          <p>About Us</p>
          <p>Best Selling</p>
          <p>Privacy Policy</p>
          <p>New Arrivals</p>
          <p>Anti Aging</p>
          <p>Terms of Conditions</p>
          <p>All Collections</p>
          <p>Skin Care</p>
          <p>FAQ</p>
          <p>Latest News</p>
          <p>Hair Care</p>
          <p>Contact Us</p>
        </div>
      </div>
      <hr className="m-auto" />

      <div className="flex mx-20 justify-between gap-4 items-center pb-6 max-sm:block max-sm:text-[10px] max-sm:text-center ">
        <p className="mt-6">@ Copyright 2024. All rights reserved</p>

        <div className="flex gap-6 mt-6  max-sm:justify-center">
          <p className="hover:text-[#fff5f550] cursor-pointer">Facebook</p>
          <p className="hover:text-[#fff5f550] cursor-pointer">Instagram</p>
          <p className="hover:text-[#fff5f550] cursor-pointer">Youtube</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
