import articleData from "@/components/Articles/articleData";
import ArticleDetails from "@/components/ArticleDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "The Soul as a mathematical equation | A Vision-11 Analysis",
    description: "Could it be that the soul can be quantified as a mathematical equation",
    // other metadata
};

const ArticlePage = () => {
    const data = articleData.find(item=>item.path === "mathematics-and-the-soul")
    return (
            <ArticleDetails article={data} />
    )
}
export default ArticlePage;