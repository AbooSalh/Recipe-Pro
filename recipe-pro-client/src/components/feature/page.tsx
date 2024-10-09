import { CheckCircle, Clock, CreditCard, ShieldCheck } from "lucide-react";
import React from "react";


const featureCards = [
  {
    title: "Easy Payment",
    description:
      "We Provide Various Methods For You To Carry Out All Transactions Related To Your Finances",
    icon: CreditCard,
  },
  {
    title: "Safe Transaction",
    description:
      "We have the most up-to-date security to support the security of all our customers in carrying out all transactions.",
    icon: ShieldCheck,
  },
  {
    title: "Fast Customer Service",
    description:
      "Provide Customer Service For Those Of You Who Have Problems 24 Hours A Week",
    icon: Clock,
  },
  {
    title: "Quick Transaction",
    description:
      "We provide faster transaction speeds than competitors, so money arrives and is received faster.",
    icon: CheckCircle,
  },
];

function Features() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 lg:mb-16 flex justify-center items-center flex-col gap-x-0 gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between max-md:max-w-lg max-md:mx-auto">
          <div className="relative w-full text-center lg:text-left lg:w-2/4">
            <h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem] lg:mb-6 mx-auto max-w-max lg:max-w-md lg:mx-0">
              Enjoy the finest features with our products
            </h2>
          </div>
          <div className="relative w-full text-center lg:text-left lg:w-2/4">
            <p className="text-lg font-normal text-gray-500 mb-5">
              We provide all the advantages that can simplify all your financial
              transactions without any further requirements
            </p>
            <a
              href="#"
              className="flex flex-row items-center justify-center gap-2 text-base font-semibold text-indigo-600 lg:justify-start hover:text-indigo-700"
            >
              Button CTA
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
          {featureCards.map((card, index) => (
            <div
              key={index}
              className="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-mainColor"
            >
              <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14">
                <card.icon className="w-8 h-8 text-mainColor group-hover:text-supportColor-dark" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
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
