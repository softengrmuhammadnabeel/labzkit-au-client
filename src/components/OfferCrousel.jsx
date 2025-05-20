import React from "react";
import { Carousel } from "antd";

const OfferCrousel = ({ urls }) => {
  return (
    <Carousel autoplay >
      {urls?.map((img, index) => (
        <div key={index}>
          <img
            src={(img?.url)}
            alt={`offer-${index}`}
            className="w-full h-[200px] sm:h-[400px] object-contain object-center "
          />

        </div>
      ))}
    </Carousel>
  );
};

export default OfferCrousel;
