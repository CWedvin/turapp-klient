import { useState, useEffect } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import Hytteliste from "../components/Hytteliste.jsx";
import Innlogging from "../components/Innlogging.jsx";
import Favoritter from "../components/Favoritter.jsx";

// Tilsvarer Butikk.jsx: "hovedkomponenten" med state (useState) og datahenting
// (useEffect + Axios), som sender data og event-funksjoner ned som props.
// Innlogging er falsk, som i nettbutikken (TODO: sjekk mot databasen).

const Hytter = () => {
  const { t } = useTranslation();
  // Bytt til REST API når tjeneren er klar, f.eks. http://localhost:3030/hytter
  const url = `${import.meta.env.BASE_URL}data/hytter.json`;

  const [hytter, setHytter] = useState([]);
  const [innlogget, setInnlogget] = useState(false);
  const [brukernavn, setBrukernavn] = useState("");
  const [passord, setPassord] = useState("");
  const [favoritter, setFavoritter] = useState([]); // liste med hytte-id-er
  const [betjentFilter, setBetjentFilter] = useState("alle");
  const [maksPris, setMaksPris] = useState("");

  useEffect(() => {
    const hentHytter = async () => {
      try {
        const { data } = await axios.get(url);
        setHytter(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    hentHytter();
  }, [url]);

  const lesInndata = (e) =>
    e.target.name === "brukernavn" ? setBrukernavn(e.target.value) : setPassord(e.target.value);

  const sjekkInnlogging = (e) => {
    e.preventDefault();
    setInnlogget(true);
  };

  // Lager en ny liste i stedet for å endre den gamle (som i Butikk.jsx).
  const byttFavoritt = (id) =>
    setFavoritter(favoritter.includes(id) ? favoritter.filter((f) => f !== id) : [...favoritter, id]);

  const synlige = hytter.filter(
    (h) =>
      (betjentFilter === "alle" || (betjentFilter === "betjent") === h.betjent) &&
      (maksPris === "" || h.pris <= Number(maksPris))
  );

  return (
    <div className="space-y-4">
      <h1>{t("hytter.tittel")}</h1>
      {innlogget ? (
        <Favoritter
          brukernavn={brukernavn}
          hytter={hytter.filter((h) => favoritter.includes(h.id))}
          fjern={byttFavoritt}
          loggUt={() => setInnlogget(false)}
        />
      ) : (
        <Innlogging sjekkInnlogging={sjekkInnlogging} lesInndata={lesInndata} />
      )}
      <div className="space-x-2">
        <span>{t("hytter.filter")}:</span>
        <select className="felt" value={betjentFilter} onChange={(e) => setBetjentFilter(e.target.value)}>
          <option value="alle">{t("hytter.alle")}</option>
          <option value="betjent">{t("hytter.betjent")}</option>
          <option value="ubetjent">{t("hytter.ubetjent")}</option>
        </select>
        <input className="felt" type="number" placeholder={t("hytter.maksPris")} value={maksPris}
          onChange={(e) => setMaksPris(e.target.value)} />
      </div>
      <Hytteliste hytter={synlige} favoritter={favoritter} byttFavoritt={innlogget ? byttFavoritt : null} />
    </div>
  );
};

export default Hytter;
