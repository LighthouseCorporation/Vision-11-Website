import CaseStudyDetails from "@/components/CaseStudyDetails"
import caseData from "@/components/Articles/programData";
import { Metadata } from "next";
import { headers } from 'next/headers';

export const metadata: Metadata = {
    title: "Corporate Assistants",
    description: "Pushing the boundaries of human-machine interaction",
    // other metadata
};

const CaseStudyPage = () => {
    const data = caseData.find(item=>item?.path === "corporate-assistants" )
    return (
            <CaseStudyDetails caseStudy={data} />
    )
}
export default CaseStudyPage;