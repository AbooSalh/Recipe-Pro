import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Github,
  Linkedin,
} from "lucide-react";
import { website } from "@/utils/placeholders";

const socialIcons = {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Github,
  Linkedin,
};

type SocialIconName = keyof typeof socialIcons;

const Footer = () => {
  const socialMediaLinks: { name: SocialIconName; url: string }[] = [
    { name: "Facebook", url: "#" },
    { name: "Instagram", url: "#" },
    { name: "Twitter", url: "#" },
    { name: "Youtube", url: "#" },
    // Add or remove social media links as needed
  ];

  const quickLinks = [
    { name: "Home", url: "#" },
    { name: "Explore Recipes", url: "#" },
    { name: "Personalized Meal Plans", url: "#" },
    { name: "Free & Premium Recipes", url: "#" },
    { name: "Help & Support", url: "#" },
    // Add or remove quick links as needed
  ];

  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="flex flex-col space-y-3">
            <h2 className="text-3xl font-bold">{website.name}</h2>
            <p className="text-gray-400">{website.description}</p>
            <div className="flex space-x-4 mt-4">
              {/* Social Media Icons */}
              {socialMediaLinks.map((link) => {
                const Icon = socialIcons[link.name];
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    aria-label={link.name}
                    className="hover:text-gray-300"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    className="text-gray-400 hover:text-gray-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
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
          <p>
            © {new Date().getFullYear()} {website.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
