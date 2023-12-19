import CaseStudyDetails from "@/components/CaseStudyDetails"
import programData from "@/components/Articles/programData";
import { Metadata } from "next";
import { headers } from 'next/headers';

export const metadata: Metadata = {
    title: "Bio-Engineering | The Future of Human Capabilities",
    description: "How we can use DNA to become super-humans ",
    // other metadata
};

const CaseStudyPage = () => {
    const data = programData.find(item=>item?.path === "bio-engineering" )
    return (
            <CaseStudyDetails caseStudy={data} />
    )
}
export default CaseStudyPage;