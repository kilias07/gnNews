import { Article } from "../../types/types";
interface Props {
  news: Article[];
}

const articleSource = (articleTitle: Article["title"]) => {
  const splitArticle = articleTitle.split(" - ");
  return [splitArticle[0], splitArticle[splitArticle.length - 1]];
};

function noNews() {
  return (
    <div className="mx-6 flex items-center justify-center text-2xl">
      No news
    </div>
  );
}

function List({ news }: Props) {
  if (!news.length) return noNews();

  return (
    <div className="mx-6">
      {news.map((article) => {
        const [title, source] = articleSource(article.title);
        return (
          <div key={article.url}>
            <div className="flex justify-between items-center py-1">
              <span className="basis-8/12 font-medium text-gray-900">
                {title}
              </span>
              <div className="text-right font-medium text-gray-500 text-sm">
                <p>{source}</p>
                {article.publishedAt && (
                  <span className="text-gray-400 text-sm">
                    {new Date(article.publishedAt).toLocaleDateString()}
                  </span>
                )}
              </div>
            </div>
            <hr className="mb-2 relative after:content-[''] after:absolute after:h-full after:w-32 after:bg-red-300 after:right-0" />
          </div>
        );
      })}
    </div>
  );
}

function Cards({ news }: Props) {
  if (!news.length) return noNews();
  return (
    <div className="flex flex-wrap gap-4 mx-6">
      {news.map((article) => {
        const [title, source] = articleSource(article.title);

        return (
          <div
            key={article.url}
            className={`max-w-sm bg-white border border-gray-200 rounded-lg shadow w-[24rem] ${
              article.urlToImage
                ? "h-[36rem] [&>div]:h-[18rem]"
                : "h-[20rem] [&>div]:h-[20rem]"
            }`}
          >
            {article.urlToImage && (
              <img
                className="rounded-t-lg object-cover aspect-[4/3]"
                src={article.urlToImage}
                alt={article.title || "News"}
              />
            )}
            <div className="flex flex-col p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 line-clamp-4">
                  {title}
                </h5>
              </a>
              {article.description && (
                <p className="mb-3 font-normal text-gray-700 line-clamp-2">
                  {article.description}
                </p>
              )}

              <div className="flex-1 flex justify-between items-end">
                <button className="z-0 relative inline-flex px-1 py-1 text-sm font-medium after:hover:skew-bg after:hover:bg-gray-800 after:hover:w-[7rem] hover:text-white focus:ring-2 focus:outline-none focus:ring-black ">
                  Read more
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                <div className="text-right">
                  <p className="italic">{source}</p>
                  {article.publishedAt && (
                    <span className="text-gray-400 text-sm">
                      {new Date(article.publishedAt).toLocaleDateString()}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function News({ news }: { news: Article[] }) {
  return <Cards news={news} />;
}