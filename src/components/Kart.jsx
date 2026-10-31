import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import "leaflet/dist/leaflet.css";

// Samme oppsett som react-leaflet-demoen i leksjon 9.
const Kart = ({ hytter }) => (
  <MapContainer center={[61.2, 8.5]} zoom={7} style={{ height: "70vh", width: "100%" }}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {hytter.map((h) => (
      <Marker key={h.id} position={[h.lat, h.lng]}>
        <Popup><Link to={`/hytter/${h.id}`}>{h.navn}</Link></Popup>
      </Marker>
    ))}
  </MapContainer>
);

export default Kart;
