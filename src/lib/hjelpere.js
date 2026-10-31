// Hjelpefunksjoner brukt i flere komponenter.
const formatter = new Intl.NumberFormat("NO", { style: "currency", currency: "NOK" });
const visBeløp = (pris) => formatter.format(pris);

// Velger tekst på gjeldende språk fra objekt som { no: "...", en: "..." }
const tekst = (obj, språk) => obj?.[språk] ?? obj?.en ?? "";

export { visBeløp, tekst };
