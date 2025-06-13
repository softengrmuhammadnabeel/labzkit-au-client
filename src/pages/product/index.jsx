/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import ProductList from "../../components/ProductList";
import { getProductsByCategory } from "../../api/products";
import Loader from "../../components/Loader";
import SearchInput from "../../components/Search";
import debounce from "lodash.debounce";
import { ChevronRight, Filter, SlidersHorizontal } from "lucide-react";
import BannerOffer from "../../components/BannerOffer"

const ProductsPage = () => {
  const { category } = useParams();
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [genderFilter] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  // const [ setSortBy] = useState("newest");
  // const [ setPriceRange] = useState({ min: 0, max: 1000 });

  const fetchCategoryProducts = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await getProductsByCategory(
        category,
        searchTerm,
        genderFilter
      );
      setCategoryProducts(response?.products || []);
      setCategoryName(response?.category?.name || "");
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setIsLoading(false);
    }
  }, [category, searchTerm, genderFilter]);

  const debouncedFetchProducts = useCallback(
    debounce(() => {
      fetchCategoryProducts();
    }, 500),
    [fetchCategoryProducts]
  );

  useEffect(() => {
    debouncedFetchProducts();
    return () => debouncedFetchProducts.cancel();
  }, [category, searchTerm, genderFilter, debouncedFetchProducts]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // const handleGenderChange = (e) => {
  //   setGenderFilter(e.target.value);
  // };

  // const handleSortChange = (e) => {
  //   setSortBy(e.target.value);
  // };

  // const handlePriceChange = (type, value) => {
  //   setPriceRange(prev => ({
  //     ...prev,
  //     [type]: parseInt(value || 0)
  //   }));
  // };

  // const resetFilters = () => {
  //   setGenderFilter("");
  //   setSortBy("newest");
  //   setPriceRange({ min: 0, max: 1000 });
  // };

  const toggleFilters = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section with Breadcrumb */}
      <div className="bg-gradient-to-r from-white to-orange-50 py-8">
        {/* <div className="p-1">
          <BannerOffer
            title="🎉 Summer Sale!"
            subtitle="Enjoy up to 70% OFF."
          // buttonText="Browse Deals"
          // onClick={() => window.location.href = '/shop'}
          />
        </div> */}
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600 mb-4">
            <span>Home</span>
            <ChevronRight className="mx-2 h-4 w-4" />
            <span className="text-[#fc8a49] font-medium">{categoryName || "Products"}</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800">{categoryName} Products</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters - Mobile Toggle */}
          <div className="lg:hidden mb-4">
            <button
              onClick={toggleFilters}
              className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-gray-100 hover:bg-gray-200 rounded-lg transition-all duration-200"
            >
              <SlidersHorizontal className="h-5 w-5" />
              <span>{isFilterOpen ? "Hide Filters" : "Show Filters"}</span>
            </button>
          </div>

          {/* Filters Sidebar */}


          {/* Products Grid */}
          <div className="lg:w-4/4 px-10">
            {/* Search and results count */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4">
              <SearchInput
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search Products"
                className="w-full md:w-80"
              />

              <p className="text-sm text-gray-600">
                Showing {categoryProducts.length} products
              </p>
            </div>

            {/* Loading Spinner */}
            {isLoading ? (
              <div className="flex justify-center items-center py-20 px-[auto]">
                <Loader />
              </div>
            ) : categoryProducts.length > 0 ? (
              <ProductList products={categoryProducts} />
            ) : (
              <div className="bg-gray-50 rounded-xl p-12 text-center">
                <Filter className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">No Products Found!</h3>
                <p className="text-gray-600 mb-6">
                  We couldn't find any products matching your searches.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;