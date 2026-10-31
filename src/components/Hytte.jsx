import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { visBeløp } from "../lib/hjelpere.js";

const Hytte = ({ hytte, erFavoritt, byttFavoritt }) => {
  const { t } = useTranslation();
  return (
    <div className="boks">
      <h3><Link to={`/hytter/${hytte.id}`}>{hytte.navn}</Link></h3>
      <p>{hytte.region}</p>
      <p>{hytte.betjent ? t("hytter.betjent") : t("hytter.ubetjent")} · {t("hytter.fra")} {visBeløp(hytte.pris)}</p>
      {byttFavoritt && (
        <button className="knapp" onClick={() => byttFavoritt(hytte.id)}>
          {erFavoritt ? t("fav.fjern") : t("fav.legg")}
        </button>
      )}
    </div>
  );
};

export default Hytte;
