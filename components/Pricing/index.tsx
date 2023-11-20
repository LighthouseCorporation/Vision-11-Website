"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Enterprise Growth Research"
          paragraph="Research-based Enterprise Solutions for your business"
          center
          width="665px"
        />

        {/* Section Toggler */}

        {/* <div className="w-full">
          <div
            className="wow fadeInUp mb-8 flex justify-center md:mb-12 lg:mb-16"
            data-wow-delay=".1s"
          >
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? "pointer-events-none text-primary"
                  : "text-dark dark:text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              Monthly
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${
                isMonthly
                  ? "text-dark dark:text-white"
                  : "pointer-events-none text-primary"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              Yearly
            </span>
          </div>
        </div> */}

        {/* Service Cards */}

        {/* <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Lite"
            price={isMonthly ? "Operations Consulting" : "1.9M"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Optimize operations towards business goals"
          >
            <OfferList text="Business Modeling" status="active" />
            <OfferList text="Iterative Solutions" status="active" />
            <OfferList text="Execution Support" status="active" />
            <OfferList text="Access to research methodologies" status="active" />
            <OfferList text="Data Analytics" status="active" />
            <OfferList text="Admin Voice Assistant" status="inactive" />
            <OfferList text="Client Voice Assistant" status="inactive" />
          </PricingBox>
          <PricingBox
            packageName="Basic"
            price={isMonthly ? "Process Orchestration" : "5.6M"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Streamline business processes"
          >
            <OfferList text="Business Modeling" status="active" />
            <OfferList text="Iterative Solutions" status="active" />
            <OfferList text="ERM Software" status="active" />
            <OfferList text="Access to research methodologies" status="active" />
            <OfferList text="Data Analytics" status="active" />
            <OfferList text="Admin Voice Assistant" status="active" />
            <OfferList text="Client Voice Assistant" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Plus"
            price={isMonthly ? "Intelligent Systems" : "13.2M"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Intelligent Systems for your business"
          >
            <OfferList text="Business Modeling" status="active" />
            <OfferList text="Iterative Solutions" status="active" />
            <OfferList text="Execution Support" status="active" />
            <OfferList text="Access to research methodologies" status="inactive" />
            <OfferList text="Data Analytics" status="active" />
            <OfferList text="Admin Voice Assistant" status="active" />
            <OfferList text="Client Voice Assistant" status="active" />
          </PricingBox>
        </div> */}

        {/* Additional Paragraph */}

        <p className="pb-4 mb-5"> Growth is eternal, and businesses more than ever, are required to match the rate of technological and scientific advancements,
          with their rate of growth. With this, arises the need for research prowess, to not only ensure the companys processes
          are up to date, but that they align with their desired rate of growth. Vision 11 is your trusted partner in growth research.
        </p>
        {/* Service Cards */}

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 mt-5 pt-5 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Lite"
            price={isMonthly ? "Small Enterprises" : "1.9M"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Ksh 50,000"
          >
            <OfferList text="Business Modeling" status="active" />
            <OfferList text="Iterative Solutions" status="active" />
            <OfferList text="Execution Support" status="active" />
            <OfferList text="Access to research methodologies" status="active" />
            <OfferList text="Data Analytics" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Basic"
            price={isMonthly ? "Medium Enterprises" : "5.6M"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Ksh 200,000"
          >
            <OfferList text="Business Modeling" status="active" />
            <OfferList text="Iterative Solutions" status="active" />
            <OfferList text="Execution Support" status="active" />
            <OfferList text="Access to research methodologies" status="active" />
            <OfferList text="Data Analytics" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Plus"
            price={isMonthly ? "Large Enterprises" : "13.2M"}
            duration={isMonthly ? "mo" : "yr"}
            subtitle="Ksh 800,000"
          >
            <OfferList text="Business Modeling" status="active" />
            <OfferList text="Iterative Solutions" status="active" />
            <OfferList text="Execution Support" status="active" />
            <OfferList text="Access to research methodologies" status="active" />
            <OfferList text="Data Analytics" status="active" />
          </PricingBox>
        </div>
        <div className="flex flex-col text-center mx-auto my-5">
          <p>NB: The prices stated above are not rigid and may be adjusted according to specific use cases</p>
          <h1 className="font-bold mt-5">The Research will answer the following questions;</h1>
          <ul className="flex flex-col mx-auto my-5 align-center">
            <li className="py-2">Is your enterprise leveraging data to the fullest?</li>
            <li className="py-2">Are there processes that can be automated?</li>
            <li className="py-2">Can we improve product-market fit?</li>
            <li className="py-2">Can we build custom Intelligent Systems for your enterprise?</li>
            <li className="py-2">Are there new workflows that can increase sales?</li>
            <li className="py-2">To what degree would this modifications enhance your enterprise?</li>
          </ul>
        </div>
        <button className="flex mx-auto mt-5 shadow-submit align-center dark:shadow-submit-dark rounded-sm bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90">
          Schedule Free Consultation Call
        </button>
      </div>
      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;
