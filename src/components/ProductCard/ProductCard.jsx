import React, { useEffect } from "react";
import "./ProductCard.css";
import { Skeleton } from "@mui/material";

const ProductCard = ({ data }) => {
  const dummyArray = new Array(6);
  return (
    <div className="product-container px-[30px] min-h-[100vh] pt-6">
      {data
        ? data.map((element, i) => (
            <div
              key={i}
              className="product-card shadow-xl rounded-lg p-6 bg-[#EEECE8]"
            >
              {element.discountPercentage ? (
                <div className="p-[6px] text-[12px] font-medium text-[#777777] bg-white inline-block rounded-md">
                  Save {element.discountPercentage}%
                </div>
              ) : (
                ""
              )}
              <img src={element.images} alt={element.title} />
              <p className="text-[12px]">${element.price}</p>
              <div className="flex justify-between">
                <p className="text-[12px] font-semibold">{element.title}</p>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  className="cursor-pointer hover:fill-red-600"
                >
                  <g id="_01_align_center" data-name="01 align center">
                    <path d="M17.5.917a6.4,6.4,0,0,0-5.5,3.3A6.4,6.4,0,0,0,6.5.917,6.8,6.8,0,0,0,0,7.967c0,6.775,10.956,14.6,11.422,14.932l.578.409.578-.409C13.044,22.569,24,14.742,24,7.967A6.8,6.8,0,0,0,17.5.917ZM12,20.846c-3.253-2.43-10-8.4-10-12.879a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,7.967h2a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,7.967C22,12.448,15.253,18.416,12,20.846Z" />
                  </g>
                </svg>
              </div>
              <></>
            </div>
          ))
        : dummyArray.map((e, i) => (
            <div key={i}>
              <Skeleton variant="rectangular" width={210} height={118} />
              <Skeleton />
              <Skeleton width="60%" />
            </div>
          ))}
    </div>
  );
};

export default ProductCard;
