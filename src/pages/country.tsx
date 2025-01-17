import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Country } from "../types/types";
import News from "../components/news/news";
import { useAppDispatch } from "../app/hooks";
import { update } from "../features/counter/counterSlice";
import { useFetchNewsQuery } from "../features/news/newsApiSlice";
import Loader from "../components/loader";

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

  if (!data && !isFetching) {
    return (
      <div className="h-screen w-scren text-center text-3xl mt-20">
        something went wrong
      </div>
    );
  }

  return isFetching ? (
    <Loader />
  ) : (
    <div>
      <News news={data!.articles} />
    </div>
  );
}
