import { featureCards } from "@/utils/placeholders";
import React from "react";

function Features() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 lg:mb-16 flex justify-center items-center flex-col gap-x-0 gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between max-md:max-w-lg max-md:mx-auto">
          <div className="relative w-full text-center lg:text-left lg:w-2/4">
            <h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem] lg:mb-6 mx-auto max-w-max lg:max-w-md lg:mx-0">
              Discover Amazing Recipes, Crafted by Experts
            </h2>
          </div>
          <div className="relative w-full text-center lg:text-left lg:w-2/4">
            <p className="text-lg font-normal text-gray-500 mb-5">
              Explore a wide range of free recipes or upgrade to access
              personalized, chef-crafted recipes tailored just for you.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-start gap-6 lg:gap-8">
          {featureCards.map((card, index) => (
            <div
              key={index}
              className="group relative w-full max-w-sm min-h-60 bg-gray-100 rounded-2xl p-6 transition-all duration-500 md:w-1/2 lg:w-1/4 hover:bg-mainColor flex-grow"
            >
              <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 mx-auto">
                <card.icon className="w-8 h-8 text-mainColor group-hover:text-supportColor-dark" />
              </div>
              <h4 className="text-xl text-center font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
                {card.title}
              </h4>
              <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
