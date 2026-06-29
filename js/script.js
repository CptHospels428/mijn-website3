/* BioBudget.nl — gedeelde winkel- en cataloguslogica, zonder dependencies. */
const FALLBACK_PRODUCTS = [
  [1,"4250300806574","GUTEX Thermoflex 100 mm","GUTEX","Houtvezelisolatie",927.44,"Flexibele houtvezelisolatie voor dak, wand en plafond.","Een sterke basis voor natuurlijke isolatie. Deze flexibele houtvezelmat klemt stevig tussen houten stijlen en balken, is eenvoudig op maat te snijden en helpt warmte, geluid en vocht te reguleren. Formaat 135 × 57,5 cm, Rd 2,75; vier platen per pak.","images/gutex-thermoflex.webp","3–7 werkdagen","2 pallets à 37,26 m² (24 pakken, 74,52 m² totaal)"],
  [2,"GB102590","GUTEX Ultratherm 60 mm","GUTEX","Houtvezelisolatie",908.98,"Regenzekere onderdekplaat voor dak en wand.","Robuuste, diffuus-open houtvezelplaat met een hoge warmteopslag. De nauwkeurige profilering maakt een gesloten laag en beschermt de constructie tegen wind en weersinvloeden. Rd 1,40 en geschikt voor renovatie en nieuwbouw.","images/gutex-ultratherm.webp","3–7 werkdagen","pallet à 38,45 m² (36 platen)"],
  [3,"4250300800527","GUTEX Thermoroom 20 mm","GUTEX","Houtvezelisolatie",558.02,"Compacte binnenisolatieplaat met een prettige verwerking.","Een handzame houtvezelplaat voor de binnenzijde van buitenmuren en voor andere droge binnenconstructies. De plaat combineert isolatie met vochtregulering en draagt bij aan een aangenaam binnenklimaat. Formaat 50 × 120 cm, Rd 0,50.","images/gutex-thermoroom.webp","3–7 werkdagen","pallet à 57,60 m² (96 platen)"],
  [4,"4250300802538","GUTEX Multitherm T+G 160 mm","GUTEX","Houtvezelisolatie",744.74,"Drukvaste isolatieplaat voor gevel- en dakconstructies.","Veelzijdige, vochtwerende houtvezelplaat met tand-en-groefverbinding. Geschikt als buitenbeplanking op houtconstructies of massieve ondergronden. De plaat is diffuus-open, beperkt koudebruggen en heeft een Rd-waarde van 4,00.","images/gutex-ultratherm.webp","3–7 werkdagen","pallet à 14,78 m² (14 platen)"],
  [5,"GB102844","ISOLENA Optimal 40 mm","ISOLENA","Schapenwolisolatie",2348.60,"Natuurlijke warmte- en geluidsisolatie van 100% schapenwol.","Lichte isolatierol voor wanden, plafonds en vloeren. Schapenwol reguleert vocht, is prettig zonder beschermende kleding te verwerken en bestaat zonder synthetische steunvezels. Dikte 40 mm, Rd 1,04 en een dichtheid van 18 kg/m³.","images/isolena-optimal.jpg","5–10 werkdagen","pallet à 230,40 m² (32 rollen)"],
  [6,"GB102832","ISOLENA Premium 180 mm","ISOLENA","Schapenwolisolatie",2345.90,"Dikke isolatierol voor hoogwaardige dak- en wandisolatie.","Compacte schapenwolisolatie voor hoge isolatiediktes in één laag. De elastische rol sluit goed aan rondom leidingen en in houten raamwerken. De wol is vochtregulerend, hernieuwbaar en beschermd met Ionic Protect. Rd 5,14.","images/isolena-premium.jpg","5–10 werkdagen","pallet à 42,00 m² (28 rollen)"],
  [7,"GB102828","ISOLENA Optimal Plus 60 mm","ISOLENA","Schapenwolisolatie",2162.34,"Stevige schapenwolisolatie voor akoestische plafonds en binnenbouw.","Schapenwolisolatie met een dichtheid van 22 kg/m³ en een dragend vlies. De rol is bijzonder geschikt achter akoestische plafonds en combineert warmte-isolatie met geluidsabsorptie en luchtzuiverende eigenschappen. Dikte 60 mm, Rd 1,71.","images/isolena-optimal-plus.jpg","5–10 werkdagen","pallet à 115,20 m² (32 rollen)"],
  [8,"GB102842","ISOLENA Klemvilt 80 mm","ISOLENA","Schapenwolisolatie",2135.87,"Dichte schapenwolrol voor sterke warmte- en geluidsisolatie.","Hoogwaardige klemisolatie van 100% schapenwol voor scheidingswanden, installatielagen en plafonds. De dichtheid van 30 kg/m³ geeft extra akoestische prestaties. Dikte 80 mm, Rd 2,42.","images/isolena-klemmvilt.jpg","5–10 werkdagen","pallet à 67,20 m² (28 rollen)"],
  [9,"1AR02070","pro clima TESCON VANA","pro clima","Luchtdichting",506.25,"Allround tape voor luchtdichte verbindingen binnen en buiten.","Betrouwbare, met de hand afscheurbare systeemkleefband voor folies, houtplaten en gladde aansluitingen. De watervaste lijm hecht ook bij wisselende bouwomstandigheden en is geschikt voor duurzame lucht- en winddichting.","images/proclima-tescon-vana.jpg","2–5 werkdagen","groothandelsbundel à 15 rollen (60 mm × 30 m)"],
  [10,"10090","pro clima INTELLO 150 m²","pro clima","Luchtdichting",797.18,"Vochtvariabele damprem voor veilige isolatieconstructies.","Slimme damprem voor daken, wanden en plafonds. De vochtvariabele werking beschermt de isolatie in de winter en bevordert droging naar binnen in de zomer. Een brede, betaalbare keuze voor renovatie en nieuwbouw.","images/proclima-intello.jpg","2–5 werkdagen","2 rollen à 75 m² (150 m² totaal)"],
  [11,"12900","pro clima SOLITEX MENTO 3000","pro clima","Luchtdichting",508.20,"Dampopen, slagregendichte folie voor dak en gevel.","Stevige buitenfolie die vocht actief naar buiten afvoert en de constructie tegen wind en regen beschermt. Geschikt als onderdakfolie op beschot, houtvezelplaat en isolatiemateriaal.","images/proclima-solitex-mento.jpg","2–5 werkdagen","2 rollen à 75 m² (150 m² totaal)"],
  [12,"12769","pro clima ORCON CLASSIC","pro clima","Luchtdichting",508.95,"Universele aansluitlijm voor luchtdichtingsfolies.","Elastische lijm voor duurzame aansluitingen van dampremmen en luchtdichtingsbanen op hout, metselwerk, beton en andere bouwondergronden. De praktische koker past in een standaard kitpistool.","images/proclima-orcon-classic.jpg","2–5 werkdagen","groothandelsbundel à 45 kokers van 310 ml"],
  [13,"GB102717","ELKA esb P5 T+G 12 mm","ELKA","Constructieplaten",906.29,"Sterke, gladde constructieplaat met tand en groef.","Emissiearme constructieplaat van vers naaldhout voor droge en vochtige toepassingen. De plaat is maatvast, goed te schroeven en dankzij de gladde afwerking direct bruikbaar voor veel binnenconstructies. Formaat 258 × 67,5 cm.","images/elka-esb12.jpg","3–7 werkdagen","pallet à 130,50 m² (75 platen)"],
  [14,"GB102718","ELKA esb P5 T+G 15 mm","ELKA","Constructieplaten",966.79,"Veelzijdige constructieplaat voor wand, vloer en dak.","De populaire middendikte voor stevige betimmeringen en houtskeletbouw. Gemaakt van vers naaldhout, rondom voorzien van tand en groef en zorgvuldig geschuurd. Formaat 258 × 67,5 cm.","images/elka-esb15.jpg","3–7 werkdagen","pallet à 104,40 m² (60 platen)"],
  [15,"GB102719","ELKA esb P5 T+G 18 mm","ELKA","Constructieplaten",869.99,"Dikke constructieplaat voor zwaarder belaste toepassingen.","Robuuste P5-plaat met hoge schroefvastheid en een geringe zwelling. De tand-en-groefranden sluiten netjes aan en maken de plaat geschikt voor dragende toepassingen in droge en vochtige omstandigheden. Formaat 258 × 67,5 cm.","images/elka-esb18.jpg","3–7 werkdagen","pallet à 85,26 m² (49 platen)"],
  [16,"GB102724","ELKA Vita 3s T+G 19 mm","ELKA","Constructieplaten",2009.93,"Massieve drielaagse constructieplaat van naaldhout.","Vormvaste drielaagse plaat voor zichtwerk, houtskeletbouw en constructieve toepassingen. De tand-en-groefverbinding zorgt voor een nette aansluiting en de natuurlijke houtuitstraling maakt afwerking vaak overbodig. Formaat 252,5 × 102,5 cm.","images/elka-esb12.jpg","3–7 werkdagen","pallet à 77,70 m² (30 platen)"],
  [17,"6150550973997 × 2","EXIE CaNaCrete","EXIE","Kalkhennepisolatie",670.36,"Natuurlijke stortklare kalkhennepmix voor monolithische isolatie.","Voorbereide kalkhennepmix voor naadloze, dampopen isolatielagen in wand- en renovatieconstructies. De combinatie van hennepscheven en kalk helpt warmte en vocht te bufferen. Deze groothandelseenheid bestaat uit twee bigbags.","images/exie-canacrete.jpg","5–10 werkdagen","2 bigbags à 1,20 m³ / 600 kg"],
  [18,"6150546996986 × 2","EXIE CaNaDry Bigbag","EXIE","Kalkhennepisolatie",552.14,"Droge kalkhennepisolatie voor snel vullen zonder droogtijd.","Droge biocomposietmix van hennepscheven en kalk voor wanden, daken, plafonds en vloeren. CaNaDry wordt los in een bekisting aangebracht en kan direct worden afgewerkt. Geschikt voor renovatie, restauratie en nieuwbouw.","images/exie-canadry.jpg","5–10 werkdagen","2 bigbags à 1,20 m³ / 240 kg"],
  [19,"GB104014","EXIE CaNaDry 40 zakken","EXIE","Kalkhennepisolatie",761.71,"Dezelfde droge kalkhennepmix in handzame bouwplaatszakken.","Pallet met veertig zakken CaNaDry voor projecten waar losse zakken praktischer zijn dan een bigbag. De droge mix vormt een naadloze, dampopen isolatielaag en biedt natuurlijke warmte-, vocht- en geluidsregulering.","images/exie-canadry.jpg","5–10 werkdagen","pallet à 40 zakken van 55 liter (2,20 m³ / 450 kg)"]
].map(p => ({id:p[0],sku:p[1],naam:p[2],merk:p[3],categorie:p[4],prijs:p[5],korteOmschrijving:p[6],langeOmschrijving:p[7],afbeelding:p[8],levertijd:p[9],eenheid:p[10]}));

const money = value => new Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR" }).format(value);
const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#039;" }[char]));
const PALLET_PRODUCT_IDS = new Set([1, 2, 3, 4, 5, 6, 7, 8, 13, 14, 15, 16, 17, 18, 19]);
const isPalletProduct = product => PALLET_PRODUCT_IDS.has(product.id);
const PRODUCT_ORDER_RULES = {
  1: { factor: 2, minimum: 2, eenheid: "1 pallet à 37,26 m² (12 pakken)" },
  2: { factor: 1, minimum: 1, eenheid: "1 pallet à 38,45 m² (36 platen)" },
  3: { factor: 1, minimum: 1, eenheid: "1 pallet à 57,60 m² (96 platen)" },
  4: { factor: 1, minimum: 1, eenheid: "1 pallet à 14,78 m² (14 platen)" },
  5: { factor: 1, minimum: 1, eenheid: "1 pallet à 230,40 m² (32 rollen)" },
  6: { factor: 1, minimum: 1, eenheid: "1 pallet à 42,00 m² (28 rollen)" },
  7: { factor: 1, minimum: 1, eenheid: "1 pallet à 115,20 m² (32 rollen)" },
  8: { factor: 1, minimum: 1, eenheid: "1 pallet à 67,20 m² (28 rollen)" },
  9: { factor: 15, minimum: 15, eenheid: "1 rol (60 mm × 30 m)" },
  10: { factor: 2, minimum: 2, eenheid: "1 rol à 75 m²" },
  11: { factor: 2, minimum: 2, eenheid: "1 rol à 75 m²" },
  12: { factor: 45, minimum: 45, eenheid: "1 koker van 310 ml" },
  13: { factor: 1, minimum: 1, eenheid: "1 pallet à 130,50 m² (75 platen)" },
  14: { factor: 1, minimum: 1, eenheid: "1 pallet à 104,40 m² (60 platen)" },
  15: { factor: 1, minimum: 1, eenheid: "1 pallet à 85,26 m² (49 platen)" },
  16: { factor: 1, minimum: 1, eenheid: "1 pallet à 77,70 m² (30 platen)" },
  17: { factor: 2, minimum: 2, eenheid: "1 bigbag à 1,20 m³ / 300 kg" },
  18: { factor: 2, minimum: 2, eenheid: "1 bigbag à 1,20 m³ / 120 kg" },
  19: { factor: 1, minimum: 1, eenheid: "1 pallet à 40 zakken van 55 liter (2,20 m³ / 450 kg)" }
};
const orderInfo = product => PRODUCT_ORDER_RULES[product.id] || { factor: 1, minimum: 1, eenheid: product.eenheid };
const unitPrice = product => product.prijs / orderInfo(product).factor;
const orderUnitName = (order, count) => {
  const singular = order.eenheid.match(/^1\s+(\S+)/)?.[1] || "stuk";
  if (count === 1) return singular;
  return { pallet: "pallets", rol: "rollen", koker: "kokers", bigbag: "bigbags" }[singular] || `${singular}s`;
};
const shippingFor = (cart, products) => {
  const counts = cart.reduce((total, item) => {
    const product = products.find(candidate => candidate.id === item.id);
    if (!product) return total;
    if (isPalletProduct(product)) total.pallets += item.aantal;
    else total.pakketten += item.aantal;
    return total;
  }, { pallets: 0, pakketten: 0 });

  const palletKosten = counts.pallets * 80;
  const pakketKosten = counts.pakketten * 12;
  return {
    ...counts,
    palletKosten,
    pakketKosten,
    kosten: palletKosten + pakketKosten
  };
};

async function getProducts() {
  if (location.protocol === "file:") return FALLBACK_PRODUCTS;
  try {
    const response = await fetch("data/products.json");
    if (!response.ok) throw new Error("Productdata kon niet worden geladen.");
    return await response.json();
  } catch (error) {
    console.warn(error.message, "Lokale productdata wordt gebruikt.");
    return FALLBACK_PRODUCTS;
  }
}

function getCart() {
  try { return JSON.parse(localStorage.getItem("biobudget-cart")) || []; }
  catch { return []; }
}

function saveCart(cart) {
  localStorage.setItem("biobudget-cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const count = getCart().reduce((sum, item) => sum + item.aantal, 0);
  document.querySelectorAll(".cart-count").forEach(el => el.textContent = count);
}

function getCartDialog() {
  let dialog = document.querySelector("#cart-dialog");
  if (dialog) return dialog;

  dialog = document.createElement("dialog");
  dialog.id = "cart-dialog";
  dialog.className = "cart-dialog";
  dialog.setAttribute("aria-labelledby", "cart-dialog-title");
  dialog.innerHTML = `<div class="cart-dialog-content">
    <button class="dialog-close" type="button" data-dialog-close aria-label="Melding sluiten">×</button>
    <span class="dialog-check" aria-hidden="true">✓</span>
    <h2 id="cart-dialog-title">Toegevoegd aan je winkelwagen</h2>
    <p>Het product staat klaar. Je kunt naar je winkelwagen of rustig verder winkelen.</p>
    <div class="dialog-actions">
      <button class="button secondary" type="button" data-dialog-close>Verder winkelen</button>
      <a class="button" href="winkelwagen.html">Naar winkelwagen (<span data-dialog-count>0</span>)</a>
    </div>
  </div>`;
  document.body.append(dialog);

  dialog.addEventListener("click", event => {
    if (event.target === dialog || event.target.closest("[data-dialog-close]")) dialog.close();
  });
  return dialog;
}

function showCartDialog() {
  const dialog = getCartDialog();
  const count = getCart().reduce((sum, item) => sum + item.aantal, 0);
  dialog.querySelector("[data-dialog-count]").textContent = count;
  if (!dialog.open) dialog.showModal();
}

function addToCart(id, aantal = 1) {
  const cart = getCart();
  const existing = cart.find(item => item.id === id);
  if (existing) existing.aantal += aantal;
  else cart.push({ id, aantal: Math.max(aantal, PRODUCT_ORDER_RULES[id]?.minimum || 1) });
  saveCart(cart);
  showCartDialog();
  const button = document.querySelector(`[data-add="${id}"]`);
  if (button) {
    const original = button.textContent;
    button.textContent = "Toegevoegd ✓";
    setTimeout(() => { button.textContent = original; }, 1200);
  }
}

function productCard(product) {
  const order = orderInfo(product);
  return `<article class="product-card">
    <a class="product-image" href="product.html?id=${product.id}" aria-label="Bekijk ${escapeHtml(product.naam)}">
      <img src="${product.afbeelding}" alt="${escapeHtml(product.naam)}" loading="lazy" width="480" height="360">
    </a>
    <div class="product-body">
      <p class="product-meta">${escapeHtml(product.merk)} · ${escapeHtml(product.categorie)}</p>
      <h2 class="product-title"><a href="product.html?id=${product.id}">${escapeHtml(product.naam)}</a></h2>
      <div class="product-bottom">
        <span class="price">${money(unitPrice(product))} <span class="vat">excl. btw</span></span>
        <p class="delivery">${escapeHtml(order.eenheid)}<br>Minimaal ${order.minimum} ${orderUnitName(order, order.minimum)} · levering ${escapeHtml(product.levertijd)}</p>
        <div class="card-actions">
          <a class="button secondary small" href="product.html?id=${product.id}">Bekijk product</a>
          <button class="button small" type="button" data-add="${product.id}">In winkelwagen</button>
        </div>
      </div>
    </div>
  </article>`;
}

async function initCatalog() {
  const grid = document.querySelector("#product-grid");
  if (!grid) return;
  const products = await getProducts();
  const search = document.querySelector("#product-search");
  const count = document.querySelector("#result-count");
  const params = new URLSearchParams(location.search);
  const brandButtons = [...document.querySelectorAll("[data-brand]")];
  let activeBrand = params.get("merk") || "";

  function updateButtons() {
    brandButtons.forEach(button => {
      const active = button.dataset.brand === activeBrand;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  }

  function render() {
    const query = search.value.trim().toLocaleLowerCase("nl");
    const shown = products.filter(product => {
      const searchable = `${product.naam} ${product.merk} ${product.categorie}`.toLocaleLowerCase("nl");
      return (!query || searchable.includes(query)) && (!activeBrand || product.merk === activeBrand);
    });
    count.textContent = `${shown.length} ${shown.length === 1 ? "product" : "producten"}`;
    grid.innerHTML = shown.length ? shown.map(productCard).join("") : `<div class="empty-state"><h2>Geen producten gevonden</h2><p>Probeer een andere zoekterm of wis het actieve merkfilter.</p></div>`;
  }
  search.addEventListener("input", render);
  brandButtons.forEach(button => button.addEventListener("click", () => {
    activeBrand = activeBrand === button.dataset.brand ? "" : button.dataset.brand;
    updateButtons();
    render();
  }));
  grid.addEventListener("click", event => {
    const button = event.target.closest("[data-add]");
    if (button) addToCart(Number(button.dataset.add));
  });
  updateButtons();
  render();
}

async function initProductDetail() {
  const target = document.querySelector("#product-detail");
  if (!target) return;
  const products = await getProducts();
  const id = Number(new URLSearchParams(location.search).get("id"));
  const product = products.find(item => item.id === id);
  if (!product) {
    target.innerHTML = `<div class="empty-state"><h1>Product niet gevonden</h1><p>Dit product bestaat niet of is niet meer beschikbaar.</p><a class="button" href="index.html#producten">Terug naar producten</a></div>`;
    return;
  }
  document.title = `${product.naam} | BioBudget.nl`;
  document.querySelector('meta[name="description"]')?.setAttribute("content", product.korteOmschrijving);
  const order = orderInfo(product);
  target.innerHTML = `<div class="breadcrumb"><a href="index.html#producten">Producten</a> / ${escapeHtml(product.categorie)}</div>
    <div class="detail-grid">
      <div class="detail-image"><img src="${product.afbeelding}" alt="${escapeHtml(product.naam)}" width="640" height="520"></div>
      <article class="detail-content">
        <p class="product-meta">${escapeHtml(product.merk)} · SKU ${escapeHtml(product.sku)}</p>
        <h1>${escapeHtml(product.naam)}</h1>
        <span class="price">${money(unitPrice(product))} <span class="vat">per eenheid, excl. btw</span></span>
        <p class="lead">${escapeHtml(product.korteOmschrijving)}</p>
        <p class="detail-description">${escapeHtml(product.langeOmschrijving)}</p>
        <dl class="specs">
          <div class="spec-row"><dt>Merk</dt><dd>${escapeHtml(product.merk)}</dd></div>
          <div class="spec-row"><dt>Categorie</dt><dd>${escapeHtml(product.categorie)}</dd></div>
          <div class="spec-row"><dt>Eenheid</dt><dd>${escapeHtml(order.eenheid)}</dd></div>
          <div class="spec-row"><dt>Minimum</dt><dd>${order.minimum} ${orderUnitName(order, order.minimum)}</dd></div>
          <div class="spec-row"><dt>Levertijd</dt><dd>${escapeHtml(product.levertijd)}</dd></div>
          <div class="spec-row"><dt>Verzending</dt><dd>${isPalletProduct(product) ? "Palletzending · € 80,00 excl. btw" : "Pakketverzending · € 12,00 excl. btw"}</dd></div>
        </dl>
        <button class="button" type="button" data-add="${product.id}">In winkelwagen${order.minimum > 1 ? ` (min. ${order.minimum})` : ""}</button>
      </article>
    </div>`;
  target.addEventListener("click", event => {
    const button = event.target.closest("[data-add]");
    if (button) addToCart(Number(button.dataset.add));
  });
}

async function initCart() {
  const target = document.querySelector("#cart-content");
  if (!target) return;
  const products = await getProducts();

  function render() {
    const cart = getCart();
    if (!cart.length) {
      target.innerHTML = `<div class="empty-state"><h2>Je winkelwagen is nog leeg</h2><p>Bekijk het compacte assortiment op de homepage.</p><a class="button" href="index.html#producten">Bekijk producten</a></div>`;
      return;
    }
    let cartAdjusted = false;
    cart.forEach(item => {
      const product = products.find(candidate => candidate.id === item.id);
      if (!product) return;
      const minimum = orderInfo(product).minimum;
      if (item.aantal < minimum) {
        item.aantal = minimum;
        cartAdjusted = true;
      }
    });
    if (cartAdjusted) saveCart(cart);

    const rows = cart.map(item => {
      const product = products.find(p => p.id === item.id);
      if (!product) return "";
      const order = orderInfo(product);
      return `<article class="cart-item">
        <img class="cart-thumb" src="${product.afbeelding}" alt="" width="92" height="74" loading="lazy">
        <div><h3><a href="product.html?id=${product.id}">${escapeHtml(product.naam)}</a></h3><p>${escapeHtml(order.eenheid)} · minimaal ${order.minimum} ${orderUnitName(order, order.minimum)}</p></div>
        <label><span class="visually-hidden">Aantal ${escapeHtml(product.naam)}</span><input class="qty-input" type="number" min="${order.minimum}" max="999" value="${item.aantal}" data-qty="${product.id}"></label>
        <span class="cart-price">${money(unitPrice(product) * item.aantal)}</span>
        <button class="remove-item" type="button" data-remove="${product.id}">Verwijder</button>
      </article>`;
    }).join("");
    const subtotal = cart.reduce((sum, item) => {
      const product = products.find(p => p.id === item.id);
      return sum + (product ? unitPrice(product) * item.aantal : 0);
    }, 0);
    const shipping = shippingFor(cart, products);
    const total = subtotal + shipping.kosten;
    target.innerHTML = `<div class="cart-layout">
      <div class="cart-list">${rows}</div>
      <aside class="cart-summary">
        <h2>Overzicht</h2>
        <div class="summary-row"><span>Subtotaal producten</span><strong>${money(subtotal)}</strong></div>
        ${shipping.pallets ? `<div class="summary-row"><span>Palletzendingen (${shipping.pallets} × € 80,00)</span><strong>${money(shipping.palletKosten)}</strong></div>` : ""}
        ${shipping.pakketten ? `<div class="summary-row"><span>Pakketverzendingen (${shipping.pakketten} × € 12,00)</span><strong>${money(shipping.pakketKosten)}</strong></div>` : ""}
        <div class="summary-row summary-total"><span>Totaal</span><span>${money(total)}</span></div>
        <p class="small-print">Alle bedragen zijn exclusief btw. Verzendkosten worden per besteld artikel berekend: € 80,00 per palletzending en € 12,00 per pakketverzending.</p>
        <a class="button" id="quote-button" href="#">Offerte aanvragen</a>
      </aside>
    </div>`;
    document.querySelector("#quote-button").href = makeQuoteMailto(cart, products, subtotal, shipping, total);
  }

  target.addEventListener("change", event => {
    const input = event.target.closest("[data-qty]");
    if (!input) return;
    const cart = getCart();
    const item = cart.find(row => row.id === Number(input.dataset.qty));
    const product = products.find(candidate => candidate.id === Number(input.dataset.qty));
    if (item && product) {
      const minimum = orderInfo(product).minimum;
      item.aantal = Math.max(minimum, Number(input.value) || minimum);
    }
    saveCart(cart);
    render();
  });
  target.addEventListener("click", event => {
    const remove = event.target.closest("[data-remove]");
    if (!remove) return;
    saveCart(getCart().filter(item => item.id !== Number(remove.dataset.remove)));
    render();
  });
  render();
}

function makeQuoteMailto(cart, products, subtotal, shipping, total) {
  const lines = ["Beste BioBudget.nl,", "", "Graag ontvang ik een offerte voor:", ""];
  cart.forEach(item => {
    const product = products.find(p => p.id === item.id);
    if (product) lines.push(`${item.aantal} × ${product.naam} (${orderInfo(product).eenheid}) — ${money(unitPrice(product) * item.aantal)} excl. btw`);
  });
  lines.push(
    "",
    `Subtotaal producten: ${money(subtotal)} excl. btw`,
    ...(shipping.pallets ? [`Palletzendingen (${shipping.pallets} × € 80,00): ${money(shipping.palletKosten)} excl. btw`] : []),
    ...(shipping.pakketten ? [`Pakketverzendingen (${shipping.pakketten} × € 12,00): ${money(shipping.pakketKosten)} excl. btw`] : []),
    `Indicatief totaal: ${money(total)} excl. btw`,
    "",
    "Mijn contactgegevens:",
    "Naam:",
    "Telefoon:",
    "Afleveradres:",
    "",
    "Met vriendelijke groet,"
  );
  return `mailto:info@biobudget.nl?subject=${encodeURIComponent("Offerteaanvraag BioBudget.nl")}&body=${encodeURIComponent(lines.join("\n"))}`;
}

function initContactForm() {
  const form = document.querySelector("#contact-form");
  if (!form) return;
  form.addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(form);
    const body = `Naam: ${data.get("naam")}\nE-mail: ${data.get("email")}\nTelefoon: ${data.get("telefoon") || "-"}\n\n${data.get("bericht")}`;
    location.href = `mailto:info@biobudget.nl?subject=${encodeURIComponent(data.get("onderwerp"))}&body=${encodeURIComponent(body)}`;
  });
}

function initMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".site-nav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());
  updateCartCount();
  initMenu();
  initCatalog();
  initProductDetail();
  initCart();
  initContactForm();
});
