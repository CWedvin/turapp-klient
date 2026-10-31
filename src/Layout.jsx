import { useTranslation } from "react-i18next";
import NavBar from "./components/NavBar.jsx";

const Layout = ({ children }) => {
  const { t } = useTranslation();
  return (
    <>
      {/* Krav i prosjektoppgaven: banner som viser at dette er en studentoppgave */}
      <div className="bg-red-700 p-1 text-center text-white">{t("banner")}</div>
      <NavBar />
      <main className="mx-auto max-w-5xl p-4">{children}</main>
      <footer className="p-4 text-center">{t("footer")}</footer>
    </>
  );
};

export default Layout;
