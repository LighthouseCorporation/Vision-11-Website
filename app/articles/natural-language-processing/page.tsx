import articleData from "@/components/Articles/articleData";
import ArticleDetails from "@/components/ArticleDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Natural Language Processing | A Vision-11 Analysis",
    description: "This analysis aims to prove that there are no coincidences",
    // other metadata
};

const ArticlePage = () => {
    const data = articleData.find(item=>item?.path === "natural-language-processing" )
    return (
            <ArticleDetails article={data} />
    )
}
export default ArticlePage;