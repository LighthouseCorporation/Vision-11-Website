import CaseStudyDetails from "@/components/CaseStudyDetails"
import caseData from "@/components/Articles/programData";
import { Metadata } from "next";
import { headers } from 'next/headers';

export const metadata: Metadata = {
    title: "Virtual Friends",
    description: "Pushing the boundaries of human-machine interaction",
    // other metadata
};

const CaseStudyPage = () => {
    const data = caseData.find(item=>item?.path === "virtual-friends")
    return (
            <CaseStudyDetails caseStudy={data} />
    )
}
export default CaseStudyPage;