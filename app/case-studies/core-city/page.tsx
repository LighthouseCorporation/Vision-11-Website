import CaseStudyDetails from "@/components/CaseStudyDetails"
import caseData from "@/components/Articles/caseStudyData";
import { Metadata } from "next";
import { headers } from 'next/headers';

export const metadata: Metadata = {
    title: "Core-City | A Vision-11 Case Study",
    description: "How Vision 11 is transforming the lives of Kenyans",
    // other metadata
};

const CaseStudyPage = () => {
    const data = caseData.find(item=>item.path === "core-city" )
    return (
            <CaseStudyDetails caseStudy={data} />
    )
}
export default CaseStudyPage;