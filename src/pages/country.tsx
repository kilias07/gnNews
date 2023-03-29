import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Country } from "../types/types";
import News from "../components/news/news";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { update } from "../features/counter/counterSlice";
import { useFetchNewsQuery } from "../features/news/newsApiSlice";

export default function CountryPage() {
  let { countryCode } = useParams<{ countryCode: Country["code"] }>();

  const dispatch = useAppDispatch();
  const { data, isFetching } = useFetchNewsQuery({
    limit: 100,
    countryCode,
  });

  useEffect(() => {
    if (data) {
      dispatch(update(data.articles.length));
    }
  }, [data]);

  return isFetching ? (
    <div>Loading...</div>
  ) : (
    <div>
      <News news={data!.articles} />
    </div>
  );
}
