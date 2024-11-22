"use client";

import { useState } from "react";

export default function FindUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Thank you for contacting us!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#475569]">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#334155]">Find Us</h1>
          <p className="text-lg text-[#64748B] mt-2">
            We&apos;d love to hear from you! Reach out to us or visit our location.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-[#CBD5E1]">
            <h2 className="text-2xl font-semibold text-[#334155] mb-4">
              Contact Us
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#475569]"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 mt-1 border rounded-lg shadow-sm border-[#CBD5E1] focus:outline-none focus:ring focus:ring-[#4CAF50]"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#475569]"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 mt-1 border rounded-lg shadow-sm border-[#CBD5E1] focus:outline-none focus:ring focus:ring-[#4CAF50]"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#475569]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-3 py-2 mt-1 border rounded-lg shadow-sm border-[#CBD5E1] focus:outline-none focus:ring focus:ring-[#4CAF50]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#4CAF50] text-white py-2 px-4 rounded-lg hover:bg-[#81C784] focus:outline-none focus:ring focus:ring-[#4CAF50]"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Location Info */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-[#CBD5E1]">
            <h2 className="text-2xl font-semibold text-[#334155] mb-4">
              Our Location
            </h2>
            <p className="text-sm text-[#64748B] mb-4">
              Visit us at our office or use the map below to find us!
            </p>
            <p className="text-lg text-[#475569] font-medium mb-4">
              123 Recipe St, Culinary City, Foodland 56789
            </p>
            <p className="text-sm text-[#64748B] mb-6">
              Phone: (123) 456-7890 <br />
              Email: info@recipeapp.com
            </p>
            <div className="overflow-hidden rounded-lg aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.020514707128!2d-122.4036988848311!3d37.79238297975548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064e988ebb5%3A0x6a4cb67d2c060eb5!2s123%20Fake%20Street%2C%20San%20Francisco%2C%20CA%2094107%2C%20USA!5e0!3m2!1sen!2s!4v1635684324345!5m2!1sen!2s"
                width="100%"
                height="100%"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border-none"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
