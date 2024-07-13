import React, { useEffect, useState } from "react";
import "./NewProduct.css";
import { starImg } from "../../utils";
import ProductCard from "../ProductCard/ProductCard";

const NewProduct = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // API endpoint
      const response = await fetch(`https://dummyjson.com/products?limit=8`);
      const jsontData = await response.json();
      setData(jsontData);
      console.log(jsontData);
    } catch (error) {
      // Execute code if they was an error
      console.log(`Error fetching data`, error);
      return null;
    }
  };

  return (
    <div className="newProduct-container mt-10 ">
      <div className="bg-black">
        <marquee behavior="" direction="">
          <div className="bg-black text-white flex py-3 justify-center items-center gap-8">
            <p>New Arrivals</p>
            <img src={starImg} />
            <p>Best Sellers</p>
            <img src={starImg} />
            <p>New Arrivals</p>
            <img src={starImg} />
            <p>Best Sellers</p>
            <img src={starImg} />
            <p>New Arrivals</p>
            <img src={starImg} />
            <p>Best Sellers</p>
            <img src={starImg} />
            <p>New Arrivals</p>
            <img src={starImg} />
            <p>Best Sellers</p>
          </div>
        </marquee>
      </div>

      <ProductCard data={data?.products} />
    </div>
  );
};

export default NewProduct;
