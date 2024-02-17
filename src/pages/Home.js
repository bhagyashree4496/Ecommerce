import React from "react";
import Banner from "../components/Banner";

import BestSellers from "../components/home/BestSellers";
import HeaderBottom from "../components/home/HeaderBottom";

const Home = () => {
  return (
    <div className="w-full mx-auto">
      <Banner />

      <div className="max-w-container mx-auto px-4">
        <HeaderBottom></HeaderBottom>
        <BestSellers />
      </div>
    </div>
  );
};

export default Home;
