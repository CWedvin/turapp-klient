import { useTranslation } from "react-i18next";

const Hjem = () => {
  const { t } = useTranslation();
  return (
    <div className="space-y-4">
      <h1>{t("hjem.tittel")}</h1>
      <p className="bg-green-700 p-4 text-center text-xl text-white">{t("hjem.tekst")}</p>
    </div>
  );
};

export default Hjem;
