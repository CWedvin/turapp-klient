import { useState, useEffect } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import Kart from "../components/Kart.jsx";

const KartSide = () => {
  const { t } = useTranslation();
  const [hytter, setHytter] = useState([]);

  useEffect(() => {
    const hent = async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.BASE_URL}data/hytter.json`);
        setHytter(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    hent();
  }, []);

  return (
    <div className="space-y-4">
      <h1>{t("kart.tittel")}</h1>
      <Kart hytter={hytter} />
    </div>
  );
};

export default KartSide;
