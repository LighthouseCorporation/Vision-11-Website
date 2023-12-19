type Author = {
  name: string;
  image: string;
  designation: string;
};

type ArticleDetails = {
  section1: string,
  section2: string,
  subHeading: string,
  section3: string,
  listItems: string[],
  quote: string,
  closing: string
}

export type ArticleType = {
  id: number;
  title: string;
  paragraph: string;
  image: string;
  image2: string;
  author: Author;
  tags: string[];
  publishDate: string;
  views: string,
  comments: string,
  path: string,
  details: ArticleDetails
} ;
