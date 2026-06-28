# BioBudget.nl

Een snelle, statische groothandelswebshop voor een compact assortiment duurzame bouwmaterialen. Gebouwd met alleen HTML, CSS, JavaScript en JSON; geschikt voor GitHub Pages.

## Lokaal starten

Je kunt `index.html` direct openen. De webshop gebruikt dan de ingebouwde lokale productfallback, inclusief winkelwagen.

Voor ontwikkeling is een lokale webserver handiger, bijvoorbeeld vanuit deze map:

```sh
python -m http.server 8000
```

Open daarna `http://localhost:8000`. Een vergelijkbare lokale server van VSCodium/VS Code werkt ook.

## Producten toevoegen

1. Voeg een nieuw object toe aan `data/products.json`.
2. Gebruik een uniek numeriek `id` en vul alle bestaande velden in.
3. Voeg dezelfde productregel toe aan `FALLBACK_PRODUCTS` bovenaan `js/script.js`. Dit houdt de winkel ook werkend wanneer de HTML direct vanaf de schijf wordt geopend.
4. Controleer `producten.html` en `product.html?id=ID`.

De velden zijn:

- `id`: uniek nummer voor URL en winkelwagen
- `sku`: interne referentie
- `naam`, `merk` en `categorie`
- `prijs`: getal zonder euroteken, bijvoorbeeld `42.94`
- `korteOmschrijving` en `langeOmschrijving`
- `afbeelding`: relatief pad vanaf de hoofdmap
- `levertijd` en `eenheid`

Gebruik bij voorkeur de vijf bestaande categorienamen; de filterlijst sluit daarop aan.

## Prijzen aanpassen

Pas `prijs` aan in `data/products.json` én in de overeenkomstige regel van `FALLBACK_PRODUCTS` in `js/script.js`. Alle prijzen worden automatisch als Nederlandse eurobedragen en exclusief btw getoond. De huidige prijzen zijn afkomstig uit `Kernassortiment_overzicht_2026-06-28.xlsx`.

## Verzendkosten

GUTEX-houtvezelisolatie, ISOLENA-isolatierollen, ELKA-constructieplaten en EXIE-kalkhennep worden per pallet of bigbag verkocht en als palletzending behandeld. Zodra ten minste één palletproduct in de winkelwagen zit, wordt één keer € 80,00 exclusief btw gerekend. Een bestelling met uitsluitend pro clima-groothandelsbundels krijgt € 12,00 exclusief btw aan pakketverzendkosten.

De pallet-ID’s staan in `PALLET_PRODUCT_IDS` in `js/script.js`. Daar kunnen later eenvoudig afzonderlijke producten aan worden toegevoegd.

## Afbeeldingen toevoegen

Plaats webgeoptimaliseerde JPG-, PNG- of WebP-bestanden in `images/`. Gebruik duidelijke, kleine letters en koppel het bestand via bijvoorbeeld:

```json
"afbeelding": "images/gutex-thermoflex.webp"
```

Productafbeeldingen worden in de catalogus automatisch lazy-loaded.

## Contactgegevens aanpassen

Zoek projectbreed op de placeholders `[nummer]`, `[telefoonnummer]`, `[straat en huisnummer]` en `[postcode en plaats]`. Vervang ook `info@biobudget.nl` als het e-mailadres wijzigt. Pas bij een definitief domein de canonical- en Open Graph-URL’s en `sitemap.xml` aan.

## GitHub Pages

1. Zet alle bestanden in een GitHub-repository.
2. Open **Settings → Pages**.
3. Kies **Deploy from a branch**, de gewenste branch en map `/ (root)`.
4. Sla op. De site heeft geen buildstap nodig.

Bij publicatie op een project-URL in plaats van een eigen domein blijven de relatieve links werken. Voor correcte SEO moeten de absolute URL’s wel naar het uiteindelijke domein worden aangepast.

## Winkelwagen en offerte

De winkelwagen wordt lokaal in de browser opgeslagen onder `biobudget-cart`. De knop **Offerte aanvragen** opent een e-mail aan `info@biobudget.nl` met alle productregels, aantallen en het indicatieve totaal. Er is geen backend en er worden geen persoonsgegevens door de website verwerkt.

## Bron en selectie

Het Excelbestand in de projectmap is volledig geanalyseerd. Voor de vier oorspronkelijke categorieën zijn vier breed inzetbare, goed verkochte kernproducten gekozen. EXIE-kalkhennepisolatie is als vijfde categorie toegevoegd, omdat EXIE in het bronbestand de eerstvolgende leverancier op omzet is en de productgroep inhoudelijk iets nieuws toevoegt. Iedere bestelbare eenheid heeft een productwaarde van minimaal € 500 exclusief btw. Prijzen en basis-SKU’s volgen het bronbestand; waar nodig zijn meerdere bronverpakkingen samengevoegd tot één groothandelseenheid.
