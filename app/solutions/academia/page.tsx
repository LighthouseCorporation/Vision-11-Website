import CaseStudyDetails from "@/components/CaseStudyDetails"
import caseData from "@/components/Articles/programData";
import { Metadata } from "next";
import { headers } from 'next/headers';

export const metadata: Metadata = {
    title: "Academia Plus | A Vision-11 Case Study",
    description: "Improving the economy of Kenya with education and guided innovation",
    // other metadata
};

const CaseStudyPage = () => {
    const data = caseData.find(item=>item?.path === "academia" )
    return (
            <CaseStudyDetails caseStudy={data} />
    )
}
export default CaseStudyPage;