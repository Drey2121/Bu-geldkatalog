import React, { useMemo, useState } from "react";
import "./App.css";

export default function App() {

  const delikte = [

    {
      kategorie: "STVO §1 - Fahrerlaubnis",
      paragraph: "§1 Abs. 1",
      bussgeld: 1000,
      haft: 0,
      delikt: "Fahrerlaubnis nicht mitgeführt",
      beschlagnahmung: "Verwarnung",
      notiz: "+2 Punkte"
    },
    {
  kategorie: "STVO §1 - Fahrerlaubnis",
  paragraph: "§1 Abs. 2",
  bussgeld: 1500,
  haft: 0,
  delikt: "Fahren ohne gültige Fahrerlaubnis",
  beschlagnahmung: "Fahrzeug beschlagnahmen",
  notiz: "Akteneintrag = +5 Verkehrspunkte"
},

{
  kategorie: "STVO §1 - Fahrerlaubnis",
  paragraph: "§1 Abs. 3",
  bussgeld: 3000,
  haft: 0,
  delikt: "Fliegen ohne gültige Flugerlaubnis (Flugzeug / Helikopter etc.)",
  beschlagnahmung: "Flugzeug",
  notiz: "Akteneintrag = +8 Verkehrspunkte"
},

    {
      kategorie: "STVO §2 - Straßenverkehr",
      paragraph: "§2 Abs. 1",
      bussgeld: 3000,
      haft: 10,
      delikt: "Gefährlicher Eingriff in den Straßenverkehr",
      beschlagnahmung: "Fahrzeug",
      notiz: "+4 Punkte"
    },
{
  kategorie: "STVO §2 - Straßenverkehr",
  paragraph: "§2 Abs. 1.3",
  bussgeld: 1000,
  haft: 0,
  delikt: "Nutzung eines elektronischen Gerätes beim Führen eines Fahrzeugs",
  beschlagnahmung: "Verwarnung",
  notiz: "Verwarnung + 1 Verkehrspunkt"
},

{
  kategorie: "STVO §2 - Straßenverkehr",
  paragraph: "§2 Abs. 1.4",
  bussgeld: 500,
  haft: 0,
  delikt: "Fahren abseits der Straße",
  beschlagnahmung: "Verwarnung",
  notiz: "Akteneintrag = +2 Verkehrspunkte"
},

{
  kategorie: "STVO §2 - Straßenverkehr",
  paragraph: "§2 Abs. 1.5",
  bussgeld: 500,
  haft: 0,
  delikt: "Gefährliche Fahrweise",
  beschlagnahmung: "Fahrzeug",
  notiz: "Akteneintrag = +4 Verkehrspunkte"
},

{
  kategorie: "STVO §2 - Straßenverkehr",
  paragraph: "§2 Abs. 1.6",
  bussgeld: 1000,
  haft: 0,
  delikt: "Fahren entgegen der Fahrtrichtung",
  beschlagnahmung: "Fahrzeug",
  notiz: "Akteneintrag = +3 Verkehrspunkte"
},

{
  kategorie: "STVO §2 - Straßenverkehr",
  paragraph: "§2 Abs. 1.7",
  bussgeld: 450,
  haft: 0,
  delikt: "Nichtbeachten der Vorfahrt",
  beschlagnahmung: "Verwarnung",
  notiz: "Akteneintrag = +2 Verkehrspunkte"
},

{
  kategorie: "STVO §2 - Straßenverkehr",
  paragraph: "§2 Abs. 1.8",
  bussgeld: 2000,
  haft: 15,
  delikt: "Fahren / Fliegen unter Drogeneinfluss",
  beschlagnahmung: "Führerschein + Fahrzeug + Waffen + Kommunikationsgeräte",
  notiz: "Akteneintrag = +6 Verkehrspunkte"
},

{
  kategorie: "STVO §2 - Straßenverkehr",
  paragraph: "§2 Abs. 1.9",
  bussgeld: 1250,
  haft: 10,
  delikt: "Fahrerflucht",
  beschlagnahmung: "Führerschein + Fahrzeug + Waffen + Kommunikationsgeräte",
  notiz: "Akteneintrag = +8 Verkehrspunkte"
},
{
  kategorie: "STVO §2 - Straßenverkehr",
  paragraph: "§2 Abs. 2.1",
  bussgeld: 2500,
  haft: 15,
  delikt: "Illegales Straßenrennen",
  beschlagnahmung: "Führerschein + Fahrzeug + Waffen + Kommunikationsgeräte",
  notiz: "Akteneintrag = +7 Verkehrspunkte"
},

{
  kategorie: "STVO §2 - Straßenverkehr",
  paragraph: "§2 Abs. 2.2",
  bussgeld: 3500,
  haft: 20,
  delikt: "Flucht vor der Polizei",
  beschlagnahmung: "Führerschein + Fahrzeug + Waffen + Kommunikationsgeräte",
  notiz: "Akteneintrag = +2 Verkehrspunkte"
},

{
  kategorie: "STVO §2 - Straßenverkehr",
  paragraph: "§2 Abs. 2.3",
  bussgeld: 1000,
  haft: 0,
  delikt: "Fahren eines nicht straßenzulässigen Fahrzeugs",
  beschlagnahmung: "Fahrzeug",
  notiz: "Akteneintrag = +2 Verkehrspunkte"
},

{
  kategorie: "STVO §2 - Straßenverkehr",
  paragraph: "§2 Abs. 2.4",
  bussgeld: 500,
  haft: 0,
  delikt: "Unberechtigter Lärm",
  beschlagnahmung: "//",
  notiz: "-"
},

{
  kategorie: "STVO §2 - Straßenverkehr",
  paragraph: "§2 Abs. 2.5",
  bussgeld: 750,
  haft: 0,
  delikt: "...über 30 km/h Innerorts",
  beschlagnahmung: "Alle Fahrerlaubnisse + Fahrzeug",
  notiz: "Akteneintrag = +2 Verkehrspunkte"
},

{
  kategorie: "STVO §2 - Straßenverkehr",
  paragraph: "§2 Abs. 2.6",
  bussgeld: 750,
  haft: 0,
  delikt: "...über 20 km/h Außerorts",
  beschlagnahmung: "Alle Fahrerlaubnisse + Fahrzeug",
  notiz: "Akteneintrag = +2 Verkehrspunkte"
},

{
  kategorie: "STVO §2 - Straßenverkehr",
  paragraph: "§2 Abs. 2.7",
  bussgeld: 2750,
  haft: 0,
  delikt: "Behinderung des Straßenverkehrs (Errichten von Blockaden)",
  beschlagnahmung: "//",
  notiz: "Akteneintrag = +5 Verkehrspunkte"
},

// =========================
// LuftVG
// =========================

{
  kategorie: "LuftVG - Luftverkehr",
  paragraph: "§3 Abs. 1",
  bussgeld: 2500,
  haft: 20,
  delikt: "Unberechtigtes Überfliegen von Luftsperrgebieten",
  beschlagnahmung: "Luftfahrzeug + Flugschein",
  notiz: "Akteneintrag = +2 Verkehrspunkte"
},

{
  kategorie: "LuftVG - Luftverkehr",
  paragraph: "§3 Abs. 2",
  bussgeld: 2000,
  haft: 0,
  delikt: "Landen auf nicht genehmigten Landestellen / Bereichen / Straßen",
  beschlagnahmung: "Luftfahrzeug + Flugschein",
  notiz: "Akteneintrag = +4 Verkehrspunkte"
},
// =========================
// BtMG
// =========================

{
  kategorie: "BtMG - Drogenbesitz",
  paragraph: "§1 Abs. 1 BtMG",
  bussgeld: 2000,
  haft: 10,
  delikt: "Drogenbesitz im Haus",
  beschlagnahmung: "Hausinventar + Tascheninhalt",
  notiz: "Akteneintrag"
},

{
  kategorie: "BtMG - Drogenbesitz",
  paragraph: "§1 Abs. 2 BtMG",
  bussgeld: 2000,
  haft: 20,
  delikt: "Drogenbesitz im Fahrzeug / Flugzeug",
  beschlagnahmung: "Fahrzeug + Tascheninhalt",
  notiz: "Akteneintrag"
},

{
  kategorie: "BtMG - Drogenbesitz",
  paragraph: "§1 Abs. 3 BtMG",
  bussgeld: 2500,
  haft: 15,
  delikt: "Drogenbesitz an der Person",
  beschlagnahmung: "Rucksack + Inhalt",
  notiz: "Akteneintrag"
},

{
  kategorie: "BtMG - Drogenbesitz",
  paragraph: "§1 Abs. 4 BtMG",
  bussgeld: 3500,
  haft: 20,
  delikt: "Drogenhandel Verkauf",
  beschlagnahmung: "Rucksack + Inhalt",
  notiz: "Akteneintrag"
},

// =========================
// StGB §1 Wirtschaftskriminalität
// =========================

{
  kategorie: "StGB §1 - Wirtschaftskriminalität",
  paragraph: "§1 Abs. 1 StGB",
  bussgeld: 2500,
  haft: 0,
  delikt: "Versuchter Diebstahl eines PKW / LKW / Helikopter / Boot",
  beschlagnahmung: "//",
  notiz: "Akteneintrag"
},

{
  kategorie: "StGB §1 - Wirtschaftskriminalität",
  paragraph: "§1 Abs. 1.2 StGB",
  bussgeld: 2500,
  haft: 10,
  delikt: "Diebstahl eines PKW / LKW / Helikopter / Boot",
  beschlagnahmung: "Fahrzeug + Fahrzeugstilllegung",
  notiz: "Akteneintrag"
},

{
  kategorie: "StGB §1 - Wirtschaftskriminalität",
  paragraph: "§1 Abs. 1.3 StGB",
  bussgeld: 3000,
  haft: 15,
  delikt: "Raub (Personen)",
  beschlagnahmung: "Diebesgut",
  notiz: "Akteneintrag"
},

{
  kategorie: "StGB §1 - Wirtschaftskriminalität",
  paragraph: "§1 Abs. 1.4 StGB",
  bussgeld: 4500,
  haft: 10,
  delikt: "Bestechung",
  beschlagnahmung: "Auch bei Beamten",
  notiz: "Akteneintrag"
},
{
  kategorie: "StGB §1 - Wirtschaftskriminalität",
  paragraph: "§1 Abs. 1.5 StGB",
  bussgeld: 8500,
  haft: 30,
  delikt: "(Staats) Bankraub",
  beschlagnahmung: "Waffen + Fahrzeug + Rucksack + alles was mit dem Raub zu tun hat",
  notiz: "FIB muss dazugezogen werden!"
},

{
  kategorie: "StGB §1 - Wirtschaftskriminalität",
  paragraph: "§1 Abs. 1.6 StGB",
  bussgeld: 8500,
  haft: 30,
  delikt: "Juwelier / Yacht Raub",
  beschlagnahmung: "Waffen + Fahrzeug + Rucksack + alles was mit dem Raub zu tun hat",
  notiz: "Akteneintrag"
},

{
  kategorie: "StGB §1 - Wirtschaftskriminalität",
  paragraph: "§1 Abs. 1.7 StGB",
  bussgeld: 6000,
  haft: 15,
  delikt: "Mittäterschaft bei Bank- / Juwelierraub",
  beschlagnahmung: "Waffen + Fahrzeug + Rucksack + alles was mit dem Raub zu tun hat",
  notiz: "Akteneintrag"
},

{
  kategorie: "StGB §1 - Wirtschaftskriminalität",
  paragraph: "§1 Abs. 1.8 StGB",
  bussgeld: 4500,
  haft: 10,
  delikt: "ATM Raub",
  beschlagnahmung: "Waffen + Fahrzeug + Rucksack + alles was mit dem Raub zu tun hat",
  notiz: "Akteneintrag"
},

{
  kategorie: "StGB §1 - Wirtschaftskriminalität",
  paragraph: "§1 Abs. 1.9 StGB",
  bussgeld: 3500,
  haft: 5,
  delikt: "Mittäterschaft bei ATM Raub",
  beschlagnahmung: "Waffen + Fahrzeug + Rucksack + alles was mit dem Raub zu tun hat",
  notiz: "Akteneintrag"
},

{
  kategorie: "StGB §1 - Wirtschaftskriminalität",
  paragraph: "§1 Abs. 2.1 StGB",
  bussgeld: 0,
  haft: 0,
  delikt: "Terrorstatus",
  beschlagnahmung: "//",
  notiz: "Dokumente müssen vom FIB erhalten werden"
},

{
  kategorie: "StGB §1 - Wirtschaftskriminalität",
  paragraph: "§1 Abs. 2.2 StGB",
  bussgeld: 5500,
  haft: 25,
  delikt: "Ladenraub",
  beschlagnahmung: "Waffen + Fahrzeug + Rucksack + alles was mit dem Raub zu tun hat",
  notiz: "Akteneintrag"
},

{
  kategorie: "StGB §1 - Wirtschaftskriminalität",
  paragraph: "§1 Abs. 2.3 StGB",
  bussgeld: 4000,
  haft: 15,
  delikt: "Mittäterschaft bei Ladenraub",
  beschlagnahmung: "Waffen + Fahrzeug + Rucksack + alles was mit dem Raub zu tun hat",
  notiz: "Akteneintrag"
},

{
  kategorie: "StGB §1 - Wirtschaftskriminalität",
  paragraph: "§1 Abs. 2.4 StGB",
  bussgeld: 7500,
  haft: 60,
  delikt: "Aservatenkammer Raub",
  beschlagnahmung: "Alle Tatmittel",
  notiz: "FIB muss dazugezogen werden!"
},
{
  kategorie: "StGB §1 - Wirtschaftskriminalität",
  paragraph: "§1 Abs. 2.5 StGB",
  bussgeld: 3500,
  haft: 15,
  delikt: "Besitz von Polizeimitteln",
  beschlagnahmung: "Alle staatlichen Gegenstände konfiszieren + Waffen + Handy etc",
  notiz: "Akteneintrag"
},

{
  kategorie: "StGB §1 - Wirtschaftskriminalität",
  paragraph: "§1 Abs. 2.6 StGB",
  bussgeld: 7500,
  haft: 10,
  delikt: "Besitz illegaler Gegenstände",
  beschlagnahmung: "Alle illegalen Gegenstände / Geld konfiszieren + Waffen + Handy etc",
  notiz: "Akteneintrag"
},

{
  kategorie: "StGB §1 - Wirtschaftskriminalität",
  paragraph: "§1 Abs. 2.7 StGB",
  bussgeld: 7500,
  haft: 10,
  delikt: "Besitz von Schwarzgeld",
  beschlagnahmung: "Alle illegalen Gegenstände / Geld konfiszieren + Waffen + Handy etc",
  notiz: "Akteneintrag"
},

// =========================
// StGB §2 - Waffengesetz
// =========================

{
  kategorie: "StGB §2 - Waffengesetz",
  paragraph: "§2 Abs. 1 StGB",
  bussgeld: 6500,
  haft: 0,
  delikt: "Führen einer Waffe ohne Lizenz",
  beschlagnahmung: "Waffe konfiszieren",
  notiz: "Akteneintrag"
},

{
  kategorie: "StGB §2 - Waffengesetz",
  paragraph: "§2 Abs. 1.2 StGB",
  bussgeld: 11000,
  haft: 25,
  delikt: "Missbrauch einer Waffe",
  beschlagnahmung: "Waffenschein entziehen",
  notiz: "Akteneintrag"
},

{
  kategorie: "StGB §2 - Waffengesetz",
  paragraph: "§2 Abs. 1.3 StGB",
  bussgeld: 6000,
  haft: 30,
  delikt: "Besitz einer illegalen Waffe",
  beschlagnahmung: "Alle illegalen Gegenstände konfiszieren + Waffen + Handy etc",
  notiz: "Akteneintrag"
},

{
  kategorie: "StGB §2 - Waffengesetz",
  paragraph: "§2 Abs. 1.4 StGB",
  bussgeld: 0,
  haft: 0,
  delikt: "Illegaler Waffenhandel aktiv betreiben (Verkaufen)",
  beschlagnahmung: "Verfahren mit Unterstützung des DOJ",
  notiz: "FIB muss dazugezogen werden!"
},

{
  kategorie: "StGB §2 - Waffengesetz",
  paragraph: "§2 Abs. 1.5 StGB",
  bussgeld: 0,
  haft: 0,
  delikt: "Illegaler Waffenhandel passiv betreiben (Kaufen)",
  beschlagnahmung: "Verfahren mit Unterstützung des DOJ",
  notiz: "FIB muss dazugezogen werden!"
},
{
  kategorie: "StGB §2 - Waffengesetz",
  paragraph: "§2 Abs. 1.6 StGB",
  bussgeld: 4500,
  haft: 0,
  delikt: "Besitz von illegalen Waffenmodifikationen ohne Waffenschein",
  beschlagnahmung: "//",
  notiz: "Akteneintrag"
},

{
  kategorie: "StGB §2 - Waffengesetz",
  paragraph: "§2 Abs. 1.7 StGB",
  bussgeld: 4000,
  haft: 10,
  delikt: "Besitz von illegalen Waffenherstellungsteilen",
  beschlagnahmung: "Waffenherstellungsteile konfiszieren + Waffen + Handy etc",
  notiz: "Akteneintrag"
},

{
  kategorie: "StGB §2 - Waffengesetz",
  paragraph: "§2 Abs. 1.8 StGB",
  bussgeld: 5500,
  haft: 20,
  delikt: "Handel von illegalen Waffenmodifikationen",
  beschlagnahmung: "Waffenmodifikationen konfiszieren + Waffen + Handy etc",
  notiz: "Akteneintrag"
},

// =========================
// StGB §3 - Körperliche Integrität
// =========================

{
  kategorie: "StGB §3 - Körperliche Integrität",
  paragraph: "§3 Abs. 1 StGB",
  bussgeld: 3500,
  haft: 0,
  delikt: "Körperverletzung",
  beschlagnahmung: "//",
  notiz: "Akteneintrag"
},

{
  kategorie: "StGB §3 - Körperliche Integrität",
  paragraph: "§3 Abs. 1.2 StGB",
  bussgeld: 4000,
  haft: 30,
  delikt: "Gefährliche Körperverletzung",
  beschlagnahmung: "Alle illegalen Gegenstände konfiszieren + Waffen + Handy etc",
  notiz: "Akteneintrag"
},

{
  kategorie: "StGB §3 - Körperliche Integrität",
  paragraph: "§3 Abs. 1.3 StGB",
  bussgeld: 6000,
  haft: 30,
  delikt: "Freiheitsberaubung",
  beschlagnahmung: "Alle illegalen Gegenstände konfiszieren + Waffen + Handy etc",
  notiz: "Akteneintrag"
},

{
  kategorie: "StGB §3 - Körperliche Integrität",
  paragraph: "§3 Abs. 1.4 StGB",
  bussgeld: 5000,
  haft: 20,
  delikt: "Belästigung",
  beschlagnahmung: "Alle illegalen Gegenstände konfiszieren + Waffen + Handy etc",
  notiz: "Akteneintrag"
},

{
  kategorie: "StGB §3 - Körperliche Integrität",
  paragraph: "§3 Abs. 1.5 StGB",
  bussgeld: 6500,
  haft: 30,
  delikt: "Geiselnahme",
  beschlagnahmung: "Alle illegalen Gegenstände konfiszieren + Waffen + Handy etc",
  notiz: "Akteneintrag"
},
{
  kategorie: "StGB §3 - Körperliche Integrität",
  paragraph: "§3 Abs. 1.6 StGB",
  bussgeld: 5000,
  haft: 20,
  delikt: "Beihilfe zur Geiselnahme",
  beschlagnahmung: "Alle illegalen Gegenstände konfiszieren + Waffen + Handy etc",
  notiz: "Akteneintrag"
},

{
  kategorie: "StGB §3 - Körperliche Integrität",
  paragraph: "§3 Abs. 1.7 StGB",
  bussgeld: 3000,
  haft: 0,
  delikt: "Beleidigung",
  beschlagnahmung: "//",
  notiz: "Akteneintrag"
},

{
  kategorie: "StGB §3 - Körperliche Integrität",
  paragraph: "§3 Abs. 1.8 StGB",
  bussgeld: 3500,
  haft: 15,
  delikt: "Drohung",
  beschlagnahmung: "Alle illegalen Gegenstände konfiszieren + Waffen + Handy etc",
  notiz: "Akteneintrag"
},

{
  kategorie: "StGB §3 - Körperliche Integrität",
  paragraph: "§3 Abs. 1.9 StGB",
  bussgeld: 8500,
  haft: 30,
  delikt: "Versuchter Mord",
  beschlagnahmung: "Waffe + Fahrzeug + Rucksackinhalt",
  notiz: "Akteneintrag"
},

{
  kategorie: "StGB §3 - Körperliche Integrität",
  paragraph: "§3 Abs. 2.1 StGB",
  bussgeld: 12500,
  haft: 60,
  delikt: "Mord",
  beschlagnahmung: "Alle illegalen Gegenstände konfiszieren + Waffen",
  notiz: "FIB muss dazugezogen werden + Verfahren"
},

{
  kategorie: "StGB §3 - Körperliche Integrität",
  paragraph: "§3 Abs. 2.2 StGB",
  bussgeld: 3500,
  haft: 0,
  delikt: "Unterlassene Hilfeleistung",
  beschlagnahmung: "//",
  notiz: "Akteneintrag"
},

// =========================
// StGB §4 - Umgang mit Beamten
// =========================

{
  kategorie: "StGB §4 - Umgang mit Beamten",
  paragraph: "§4 Abs. 1 StGB",
  bussgeld: 2500,
  haft: 0,
  delikt: "Missachtung polizeilicher Anweisungen",
  beschlagnahmung: "//",
  notiz: "Akteneintrag"
},

{
  kategorie: "StGB §4 - Umgang mit Beamten",
  paragraph: "§4 Abs. 1.2 StGB",
  bussgeld: 5700,
  haft: 10,
  delikt: "Widerstand gegen Vollstreckungsbeamte",
  beschlagnahmung: "Alle illegalen Gegenstände konfiszieren + Waffen + Handy etc",
  notiz: "Akteneintrag"
},

{
  kategorie: "StGB §4 - Umgang mit Beamten",
  paragraph: "§4 Abs. 1.3 StGB",
  bussgeld: 3500,
  haft: 0,
  delikt: "Behinderung eines Beamten bei der Ausführung seiner Arbeit",
  beschlagnahmung: "ggf. Verhaftung bis Ende des Einsatzes",
  notiz: "Akteneintrag"
},
{
  kategorie: "StGB §4 - Umgang mit Beamten",
  paragraph: "§4 Abs. 1.4 StGB",
  bussgeld: 1500,
  haft: 10,
  delikt: "Belästigung / Beleidigung eines Beamten",
  beschlagnahmung: "Alle illegalen Gegenstände konfiszieren + Waffen + Handy etc",
  notiz: "Akteneintrag"
},

{
  kategorie: "StGB §4 - Umgang mit Beamten",
  paragraph: "§4 Abs. 1.5 StGB",
  bussgeld: 5000,
  haft: 30,
  delikt: "Permanente Belästigung von Beamten",
  beschlagnahmung: "Alle illegalen Gegenstände konfiszieren + Waffen + Handy etc",
  notiz: "Akteneintrag"
},

{
  kategorie: "StGB §4 - Umgang mit Beamten",
  paragraph: "§4 Abs. 1.6 StGB",
  bussgeld: 4000,
  haft: 20,
  delikt: "Falschaussage",
  beschlagnahmung: "Alle illegalen Gegenstände konfiszieren + Waffen + Handy etc",
  notiz: "Akteneintrag"
},

{
  kategorie: "StGB §4 - Umgang mit Beamten",
  paragraph: "§4 Abs. 1.7 StGB",
  bussgeld: 2500,
  haft: 20,
  delikt: "Vortäuschen einer Straftat",
  beschlagnahmung: "//",
  notiz: "Akteneintrag"
},

// =========================
// StGB §5 - Gefängnisausbruch
// =========================

{
  kategorie: "StGB §5 - Gefängnisausbruch",
  paragraph: "§5 Abs. 1.1 StGB",
  bussgeld: 7000,
  haft: 60,
  delikt: "Strafe für Flüchtige",
  beschlagnahmung: "Alle illegalen Gegenstände konfiszieren + Waffen + Handy etc",
  notiz: "-"
},

{
  kategorie: "StGB §5 - Gefängnisausbruch",
  paragraph: "§5 Abs. 1.2 StGB",
  bussgeld: 6000,
  haft: 40,
  delikt: "Strafe für Helfer",
  beschlagnahmung: "Alle illegalen Gegenstände konfiszieren + Waffen + Handy etc",
  notiz: "-"
},

{
  kategorie: "StGB §5 - Gefängnisausbruch",
  paragraph: "§5 Abs. 1.3 StGB",
  bussgeld: 6000,
  haft: 40,
  delikt: "Beihilfe zur Flucht",
  beschlagnahmung: "Alle illegalen Gegenstände konfiszieren + Waffen + Handy etc",
  notiz: "-"
},

// =========================
// StGB §6 - Sonstige Delikte
// =========================

{
  kategorie: "StGB §6 - Sonstige Delikte",
  paragraph: "§6 Abs. 1 StGB",
  bussgeld: 4500,
  haft: 0,
  delikt: "Betreten von Sperrzonen ohne Genehmigung / Nicht Einhalten Platzverweis",
  beschlagnahmung: "//",
  notiz: "Akteneintrag"
},

{
  kategorie: "StGB §6 - Sonstige Delikte",
  paragraph: "§6 Abs. 1.2 StGB",
  bussgeld: 3000,
  haft: 0,
  delikt: "Durchbrechen von Absperrungen",
  beschlagnahmung: "Fahrzeug",
  notiz: "Akteneintrag"
},
{
  kategorie: "StGB §6 - Sonstige Delikte",
  paragraph: "§6 Abs. 1.3 StGB",
  bussgeld: 2000,
  haft: 0,
  delikt: "Vermummungsverbot (50% des Gesichts verdeckt) / nach Aufforderung",
  beschlagnahmung: "Maske / Sturmhaube etc.",
  notiz: "Akteneintrag"
},

{
  kategorie: "StGB §6 - Sonstige Delikte",
  paragraph: "§6 Abs. 1.4 StGB",
  bussgeld: 6000,
  haft: 20,
  delikt: "Amtsanmaßung",
  beschlagnahmung: "Polizei Gegenstände",
  notiz: "Akteneintrag"
},

{
  kategorie: "StGB §6 - Sonstige Delikte",
  paragraph: "§6 Abs. 1.5 StGB",
  bussgeld: 4000,
  haft: 0,
  delikt: "Missbrauch des Notrufs",
  beschlagnahmung: "//",
  notiz: "Akteneintrag"
},

{
  kategorie: "StGB §6 - Sonstige Delikte",
  paragraph: "§6 Abs. 1.6 StGB",
  bussgeld: 1500,
  haft: 0,
  delikt: "Sachbeschädigung",
  beschlagnahmung: "//",
  notiz: "Akteneintrag"
},

{
  kategorie: "StGB §6 - Sonstige Delikte",
  paragraph: "§6 Abs. 1.7 StGB",
  bussgeld: 3500,
  haft: 20,
  delikt: "Hausfriedensbruch",
  beschlagnahmung: "//",
  notiz: "Akteneintrag"
},

{
  kategorie: "StGB §6 - Sonstige Delikte",
  paragraph: "§6 Abs. 1.8 StGB",
  bussgeld: 6000,
  haft: 30,
  delikt: "Vertuschung von Straftaten / Vernichtung von Beweismitteln",
  beschlagnahmung: "Waffe + Fahrzeug + Rucksackinhalt",
  notiz: "Akteneintrag"
},

{
  kategorie: "StGB §6 - Sonstige Delikte",
  paragraph: "§6 Abs. 1.9 StGB",
  bussgeld: 4000,
  haft: 0,
  delikt: "Zwangsheirat",
  beschlagnahmung: "//",
  notiz: "Akteneintrag"
},

{
  kategorie: "StGB §6 - Sonstige Delikte",
  paragraph: "§6 Abs. 2.1 StGB",
  bussgeld: 3000,
  haft: 0,
  delikt: "Unangemeldetes Gewerbe",
  beschlagnahmung: "//",
  notiz: "Akteneintrag"
},

{
  kategorie: "StGB §6 - Sonstige Delikte",
  paragraph: "§6 Abs. 2.2 StGB",
  bussgeld: 4500,
  haft: 0,
  delikt: "Unangemeldetes Gewerbe nach mehrfachen Verwarnungen",
  beschlagnahmung: "//",
  notiz: "Akteneintrag"
},

{
  kategorie: "StGB §6 - Sonstige Delikte",
  paragraph: "§6 Abs. 2.3 StGB",
  bussgeld: 800,
  haft: 0,
  delikt: "Lärmbelästigung in jeglicher Art",
  beschlagnahmung: "//",
  notiz: "Akteneintrag"
},
{
  kategorie: "StGB §6 - Sonstige Delikte",
  paragraph: "§6 Abs. 2.4 StGB",
  bussgeld: 7500,
  haft: 20,
  delikt: "Stalking",
  beschlagnahmung: "//",
  notiz: "Akteneintrag"
},

{
  kategorie: "StGB §6 - Sonstige Delikte",
  paragraph: "§6 Abs. 2.5 StGB",
  bussgeld: 4000,
  haft: 0,
  delikt: "Auslösen eines Fehlalarms",
  beschlagnahmung: "//",
  notiz: "Akteneintrag"
},

// =========================
// BBG §1 - Verhaltensfehler im Dienst
// =========================

{
  kategorie: "BBG §1 - Verhaltensfehler im Dienst",
  paragraph: "§1 Abs. 1 BBG",
  bussgeld: 4500,
  haft: 0,
  delikt: "Grundloses Anlegen von Handschellen",
  beschlagnahmung: "//",
  notiz: "-"
},

{
  kategorie: "BBG §1 - Verhaltensfehler im Dienst",
  paragraph: "§1 Abs. 1.2 BBG",
  bussgeld: 3500,
  haft: 0,
  delikt: "Unberechtigte Durchsuchung eines Fahrzeugs",
  beschlagnahmung: "//",
  notiz: "-"
},

{
  kategorie: "BBG §1 - Verhaltensfehler im Dienst",
  paragraph: "§1 Abs. 1.3 BBG",
  bussgeld: 2500,
  haft: 0,
  delikt: "Unberechtigte Durchsuchung einer Person",
  beschlagnahmung: "//",
  notiz: "-"
},

{
  kategorie: "BBG §1 - Verhaltensfehler im Dienst",
  paragraph: "§1 Abs. 1.4 BBG",
  bussgeld: 6000,
  haft: 0,
  delikt: "Unberechtigter Einsatz von Taser",
  beschlagnahmung: "//",
  notiz: "-"
},

{
  kategorie: "BBG §1 - Verhaltensfehler im Dienst",
  paragraph: "§1 Abs. 1.5 BBG",
  bussgeld: 10000,
  haft: 0,
  delikt: "Unberechtigter Einsatz von Schusswaffen",
  beschlagnahmung: "Waffe + Polizei Waffenschein",
  notiz: "-"
},

{
  kategorie: "BBG §1 - Verhaltensfehler im Dienst",
  paragraph: "§1 Abs. 1.6 BBG",
  bussgeld: 2500,
  haft: 0,
  delikt: "Unberechtigter Einsatz von Warnsignalen",
  beschlagnahmung: "//",
  notiz: "-"
},
{
  kategorie: "BBG §1 - Verhaltensfehler im Dienst",
  paragraph: "§1 Abs. 1.7 BBG",
  bussgeld: 0,
  haft: 120,
  delikt: "Korruption",
  beschlagnahmung: "Waffe + Polizei Waffenschein + Dienstmarke",
  notiz: "-"
},

{
  kategorie: "BBG §1 - Verhaltensfehler im Dienst",
  paragraph: "§1 Abs. 1.8 BBG",
  bussgeld: 5000,
  haft: 0,
  delikt: "Nicht diensttaugliches Verhalten",
  beschlagnahmung: "//",
  notiz: "-"
},

{
  kategorie: "BBG §1 - Verhaltensfehler im Dienst",
  paragraph: "§1 Abs. 1.9 BBG",
  bussgeld: 3500,
  haft: 0,
  delikt: "Nicht Einhaltung der Dienstvorschriften",
  beschlagnahmung: "//",
  notiz: "-"
},

{
  kategorie: "BBG §1 - Verhaltensfehler im Dienst",
  paragraph: "§1 Abs. 1.10 BBG",
  bussgeld: 7000,
  haft: 0,
  delikt: "OnDuty-Verstoß",
  beschlagnahmung: "//",
  notiz: "-"
},

{
  kategorie: "BBG §1 - Verhaltensfehler im Dienst",
  paragraph: "§1 Abs. 1.11 BBG",
  bussgeld: 7500,
  haft: 0,
  delikt: "Nicht Abnahme illegaler Gegenstände oder Telefon des TVs",
  beschlagnahmung: "//",
  notiz: "-"
},

{
  kategorie: "BBG §1 - Verhaltensfehler im Dienst",
  paragraph: "§1 Abs. 1.12 BBG",
  bussgeld: 6000,
  haft: 0,
  delikt: "Gefährdung von Zivilisten oder Kollegen",
  beschlagnahmung: "//",
  notiz: "-"
},

// =========================
// BBG §2 - Körperliche Integrität
// =========================

{
  kategorie: "BBG §2 - Körperliche Integrität",
  paragraph: "§2 Abs. 1 BBG",
  bussgeld: 8000,
  haft: 0,
  delikt: "Körperverletzung durch Schusswaffengebrauch",
  beschlagnahmung: "Waffe + Polizei Waffenschein",
  notiz: "-"
},

{
  kategorie: "BBG §2 - Körperliche Integrität",
  paragraph: "§2 Abs. 2 BBG",
  bussgeld: 10000,
  haft: 0,
  delikt: "Körperverletzung mit Todesfolge durch Schusswaffengebrauch",
  beschlagnahmung: "Waffe + Polizei Waffenschein",
  notiz: "-"
},

{
  kategorie: "BBG §2 - Körperliche Integrität",
  paragraph: "§2 Abs. 3 BBG",
  bussgeld: 5000,
  haft: 0,
  delikt: "Körperverletzung durch Tazergebrauch",
  beschlagnahmung: "Tazer",
  notiz: "-"
},

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
        Exekutive - Höchstmaß: 60 Mon. Haft / 75.000 $ - mit DOJ: 90 Mon. / 100.000 $
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-4">

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

          <div className="overflow-x-auto overflow-y-auto max-h-[800px]">

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

<div className="bg-[#1b1034] border border-purple-500/30 rounded-xl p-4 mt-4">

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
      5. Haben Sie Ihre Rechte verstanden?
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