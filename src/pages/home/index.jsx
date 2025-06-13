import React, { useEffect, useState } from "react";
import { getCategories } from "../../api/categories";
import { getImages } from "../../api/images";
import OfferCrousel from "../../components/OfferCrousel";
import SearchInput from "../../components/Search";
import Loader from "../../components/Loader";
import OrderCountDisplay from "../../components/OrderCoutDisplay";
import BannerOffer from "../../components/BannerOffer";
// Enhanced category box with hover effects and new styling
const EnhancedCategoryBox = ({ id, name, imageUrl }) => {
  return (
    <a
      href={`/products/${id}`}
      className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
    >
      <div className="aspect-square w-full relative">
        <img
          src={imageUrl || "/api/placeholder/400/400"}
          alt={name}
          className="object-cover w-full h-full rounded-xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-xl" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white font-semibold text-lg group-hover:text-[#fc8a49] transition-colors">
            {name}
          </h3>
          <div className="h-1 w-0 bg-[#fc8a49] mt-2 group-hover:w-full transition-all duration-300"></div>
        </div>
      </div>
    </a>
  );
};

const HomePage = () => {
  const [categoriesData, setCategoriesData] = useState([]);
  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchCategories = async (name) => {
    setIsLoading(true);
    const response = await getCategories(name);
    setCategoriesData(response);
    setIsLoading(false);
  };


  const fetchImages = async () => {
    const response = await getImages();

    setImages(response?.images);

  };

  useEffect(() => {
    fetchCategories();
    fetchImages();
    // console.log(images);
  }, []);
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchCategories(searchTerm);
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  return (
    <div className="bg-white">
      {/* Hero Section */}

      <div className="bg-gradient-to-r from-white to-orange-50 pt-8 pb-16">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-full md:w-1/2 space-y-6">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
                Premium Lab Equipment for{" "}
                <span className="text-[#fc8a49]">Australian</span> Scientists
              </h1>
              <p className="text-gray-600 text-lg">
                Discover top-quality lab tools, from microscopes to precise
                instruments, designed for all your scientific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#categories"
                  className="px-6 py-3 bg-[#fc8a49] text-white font-semibold rounded-lg hover:bg-[#e67b3f] transition-colors text-center"
                >
                  Explore Categories
                </a>
                <a
                  href="/contact-us"
                  className="px-6 py-3 border-2 border-[#fc8a49] text-[#fc8a49] font-semibold rounded-lg hover:bg-orange-50 transition-colors text-center"
                >
                  Request Quote
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#fc8a49]/20 rounded-full"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#fc8a49]/20 rounded-full"></div>
                <div className="relative z-10 overflow-hidden rounded-xl">
                  <img
                    src={'/home/banner1.jpg' || "/api/placeholder/600/400"}
                    alt="Laboratory Equipment"
                    className="w-full object-cover h-64 md:h-80 rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Stats Bar */}
      <div className="bg-[#fc8a49] py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:flex-wrap justify-center md:justify-between items-center gap-6 md:gap-8">
            <OrderCountDisplay duration={7} className="text-white" />

            {/* Fast Delivery */}
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#fc8a49]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-white">
                <p className="font-semibold">Fast Delivery</p>
                <p className="text-sm">Australia-wide</p>
              </div>
            </div>

            {/* Another Feature */}
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#fc8a49]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944..." />
                </svg>
              </div>
              <div className="text-white">
                <p className="font-semibold">Reliable Service</p>
                <p className="text-sm">Trusted by thousands</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Trending Offers Section */}
      {images && images.length > 0 && (
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-10">
              <div className="h-1 flex-grow max-w-xs bg-gray-200"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 px-6">
                Trending Offers
              </h2>
              <div className="h-1 flex-grow max-w-xs bg-gray-200"></div>
            </div>
            <div className="w-[100%] h-fit sm:h-[400px]">
              <OfferCrousel urls={images} />
            </div>
          </div>
        </div>
      )}

      {/* Categories Section */}
      <div id="categories" className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Featured <span className="text-[#fc8a49]">Categories</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Equip your lab with trusted brands and get fast, reliable delivery – all at competitive prices.
            </p>
            <div className="w-full max-w-md mx-auto mt-8">
              <SearchInput
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search Category"
              />
            </div>
          </div>

          {isLoading ? (
            <div className="py-20">
              <Loader />
            </div>
          ) : categoriesData.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {categoriesData.map((category) => (
                <EnhancedCategoryBox
                  key={category?._id}
                  id={category?._id}
                  name={category?.name}
                  imageUrl={category?.image}
                />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <p className="text-gray-500 text-lg">No Categories Found!</p>
              <p className="text-gray-400">Try changing your search criteria</p>
            </div>
          )}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-[#fc8a49] to-orange-600 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="w-full md:w-2/3 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Need Custom Laboratory Equipment?
              </h2>
              <p className="text-white/90 max-w-lg">
                Our experts can help you find the perfect equipment for your specific research needs. Contact us today for personalized assistance.
              </p>
            </div>
            <div>
              <a
                href="/contact-us"
                className="inline-block px-8 py-4 bg-white text-[#fc8a49] font-semibold rounded-lg hover:bg-orange-50 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;