import articleData from "@/components/Articles/articleData";
import ArticleDetails from "@/components/ArticleDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "The Origin of the Universe | A Vision-11 Thought Experiment",
    description: "A thought experiment into the origin of the universe",
    // other metadata
};

const ArticlePage = () => {
    const data = articleData.find(item=>item.path === "origin-of-the-universe" )
    return (
            <ArticleDetails article={data} />
    )
}
export default ArticlePage;