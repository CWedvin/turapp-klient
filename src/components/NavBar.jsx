import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const { t, i18n } = useTranslation();
  return (
    <nav className="flex flex-wrap items-center justify-between gap-2 p-2">
      <p>
        <Link to="/">{t("nav.hjem")}</Link> &nbsp;&#9734;&nbsp;
        <Link to="/hytter">{t("nav.hytter")}</Link> &nbsp;&#9734;&nbsp;
        <Link to="/turer">{t("nav.turer")}</Link> &nbsp;&#9734;&nbsp;
        <Link to="/kart">{t("nav.kart")}</Link>
      </p>
      <p>
        <button onClick={() => i18n.changeLanguage("no")}>NO</button> /{" "}
        <button onClick={() => i18n.changeLanguage("en")}>EN</button>
      </p>
    </nav>
  );
};

export default NavBar;
