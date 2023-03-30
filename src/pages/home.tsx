import { useTranslation } from "react-i18next";

export default function HomePage() {
  const { t } = useTranslation();
  return (
    <div className="text-gray-800 mb-32 mx-auto h-screen w-fit pl-14">
      <h1 className="text-4xl sm:text-6xl">{t("mainSite.title")}</h1>
      <p className="text-xl sm:text-2xl my-10 max-w-[40rem]">
        {t("mainSite.description")}
      </p>
      <span className="italic text-gray-500">Kamil Kiliasiński</span>
    </div>
  );
}
