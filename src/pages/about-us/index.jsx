import React from "react";
import { WhatsAppOutlined } from "@ant-design/icons";
import { BsChat, BsHouse } from "react-icons/bs";

const AboutUS = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-white to-orange-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
              About <span className="text-[#fc8a49]">Labzkit</span>
            </h1>
            <div className="w-24 h-2 bg-[#fc8a49] rounded-full mb-8"></div>
            <p className="text-gray-700 text-lg text-center max-w-3xl">
              Australia's premier destination for top-quality laboratory equipment and supplies. 
              We are dedicated to providing scientists, educators, and medical professionals with 
              a comprehensive range of products to support their critical work.
            </p>
          </div>
        </div>
      </div>

      {/* Our Products Section with Image */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="w-full md:w-1/2">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#fc8a49]/20 rounded-full"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#fc8a49]/20 rounded-full"></div>
                <div className="relative z-10 overflow-hidden rounded-xl shadow-xl">
                  <img
                    src="/about/about.jpg"
                    alt="Laboratory Equipment"
                    className="w-full object-cover h-80 md:h-96 rounded-xl"
                  />
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Our <span className="text-[#fc8a49]">Product Range</span>
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 mt-1 rounded-full bg-[#fc8a49]/20 flex items-center justify-center">
                    <div className="h-4 w-4 bg-[#fc8a49] rounded-full"></div>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Protective Gear</p>
                    <p className="text-gray-600">Lab coats, safety goggles, sterile nitrile gloves, and face masks to ensure your safety in the lab.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 mt-1 rounded-full bg-[#fc8a49]/20 flex items-center justify-center">
                    <div className="h-4 w-4 bg-[#fc8a49] rounded-full"></div>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Laboratory Instruments</p>
                    <p className="text-gray-600">Bunsen burners, centrifuges, microscopes, spectrophotometers, and incubators for precise scientific applications.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 mt-1 rounded-full bg-[#fc8a49]/20 flex items-center justify-center">
                    <div className="h-4 w-4 bg-[#fc8a49] rounded-full"></div>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Glassware and Consumables</p>
                    <p className="text-gray-600">Beakers, test tubes, Erlenmeyer flasks, funnels, graduated cylinders, wash bottles, watch glasses, crucibles, and droppers for everyday lab use.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 mt-1 rounded-full bg-[#fc8a49]/20 flex items-center justify-center">
                    <div className="h-4 w-4 bg-[#fc8a49] rounded-full"></div>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Measuring Tools</p>
                    <p className="text-gray-600">Pipettes, thermometers, balances, and magnifying glasses for accurate measurements.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="h-8 w-8 mt-1 rounded-full bg-[#fc8a49]/20 flex items-center justify-center">
                    <div className="h-4 w-4 bg-[#fc8a49] rounded-full"></div>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Specialized Equipment</p>
                    <p className="text-gray-600">Autoclaves, fume hoods, alcohol burners, wire loops, tongs, and more to meet diverse laboratory needs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section with Cards */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Why Choose <span className="text-[#fc8a49]">Labzkit</span>
            </h2>
            <div className="w-24 h-2 bg-[#fc8a49] rounded-full mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At Labzkit, we are committed to supporting the advancement of science and education in Australia. 
              Here's why customers trust us:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="h-3 bg-[#fc8a49]"></div>
              <div className="p-6">
                <div className="h-16 w-16 bg-[#fc8a49]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#fc8a49]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 text-center mb-3">Quality Assurance</h3>
                <p className="text-gray-600 text-center">We source our products from reputable manufacturers to ensure they meet the highest industry standards.</p>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="h-3 bg-[#fc8a49]"></div>
              <div className="p-6">
                <div className="h-16 w-16 bg-[#fc8a49]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#fc8a49]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5L15 7h4a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2zm9-13.5V9" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 text-center mb-3">Australian Owned</h3>
                <p className="text-gray-600 text-center">As a proud Australian company, we understand the unique needs of our local scientific community.</p>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="h-3 bg-[#fc8a49]"></div>
              <div className="p-6">
                <div className="h-16 w-16 bg-[#fc8a49]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#fc8a49]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 text-center mb-3">Competitive Pricing</h3>
                <p className="text-gray-600 text-center">We offer high-quality products at competitive prices, making advanced laboratory equipment accessible to all.</p>
              </div>
            </div>
            
            {/* Card 4 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="h-3 bg-[#fc8a49]"></div>
              <div className="p-6">
                <div className="h-16 w-16 bg-[#fc8a49]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#fc8a49]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 text-center mb-3">Exceptional Service</h3>
                <p className="text-gray-600 text-center">Our knowledgeable team is here to assist you with product selection, technical support, and any inquiries you may have.</p>
              </div>
            </div>
            
            {/* Card 5 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="h-3 bg-[#fc8a49]"></div>
              <div className="p-6">
                <div className="h-16 w-16 bg-[#fc8a49]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#fc8a49]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 text-center mb-3">Fast Shipping</h3>
                <p className="text-gray-600 text-center">We ensure prompt delivery across Australia, so you can rely on us to keep your lab running smoothly.</p>
              </div>
            </div>
            
            {/* Add a message card */}
            <div className="bg-[#fc8a49]/10 rounded-xl overflow-hidden border border-[#fc8a49]/20 flex items-center">
              <div className="p-6 text-center w-full">
                <p className="text-gray-800 font-medium text-lg mb-4">
                  Thank you for choosing Labzkit as your trusted partner in laboratory supplies.
                </p>
                <a href="/contact-us" className="inline-block px-6 py-3 bg-[#fc8a49] text-white font-semibold rounded-lg hover:bg-[#e67b3f] transition-colors">
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact and Discount Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Contact Us */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Contact <span className="text-[#fc8a49]">Us</span>
              </h2>
              <p className="text-gray-600 mb-8">
                We invite you to explore our website and discover how Labzkit can meet
                your laboratory needs. For any inquiries or assistance, please don't
                hesitate to contact our customer service team.
              </p>
              
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center gap-4 mb-6 hover:translate-x-2 transition-transform duration-300">
                  <div className="h-12 w-12 bg-[#00A76F]/10 rounded-full flex items-center justify-center">
                    <WhatsAppOutlined style={{ color: "#00A76F", fontSize: 24 }} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">WhatsApp</p>
                    <p className="font-medium text-gray-800">(+92) 3112752474</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mb-6 hover:translate-x-2 transition-transform duration-300">
                  <div className="h-12 w-12 bg-[#67aeff]/10 rounded-full flex items-center justify-center">
                    <BsChat style={{ color: "#67aeff", fontSize: 20 }} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium text-gray-800">labzkit@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 hover:translate-x-2 transition-transform duration-300">
                  <div className="h-12 w-12 bg-[#141a3c]/10 rounded-full flex items-center justify-center">
                    <BsHouse style={{ color: "#141a3c", fontSize: 20 }} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Address</p>
                    <p className="font-medium text-gray-800">P.O Box 255 Mernda VIC 3754</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bulk Discount */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Bulk <span className="text-[#fc8a49]">Discounts</span>
              </h2>
              <p className="text-gray-600 mb-8">
                Save more when you purchase in bulk! We offer special discounts 
                for larger orders to support your research and laboratory needs.
              </p>
              
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-[#fc8a49] p-4 text-center">
                  <h3 className="text-white font-semibold text-xl">Save More with Bulk Discounts!</h3>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Below are the available bulk discount rates for each individual item
                    when you purchase a certain amount:
                  </p>
                  
                  <div className="overflow-hidden rounded-lg border border-gray-200">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="py-3 px-4 text-center font-semibold text-gray-800">Purchase Range</th>
                          <th className="py-3 px-4 text-center font-semibold text-gray-800">Discount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t border-gray-200 hover:bg-orange-50 transition-colors">
                          <td className="py-3 px-4 text-center">Buy 5 - 9</td>
                          <td className="py-3 px-4 text-center font-medium text-[#fc8a49]">3% off</td>
                        </tr>
                        <tr className="border-t border-gray-200 hover:bg-orange-50 transition-colors">
                          <td className="py-3 px-4 text-center">Buy 10 - 24</td>
                          <td className="py-3 px-4 text-center font-medium text-[#fc8a49]">5% off</td>
                        </tr>
                        <tr className="border-t border-gray-200 hover:bg-orange-50 transition-colors">
                          <td className="py-3 px-4 text-center">Buy 25 - 49</td>
                          <td className="py-3 px-4 text-center font-medium text-[#fc8a49]">10% off</td>
                        </tr>
                        <tr className="border-t border-gray-200 hover:bg-orange-50 transition-colors">
                          <td className="py-3 px-4 text-center">Buy 50 or above</td>
                          <td className="py-3 px-4 text-center font-medium text-[#fc8a49]">15% off</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <a href="/contact-us" className="inline-block px-6 py-3 bg-[#fc8a49] text-white font-semibold rounded-lg hover:bg-[#e67b3f] transition-colors">
                      Contact Us for Orders Over 100pc
                    </a>
                    <p className="mt-2 text-sm text-gray-500">Get the best price for large volume orders</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Final CTA */}
      <div className="bg-gradient-to-r from-[#fc8a49] to-orange-600 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Equip Your Laboratory?
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Browse our comprehensive range of laboratory equipment and supplies today. If you have any questions, 
            our team is always ready to assist you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <a href="/products" className="inline-block px-8 py-4 bg-white text-[#fc8a49] font-semibold rounded-lg hover:bg-orange-50 transition-colors">
              Browse Products
            </a> */}
            <a href="/contact-us" className="inline-block px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-[#fc8a49]/20 transition-colors">
              Request Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUS;