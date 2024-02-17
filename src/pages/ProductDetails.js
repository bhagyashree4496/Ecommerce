import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import plant from "../bannerImages/plant.png";
import ProductInfo from "../components/ProductInfo";

const ProductDetails = () => {
  const location = useLocation();

  const [productInfo, setProductInfo] = useState([]);

  useEffect(() => {
    setProductInfo(location.state.item);
  }, [location, productInfo]);

  return (
    <div className="w-full mx-auto border-b-[1px] border-b-gray-300">
      <div className="max-w-container mx-auto px-4">
        <div className="xl:-mt-10 -mt-7"></div>
        <div className="w-full flex items-center justify-center h-full -mt-5 xl:-mt-8 pb-10 bg-gray-100 p-4">
          <img
            className="w-full h-full object-cover"
            src={productInfo.img}
            alt={productInfo.img}
            onError={(e) => {
              e.target.src = plant;
              e.onerror = null;
            }}
          />

          <div className="h-full w-full md:col-span-2 xl:col-span-3 xl:p-14 flex flex-col gap-6 justify-center">
            <ProductInfo productInfo={productInfo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
