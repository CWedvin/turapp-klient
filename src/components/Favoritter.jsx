import { useTranslation } from "react-i18next";

// Tilsvarer Handlekurv i nettbutikken: viser innholdet i "kurven" (favoritter).
const Favoritter = ({ brukernavn, hytter, fjern, loggUt }) => {
  const { t } = useTranslation();
  return (
    <div className="space-y-2">
      <h2>{t("fav.tittel")} {brukernavn}</h2>
      {hytter.length === 0 && <p>{t("fav.tom")}</p>}
      {hytter.map((h) => (
        <p key={h.id}>
          {h.navn} <button className="knapp" onClick={() => fjern(h.id)}>{t("fav.fjern")}</button>
        </p>
      ))}
      <button className="knapp" onClick={loggUt}>{t("logginn.loggUt")}</button>
    </div>
  );
};

export default Favoritter;
