import SectionTitle from "../Common/SectionTitle";
import SingleArticle from "./SingleArticle";
import articleData from "./articleData";

const Blog = () => {
  return (
    <section
      id="blog"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Articles and Papers"
          paragraph="Explore prominent publications in the fields of natural language processing and neuroscience"
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {articleData.map((article) => (
            <div key={article.id} className="w-full">
              <SingleArticle article={article} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;