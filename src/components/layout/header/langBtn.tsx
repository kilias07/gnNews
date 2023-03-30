import { useTranslation } from "react-i18next";
import GetCountryFlag from "../../../utils/getCountryFlag";

function LangBtn() {
  const { i18n } = useTranslation();
  const lang = i18n.language as "US" | "PL";

  return (
    <button onClick={() => i18n.changeLanguage(lang === "US" ? "PL" : "US")}>
      <GetCountryFlag code={lang} />
    </button>
  );
}

export default LangBtn;
