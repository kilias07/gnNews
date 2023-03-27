import { allCountries } from "../components/layout/Sidebar/allCaountries";
export interface Country {
  name: typeof allCountries[number]["name"];
  code: typeof allCountries[number]["code"];
}

export interface News {
  articles: Article[];
  status: string;
  totalResults: number;
}

export interface Article {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: Source;
  title: string;
  url: string;
  urlToImage: string;
}
export interface Source {
  id: string | null;
  name: string;
}
