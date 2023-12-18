import CaseStudyDetails from "@/components/CaseStudyDetails"
import caseData from "@/components/Articles/programData";
import { Metadata } from "next";
import { headers } from 'next/headers';

export const metadata: Metadata = {
    title: "Intelligent Ecommerce | Doing business the intelligent way",
    description: "Corporate Assistants, Automated Data Analysis, Problem Solving",
    // other metadata
};

const CaseStudyPage = () => {
    const data = caseData.find(item=>item.path === "intelligent-ecommerce" )
    return (
            <CaseStudyDetails caseStudy={data} />
    )
}
export default CaseStudyPage;