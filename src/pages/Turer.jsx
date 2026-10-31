import { useState, useEffect } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

const Turer = () => {
  const { t } = useTranslation();
  const [turer, setTurer] = useState([]);
  const [type, setType] = useState("alle");

  useEffect(() => {
    const hent = async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.BASE_URL}data/turer.json`);
        setTurer(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    hent();
  }, []);

  const synlige = turer.filter((tur) => type === "alle" || tur.type === type);

  return (
    <div className="space-y-4">
      <h1>{t("turer.tittel")}</h1>
      <select className="felt" value={type} onChange={(e) => setType(e.target.value)}>
        <option value="alle">{t("hytter.alle")}</option>
        <option value="fottur">fottur</option>
        <option value="skitur">skitur</option>
      </select>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {synlige.map((tur) => (
          <div key={tur.id} className="boks">
            <h3>{tur.navn}</h3>
            <p>{t("turer.type")}: {tur.type} · {t("turer.vanskelighet")}: {tur.vanskelighet}</p>
            <p>{tur.dager} {t("turer.dager")} · {tur.fleksibel ? t("turer.fleksibel") : t("turer.fast")}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Turer;
