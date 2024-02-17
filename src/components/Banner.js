import React, { useState } from "react";

import Slider from "react-slick";
import banner1 from "../bannerImages/1.jpg";
import banner2 from "../bannerImages/1.jpg";
import banner3 from "../bannerImages/1.jpg";

import Image from "./designLayouts/Image";
import ShopNow from "./designLayouts/buttons/ShopNow";

const Banner = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "7%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "30px",
                color: "#262626",
                borderRight: "3px #262626 solid",
                padding: "8px 0",
                cursor: "pointer",
              }
            : {
                width: "30px",
                color: "transparent",
                borderRight: "3px white solid",
                padding: "8px 0",
                cursor: "pointer",
              }
        }
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "2%",
                transform: "translateY(-50%)",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === dotActive
                  ? {
                      width: "25px",
                      color: "#262626",
                      borderRight: "3px #262626 solid",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
                  : {
                      width: "25px",
                      color: "transparent",
                      borderRight: "3px white solid",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };
  return (
    <div className="w-full bg-white">
      <Slider {...settings}>
        <div className="relative">
          <Image imgSrc={banner1} className="h-[600px] w-screen" />
          <div className="absolute top-[30%] left-[10%]">
            <div className="text-6xl font-extrabold">
              Garden of indoor plants
            </div>
            <div className="text-2xl my-6">Sale is on , Get UPTO 80% OFF </div>
            <ShopNow></ShopNow>
          </div>
        </div>

        <div className="relative">
          <Image imgSrc={banner2} className="h-[600px] w-screen" />
          <div className="absolute top-[30%] left-[10%]">
            <div className="text-6xl font-extrabold">
              Plant Your own Flowers
            </div>
            <div className="text-2xl my-6">
              Our Equisite Flower Plants on Sale
            </div>
            <ShopNow></ShopNow>
          </div>
        </div>

        <div className="relative">
          <Image imgSrc={banner3} className="h-[600px] w-screen" />

          <div className="absolute top-[30%] left-[10%]">
            <div className="text-6xl font-extrabold">
              Buy Green to Save Green
            </div>
            <div className="text-2xl my-6">
              New Year Sale! Get UPTO 75% OFF on plants, Seeds and Planters.
            </div>
            <ShopNow></ShopNow>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
