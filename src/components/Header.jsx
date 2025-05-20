import React, { useState, useEffect, useRef } from "react";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";
import { NavLink } from "react-router-dom";
import { FaShoppingCart, FaChevronDown } from "react-icons/fa";
import { X, Menu } from "lucide-react";
import { getCategories } from "../api/categories";
const Header = () => {
  const [categoriesData, setCategoriesData] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const { cartLength } = useCart();
  const headerRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategories();
        setCategoriesData(response || []);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent body scroll when menu is open
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !event.target.closest('#toggleOpen')) {
        setIsMenuOpen(false);
        document.body.style.overflow = 'auto';
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Handle category dropdown closing with delay
  // const handleCategoryMouseLeave = () => {
  //   setTimeout(() => {
  //     setIsCategoryOpen(false);
  //   }, 300);
  // };

  // Close menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMenuOpen) {
        setIsMenuOpen(false);
        document.body.style.overflow = 'auto';
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  // Clean up body overflow on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 py-3 px-4 sm:px-8 font-sans min-h-[70px] tracking-wide z-40 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-white shadow-sm"
          }`}
      >
        
        <div className="max-w-7xl mx-auto flex items-center justify-between w-full">
          {/* Logo */}
          <NavLink to="/" className="relative group shrink-0  items-center justify-center inline-block">
            <img
              src="/LabzKit-logo.png"
              alt="LabzKit"
              className="h-12 md:h-14 w-auto transition-all duration-300 group-hover:scale-105  "
            // className="h-12 md:h-14 w-auto transition-all duration-300 group-hover:scale-105  mix-blend-multiply"
            // style={{ filter: 'brightness(0) saturate(100%)', zIndex: 10 }}
            />
            {/* <div
              className="absolute inset-0"
              style={{
                // backgroundColor: "#fc8a49",
                mixBlendMode: "screen",
                zIndex: 0,
              }}
            /> */}
          </NavLink>


          {/* Navigation - Desktop */}
          <nav className="hidden lg:block">
            <ul className="flex items-center pt-5 gap-x-8">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `inline-flex items-center hover:text-[#ff6b00] text-gray-800 text-md font-medium transition-all duration-300 ${isActive
                      ? "text-[#ff6b00] font-semibold border-b-2 border-[#ff6b00] pb-1"
                      : ""
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about-us"
                  className={({ isActive }) =>
                    `inline-flex items-center hover:text-[#ff6b00] text-gray-800 text-md font-medium transition-all duration-300 ${isActive
                      ? "text-[#ff6b00] font-semibold border-b-2 border-[#ff6b00] pb-1"
                      : ""
                    }`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact-us"
                  className={({ isActive }) =>
                    `inline-flex items-center hover:text-[#ff6b00] text-gray-800 text-md font-medium transition-all duration-300 ${isActive
                      ? "text-[#ff6b00] font-semibold border-b-2 border-[#ff6b00] pb-1"
                      : ""
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li
                className="relative"
                onMouseEnter={() => setIsCategoryOpen(true)}
                onMouseLeave={() => setIsCategoryOpen(false)} // simpler, no need for a separate function
              >
                <button
                  className={`flex items-center gap-1 hover:text-[#ff6b00] text-gray-800 text-md font-medium transition-all duration-300 ${isCategoryOpen ? "text-[#ff6b00] font-semibold" : ""
                    }`}
                >
                  Categories
                  <FaChevronDown
                    className={`text-xs transition-transform duration-200 ${isCategoryOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {/* Dropdown is inside the same wrapper as button */}
                <div
                  className={`absolute left-0 mt-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 z-50 transition-all duration-200 origin-top-left ${isCategoryOpen
                    ? "scale-100 opacity-100"
                    : "scale-95 opacity-0 pointer-events-none"
                    }`}
                >
                  {categoriesData.map((category) => (
                    <NavLink
                      key={category._id}
                      to={`/products/${category?._id}`}
                      className={({ isActive }) =>
                        `block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#ff6b00] whitespace-nowrap transition-colors duration-150 ${isActive
                          ? "bg-orange-50 text-[#ff6b00] font-medium"
                          : ""
                        }`
                      }
                    >
                      {category.name}
                    </NavLink>
                  ))}
                </div>
              </li>

            </ul>
          </nav>

          {/* User Actions */}
          <div className="flex items-center gap-4">
            {(
              <NavLink
                to="/cart"
                className="relative group flex items-center justify-center p-2 rounded-full hover:bg-orange-50 transition-colors duration-300"
              >
                <FaShoppingCart className="text-xl text-[#ff6b00] group-hover:text-[#e05d00] transition-colors duration-300" />
                {cartLength > 0 && (
                  <span className="absolute -top-1 -right-1 px-1.5 py-0.5 rounded-full bg-[#ff6b00] text-white text-xs font-bold flex items-center justify-center min-w-[18px] min-h-[18px] transform group-hover:scale-110 transition-transform">
                    {cartLength}
                  </span>
                )}
              </NavLink>
            )}

            {/* Mobile Menu Toggle Button */}
            <button
              id="toggleOpen"
              onClick={toggleMenu}
              className="lg:hidden p-2 bg-orange-50 hover:bg-orange-100 rounded-full transition-all duration-300 shadow-sm"
              aria-label="Toggle mobile menu"
            >
              <Menu className="w-6 h-6 text-[#ff6b00]" />
            </button>
          </div>
        </div>
      </header>

      {/* Spacer to prevent content from being hidden under fixed header */}
      <div className="h-[70px] md:h-[80px]"></div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" aria-hidden="true"></div>
      )}

      {/* Mobile Menu Sidebar */}
      <div
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 bottom-0 w-[280px] bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto lg:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <span className="font-semibold text-gray-800">Menu</span>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-6">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 text-base ${isActive ? "text-[#ff6b00] font-medium" : "text-gray-800"
                    }`
                  }
                  onClick={toggleMenu}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about-us"
                  className={({ isActive }) =>
                    `block py-2 text-base ${isActive ? "text-[#ff6b00] font-medium" : "text-gray-800"
                    }`
                  }
                  onClick={toggleMenu}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact-us"
                  className={({ isActive }) =>
                    `block py-2 text-base ${isActive ? "text-[#ff6b00] font-medium" : "text-gray-800"
                    }`
                  }
                  onClick={toggleMenu}
                >
                  Contact
                </NavLink>
              </li>
              <li className="border-t border-gray-100 pt-4">
                <div className="mb-2 text-base font-medium text-gray-800">Categories</div>
                <ul className="pl-4 space-y-3">
                  {categoriesData.map((category) => (
                    <li key={category._id}>
                      <NavLink
                        to={`/products/${category?._id}`}
                        className={({ isActive }) =>
                          `block py-1 text-sm ${isActive ? "text-[#ff6b00] font-medium" : "text-gray-700"
                          }`
                        }
                        onClick={toggleMenu}
                      >
                        {category.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;