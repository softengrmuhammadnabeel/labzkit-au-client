import React, { useCallback, useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import {  imagesProduct } from "../utils/functions";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ReviewForm from "./ReviewForm";
import Modal from "./Modal";
import { createReview, deleteReview, getReviews } from "../api/reviews";
import ReviewList from "./ReviewList";
import { useUser } from "../context/UserContext";
import Loader from "./Loader";

// Lightbox for image gallery
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Icons
import { 
  ShoppingCart, 
  PlusCircle, 
  MinusCircle, 
  ChevronRight, 
  MessageSquare, 
  RefreshCw,
} from "lucide-react";

const ProductDetail = ({ product }) => {
  const { addToCart } = useCart();
  const { isAdmin } = useUser();
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [reviewsLoading, setReviewsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("description");

  const navigate = useNavigate();
  const { user, token } = useUser();

  const handleQuantityChange = (newValue) => {
    if (newValue < 1) return;
    if (newValue > product?.quantity) {
      toast.warn(`Oops! You can't order more than ${product?.quantity} of this item right now.`);
      return;
    }
    setQuantity(newValue);
  };

  const handleAddToCart = () => {
    if (selectedSize && selectedColor) {
      const cartProduct = {
        ...product,
        price: product?.discountedPrice ? product?.discountedPrice : product?.price,
        size: selectedSize,
        color: selectedColor,
        category: product?.category._id,
        productId: product?._id,
        quantity,
      };
      addToCart(cartProduct);
      toast.success("Product added to cart");
      navigate(`/products/${product?.category._id}`);
    } else {
      if (!selectedSize) toast.warn("Please select a size");
      if (!selectedColor) toast.warn("Please select a color");
    }
  };

  const addReview = async (data) => {
    try {
      const response = await createReview(data);
      if (response) {
        toast.success("Review submitted successfully!");
        fetchReviews();
        setIsModalOpen(false);
      }
    } catch (err) {
      toast.error("Error submitting review!");
    }
  };

  const handleDeleteReview = async (reviewId) => {
    try {
      await deleteReview(reviewId);
      fetchReviews();
      toast.success("Review deleted successfully!");
    } catch (err) {
      toast.error("Error deleting review!");
    }
  };

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const fetchReviews = useCallback(async () => {
    setReviewsLoading(true);
    try {
      const response = await getReviews(product?._id);
      setReviews(response?.data?.reviews);
    } catch (err) {
      // toast.error("Error fetching reviews");
    } finally {
      setReviewsLoading(false);
    }
  }, [product?._id]);

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  useEffect(() => {
    if (!product) {
      setLoading(true);
    } else {
      setLoading(false);
    }
    fetchReviews();
  }, [product, fetchReviews]);

  if (loading) {
    return <Loader />;
  }

  // Calculate average rating
  // const averageRating = reviews.length 
  //   ? (reviews.reduce((total, review) => total + review.rating, 0) / reviews.length).toFixed(1) 
  //   : 0;

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section with Breadcrumb */}
      <div className="bg-gradient-to-r from-white to-orange-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-600 mb-4">
            <span>Home</span>
            <ChevronRight className="mx-2 h-4 w-4" />
            <span>{product?.category?.name || "Category"}</span>
            <ChevronRight className="mx-2 h-4 w-4" />
            <span className="text-[#fc8a49] font-medium">{product?.name}</span>
          </div>
        </div>
      </div>

      {/* Main Product Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Left column - Product Images */}
            <div className="w-full lg:w-1/2 p-6">
              <div className="sticky top-24">
                <div className="flex justify-center mb-8">
                  <div className="relative w-full max-w-md">
                    <img
                      // src={
                      //   product?.images[0]
                      // }
                      src={
                        product?.images && product?.images.length > 0
                          ? (product?.images[photoIndex])
                          : imagesProduct[product?.gender]
                      }
                      alt={product?.name}
                      className="w-full h-auto rounded-lg shadow-md object-contain max-h-96"
                    />
                    
                    {product?.discountedPrice > 0 && (
                      <div className="absolute top-4 left-4 bg-[#fc8a49] text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {Math.round(((product.price - product.discountedPrice) / product.price) * 100)}% OFF
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex flex-wrap justify-center gap-3 mt-4">
                  {product?.images?.map((image, index) => (
                    <div 
                      key={index}
                      className={`cursor-pointer transition-all duration-300 ${
                        photoIndex === index 
                          ? "ring-2 ring-[#fc8a49] scale-105" 
                          : "ring-1 ring-gray-200 hover:ring-[#fc8a49]/50"
                      }`}
                      onClick={() => openLightbox(index)}
                    >
                      <img
                        src={image}
                        alt={`${product?.name} view ${index + 1}`}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column - Product Details */}
            <div className="w-full lg:w-1/2 p-8 bg-gray-50">
              {/* Stock status */}
              {product?.quantity > 0 ? (
                <div className="flex items-center gap-2 text-green-600 mb-3">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  <span className="font-medium text-sm">IN STOCK</span>
                </div>
              ) : (
                <div className="bg-orange-100 text-orange-800 font-medium px-3 py-1 rounded-md inline-block mb-3 text-sm">
                  OUT OF STOCK
                </div>
              )}

              {/* Product title */}
              <h1 className="text-3xl font-bold text-gray-800 mb-3">{product?.name}</h1>

              {/* Rating summary */}
              {/* <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={16}
                      className={`${
                        star <= Math.round(averageRating)
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600 text-sm">{averageRating} ({reviews.length} reviews)</span>
              </div> */}

              {/* Price */}
              <div className="mb-8">
                {product?.discountedPrice > 0 ? (
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-bold text-[#fc8a49]">${product?.discountedPrice}</span>
                    <span className="text-gray-500 line-through text-xl">${product?.price}</span>
                  </div>
                ) : (
                  <span className="text-3xl font-bold text-[#fc8a49]">${product?.price}</span>
                )}
              </div>

              {/* Short description */}
              {/* <div className="mb-8">
                <p className="text-gray-600">
                  {product?.description ? 
                    product.description.replace(/<[^>]*>?/gm, '').substring(0, 150) + "..." :
                    "No description available for this product."
                  }
                </p>
              </div> */}

              {/* Size selection */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-2">SELECT SIZE</h3>
                <div className="flex flex-wrap gap-2">
                  {product?.size?.map((size) => (
                    <button
                      key={size}
                      className={`h-10 min-w-16 px-3 rounded-md border transition-all duration-200 ${
                        selectedSize === size
                          ? "border-[#fc8a49] bg-[#fc8a49]/10 text-[#fc8a49] font-medium"
                          : "border-gray-300 text-gray-700 hover:border-[#fc8a49]/50"
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color selection */}
              <div className="mb-8">
                <h3 className="text-sm font-medium text-gray-700 mb-2">SELECT COLOR</h3>
                <div className="flex flex-wrap gap-3">
                  {product?.color?.map((color) => (
                    <div
                      key={color}
                      className={`w-8 h-8 rounded-full cursor-pointer transition-all duration-200 border-2 ${
                        selectedColor === color
                          ? "ring-2 ring-offset-2 ring-[#fc8a49] scale-110"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={() => setSelectedColor(color)}
                    />
                  ))}
                </div>
              </div>

              {/* Quantity selector */}
              {product?.quantity > 0 && (
                <div className="mb-8">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">QUANTITY</h3>
                  <div className="flex items-center">
                    <button
                      className="text-gray-500 hover:text-[#fc8a49] focus:outline-none"
                      onClick={() => handleQuantityChange(quantity - 1)}
                      disabled={quantity <= 1}
                    >
                      <MinusCircle className="h-6 w-6" />
                    </button>
                    <input
                      type="number"
                      min="1"
                      max={product?.quantity}
                      value={quantity}
                      onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                      className="mx-3 w-16 text-center border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#fc8a49]/50"
                    />
                    <button
                      className="text-gray-500 hover:text-[#fc8a49] focus:outline-none"
                      onClick={() => handleQuantityChange(quantity + 1)}
                      disabled={quantity >= product?.quantity}
                    >
                      <PlusCircle className="h-6 w-6" />
                    </button>
                    <span className="ml-4 text-sm text-gray-500">
                      {product?.quantity} items available
                    </span>
                  </div>
                </div>
              )}

              {/* Action buttons */}
              <div className="flex flex-col space-y-3 mb-8">
                <button
                  onClick={handleAddToCart}
                  disabled={!selectedSize || !selectedColor || quantity < 1 || product?.quantity <= 0}
                  className={`flex items-center justify-center gap-2 w-full py-3 px-6 rounded-lg transition-all duration-300 ${
                    !selectedSize || !selectedColor || quantity < 1 || product?.quantity <= 0
                      ? "bg-gray-300 cursor-not-allowed text-gray-600"
                      : "bg-[#fc8a49] hover:bg-[#e67b3f] text-white"
                  }`}
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span className="font-semibold">Add to Cart</span>
                </button>
                
                {user && token && !isAdmin && (
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center justify-center gap-2 w-full py-3 px-6 rounded-lg border-2 border-[#fc8a49] text-[#fc8a49] bg-white hover:bg-[#fc8a49]/5 transition-all duration-300"
                  >
                    <MessageSquare className="h-5 w-5" />
                    <span className="font-semibold">Write a Review</span>
                  </button>
                )}
              </div>

              {/* Product benefits */}
              <div className="border-t border-gray-200 pt-6 space-y-4">
                <div className="flex items-start gap-3">
                  {/* <TruckFast className="h-5 w-5 text-[#fc8a49] flex-shrink-0 mt-0.5" /> */}
                  <div>
                    <h4 className="font-medium text-gray-900">Free Shipping</h4>
                    <p className="text-sm text-gray-600">Free standard shipping on orders over $100</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <RefreshCw className="h-5 w-5 text-[#fc8a49] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Easy Returns</h4>
                    <p className="text-sm text-gray-600">30-day return policy for unworn items</p>
                  </div>
                </div>
                
                {/* <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-[#fc8a49] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Secure Payment</h4>
                    <p className="text-sm text-gray-600">Your data is protected with 256-bit encryption</p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Product tabs - Description and Reviews */}
        <div className="mt-12">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              <button
                className={`py-4 px-1 text-center text-sm font-medium border-b-2 transition-colors duration-200 ${
                  activeTab === "description"
                    ? "border-[#fc8a49] text-[#fc8a49]"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
                onClick={() => setActiveTab("description")}
              >
                Product Description
              </button>
              {/* <button
                className={`py-4 px-1 text-center text-sm font-medium border-b-2 transition-colors duration-200 flex items-center gap-2 ${
                  activeTab === "reviews"
                    ? "border-[#fc8a49] text-[#fc8a49]"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
                onClick={() => setActiveTab("reviews")}
              >
                Reviews
                <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full text-xs">
                  {reviews.length}
                </span>
              </button> */}
            </nav>
          </div>

          <div className="py-8">
            {activeTab === "description" ? (
              <div className="prose max-w-none">
                <div
                  className="product-description"
                  dangerouslySetInnerHTML={{ __html: product?.description }}
                />
              </div>
            ) : (
              <div>
                {reviewsLoading ? (
                  <div className="flex justify-center py-8">
                    <div className="w-12 h-12 rounded-full border-4 border-[#fc8a49]/20 border-t-[#fc8a49] animate-spin"></div>
                  </div>
                ) : reviews.length > 0 ? (
                  <ReviewList
                    reviews={reviews}
                    productId={product?._id}
                    onDeleteReview={handleDeleteReview}
                  />
                ) : (
                  <div className="text-center py-12">
                    <h3 className="text-xl font-medium text-gray-900 mb-2">No reviews yet</h3>
                    <p className="text-gray-600 mb-6">Be the first to review this product</p>
                    {user && token && !isAdmin && (
                      <button
                        onClick={() => setIsModalOpen(true)}
                        className="inline-flex items-center px-6 py-3 bg-[#fc8a49] text-white rounded-lg hover:bg-[#e67b3f] transition-all duration-300"
                      >
                        <MessageSquare className="h-5 w-5 mr-2" />
                        Write a Review
                      </button>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Review Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add Review"
      >
        <ReviewForm productId={product?._id} onSubmit={addReview} />
      </Modal>

      {/* Image Lightbox */}
      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          index={photoIndex}
          slides={product?.images?.map(img => ({ src: (img) }))}
        />
      )}
    </div>
  );
};

export default ProductDetail;