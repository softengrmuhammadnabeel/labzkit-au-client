import React, { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FiPhone, FiMail } from "react-icons/fi";
import { getAllOffers } from "../api/offer";

const BannerOffer = () => {
  const [offers, setOffers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const data = await getAllOffers();
        setOffers(data);
      } catch (error) {
        console.error("Failed to fetch offers:", error);
      }
    };
    fetchOffers();
  }, []);

  useEffect(() => {
    if (offers.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % offers.length);
    }, 4000); // 4-second rotation

    return () => clearInterval(interval);
  }, [offers]);

  const currentOffer = offers.length > 0 ? offers[currentIndex] : null;

  return (
    <div className="w-full  bg-[#1F1F1F] text-white text-sm px-4 py-4 flex flex-wrap items-center justify-between gap-4">
      <div className=" flex mx-auto flex-wrap w-[80%] bg-[#1F1F1F]">
        {/* Left: Phone & Email */}
      <div className="flex flex-col items-start gap-2 min-w-[180px]">
        <div className="flex items-center gap-2">
          <FiPhone />
          <span>+92 3112752474</span>
        </div>
        <div className="flex items-center gap-2">
          <FiMail />
          <span>labzkit@gmail.com</span>
        </div>
      </div>

      {/* Center: Dynamic Offer */}
      <div className="flex-1 text-center">
        <h2 className="font-semibold text-base md:text-lg">
          {currentOffer?.offerTitle || "Welcome to Our Store!"}
        </h2>
        <p className="text-yellow-500 font-semibold">
          {currentOffer?.offerText || "Explore our premium accessories."}
        </p>

      </div>

      {/* Right: Social Icons */}
      <div className="flex items-center gap-4 min-w-[100px] justify-end">
        <a href="https://www.facebook.com/people/LabzKit/61568475466063" target="_blank" aria-label="Facebook">
          <FaFacebookF className="hover:text-blue-500 transition" size={20} />
        </a>
        <a href="https://www.instagram.com/labzkit/" target="_blank" aria-label="Instagram">
          <FaInstagram className="hover:text-pink-500 transition" size={20} />
        </a>
      </div>
      </div>
    </div>
  );
};

export default BannerOffer;
