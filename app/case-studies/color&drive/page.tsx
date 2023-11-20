import CaseStudyDetails from "@/components/CaseStudyDetails"
import caseData from "@/components/Articles/caseStudyData";
import { Metadata } from "next";
import { headers } from 'next/headers';

export const metadata: Metadata = {
    title: "Color & Drive | A Vision-11 Case Study",
    description: "Improving the state of vehicles in Kenya by leveraging research",
    // other metadata
};

const CaseStudyPage = () => {
    const data = caseData.find(item=>item.path === "color&drive" )
    return (
            <CaseStudyDetails caseStudy={data} />
    )
}
export default CaseStudyPage;