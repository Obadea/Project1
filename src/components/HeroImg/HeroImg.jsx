import React from "react";
import "./HeroImg.css";

const HeroImg = () => {
  return (
    <div className="relative heroImg mx-[30px] mt-14 rounded-xl p-10">
      <p className=" absolute bottom-4 right-9 max-w-[400px] font-semibold max-sm:text-center max-sm:top-[30%] max-sm:right-1">
        Thank you for choosing Bloocode Beauty - where beauty knows no bounds,
        and you are the true masterpiece!
      </p>
    </div>
  );
};

export default HeroImg;
