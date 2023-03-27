import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Article, Country } from "../types/types";
import News from "../components/news/news";

export default function CountryPage() {
  let { countryCode } = useParams<{ countryCode: Country["code"] }>();
  const [news, setNews] = useState<Article[]>([]);
  const [isList, setIsList] = useState(false);
  useEffect(() => {
    let isMounted = true;
    if (countryCode === undefined) {
    }
    const getData = async () => {
      const res = await fetch(
        `https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=309e3ec0607e4158a447981244852e63`
      );
      const { articles } = await res.json();
      if (isMounted) {
        setNews(articles);
      }
    };
    getData().catch((err) => console.log(err));
    return () => {
      isMounted = false;
    };
  }, [countryCode]);
  return <News news={news} />;
}
