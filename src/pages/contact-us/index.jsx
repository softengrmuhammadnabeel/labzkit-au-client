/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from "react";
import { WhatsAppOutlined } from "@ant-design/icons";
import {  BsClock, BsEnvelope, BsTelephone, BsGeoAlt } from "react-icons/bs";
import NewsletterSignup from "../../components/NewsLetter";
const ContactUs = () => {
  const [ setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData(prev => ({
  //     ...prev,
  //     [name]: value
  //   }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Form submission logic would go here
  //   alert("Your message has been sent! We'll get back to you soon.");
  //   // Reset form
  //   setFormData({
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //     phone: "",
  //     subject: "",
  //     message: ""
  //   });
  // };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-white to-orange-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
              Contact <span className="text-[#fc8a49]">Us</span>
            </h1>
            <div className="w-24 h-2 bg-[#fc8a49] rounded-full mb-8"></div>
            <p className="text-gray-700 text-lg text-center max-w-2xl">
              We're dedicated to providing exceptional customer service and
              personalized attention to our customers. Whether you're a small business
              owner or a large organization, we're here to help you find the perfect
              laboratory equipment for your needs.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Cards Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* WhatsApp Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px]">
              <div className="h-3 bg-[#25D366]"></div>
              <div className="p-8 flex flex-col items-center">
                <div className="h-16 w-16 bg-[#25D366]/10 rounded-full flex items-center justify-center mb-6">
                  <WhatsAppOutlined style={{ color: "#25D366", fontSize: 28 }} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">WhatsApp</h3>
                <p className="text-gray-600 mb-6 text-center">Contact us via call or WhatsApp for immediate assistance!</p>
                <div className="bg-gray-50 w-full p-4 rounded-lg">
                  <p className="text-gray-500 text-sm mb-1 text-center">Online Now</p>
                  <p className="text-[#25D366] font-bold text-center">(+92) 3112752474</p>
                </div>
                <a
                  href="https://wa.me/923112752474"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 px-6 py-3 bg-[#25D366] text-white font-semibold rounded-lg hover:bg-[#21bd5b] transition-colors inline-block"
                >
                  Message Us
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px]">
              <div className="h-3 bg-[#fc8a49]"></div>
              <div className="p-8 flex flex-col items-center">
                <div className="h-16 w-16 bg-[#fc8a49]/10 rounded-full flex items-center justify-center mb-6">
                  <BsEnvelope className="text-[#fc8a49] text-3xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
                <p className="text-gray-600 mb-6 text-center">Our friendly team is here to help with any questions.</p>
                <div className="bg-gray-50 w-full p-4 rounded-lg">
                  <p className="text-gray-500 text-sm mb-1 text-center">Send us a message</p>
                  <a
                    href="mailto:labzkit@gmail.com"
                    className="text-[#fc8a49] font-bold text-center block hover:underline"
                  >
                    labzkit@gmail.com
                  </a>
                </div>
                <a
                  href="mailto:labzkit@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 px-6 py-3 bg-[#fc8a49] text-white font-semibold rounded-lg hover:bg-[#e67b3f] transition-colors inline-block"
                >
                  Email Us
                </a>

              </div>
            </div>

            {/* Visit Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px]">
              <div className="h-3 bg-[#141a3c]"></div>
              <div className="p-8 flex flex-col items-center">
                <div className="h-16 w-16 bg-[#141a3c]/10 rounded-full flex items-center justify-center mb-6">
                  <BsGeoAlt className="text-[#141a3c] text-3xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Visit Us</h3>
                <p className="text-gray-600 mb-6 text-center">Come say hello at our location!</p>
                <div className="bg-gray-50 w-full p-4 rounded-lg">
                  <p className="text-gray-500 text-sm mb-1 text-center">Our Address</p>
                  <p className="text-[#141a3c] font-bold text-center">P.O Box 255 Mernda VIC 3754</p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-gray-600">
                  <BsClock className="text-[#141a3c]" />
                  <p className="text-sm"><span className="font-semibold">Mon-Fri:</span> 9:00am - 5:00pm</p>
                </div>
                <div className="mt-2 flex items-center gap-2 text-gray-600">
                  <BsClock className="text-[#141a3c] opacity-0" />
                  <p className="text-sm"><span className="font-semibold">Sat-Sun:</span> Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      {/* <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Send Us a <span className="text-[#fc8a49]">Message</span>
              </h2>
              <div className="w-24 h-2 bg-[#fc8a49] rounded-full mx-auto mb-4"></div>
              <p className="text-gray-600">
                Have a question or need assistance? Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#fc8a49]/50 focus:border-[#fc8a49] outline-none transition-all"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#fc8a49]/50 focus:border-[#fc8a49] outline-none transition-all"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#fc8a49]/50 focus:border-[#fc8a49] outline-none transition-all"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#fc8a49]/50 focus:border-[#fc8a49] outline-none transition-all"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#fc8a49]/50 focus:border-[#fc8a49] outline-none transition-all"
                  placeholder="What is this regarding?"
                  required
                />
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#fc8a49]/50 focus:border-[#fc8a49] outline-none transition-all resize-none"
                  placeholder="Please describe how we can help you..."
                  required
                ></textarea>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-8 py-4 bg-[#fc8a49] text-white font-semibold rounded-lg hover:bg-[#e67b3f] transition-colors flex items-center gap-2"
                >
                  Send Message
                  <BsSendArrowUp className="text-lg" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div> */}
      <NewsletterSignup/>
      {/* Map Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Our <span className="text-[#fc8a49]">Location</span>
              </h2>
              <div className="w-24 h-2 bg-[#fc8a49] rounded-full mx-auto mb-4"></div>
              <p className="text-gray-600">
                Find us on the map below or contact us to arrange a meeting.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Placeholder for the map - in a real implementation, you would use Google Maps or another map provider */}
              <div className="h-96 bg-gray-200 flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50582.80869465995!2d145.01074223658566!3d-37.59214269713063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad64b1845bc0083%3A0x5045675218cced0!2sMernda%20VIC%203754%2C%20Australia!5e0!3m2!1sen!2s!4v1747166350897!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Frequently Asked <span className="text-[#fc8a49]">Questions</span>
              </h2>
              <div className="w-24 h-2 bg-[#fc8a49] rounded-full mx-auto mb-4"></div>
              <p className="text-gray-600">
                Find answers to common questions about our laboratory equipment and services.
              </p>
            </div>

            <div className="space-y-6">
              {/* FAQ Item 1 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    What types of laboratory equipment do you offer?
                  </h3>
                  <p className="text-gray-600">
                    We offer a comprehensive range of laboratory equipment for various industries, including centrifuges, microscopes, spectrophotometers, analyzers, and more. Our catalog includes both new and refurbished equipment to suit different budgets and requirements.
                  </p>
                </div>
              </div>

              {/* FAQ Item 2 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Do you provide after-sales service and support?
                  </h3>
                  <p className="text-gray-600">
                    Yes, we provide comprehensive after-sales service and support for all our products. This includes installation, training, maintenance, and repairs. Our technical team is available to assist you with any issues that may arise.
                  </p>
                </div>
              </div>

              {/* FAQ Item 3 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    What is your delivery timeframe?
                  </h3>
                  <p className="text-gray-600">
                    Delivery timeframes vary depending on the product and your location. Typically, in-stock items are shipped within 3-5 business days. For custom or specialized equipment, delivery may take 2-4 weeks. We'll provide you with a specific timeframe when you place your order.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-[#141a3c]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Ready to find the perfect laboratory equipment for your needs?
            </h2>
            <p className="text-gray-300 text-center max-w-2xl mb-8">
              Our team of experts is ready to help you find the right solutions for your laboratory. Contact us today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/923112752474"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#25D366] text-white font-semibold rounded-lg hover:bg-[#21bd5b] transition-colors flex items-center gap-2"
              >
                <WhatsAppOutlined />
                WhatsApp Us
              </a>
              <a
                href="mailto:labzkit@gmail.com"
                className="px-8 py-4 bg-[#fc8a49] text-white font-semibold rounded-lg hover:bg-[#e67b3f] transition-colors flex items-center gap-2"
              >
                <BsEnvelope />
                Email Us
              </a>
              <a
                href="tel:+923112752474"
                className="px-8 py-4 bg-white text-[#141a3c] font-semibold rounded-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
              >
                <BsTelephone />
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default ContactUs;