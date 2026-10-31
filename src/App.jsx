import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout.jsx";
import Hjem from "./pages/Hjem.jsx";
import Hytter from "./pages/Hytter.jsx";
import HytteDetalj from "./pages/HytteDetalj.jsx";
import Turer from "./pages/Turer.jsx";
import KartSide from "./pages/KartSide.jsx";
import NotFound from "./pages/NotFound.jsx";

const App = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<Hjem />} />
        <Route path="/hytter" element={<Hytter />} />
        <Route path="/hytter/:id" element={<HytteDetalj />} />
        <Route path="/turer" element={<Turer />} />
        <Route path="/kart" element={<KartSide />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  </Router>
);

export default App;
