import React, { useState } from "react";
import Heading from "./Products/Heading";
import Product from "./Products/Product";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import axios from "axios";

const BestSellers = () => {
  const [page, setPage] = useState(1);

  console.log(page);
  const fetchData = async () => {
    let response = await axios.get(`https://plant-j12b.onrender.com/products`);
    // `http://localhost:8080/products?_page=${page}&_per_page=6`
    return response.data;
  };
  const { data, isError } = useQuery({
    queryKey: ["products", "page"],
    queryFn: fetchData,
    placeholderData: keepPreviousData,
  });
  console.log(data, "dataaaaaaa");

  return (
    <div className="w-full py-10" id="bestsellers">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        {data?.map((item) => {
          return (
            <div key={item._id}>
              <Product
                _id={item._id}
                img={item.img}
                productName={item.productName}
                price={item.price}
                color="Black"
                badge={false}
                des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-center items-center">
        <ul class="inline-flex -space-x-px text-base h-10 mt-8 ">
          <li
            onClick={(e) => {
              e.preventDefault();
              setPage(1);
            }}
          >
            <a
              href="#"
              className="flex items-center justify-center px-4 h-10 text-black border font-extrabold border-gray-300 bg-gray-500 "
            >
              1
            </a>
          </li>
          <li
            onClick={(e) => {
              e.preventDefault();
              setPage(2);
            }}
          >
            <a
              href="#"
              className="flex items-center justify-center px-4 h-10 text-black border font-extrabold border-gray-300 bg-gray-500"
            >
              2
            </a>
          </li>
          <li
            onClick={(e) => {
              e.preventDefault();
              setPage(3);
            }}
          >
            <a
              href="#"
              aria-current="page"
              className="flex items-center justify-center px-4 h-10 text-black border font-extrabold border-gray-300 bg-gray-500   "
            >
              3
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BestSellers;
