import { getAllOffers } from "../api/offer.js";
import React, { useEffect, useState } from "react";

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
    }, 3000);

    return () => clearInterval(interval);
  }, [offers]);

  const currentOffer = offers.length > 0 ? offers[currentIndex] : null;

  return (
    <div className="w-full  mx-auto bg-orange-100 rounded-sm shadow-md border border-gray-200 overflow-hidden">
      <div className="flex items-center justify-between px-6 py-4 space-x-6">
        {/* Left */}
        <div className="flex items-center space-x-3 min-w-[150px]">
          
          <span className="text-gray-800 font-semibold text-lg">LabzKit.com</span>
        </div>

        {/* Center - Offer Text */}
        <div className="flex-1 text-center">
          <h2 className="text-xl font-extrabold text-gray-900 leading-tight tracking-tight">
            {currentOffer?.offerTitle || "🔥 Our Current Offers!"}
          </h2>
          <p className="mt-1 text-gray-600 text-sm md:text-base max-w-xl mx-auto">
            {currentOffer?.offerText || "Get up to 50% off on your first purchase."}
          </p>
        </div>

        {/* Right */}
        <div className="min-w-[150px] text-right text-gray-500 font-medium text-sm md:text-base">
          Premium Lab Equipments
        </div>
      </div>

      
    </div>
  );
};

export default BannerOffer;
