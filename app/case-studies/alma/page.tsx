import CaseStudyDetails from "@/components/CaseStudyDetails"
import caseData from "@/components/Articles/caseStudyData";
import { Metadata } from "next";
import { headers } from 'next/headers';

export const metadata: Metadata = {
    title: "Alma Corporation | A Product of Vision-11",
    description: "The Only tool you need to thrive in the online marketplace",
    // other metadata
};

const CaseStudyPage = () => {
    const data = caseData.find(item=>item.path === "alma" )
    return (
            <CaseStudyDetails caseStudy={data} />
    )
}
export default CaseStudyPage;