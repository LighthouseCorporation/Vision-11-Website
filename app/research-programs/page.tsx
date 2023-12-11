import { CaseStudiesPage } from "@/components/CaseStudies";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research Programs | The future of humanity in data analysis",
  description: "Applied Data Analysis for growth and abundance",
  // other metadata
};

const CaseStudies = () => {
  
  return (
    <>
      <Breadcrumb
        pageName="Research Programs"
        description="Applied Data Analysis for growth and abundance"
      />
      <CaseStudiesPage/>
    </>
  );
};

export default CaseStudies;
