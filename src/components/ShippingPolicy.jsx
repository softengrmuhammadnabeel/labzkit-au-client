// components/ShippingPolicy.jsx
import React from "react";
import { Package, Clock, Shield, Truck, Globe, Mail, Search } from "lucide-react";

const ShippingPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg border border-blue-100 p-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mb-4">
            <Truck className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Shipping Policy</h2>
          <p className="text-gray-600">Fast and reliable delivery</p>
        </div>

        {/* Shipping Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Clock className="w-6 h-6 text-green-600" />
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">Processing</h4>
            <p className="text-sm text-gray-600">Orders processed within 10 business days</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Truck className="w-6 h-6 text-orange-600" />
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">Standard Shipping</h4>
            <p className="text-sm text-gray-600">Delivery in 7–10 business days</p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Globe className="w-6 h-6 text-purple-600" />
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">International Shipping</h4>
            <p className="text-sm text-gray-600">Available worldwide</p>
          </div>
        </div>

        {/* Details Section */}
        <div className="space-y-6 text-sm text-gray-700 bg-gray-50 rounded-xl p-6 mb-6">
          <div>
            <h4 className="flex items-center gap-2 font-semibold text-gray-800 mb-1">
              <Clock className="w-4 h-4 text-blue-500" />
              Processing Time
            </h4>
            <p>
              Orders are processed within <strong>10 business days</strong> (excluding weekends and public holidays). Once shipped, you will receive a confirmation email with a <strong>Leopards Courier tracking number</strong>.
            </p>
          </div>

          <div>
            <h4 className="flex items-center gap-2 font-semibold text-gray-800 mb-1">
              <Truck className="w-4 h-4 text-orange-500" />
              Shipping Rates & Delivery Estimates
            </h4>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Standard Shipping (DPEX Courier):</strong> 7–10 business days</li>
              <li><strong>Express Shipping (if applicable):</strong> within 7 business days</li>
            </ul>
          </div>

          <div>
            <h4 className="flex items-center gap-2 font-semibold text-gray-800 mb-1">
              <Globe className="w-4 h-4 text-purple-600" />
              International Shipping
            </h4>
            <p>We offer international shipping. Please note that <strong>customs duties or taxes</strong> are the responsibility of the customer.</p>
          </div>

          <div>
            <h4 className="flex items-center gap-2 font-semibold text-gray-800 mb-1">
              <Search className="w-4 h-4 text-indigo-600" />
              Tracking Your Order
            </h4>
            <p>
              Once shipped, track your package via Leopards Courier’s tracking system. Visit <a href="https://dpex.com/track-and-trace/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">DPEX Courier Tracking</a> and enter your tracking number.
            </p>
          </div>

          <div>
            <h4 className="flex items-center gap-2 font-semibold text-gray-800 mb-1">
              <Shield className="w-4 h-4 text-red-500" />
              Shipping Restrictions
            </h4>
            <ul className="list-disc list-inside space-y-1">
              <li>We <strong>do not ship</strong> to P.O. Boxes or APO/FPO addresses.</li>
              <li>International customers must handle any customs duties or import taxes.</li>
            </ul>
          </div>
        </div>

        {/* Courier Section */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6">
          <h4 className="flex items-center gap-2 font-semibold text-gray-800 mb-3">
            <Package className="w-5 h-5 text-[#FC8A49]" />
            DPEX Courier Partnership
          </h4>
          <p className="text-sm text-gray-600 mb-2">
            Track your package with the provided tracking number. For issues, contact us at 
            <span className="font-medium text-[#FC8A49] ml-1">labzkit@gmail.com</span>.
          </p>
          <p className="text-xs text-gray-500">
            *International customers are responsible for customs duties. No P.O. Box delivery.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;
