import { useEffect } from "react";
import { createPortal } from "react-dom";
import { Article } from "../../types/types";

interface NewsModalProps {
  article: Article;
  setOpen: (value: boolean) => void;
}

function NewsModal({ article, setOpen }: NewsModalProps) {
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) =>
      e.key === "Escape" ? handleClose() : null;
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);
  const description = article.content?.replace(/\[[^\]]*\]/g, "");

  return createPortal(
    <>
      <div
        className="backdrop-blur-2xl fixed inset-0 w-screen h-screen"
        onClick={handleClose}
      >
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[60rem] h-[60rem] bg-gray-100 rounded-lg  shadow-md p-16 flex flex-col justify-end">
          <h1 className="text-5xl font-medium">{article.title}</h1>
          <div className="basis-full mt-10 mx-auto w-8/12 flex flex-col">
            {article.urlToImage && (
              <img
                className="aspect-[4/3] object-cover w-full mx-auto"
                src={article.urlToImage}
                alt={article.title}
              />
            )}
            <p className="text-left mt-10 w-full mx-auto">
              {description || article.description}
            </p>
          </div>
          <div className="flex flex-col w-8/12 mx-auto items-end mt-10">
            <a
              className="self-end mb-10 z-0 relative px-1 py-1 text-sm font-medium after:skew-bg after:bg-gray-800 after:w-[6rem] text-white focus:ring-2 focus:outline-none"
              href={article.url}
            >
              Read more
            </a>
            <span>{article.author}</span>
            <span>{article.source.name}</span>

            <span className="text-gray-400 text-xs italic">
              {new Date(article.publishedAt).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal") as HTMLElement
  );
}
export default NewsModal;
