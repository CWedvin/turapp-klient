import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { visBeløp, tekst } from "../lib/hjelpere.js";

const HytteDetalj = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const [hytte, setHytte] = useState(null);
  const [ferdig, setFerdig] = useState(false);

  useEffect(() => {
    const hent = async () => {
      try {
        // Med REST API: axios.get(`http://localhost:3030/hytter/${id}`)
        const { data } = await axios.get(`${import.meta.env.BASE_URL}data/hytter.json`);
        setHytte(data.find((h) => h.id === Number(id)) ?? null);
      } catch (error) {
        console.error(error.message);
      }
      setFerdig(true);
    };
    hent();
  }, [id]);

  if (!ferdig) return null;
  if (!hytte) return <p>{t("hytter.ikkeFunnet")}. <Link to="/hytter">{t("hytter.tilbake")}</Link></p>;

  return (
    <div className="space-y-2">
      <Link to="/hytter">← {t("hytter.tilbake")}</Link>
      <h1>{hytte.navn}</h1>
      <p>{t("hytter.region")}: {hytte.region}</p>
      <p>{hytte.betjent ? t("hytter.betjent") : t("hytter.ubetjent")}</p>
      <p>{t("hytter.pris")}: {visBeløp(hytte.pris)}</p>
      <p>{t("hytter.senger")}: {hytte.senger}</p>
      <p>{tekst(hytte.beskrivelse, i18n.language)}</p>
    </div>
  );
};

export default HytteDetalj;
