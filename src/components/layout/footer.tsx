import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../app/hooks";

function Timer() {
  const [time, setTime] = useState(new Date());
  const { t } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-xs sm:text-lg basis-1/2 sm:basis-auto sm:w-60 font-semibold text-gray-800 flex gap-2 sm:gap:0 justify-center sm:justify-between items-end">
      <span className="w-fit">{t("footer.time")} </span>
      <span className="text-xl sm:text-4xl font-extralight">
        {time.toLocaleTimeString()}
      </span>
    </div>
  );
}

function Footer() {
  const numOfArticles = useAppSelector((state) => state.articleCounter.value);
  const { t } = useTranslation();
  return (
    <footer className="bg-gray-400 p-4 mt-10 py-6">
      <div className="container mx-auto">
        <div className="mx-auto container flex justify-between">
          <div className="text-xs sm:text-lg font-semibold text-gray-800 basis-1/2">
            <span className="inline-block w-16 sm:w-fit">
              {t("footer.numberOfArticles")}
            </span>
            <span className="text-xl sm:text-4xl font-extralight -ml-2 sm:ml-3">
              {numOfArticles}
            </span>
          </div>
          <Timer />
        </div>
        <p className="text-gray-800 text-center mt-6">© 2023 Developard</p>
      </div>
    </footer>
  );
}

export default Footer;
