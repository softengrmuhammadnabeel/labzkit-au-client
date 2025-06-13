import React from "react";

import { Package, Clock, Shield, Truck, Globe, Mail } from "lucide-react";

// Return Policy Component
const ReturnPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl shadow-lg border border-orange-100 p-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#FC8A49] to-[#ff6b00] rounded-full mb-4">
            <Package className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Return Policy</h2>
          <p className="text-gray-600">Simple and hassle-free returns</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
              <Clock className="w-5 h-5 text-[#FC8A49] mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">2-Day Window</h4>
                <p className="text-sm text-gray-600">Returns accepted within 2 days of delivery</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
              <Mail className="w-5 h-5 text-[#FC8A49] mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Easy Process</h4>
                <p className="text-sm text-gray-600">Email <span className="font-medium text-[#FC8A49]">labzkit@gmail.com</span> with order details</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
              <Shield className="w-5 h-5 text-[#FC8A49] mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Quick Refunds</h4>
                <p className="text-sm text-gray-600">Processed within 7 business days</p>
              </div>
            </div>
            
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-sm text-amber-800">
                <span className="font-medium">Note:</span> Items must be unused, in original packaging. Shipping costs non-refundable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ReturnPolicy;
