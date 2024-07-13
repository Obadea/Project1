import React, { useState } from "react";
import "./ProductCard2.css";
import { Skeleton } from "@mui/material";

const ProductCard2 = ({ data }) => {
  // showmore button
  const [visibleItemsCount, setVisibleItemsCount] = useState(9); // Initial number of items to display

  // some more button functionality\
  const showMoreItems = () => {
    setVisibleItemsCount((prevCount) => prevCount + 3); // Show 4 more items
  };

  return (
    <>
      <div className="product-container px-1 min-h-[100vh] pt-1">
        {data ? (
          data.slice(0, visibleItemsCount).map((element, i) => (
            <div
              key={i}
              className="product-card shadow-xl rounded-lg p-6 bg-[#EEECE8]"
            >
              {element.discountPercentage ? (
                <div className="p-[6px] text-[12px] font-medium text-[#777777] bg-white inline-block rounded-full">
                  Save {element.discountPercentage}%
                </div>
              ) : (
                ""
              )}
              <img src={element.images} alt={element.title} />
              <div className="flex justify-between mb-3">
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
              <div className=" btn-container flex justify-between items-center">
                <div>
                  <p className="text-[17px] text-slate-900">${element.price}</p>
                  <p className="text-[10px] text-purple-900  font-semibold">
                    {element.minimumOrderQuantity} in stock{" "}
                  </p>
                </div>
                <button className="bg-purple-900 text-white p-2 rounded-full text-[10px]">
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="product-container px-1 pt-1">
            <div className="flex flex-col items-center">
              <Skeleton variant="rectangular" width={210} height={148} />
              <Skeleton width={210} height={10} />
              <Skeleton width={110} height={10} />
            </div>
            <div className="flex flex-col items-center">
              <Skeleton variant="rectangular" width={210} height={148} />
              <Skeleton width={210} height={10} />
              <Skeleton width={110} height={10} />
            </div>
            <div className="flex flex-col items-center">
              <Skeleton variant="rectangular" width={210} height={148} />
              <Skeleton width={210} height={10} />
              <Skeleton width={110} height={10} />
            </div>
            <div className="flex flex-col items-center">
              <Skeleton variant="rectangular" width={210} height={148} />
              <Skeleton width={210} height={10} />
              <Skeleton width={110} height={10} />
            </div>
            <div className="flex flex-col items-center">
              <Skeleton variant="rectangular" width={210} height={148} />
              <Skeleton width={210} height={10} />
              <Skeleton width={110} height={10} />
            </div>
            <div className="flex flex-col items-center">
              <Skeleton variant="rectangular" width={210} height={148} />
              <Skeleton width={210} height={10} />
              <Skeleton width={110} height={10} />
            </div>
          </div>
        )}
      </div>

      <div
        className={`p-2 cursor-pointer bg-purple-700 flex justify-center items-center rounded-full mt-10 text-[13px] font-medium ${
          visibleItemsCount < data?.length ? "" : "hidden"
        } `}
        onClick={showMoreItems}
      >
        Show More
      </div>
    </>
  );
};

export default ProductCard2;
