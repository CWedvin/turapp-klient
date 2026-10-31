// Samme oppsett som i18n-demo (leksjon 9), men med norsk som standardspråk.
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    lng: "no",
    fallbackLng: "en",
    ns: ["translation"],
    defaultNS: "translation",
    backend: { loadPath: `${import.meta.env.BASE_URL}locales/{{lng}}/{{ns}}.json` },
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  });

export default i18n;
