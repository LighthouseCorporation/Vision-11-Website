import articleData from "@/components/Articles/articleData";
import ArticleDetails from "@/components/ArticleDetails";
import { Metadata } from "next";
import { ArticleType } from "@/types/article";

export const metadata: Metadata = {
    title: "Natural Language Processing | A Vision-11 Analysis",
    description: "This analysis aims to prove that there are no coincidences",
    // other metadata
};

const ArticlePage = () => {
    let data = {} as ArticleType
    const tempData = articleData.find(item=>item?.path === "natural-language-processing" )
    if(tempData){
        data = tempData
    }
    return (
            <ArticleDetails article={data} />
    )
}
export default ArticlePage;