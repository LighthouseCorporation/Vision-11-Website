import { CaseStudiesPage } from "@/components/CaseStudies";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Head from 'next/head';
import { useSearchParams } from 'next/navigation';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | How Vision-11 is changing lives",
  description: "Real life case studies of how vision-11 is changing lives",
  // other metadata
};

const CaseStudies = () => {
  
  return (
    <>
      <Breadcrumb
        pageName="Case Studies"
        description="Real Life case studies of how Vision-11 is changing lives"
      />
      <CaseStudiesPage/>
    </>
  );
};

export default CaseStudies;
