import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import us from "./en/translation.json";
import pl from "./pl/translation.json";

export const resources = {
  US: {
    translation: us,
  },
  PL: {
    translation: pl,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: "US",
    resources,
    lng: "US",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
