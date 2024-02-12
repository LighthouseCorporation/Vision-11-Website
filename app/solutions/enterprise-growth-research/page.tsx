import CaseStudyDetails from "@/components/CaseStudyDetails"
import caseData from "@/components/Articles/programData";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Enterprise Growth Research",
    description: "Discover Ultimate Solutions For Your Business | Vision 11",
    // other metadata
};

const CaseStudyPage = () => {
    const data = caseData.find(item=>item?.path === "enterprise-growth-research" )
    return (
            <CaseStudyDetails caseStudy={data} />
    )
}
export default CaseStudyPage;