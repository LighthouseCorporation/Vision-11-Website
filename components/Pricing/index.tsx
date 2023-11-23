"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";
import InputForm from "../InputForm";

const Pricing = () => {
  const [detailsVisible, setDetailsVisible] = useState(true);
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Corporate Intelligent Systems"
          paragraph=""
          center
          width="665px"
        />

        {/* Section Toggler */}

        <div className="w-full">
          <div
            className="wow fadeInUp mb-8 flex justify-center md:mb-12 lg:mb-16"
            data-wow-delay=".1s"
          >
            <span
              onClick={() => setDetailsVisible(false)}
              className={`${detailsVisible
                ? "text-dark dark:text-white"
                : "pointer-events-none text-primary"
                } mr-4 cursor-pointer text-base font-semibold`}
            >
              Hide Details
            </span>
            <div
              onClick={() => setDetailsVisible(!detailsVisible)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className={`h-5 w-14 rounded-full ${detailsVisible ? "bg-[#1D7134]" : "bg-[#1D2144]"} shadow-inner`}></div>
                <div
                  className={`${detailsVisible ? "translate-x-full" : ""
                    } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setDetailsVisible(true)}
              className={`${detailsVisible
                ? "pointer-events-none text-primary"
                : "text-dark dark:text-white"
                } ml-4 cursor-pointer text-base font-semibold`}
            >
              See Details
            </span>
          </div>
        </div>

        {/* Service Cards */}

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 my-5 py-5 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Analyze Data"
            price={""}
            duration={""}
            subtitle=""
          >
            {
              detailsVisible && (
                <>
                  <OfferList text="Collect data" status="active" />
                  <OfferList text="Perform inferential analysis" status="active" />
                  <OfferList text="Perform Predictive analysis" status="active" />
                  <OfferList text="Visualize data" status="active" />
                  <OfferList text="Process Natural Language" status="active" />
                </>
              )
            }
          </PricingBox>
          <PricingBox
            packageName="Solve problems"
            price={""}
            duration={""}
            subtitle=""
          >
            {
              detailsVisible && (
                <>
                  <OfferList text="Decision Support" status="active" />
                  <OfferList text="Resource Optimization" status="active" />
                  <OfferList text="Market Research" status="active" />
                  <OfferList text="Regulation Compliance" status="active" />
                  <OfferList text="Workflow Orchestration" status="active" />
                </>
              )
            }
          </PricingBox>
          <PricingBox
            packageName="Automate Processes"
            price={""}
            duration={""}
            subtitle=""
          >
            {
              detailsVisible && (
                <>
                  <OfferList text="Email Management" status="active" />
                  <OfferList text="Data entry" status="active" />
                  <OfferList text="Customer Support" status="active" />
                  <OfferList text="Inventory Management" status="active" />
                  <OfferList text="Appointment Scheduling" status="active" />
                </>
              )
            }
          </PricingBox>
        </div>
        <div className="mb-8 border-b border-body-color border-opacity-10 pb-8 dark:border-white dark:border-opacity-10">
          <h1 className="text-center text-xl font-bold text-dark dark:text-white h-10">And Much More..</h1>
          <button onClick={()=>setModalVisible(true)}
          className="flex w-1/2 mt-5 mx-auto items-center justify-center rounded-sm bg-primary p-3 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
          >
            Build One Today
          </button>
        </div>
        <InputForm modalVisible={modalVisible} setModalVisible={setModalVisible} />
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
