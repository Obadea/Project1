import React, { useEffect, useState } from "react";
import { filterImg } from "../../utils";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { ExpandMoreOutlined } from "@mui/icons-material";

import "./Products.css";
import ProductCard2 from "../../components/ProductCard2/ProductCard2";

const Products = () => {
  const [fullData, setFullData] = useState(null);
  const [productData, setProductData] = useState(null);

  // Filter data based on arrival
  const [sortedProducts, setSortedProducts] = useState(productData);
  const [isSorted, setIsSorted] = useState(false);

  // Sort By Discount
  const [isSortedByDiscount, setIsSortedByDiscount] = useState(false);

  // sort by stock
  const [isSortedByStock, setIsSortedByStock] = useState(false);

  // search
  const [searchText, setSearchText] = useState("");
  const [searchedResults, setSearchedResults] = useState([]);
  const [searchTimeout, setSearchTimeout] = useState(null);

  // Categories
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // API endpoint
      const response = await fetch(`https://dummyjson.com/products`);
      const jsontData = await response.json();
      setProductData(jsontData?.products);
      setFullData(jsontData?.products);
      console.log(jsontData);
    } catch (error) {
      // Execute code if they was an error
      console.log(`Error fetching data`, error);
      return null;
    }
  };

  // Filter data based on arrival
  const sortByArrivalDate = () => {
    if (isSorted) {
      setSortedProducts(productData);
      setProductData(fullData);
    } else {
      const sorted = [...productData].sort(
        (a, b) => new Date(a.meta.createdAt) - new Date(b.meta.createdAt)
      );
      setSortedProducts(sorted);
      setProductData(sorted);
    }
    setIsSorted(!isSorted);
  };

  // Sort by discount
  const sortByDiscount = () => {
    if (isSortedByDiscount) {
      setSortedProducts(productData);
      setProductData(fullData);
    } else {
      const sorted = [...productData].sort(
        (a, b) => b.discountPercentage - a.discountPercentage
      );
      setSortedProducts(sorted);
      setProductData(sorted);
    }
    setIsSortedByDiscount(!isSortedByDiscount);
  };

  // Sort by stock
  const sortByStock = () => {
    if (isSortedByStock) {
      setSortedProducts(productData);
      setProductData(fullData);
    } else {
      const sorted = [...productData].sort(
        (a, b) => b.minimumOrderQuantity - a.minimumOrderQuantity
      );
      setSortedProducts(sorted);
      setProductData(sorted);
    }
    setIsSortedByStock(!isSortedByStock);
  };

  //search functionality
  const filterPrompts = (searchtext) => {
    const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
    return productData.filter(
      (item) =>
        regex.test(item.name) ||
        regex.test(item.description) ||
        regex.test(item.category)
    );
  };

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);
    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  // sort by category
  const categories = [...new Set(fullData?.map((product) => product.category))];

  console.log(categories);

  const filterByCategory = (category) => {
    // setSelectedCategory(category);
    let updatedCategories;
    if (selectedCategories.includes(category)) {
      updatedCategories = selectedCategories.filter((c) => c !== category);
    } else {
      updatedCategories = [...selectedCategories, category];
    }

    setSelectedCategories(updatedCategories);

    if (updatedCategories.length === 0) {
      setProductData(fullData);
    } else {
      const filtered = fullData.filter((product) =>
        updatedCategories.includes(product.category)
      );
      setProductData(filtered);
      console.log(filtered);
    }
  };

  return (
    <div className="Product-filter-page p-10">
      <div className="filter-header flex gap-8 pb-10 pl-5 justify-between max-sm:block">
        <div className="flex gap-8 ">
          <p className="max-sm:hidden">ITEMS</p>
        </div>

        <div>
          <input
            className="rounded-full p-2 h-[40px] border-purple-600 outline-none border-2 max-sm:w-full"
            type="text"
            placeholder="Search Items"
            onChange={handleSearchChange}
          />
        </div>
      </div>

      <div className="flex gap-2 max-sm:block">
        <div className="left-side-filter md:w-[25%]">
          <div className="mb-4">
            <Accordion
              style={{
                background: "#eeece8",
                boxShadow: "none",
                marginBottom: "10px",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreOutlined />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <div className="flex gap-2 items-center ">
                  <img src={filterImg} className="w-[14px]" />
                  <p className="font-semibold">Filters</p>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div className=" text-[10px]">
                  {/* sort by arrival btn */}
                  <p
                    onClick={sortByArrivalDate}
                    className={`border-2 ${
                      isSorted ? "bg-purple-600" : ""
                    } border-purple-600 cursor-pointer mb-3 p-2 rounded-full inline-block`}
                  >
                    sort by arrival
                  </p>
                  <br />

                  {/* sort bt discount */}
                  <p
                    onClick={sortByDiscount}
                    className={`${
                      isSortedByDiscount ? "bg-purple-600" : ""
                    } border-2 border-purple-600 cursor-pointer mb-3 p-2 rounded-full inline-block`}
                  >
                    sort by discount
                  </p>
                  <br />

                  {/* sort by stock */}
                  <p
                    onClick={sortByStock}
                    className={`${
                      isSortedByStock ? "bg-purple-600" : ""
                    } border-2 border-purple-600 cursor-pointer mb-3 p-2 rounded-full inline-block`}
                  >
                    sort by stock available
                  </p>
                </div>
              </AccordionDetails>
            </Accordion>
            <hr className="w-[88%] m-auto border-blue-200 relative right-[6px]" />
          </div>

          {/* Category Section */}
          <div className="mb-4">
            <Accordion
              style={{
                background: "#eeece8",
                boxShadow: "none",
                marginBottom: "10px",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreOutlined />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <div className="flex gap-2 items-center ">
                  <p className="font-semibold">Category</p>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div className="pl-4 pr-[6px]">
                  {/* {categories?.map((category) => (
                    <div
                      key={category}
                      className="flex items-center justify-between mb-3"
                      onClick={() => filterByCategory(category)}
                    >
                      <label className="w-full" htmlFor={category}>
                        {category}
                      </label>
                      <input type="checkbox" id={category} />
                    </div>
                  ))} */}

                  <div className="flex items-center justify-between mb-6 cursor-pointer">
                    <label
                      className="w-full p-2 relative left-3"
                      htmlFor={"beauty"}
                      onClick={() => filterByCategory("beauty")}
                    >
                      beauty
                    </label>
                    <input type="checkbox" id={"beauty"} />
                  </div>

                  <div className="flex items-center justify-between mb-6 cursor-pointer">
                    <label
                      className="w-full  p-2 relative left-3"
                      htmlFor={"fragrances"}
                      onClick={() => filterByCategory("fragrances")}
                    >
                      fragrances
                    </label>
                    <input type="checkbox" id={"fragrances"} />
                  </div>

                  <div className="flex items-center justify-between mb-6 cursor-pointer">
                    <label
                      className="w-full  p-2 relative left-3"
                      htmlFor={"furniture"}
                      onClick={() => filterByCategory("furniture")}
                    >
                      furniture
                    </label>
                    <input type="checkbox" id={"furniture"} />
                  </div>

                  <div className="flex items-center justify-between mb-6 cursor-pointer">
                    <label
                      className="w-full  p-2 relative left-3"
                      htmlFor={"groceries"}
                      onClick={() => filterByCategory("groceries")}
                    >
                      groceries
                    </label>
                    <input type="checkbox" id={"groceries"} />
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
            <hr className="w-[88%] m-auto border-blue-200 relative right-[6px]" />
          </div>

          {/* Price range filter */}
          <div className="mb-4">
            <Accordion
              style={{
                background: "#eeece8",
                boxShadow: "none",
                marginBottom: "10px",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreOutlined />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <div className="flex gap-2 items-center ">
                  <p className="font-semibold">Price Range</p>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div className="flex gap-2 justify-between">
                  <input
                    type="number"
                    placeholder=" $ Min"
                    className="max-w-20 p-1 px-2 outline-none rounded-full border-blue-200 border-2 "
                  />
                  <input
                    type="number"
                    placeholder="$ Max"
                    className="max-w-20 p-1 outline-none px-2 rounded-full border-blue-200 border-2 "
                  />
                </div>
                <p>not done</p>
              </AccordionDetails>
            </Accordion>
            <hr className="w-[88%] m-auto border-blue-200 relative right-[6px]" />
          </div>
        </div>

        {/* Product container display */}
        <div className="w-full min-h-[116vh] p-8 rounded-3xl">
          {!searchText ? (
            <ProductCard2 data={productData} />
          ) : searchText && searchedResults.length > 0 ? (
            <ProductCard2 data={searchedResults} />
          ) : <ProductCard2 data={productData} /> ? (
            searchText && searchedResults.length < 0
          ) : (
            <h1>NO product</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
