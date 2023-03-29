import { useEffect, useState } from "react";
import { useAppSelector } from "../../app/hooks";

function Timer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-lg w-60 font-semibold text-gray-800 flex justify-between items-end">
      <span className="w-12">time: </span>
      <span className="text-4xl font-extralight">
        {time.toLocaleTimeString()}
      </span>
    </div>
  );
}

function Footer() {
  const numOfArticles = useAppSelector((state) => state.articleCounter.value);

  return (
    <footer className="bg-gray-400 p-4 mt-10 py-6">
      <div className="container mx-auto">
        <div className="mx-auto container flex justify-between">
          <div className="text-lg font-semibold text-gray-800">
            <span>number of articles: </span>
            <span className="text-4xl font-extralight">{numOfArticles}</span>
          </div>
          <Timer />
        </div>
        <p className="text-gray-800 text-center">© 2023 Developard</p>
      </div>
    </footer>
  );
}

export default Footer;
