import { News, Country } from "./../../types/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Args = {
  limit?: number;
  countryCode?: Country["code"];
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://newsapi.org/v2/",
    prepareHeaders(headers) {
      headers.set("x-api-key", import.meta.env.VITE_NEWS_API_KEY);

      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchNews: builder.query<News, Args>({
        query({ limit = 20, countryCode = "US" }) {
          return `/top-headlines?pageSize=${limit}&country=${countryCode}`;
        },
      }),
    };
  },
});

export const { useFetchNewsQuery } = apiSlice;
