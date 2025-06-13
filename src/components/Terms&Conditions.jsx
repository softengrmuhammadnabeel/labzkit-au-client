import React from "react";
import { Shield } from "lucide-react";

const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg border border-gray-200 p-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full mb-4">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Terms & Conditions</h2>
          <p className="text-gray-600">By using our website, you agree to these terms</p>
        </div>

        <div className="space-y-6 text-sm text-gray-700">
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">1. Introduction</h3>
            <p>
              These Terms and Conditions govern your use of our website and services. By accessing our store, you agree to these terms.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-1">2. Orders & Payment</h3>
            <p>
              We accept major credit cards, PayPal, COD and other payment methods available at checkout. Orders are subject to availability. We reserve the right to cancel any order.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-1">3. Intellectual Property</h3>
            <p>
              All content on this website, including images, text, and designs, is the property of SAWAT LEGACY and may not be used without permission.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-1">4. Limitation of Liability</h3>
            <p>
              We are not responsible for indirect damages, such as loss of profits or data, due to your use of our website.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-1">5. Changes to Terms</h3>
            <p>
              We may update these terms at any time. Continued use of our website constitutes acceptance of these changes.
            </p>
          </div>
        </div>

        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-800 text-center">
            <span className="font-medium">Important:</span> We are not liable for indirect losses. Continued use indicates acceptance of these terms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
