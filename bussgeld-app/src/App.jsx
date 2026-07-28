import React, { useMemo, useState } from "react";
import "./App.css";

export default function App() {

  const delikte = [


// =============================
// STVO - Straßenverkehrsordnung
// =============================

    {
       kategorie: "STVO §1 - Fahrerlaubnis",
  paragraph: "§1 Abs. 2",
  bussgeld: 10000,
  haft: 0,
  punkte: 5,
  delikt: "Fahren ohne gültige Fahrerlaubnis",
  beschlagnahmung: "Fahrzeug beschlagnahmen",
  notiz: "Akteneintrag = +5 Verkehrspunkte"
      
    },
    {
  kategorie: "STVO §1 - Fahrerlaubnis",
  paragraph: "§1 Abs. 2",
  bussgeld: 25000,
  haft: 10,
  punkte: 5,
  delikt: "Wiederholtes Fahren ohne gültige Fahrerlaubnis",
  beschlagnahmung: "Führerschein und Fahrzeug beschlagnahmen",
  notiz: "Akteneintrag = +5 Verkehrspunkte"
},

{
  kategorie: "STVO §1 - Straßenverkehr",
  paragraph: "§1 Abs. 3",
  bussgeld: 15000,
  haft: 0,
  punkte: 8,
  delikt: "Lärmbelästigung",
  beschlagnahmung: "Verwarnung",
  notiz: "Akteneintrag = +8 Verkehrspunkte"
},

    {
      kategorie: "STVO §1 - Straßenverkehr",
      paragraph: "§1 Abs. 4",
      bussgeld: 20000,
      haft: 0,
      punkte: 4,
      delikt: "Rammen von Beamtenfahrzeugen",
      beschlagnahmung: "Fahrzeug",
      notiz: "+4 Punkte"
    },

    {
      kategorie: "STVO §1 - Straßenverkehr",
      paragraph: "§2 Abs. 1",
      bussgeld: 5000,
      haft: 0,
      punkte: 4,
      delikt: "Fahren mit einem leicht beschädigten Fahrzeug",
      beschlagnahmung: "Verwarnung",
      notiz: "+4 Punkte"
    },

    {
      kategorie: "STVO §1 - Straßenverkehr",
      paragraph: "§2 Abs. 2",
      bussgeld: 10000,
      haft: 0,
      punkte: 4,
      delikt: "Fahren mit einem schwer beschädigten Fahrzeug",
      beschlagnahmung: "Verwarnung",
      notiz: "+4 Punkte"
    },

    {
  kategorie: "STVO §2 - Straßenverkehr",
  paragraph: "§2 Abs. 3",
  bussgeld: 15000,
  haft: 0,
  punkte: 3,
  delikt: "Fahren entgegen der Fahrtrichtung",
  beschlagnahmung: "Fahrzeug",
  notiz: "Akteneintrag = +3 Verkehrspunkte"
},

    {
      kategorie: "STVO §2 - Straßenverkehr",
      paragraph: "§2 Abs. 4",
      bussgeld: 30000,
      haft: 0,
      punkte: 4,
      delikt: "Falschparken",
      beschlagnahmung: "Fahrzeug",
      notiz: "+4 Punkte"
    },

{
  kategorie: "STVO §2 - Straßenverkehr",
  paragraph: "§2 Abs. 5",
  bussgeld: 25000,
  haft: 0,
  punkte: 5,
  delikt: "Behinderung des Straßenverkehrs (Errichten von Blockaden)",
  beschlagnahmung: "//",
  notiz: "Akteneintrag = +5 Verkehrspunkte"
},

// =============================
// BtMG - Betäubungsmittelgesetz
// =============================

{
  kategorie: "BtMG - Drogenbesitz",
  paragraph: "§1 Abs. 1 BtMG",
  bussgeld: 25000,
  haft: 15,
  delikt: "Herstellung von Betäubungsmitteln",
  beschlagnahmung: "Tascheninhalt + Fahrzeuginhalt",
  notiz: "Akteneintrag"
},

{
  kategorie: "BtMG - Drogenbesitz",
  paragraph: "§1 Abs. 2 BtMG",
  bussgeld: 25000,
  haft: 15,
  delikt: "Transport von Betäubungsmitteln",
  beschlagnahmung: "Fahrzeug + Tascheninhalt",
  notiz: "Akteneintrag"
},

{
  kategorie: "BtMG - Drogenbesitz",
  paragraph: "§1 Abs. 3 BtMG",
  bussgeld: 35000,
  haft: 20,
  delikt: "Drogenbesitz an der Person",
  beschlagnahmung: "Rucksack + Inhalt",
  notiz: "Bis 10 eigenbedarf; Akteneintrag"
},

{
  kategorie: "BtMG - Drogenbesitz",
  paragraph: "§1 Abs. 4 BtMG",
  bussgeld: 10000,
  haft: 0,
  delikt: "Konsum von Betäubungsmitteln",
  beschlagnahmung: "Rucksack + Inhalt",
  notiz: "Akteneintrag"
},

// =========================
// WG - Waffengesetz
// =========================

{
  kategorie: "WG - Waffengesetz",
  paragraph: "§1 Abs. 1 WG",
  bussgeld: 15000,
  haft: 20,
  delikt: "Besitz einer illegalen Kurzwaffe",
  beschlagnahmung: "Alle illegalen Gegenstände konfiszieren + Waffen + Handy etc",
  notiz: "Akteneintrag"
},

{
  kategorie: "WG - Waffengesetz",
  paragraph: "§1 Abs. 2 WG",
  bussgeld: 200000,
  haft: 100,
  delikt: "Besitz/Benutzung einer illegalen Kriegswaffe",
  beschlagnahmung: "Alle illegalen Gegenstände konfiszieren + Waffen + Handy etc",
  notiz: "Akteneintrag"
},

{
  kategorie: "WG - Waffengesetz",
  paragraph: "§1 Abs. 3 WG",
  bussgeld: 15000,
  haft: 15,
  delikt: "Führen einer Waffe ohne Lizenz",
  beschlagnahmung: "Waffe konfiszieren",
  notiz: "Akteneintrag"
},

{
  kategorie: "WG - Waffengesetz",
  paragraph: "§1 Abs. 4 WG",
  bussgeld: 10000,
  haft: 15,
  delikt: "Besitz von illegalen Waffenherstellungsteilen",
  beschlagnahmung: "Waffenherstellungsteile konfiszieren + Waffen + Handy etc",
  notiz: "Akteneintrag"
},

{
  kategorie: "WG - Waffengesetz",
  paragraph: "§2 Abs. 1 WG",
  bussgeld: 25000,
  haft: 20,
  delikt: "Missbrauch einer illegalen Kurzwaffe",
  beschlagnahmung: "Waffenschein entziehen",
  notiz: "Akteneintrag"
},

{
  kategorie: "WG - Waffengesetz",
  paragraph: "§2 Abs. 2 WG",
  bussgeld: 15000,
  haft: 15,
  delikt: "Missbrauch einer Waffe ohne Lizenz",
  beschlagnahmung: "Waffenschein entziehen",
  notiz: "Akteneintrag"
},

{
  kategorie: "WG - Waffengesetz",
  paragraph: "§1 Abs. 3 WG",
  bussgeld: 15000,
  haft: 15,
  delikt: "Missbrauch einer Waffe für illegale Zwecke",
  beschlagnahmung: "Waffenschein entziehen",
  notiz: "Akteneintrag"
},

{
  kategorie: "WG - Waffengesetz",
  paragraph: "§2 Abs. 4 WG",
  bussgeld: 50000,
  haft: 50,
  delikt: "Illegaler Waffenhandel aktiv betreiben (Verkaufen)",
  beschlagnahmung: "Alle illegalen Gegenstände konfiszieren + Waffen + Handy etc",
  notiz: "Akteneintrag"
},

// =========================
// StGB §1-3 - Körperliche Integrität
// =========================

{
  kategorie: "StGB §1 - Körperliche Integrität",
  paragraph: "§1 Abs. 1 StGB",
  bussgeld: 10000,
  haft: 10,
  delikt: "Körperverletzung",
  beschlagnahmung: "//",
  notiz: "Akteneintrag"
},

{
  kategorie: "StGB §1 - Körperliche Integrität",
  paragraph: "§1 Abs. 2 StGB",
  bussgeld: 15000,
  haft: 15,
  delikt: "Gefährliche Körperverletzung",
  beschlagnahmung: "Alle illegalen Gegenstände konfiszieren + Waffen + Handy etc",
  notiz: "Akteneintrag"
},

{
  kategorie: "StGB §1 - Körperliche Integrität",
  paragraph: "§1 Abs. 3 StGB",
  bussgeld: 20000,
  haft: 20,
  delikt: "Schwere Körperverletzung",
  beschlagnahmung: "Alle illegalen Gegenstände konfiszieren + Waffen + Handy etc",
  notiz: "Akteneintrag"
},

{
  kategorie: "StGB §2 - Körperliche Integrität",
  paragraph: "§2 Abs. 1 StGB",
  bussgeld: 10000,
  haft: 5,
  delikt: "Beleidigung",
  beschlagnahmung: "//",
  notiz: "Akteneintrag"
},

{
  kategorie: "StGB §2 - Körperliche Integrität",
  paragraph: "§2 Abs. 2 StGB",
  bussgeld: 10000,
  haft: 20,
  delikt: "Üble Nachrede",
  beschlagnahmung: "//",
  notiz: "Akteneintrag"
},

{
  kategorie: "StGB §2 - Körperliche Integrität",
  paragraph: "§2 Abs. 3 StGB",
  bussgeld: 30000,
  haft: 30,
  delikt: "Freiheitsberaubung",
  beschlagnahmung: "Alle illegalen Gegenstände konfiszieren + Waffen + Handy etc",
  notiz: "Akteneintrag"
},

{
  kategorie: "StGB §2 - Körperliche Integrität",
  paragraph: "§2 Abs. 4 StGB",
  bussgeld: 60000,
  haft: 60,
  delikt: "Geiselnahme",
  beschlagnahmung: "Alle illegalen Gegenstände konfiszieren + Waffen + Handy etc",
  notiz: "Akteneintrag"
},

{
  kategorie: "StGB §2 - Körperliche Integrität",
  paragraph: "§2 Abs. 5 StGB",
  bussgeld: 10000,
  haft: 10,
  delikt: "Erpressung",
  beschlagnahmung: "Alle illegalen Gegenstände konfiszieren + Waffen + Handy etc",
  notiz: "Akteneintrag"
},

{
  kategorie: "StGB §2 - Körperliche Integrität",
  paragraph: "§2 Abs. 6 StGB",
  bussgeld: 15000,
  haft: 10,
  delikt: "Drohung",
  beschlagnahmung: "Alle illegalen Gegenstände konfiszieren + Waffen + Handy etc",
  notiz: "Akteneintrag"
},

{
  kategorie: "StGB §3 - Körperliche Integrität",
  paragraph: "§3 Abs. 11 StGB",
  bussgeld: 20000,
  haft: 15,
  delikt: "Belästigung",
  beschlagnahmung: "Alle illegalen Gegenstände konfiszieren + Waffen + Handy etc",
  notiz: "Akteneintrag"
},

{
  kategorie: "StGB §3 - Körperliche Integrität",
  paragraph: "§3 Abs. 12 StGB",
  bussgeld: 10000,
  haft: 0,
  delikt: "Unterlassene Hilfeleistung",
  beschlagnahmung: "//",
  notiz: "Akteneintrag"
},

// =========================
// StGB §3 Wirtschaftskriminalität
// =========================

{
  kategorie: "StGB §3 - Wirtschaftskriminalität",
  paragraph: "§3 Abs. 1 StGB",
  bussgeld: 10000,
  haft: 10,
  delikt: "Versuchter Diebstahl",
  beschlagnahmung: "//",
  notiz: "Akteneintrag"
},

{
  kategorie: "StGB §3 - Wirtschaftskriminalität",
  paragraph: "§3 Abs. 2 StGB",
  bussgeld: 20000,
  haft: 15,
  delikt: "Diebstahl",
  beschlagnahmung: "//",
  notiz: "Akteneintrag"
},

{
  kategorie: "StGB §3 - Wirtschaftskriminalität",
  paragraph: "§3 Abs. 3 StGB",
  bussgeld: 25000,
  haft: 25,
  delikt: "Versuchter Raub",
  beschlagnahmung: "//",
  notiz: "Akteneintrag"
},

{
  kategorie: "StGB §3 - Wirtschaftskriminalität",
  paragraph: "§3 Abs. 4 StGB",
  bussgeld: 30000,
  haft: 30,
  delikt: "Raub",
  beschlagnahmung: "//",
  notiz: "Akteneintrag"
},

{
  kategorie: "StGB §3 - Wirtschaftskriminalität",
  paragraph: "§3 Abs. 6 StGB",
  bussgeld: 30000,
  haft: 15,
  delikt: "Besitz von Schwarzgeld",
  beschlagnahmung: "Alle illegalen Gegenstände / Geld konfiszieren + Waffen + Handy etc",
  notiz: "Akteneintrag"
},

{
  kategorie: "StGB - Terrorstatus",
  paragraph: "Terrorstatus",
  bussgeld: 0,
  haft: 0,
  delikt: "Terrorstatus",
  beschlagnahmung: "//",
  notiz: "GOV muss dabei sein"
},

// =========================
// StGB §3 - Umgang mit Beamten
// =========================

{
  kategorie: "StGB §3 - Umgang mit Beamten",
  paragraph: "§3 Abs. 8 StGB",
  bussgeld: 40000,
  haft: 10,
  delikt: "Vortäuschen einer Straftat",
  beschlagnahmung: "//",
  notiz: "Akteneintrag"
},

{
  kategorie: "StGB §3 - Umgang mit Beamten",
  paragraph: "§3 Abs. 9 StGB",
  bussgeld: 50000,
  haft: 0,
  delikt: "Falschaussage",
  beschlagnahmung: "//",
  notiz: "Akteneintrag"
},

{
  kategorie: "StGB §4 - Umgang mit Beamten",
  paragraph: "§4 Abs. 1 StGB",
  bussgeld: 20000,
  haft: 5,
  delikt: "Behinderung eines Beamten bei der Ausführung seiner Arbeit",
  beschlagnahmung: "ggf. Verhaftung bis Ende des Einsatzes",
  notiz: "Akteneintrag"
},

{
  kategorie: "StGB §4 - Umgang mit Beamten",
  paragraph: "§4 Abs. 2 StGB",
  bussgeld: 30000,
  haft: 30,
  delikt: "Widerstand gegen Vollstreckungsbeamte",
  beschlagnahmung: "Alle illegalen Gegenstände konfiszieren + Waffen + Handy etc",
  notiz: "Akteneintrag"
},

{
  kategorie: "StGB §4 - Umgang mit Beamten",
  paragraph: "§4 Abs. 3 StGB",
  bussgeld: 10000,
  haft: 10,
  delikt: "Missachtung polizeilicher Maßnahmen",
  beschlagnahmung: "//",
  notiz: "Akteneintrag"
},

// =========================
// StGB §4 - Befreiung
// =========================

{
  kategorie: "StGB §4 - Befreiung",
  paragraph: "§4 Abs. 4 StGB",
  bussgeld: 30000,
  haft: 30,
  delikt: "Befreiung von TVs",
  beschlagnahmung: "Alle illegalen Gegenstände konfiszieren + Waffen + Handy etc",
  notiz: "-"
},

{
  kategorie: "StGB §4 - Befreiung",
  paragraph: "§4 Abs. 5 StGB",
  bussgeld: 15000,
  haft: 30,
  delikt: "versuchter Gefängnisausbruch",
  beschlagnahmung: "Alle illegalen Gegenstände konfiszieren + Waffen + Handy etc",
  notiz: "-"
},

{
  kategorie: "StGB §4 - Befreiung",
  paragraph: "§4 Abs. 6 StGB",
  bussgeld: 25000,
  haft: 40,
  delikt: "Beihilfe zum Ausbruch",
  beschlagnahmung: "Alle illegalen Gegenstände konfiszieren + Waffen + Handy etc",
  notiz: "-"
},

{
  kategorie: "StGB §4 - Befreiung",
  paragraph: "§4 Abs. 7 StGB",
  bussgeld: 30000,
  haft: 60,
  delikt: "Gefängnisausbruch",
  beschlagnahmung: "Alle illegalen Gegenstände konfiszieren + Waffen + Handy etc",
  notiz: "-"
},

// =========================
// StGB §2-4 - Sonstige Delikte
// =========================
{
  kategorie: "StGB §2 - Sonstige Delikte",
  paragraph: "§2 Abs. 7 StGB",
  bussgeld: 5000,
  haft: 15,
  delikt: "Missachtung der Hausordnung",
  beschlagnahmung: "//",
  notiz: "Akteneintrag"
},

{
  kategorie: "StGB §3 - Sonstige Delikte",
  paragraph: "§3 Abs. 5 StGB",
  bussgeld: 20000,
  haft: 0,
  delikt: "Sachbeschädigung",
  beschlagnahmung: "//",
  notiz: "Akteneintrag"
},

{
  kategorie: "StGB §3 - Sonstige Delikte",
  paragraph: "§3 Abs. 7 StGB",
  bussgeld: 10000,
  haft: 5,
  delikt: "Vermummungsverbot (50% des Gesichts verdeckt) / nach Aufforderung",
  beschlagnahmung: "Maske / Sturmhaube etc.",
  notiz: "Akteneintrag"
},

{
  kategorie: "StGB §3 - Sonstige Delikte",
  paragraph: "§3 Abs. 10 StGB",
  bussgeld: 100000,
  haft: 50,
  delikt: "Meineid",
  beschlagnahmung: "//",
  notiz: "Akteneintrag"
},

{
  kategorie: "StGB §4 - Sonstige Delikte",
  paragraph: "§4 Abs. 10 StGB",
  bussgeld: 30000,
  haft: 20,
  delikt: "Hausfriedensbruch",
  beschlagnahmung: "//",
  notiz: "Akteneintrag"
},

{
  kategorie: "StGB §4 - Sonstige Delikte",
  paragraph: "§4 Abs. 11 StGB",
  bussgeld: 30000,
  haft: 60,
  delikt: "Verweigerung der Identitätsfeststellung",
  beschlagnahmung: "//",
  notiz: "Akteneintrag"
},

{
  kategorie: "StGB §4 - Sonstige Delikte",
  paragraph: "§4 Abs. 12 StGB",
  bussgeld: 25000,
  haft: 20,
  delikt: "Betreten von Sperrzonen ohne Genehmigung / Nicht Einhalten Platzverweis",
  beschlagnahmung: "//",
  notiz: "Akteneintrag"
},

{
  kategorie: "StGB §4 - Sonstige Delikte",
  paragraph: "§4 Abs. 13 StGB",
  bussgeld: 100000,
  haft: 80,
  delikt: "Offenbaren von Staatsgeheimnissen",
  beschlagnahmung: "//",
  notiz: "-"
},

{
  kategorie: "StGB §4 - Sonstige Delikte",
  paragraph: "§4 Abs. 14 StGB",
  bussgeld: 30000,
  haft: 30,
  delikt: "Beihilfe",
  beschlagnahmung: "//",
  notiz: "-"
},

{
  kategorie: "StGB §6 - Sonstige Delikte",
  paragraph: "§6 Abs. 1.4 StGB",
  bussgeld: 0,
  haft: 0,
  delikt: "Amtsanmaßung",
  beschlagnahmung: "Polizei Gegenstände",
  notiz: "Akteneintrag"
},

{
  kategorie: "StGB §6 - Sonstige Delikte",
  paragraph: "§6 Abs. 1.5 StGB",
  bussgeld: 0,
  haft: 0,
  delikt: "Missbrauch des Notrufs",
  beschlagnahmung: "//",
  notiz: "Akteneintrag"
},

// =========================
// BBG §1 - Verhaltensfehler im Dienst
// =========================

{
  kategorie: "BBG §1 - Verhaltensfehler im Dienst",
  paragraph: "§1 Abs. 1 BBG",
  bussgeld: 200000,
  haft: 100,
  delikt: "Korruption",
  beschlagnahmung: "Waffe + Polizei Waffenschein + Dienstmarke",
  notiz: "-"
},


// =========================
// BBG §2 - Körperliche Integrität
// =========================


  ];

  const [selected, setSelected] = useState([]);
  const [search, setSearch] = useState("");
  const [kategorieFilter, setKategorieFilter] =
  useState("Alle");

  const toggleDelikt = (item) => {

    const exists = selected.find(
      (x) => x.paragraph === item.paragraph
    );

    if (exists) {

      setSelected(
        selected.filter(
          (x) => x.paragraph !== item.paragraph
        )
      );

    } else {

      setSelected([...selected, item]);

    }
  };

const filtered = delikte.filter((x) => {

  const matchSearch =
    `${x.paragraph} ${x.delikt} ${x.kategorie}`
      .toLowerCase()
      .includes(search.toLowerCase());

  const matchKategorie =
    kategorieFilter === "Alle" ||
    x.kategorie.includes(kategorieFilter);

  return matchSearch && matchKategorie;

});

  const gesamtBussgeld = useMemo(() => {

    return selected.reduce(
      (sum, x) => sum + x.bussgeld,
      0
    );

  }, [selected]);

  const gesamtHaft = useMemo(() => {

    return selected.reduce(
      (sum, x) => sum + x.haft,
      0
    );

  }, [selected]);
  const gesamtPunkte = useMemo(() => {
  return selected.reduce(
    (sum, x) => sum + (x.punkte || 0),
    0
  );
}, [selected]);

 return (

  <div className="min-h-screen bg-[#060b16] text-white p-4">

    <div className="max-w-[1900px] mx-auto">

      <div className="flex items-center gap-3 mb-4">

        <h1 className="text-3xl font-black">
          Bußgeld- & Strafkatalog
        </h1>

        <div className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
          {delikte.length}
        </div>

      </div>

      <div className="flex gap-2 mb-4 flex-wrap">

 {[
  "Alle",
  "STVO",
  "LuftVG",
  "BtMG",
  "StGB",
  "BBG"
].map((kat) => (
  <button
    key={kat}
    onClick={() => setKategorieFilter(kat)}
    className={`px-4 py-2 rounded-xl text-sm font-semibold transition ${
      kategorieFilter === kat
        ? "bg-blue-600 text-white"
        : "bg-[#1a2238] text-zinc-300 hover:bg-[#24304d]"
    }`}
  >
    {kat}
  </button>
))}

</div>
      <div className="bg-[#0d1320] border border-[#1e293b] rounded-2xl p-4 mb-4 text-sm text-zinc-300">
        Exekutive - Höchstmaß: 100 Mon. Haft / 200.000 $ Bei 15 pkt. erfolgt der Führerschein entzug
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-4">

        <div className="bg-[#0d1320] border border-[#1e293b] rounded-2xl p-4">

          <div className="mb-4">

            <input
              type="text"
              placeholder="§, Stichwort, Betrag, Delikt ..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#09111d] border border-[#243041] rounded-xl p-4 text-white outline-none"
            />

          </div>

          <div className="overflow-auto max-h-[800px]">

            <table className="w-full border-collapse">

              <thead className="sticky top-0 bg-[#0f172a] z-10">

                <tr className="text-xs uppercase text-blue-300">

                  <th className="p-4 text-left">Auswahl</th>
                  <th className="p-4 text-left">Kategorie</th>
                  <th className="p-4 text-left">Paragraph</th>
                  <th className="p-4 text-left">Bußgeld</th>
                  <th className="p-4 text-left">Haft</th>
                  <th className="p-4 text-left">Delikt</th>

                </tr>

              </thead>

              <tbody>

                {filtered.map((x) => {

                  const active = selected.find(
                    (y) => y.paragraph === x.paragraph
                  );

                  return (

                    <tr
                      key={x.paragraph}
                      className={`border-b border-[#1e293b] ${
                        active
                          ? "bg-blue-500/10"
                          : "hover:bg-[#111827]"
                      }`}
                    >

                      <td className="p-4">

                        <input
                          type="checkbox"
                          checked={!!active}
                          onChange={() => toggleDelikt(x)}
                        />

                      </td>

                      <td className="p-4">

                        <div className="bg-[#1e293b] px-3 py-2 rounded-lg text-xs inline-block">
                          {x.kategorie}
                        </div>

                      </td>

                      <td className="p-4">

                        <div className="bg-cyan-900/40 text-cyan-300 px-3 py-2 rounded-lg inline-block text-xs">
                          {x.paragraph}
                        </div>

                      </td>

                      <td className="p-4">

                        <div className="bg-green-900/40 text-green-400 px-3 py-2 rounded-lg inline-block font-bold">
                          ${x.bussgeld}
                        </div>

                      </td>

                      <td className="p-4">

                        <div className="bg-yellow-900/40 text-yellow-400 px-3 py-2 rounded-lg inline-block font-bold">
                          {x.haft}
                        </div>

                      </td>

                      <td className="p-4 font-semibold">
                        {x.delikt}
                      </td>

                    </tr>

                  );

                })}

              </tbody>

            </table>

          </div>

        </div>

        <div className="bg-[#0d1320] border border-[#1e293b] rounded-2xl p-6 h-fit sticky top-4">

          <h2 className="text-2xl font-black mb-6">
            Strafen-Rechner
          </h2>

          <div className="grid grid-cols-2 gap-4 mb-6">

            <div className="bg-[#09111d] rounded-xl p-4">

              <div className="text-xs text-zinc-500 mb-2">
                GESAMT BUSSGELD
              </div>

              <div className="text-3xl font-black text-green-400">
                ${gesamtBussgeld}
              </div>

            </div>

            <div className="bg-[#09111d] rounded-xl p-4">

              <div className="text-xs text-zinc-500 mb-2">
                GESAMT HAFT
              </div>

              <div className="text-3xl font-black text-yellow-400">
                {gesamtHaft} Mon.
              </div>
              </div>
              <div className="bg-[#09111d] rounded-xl p-4">

  <div className="text-xs text-zinc-500 mb-2">
    VERKEHRSPUNKTE
  </div>

  <div className="text-3xl font-black text-red-400">
    {gesamtPunkte}
  </div>

</div>

<div className="bg-[#09111d] rounded-xl p-4 mt-4">

  <div className="text-zinc-400 text-sm mb-3">
    AUSGEWÄHLTE PARAGRAPHEN
  </div>

  <div className="space-y-2 max-h-[250px] overflow-auto">

    {selected.length === 0 && (
      <div className="text-zinc-500 text-sm">
        Keine Delikte ausgewählt
      </div>
    )}

    {selected.map((x) => (
      <div
        key={x.paragraph}
        className="bg-[#111827] border border-[#1e293b] rounded-lg p-3"
      >

        <div className="text-cyan-300 font-bold text-sm">
          {x.paragraph}
        </div>

        <div className="text-white text-sm mt-1">
          {x.delikt}
        </div>

        <div className="text-green-400 text-xs mt-2">
          ${x.bussgeld} | {x.haft} Mon.
        </div>

      </div>
    ))}

  </div>

</div>
<button
  onClick={() => {

    const text = selected.map((x) =>
      `${x.paragraph} - ${x.delikt} | Bußgeld: $${x.bussgeld} | Haft: ${x.haft} Mon.`
    ).join("\n");

    navigator.clipboard.writeText(`
STRAFMASS

${text}

GESAMT:
Bußgeld: $${gesamtBussgeld}
Haft: ${gesamtHaft} Monate
    `);

  }}
  className="inline-block w-fit bg-cyan-600 hover:bg-cyan-500 transition rounded-lg px-4 py-2 font-bold text-sm mt-4 self-start"
>
  Strafmaß kopieren
</button>
<div className="mt-2">
  <button
    onClick={() => setSelected([])}
    className="bg-red-600 hover:bg-red-700 transition rounded-lg px-3 py-2 text-sm font-semibold"
  >
    Auswahl entfernen
  </button>
</div>

<div className="col-span-2 bg-[#1b1034] border border-purple-500/30 rounded-xl p-4 mt-4">

  <div className="text-purple-300 font-bold mb-3">
    Rechtsbelehrung
  </div>

  <div className="text-sm text-zinc-200 space-y-2 leading-relaxed">

    <p>
      1. Sie haben das Recht zu schweigen.
    </p>

    <p>
      2. Alles was Sie sagen, kann und wird vor Gericht gegen Sie verwendet werden.
    </p>

    <p>
      3. Sie haben das Recht auf einen Anwalt.
    </p>

    <p>
      4. Sollten Sie sich keinen leisten können,
      wird Ihnen keiner gestellt.
    </p>

    <p>
      5. Sollte sich kein Richter im Staat befinden,
so ubernimmt das LSPD die Judikative.
    </p>
    <p>
      6. Haben sie ihre Rechte verstanden?
    </p>

  </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

); 

}
