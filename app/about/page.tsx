import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import SectionTitle from "@/components/Common/SectionTitle";

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vision-11 Research for Growth",
  description: "Vision-11 is the leading provider of Business Growth Research and Process Orchestration Services",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="What we do"
        description={
          "We answer the questions -- How can my company grow? -- How can humanity grow?"
        }
      />
      <div className="container my-5 py-5">
        <h1 className="mb-4 text-4xl font-bold !leading-tight text-black dark:text-white sm:text-1xl md:text-[30px]">
          In what way?
        </h1>
        <ol className="my-5 py-5">
          <li className="text-base !leading-relaxed text-body-color md:text-lg">1. Enterprise Growth Research</li>
          <li className="text-base !leading-relaxed text-body-color md:text-lg">2. Process Orchestration</li>
          <li className="text-base !leading-relaxed text-body-color md:text-lg">3. Research For Humanity</li>
        </ol>
        <h1 className="my-5 py-5  text-1xl font-bold !leading-tight text-black dark:text-white sm:text-1xl md:text-[30px]">
          Expertise
        </h1>
        <p className="text-base text-body-color md:text-lg">
          Our areas of expertise include; </p>
        <ul className=" py-5">
          <li className="py-2 text-base !leading-relaxed text-body-color md:text-lg">Process Modeling</li>
          <li className="py-2 text-base !leading-relaxed text-body-color md:text-lg">Data Analytics</li>
          <li className="py-2 text-base !leading-relaxed text-body-color md:text-lg">Predictive Modeling</li>
          <li className="py-2 text-base !leading-relaxed text-body-color md:text-lg">Intelligent Systems</li>
          <li className="py-2 text-base !leading-relaxed text-body-color md:text-lg">Process Automation</li>
          <li className="py-2 text-base !leading-relaxed text-body-color md:text-lg">Process Orchestration</li>
        </ul>
        <h1 className="my-4 text-1xl font-bold !leading-tight text-black dark:text-white sm:text-1xl md:text-[30px]">
          Enterprise Growth Research
        </h1>
        <p className="text-base text-body-color md:text-lg">
          Enterprise Growth Research is a service put together for enterprises that seek to leverage
          our methodologies to grow and adapt with the ever changing landscape. </p>
        <p className="text-base mt-5 !leading-relaxed text-body-color md:text-lg">It is an Enterprise growth solution where companies work with Vision-11 to answer the following questions;</p>
        <ul className="my-5 py-5">
          <li className="py-2 text-base !leading-relaxed text-body-color md:text-lg">
            How best can we optimize our business processes?
          </li>
          <li className="py-2 text-base !leading-relaxed text-body-color md:text-lg">Are we leveraging data to the fullest?</li>
          <li className="py-2 text-base !leading-relaxed text-body-color md:text-lg">Are there processes that can be automated?</li>
          <li className="py-2 text-base !leading-relaxed text-body-color md:text-lg">Can we improve product-market fit?</li>
          <li className="py-2 text-base !leading-relaxed text-body-color md:text-lg">Can we build custom Intelligent Systems for your enterprise?</li>
          <li className="py-2 text-base !leading-relaxed text-body-color md:text-lg">Are there new workflows that can increase sales?</li>
          <li className="py-2 text-base !leading-relaxed text-body-color md:text-lg">To what degree would this modifications enhance your enterprise?</li>
        </ul>
        <h1 className="my-4 text-1xl font-bold !leading-tight text-black dark:text-white sm:text-1xl md:text-[30px]">
          Process Orchestration
        </h1>
        <p className="text-base text-body-color md:text-lg">
          Process orchestration refers to tuning business processes so that they work harmoniously towards a common goal</p>
        <p className="text-base my-5 text-body-color md:text-lg">
          This service is only available, as an execution support program, to clients who have undertaken the Enterprise Growth Research.</p>
        <p className="text-base my-5 text-body-color md:text-lg">
          The process of Orchestration is a simple yet powerful one</p>
        <p className="text-base mt-5 text-body-color md:text-lg">
          It involves;</p>
        <ol className="py-5">
          <li className="pb-2 text-base !leading-relaxed text-body-color md:text-lg">1. Modeling</li>
          <li className="py-2 text-base !leading-relaxed text-body-color md:text-lg">2. Automation</li>
          <li className="py-2 text-base !leading-relaxed text-body-color md:text-lg">3. Monitoring</li>
          <li className="py-2 text-base !leading-relaxed text-body-color md:text-lg">4. Optimization</li>
        </ol>
        <Link href={"/#about"} className="text-purple-400">Learn more here</Link>
        <h1 className="my-5 py-5 text-1xl font-bold !leading-tight text-black dark:text-white sm:text-1xl md:text-[30px]">
          Research For Humanity
        </h1>
        <p className="text-base mb-5 pb-5 !leading-relaxed text-body-color md:text-lg">
          This is research aimed purely at advancing humanity in general. It is held at the institution and serves the enterprise that is humanity. it includes, but is not limited to;
          <ul className="my-5 py-5">
            <li className="py-2 text-base !leading-relaxed text-body-color md:text-lg">Stem Cell Research</li>
            <li className="py-2 text-base !leading-relaxed text-body-color md:text-lg">Brain Computer Interfaces</li>
            <li className="py-2 text-base !leading-relaxed text-body-color md:text-lg">Mathematical Modeling and Simulation</li>
            <li className="py-2 text-base !leading-relaxed text-body-color md:text-lg">Cognitive Information Processing</li>
          </ul>
        </p>
      </div>
    </>
  );
};

export default AboutPage;
