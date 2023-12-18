import articleData from "@/components/Articles/articleData";
import ArticleDetails from "@/components/ArticleDetails";
import { Metadata } from "next";
import { ArticleType } from "@/types/article";

export const metadata: Metadata = {
    title: "The Role of Intelligent Systems in Process Automation | A Vision-11 Analysis",
    description: "Intelligent Systems play a vital role in process orchestration",
    // other metadata
};

const ArticlePage = () => {
    let data = {} as ArticleType
    const testData = articleData.find(item=>item.path === "intelligent-systems-and-process-orchestration" )
    if (testData){
        data=testData
    }
    return (
            <ArticleDetails article={data} />
    )
}
export default ArticlePage;