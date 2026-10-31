import { useTranslation } from "react-i18next";

// Som Innlogging i nettbutikken: event-funksjonene kommer fra mor-komponenten.
const Innlogging = ({ sjekkInnlogging, lesInndata }) => {
  const { t } = useTranslation();
  return (
    <form onSubmit={sjekkInnlogging} className="space-y-2">
      <h2>{t("logginn.tittel")}</h2>
      <p>{t("logginn.info")}</p>
      <input className="felt" name="brukernavn" placeholder={t("logginn.brukernavn")} onChange={lesInndata} />
      &nbsp;
      <input className="felt" type="password" name="passord" placeholder={t("logginn.passord")} onChange={lesInndata} />
      &nbsp;
      <button className="knapp">{t("logginn.knapp")}</button>
    </form>
  );
};

export default Innlogging;
