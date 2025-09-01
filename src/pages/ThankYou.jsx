import React from "react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-green-600 mb-4">
        🎉 Thank You for Your Order!
      </h1>
      <p className="text-gray-700 mb-6">
        Your order has been placed successfully. We’ll update you soon.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
      >
        Go Back to Home
      </Link>
    </div>
  );
};

export default ThankYou;
