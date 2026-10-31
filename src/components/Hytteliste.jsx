import Hytte from "./Hytte.jsx";

// Hver hytte vises som et "kort" i Tailwind-grid, som Vareliste i nettbutikken.
const Hytteliste = ({ hytter, favoritter, byttFavoritt }) => (
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {hytter.map((h) => (
      <Hytte key={h.id} hytte={h} erFavoritt={favoritter.includes(h.id)} byttFavoritt={byttFavoritt} />
    ))}
  </div>
);

export default Hytteliste;
