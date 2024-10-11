import React from "react";

const Pricing = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Get Started with Our Recipe Plans
        </h2>
        <p className="text-lg text-gray-500 mb-12">
          Discover a wide range of free recipes, or choose a personalized plan
          to fit your dietary and fitness needs. Start your culinary journey
          today!
        </p>

        {/* Pricing Cards */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Free Plan */}
          <div className="bg-gray-100 p-8 rounded-xl shadow-md flex flex-col items-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Free Plan
            </h3>
            <p className="text-gray-500 mb-6">
              Access a variety of delicious and healthy recipes at no cost.
            </p>
            <div className="text-3xl font-bold text-gray-900 mb-6">$0</div>
            <ul className="text-gray-500 mb-8 space-y-2">
              <li>Access to all free recipes</li>
              <li>No account needed</li>
              <li>Explore without login</li>
            </ul>
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md">
              Explore Recipes
            </button>
          </div>

          {/* Premium Plan */}
          <div className="relative bg-gray-100 p-8 rounded-xl shadow-md flex flex-col items-center border-yellow-400 border-2">
            {/* Best Value Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-white px-4 py-1 rounded-full text-sm font-semibold">
              Best Value
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Premium Plan
            </h3>
            <p className="text-gray-500 mb-6">
              Get access to exclusive recipes and personalized meal plans.
            </p>
            <div className="text-3xl font-bold text-gray-900 mb-6">
              $9.99/mo
            </div>
            <ul className="text-gray-500 mb-8 space-y-2">
              <li>All free recipes included</li>
              <li>Personalized meal plans</li>
              <li>Exclusive chef-crafted recipes</li>
            </ul>
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md">
              Start Free Trial
            </button>
          </div>

          {/* Personalized Plan */}
          <div className="bg-gray-100 p-8 rounded-xl shadow-md flex flex-col items-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Personalized Plan
            </h3>
            <p className="text-gray-500 mb-6">
              Receive customized recipes based on your fitness and dietary
              needs.
            </p>
            <div className="text-3xl font-bold text-gray-900 mb-6">
              $19.99/mo
            </div>
            <ul className="text-gray-500 mb-8 space-y-2">
              <li>Custom meal plans</li>
              <li>Detailed nutritional insights</li>
              <li>Exclusive support</li>
            </ul>
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md">
              Get Personalized Plan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
