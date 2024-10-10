import React from "react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"; // Lucide icons for social media

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="flex flex-col space-y-3">
            <h2 className="text-3xl font-bold">Recipe Pro</h2>
            <p className="text-gray-400">
              Your go-to platform for discovering delicious recipes, sharing
              culinary masterpieces, and receiving personalized meal plans.
            </p>
            <div className="flex space-x-4 mt-4">
              {/* Social Media Icons */}
              <a href="#" aria-label="Facebook" className="hover:text-gray-300">
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-gray-300"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-gray-300">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-gray-300">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  Explore Recipes
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  Personalized Meal Plans
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  Free & Premium Recipes
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  Help & Support
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-xl font-semibold">Stay Updated</h3>
            <p className="text-gray-400">
              Subscribe to get the latest recipes and personalized meal plans
              delivered straight to your inbox.
            </p>
            <form className="flex">
              <input
                type="email"
                className="w-full px-4 py-2 text-gray-800 rounded-l-lg focus:outline-none"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="bg-green-500 px-4 py-2 text-white rounded-r-lg hover:bg-green-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500">
          <p>© {new Date().getFullYear()} CookPal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
