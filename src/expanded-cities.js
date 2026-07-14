import { sourceLedger } from "./source-ledger.js";

function slugify(value) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 48);
}

export function sourceRecordToVenue(record) {
  const citySlug = {
    Bangkok: "bangkok",
    Pattaya: "pattaya",
    Hanoi: "hanoi",
    "Ho Chi Minh City": "ho-chi-minh-city",
    Jakarta: "jakarta",
    "Kuala Lumpur": "kuala-lumpur"
  }[record.city];

  return {
    slug: `${slugify(record.name) || "venue"}-${record.id}`,
    sourceRecordId: record.id,
    sourceEntries: [{
      source: record.source,
      page: record.page,
      note: record.note,
      price: record.price,
      status: record.status,
      url: record.url || null
    }],
    citySlug,
    cityName: record.city,
    name: record.name,
    area: record.area,
    category: record.category,
    type: record.category,
    summary: record.note,
    verdict: record.note,
    bestFor: [record.category, record.area],
    notIdealFor: record.status.includes("negative") ? ["Visitors prioritising source recommendations"] : [],
    atmosphere: record.note,
    priceSignal: record.price,
    priceItems: [{ label: "Source-observed price", value: record.price }],
    timing: "Check the source note and verify current hours",
    entryNotes: `Source record from ${record.source}, PDF page ${record.page}.`,
    watchFor: record.status,
    tips: [
      "Adults 20+ only; leave if age, identity, consent or legality is unclear."
    ],
    sourceUpdated: record.source,
    confidence: record.status,
    officialUrl: record.url || null,
    mapUrl: null
  };
}

function guide(details) {
  return { sections: [], checklist: [], venueSlugs: [], ...details };
}

function venuesFor(city) {
  return sourceLedger.filter((record) => record.city === city).map(sourceRecordToVenue);
}

function slugs(venues, names) {
  return names.map((name) => venues.find((item) => item.name === name)?.slug).filter(Boolean);
}

const hanoiVenues = venuesFor("Hanoi");
const hcmVenues = venuesFor("Ho Chi Minh City");
const jakartaVenues = venuesFor("Jakarta");
const klVenues = venuesFor("Kuala Lumpur");

const hanoiGuides = [
  guide({
    slug: "arrival-base-and-cash",
    title: "Hanoi Arrival, Base and Cash Playbook",
    kicker: "Before the first booking",
    summary: "Use app-based transport, choose the hotel policy before the district, and plan for a cash-heavy night.",
    verdict: "The Korean Town venues are concentrated but outside the historic centre; decide whether nightlife or sightseeing controls your base.",
    bestTime: "Before departure and on arrival",
    budget: "Carry VND cash; source notes local ATM and card constraints",
    sourceUpdated: "February 2026",
    sections: [
      { title: "Choose the base", body: "The source recommends apartment-style accommodation for visitors who need flexible guest policies. Fortuna Hotel is operationally convenient for Boss KTV and Spa de Palace." },
      { title: "Move by Grab", body: "Airport and city transport are described as inexpensive. Korean Town is roughly a 20-minute ride from the centre depending on traffic." },
      { title: "Separate the budgets", body: "Massage, KTV room, drinks, host seating, service and tips may be separate. Carry enough cash and confirm each layer before entry." }
    ],
    checklist: ["Install and fund Grab.", "Confirm accommodation guest policy.", "Carry local cash.", "Save venue location before leaving Wi-Fi.", "Do not rely on broker quotes."],
    venueSlugs: slugs(hanoiVenues, ["Boss KTV Hanoi", "Spa de Palace"])
  }),
  guide({
    slug: "korean-town-comparison",
    title: "Korean Town Massage Comparison",
    kicker: "Eight venues, one compact circuit",
    summary: "Compare full-service and partial-service formats by time, live roster and complete package price.",
    verdict: "Arrive around 3–5 PM, compare two venues, and commit only after the package is written down.",
    bestTime: "3–5 PM before the evening peak",
    budget: "VND 1m–4.8m observed packages",
    sourceUpdated: "February 2026",
    sections: [
      { title: "Pick the format", body: "Lolly, D Salon and Lee Spa are listed as full-service; Amazing VIP, Gangnam, Moon VIP, Tokyo 2 and Midu are partial-service formats." },
      { title: "Use the ratings as source opinion", body: "Roster and room ratings are the guide author's dated observations, not current guarantees." },
      { title: "Protect the booking", body: "Confirm provider, room, time, complete package and optional additions before paying. Cancel rather than disappearing from a reservation." }
    ],
    checklist: ["Choose full or partial service.", "Compare two live rosters.", "Confirm total duration.", "Ask whether tips are optional.", "Keep the receipt."],
    venueSlugs: slugs(hanoiVenues, ["Lolly Spa", "D Salon", "Lee Spa", "Moon VIP Massage"])
  }),
  guide({
    slug: "hanoi-ktv-bill-control",
    title: "Hanoi KTV Bill-Control Playbook",
    kicker: "Rooms, bottles and service layers",
    summary: "Hanoi KTV bills combine minimum spend, room tier, bottles, host service and tips.",
    verdict: "Boss is the price ceiling in the source; use its published layers to decide whether a lower-tier venue is actually cheaper.",
    bestTime: "After 8 PM; reserve for groups and weekends",
    budget: "Boss source example reaches several hundred USD before private arrangements",
    sourceUpdated: "February 2026",
    sections: [
      { title: "Write the stack", body: "Ask for room fee, minimum spend, tax/service, bottle package, host seating, mamasan/service tips and any outside arrangement separately." },
      { title: "Match room to group", body: "Large bottle thresholds can waive room fees, but only if the group would buy that bottle anyway." },
      { title: "Use smaller venues carefully", body: "F5 Plus, Royal, Level, Paris, Hoàng Gia and New 194 remain source listings; live price and age controls must be verified." }
    ],
    checklist: ["Get a written quote.", "Name one bill owner.", "Reject unordered items.", "Verify everyone is 20+.", "Photograph the final bill, not people."],
    venueSlugs: slugs(hanoiVenues, ["Boss KTV Hanoi", "Karaoke F5 Plus – New Branch", "Karaoke Royal Club", "Karaoke Level"])
  })
];

const hcmGuides = [
  guide({
    slug: "arrival-stay-and-money",
    title: "Ho Chi Minh City Arrival and Stay Playbook",
    kicker: "Remove friction first",
    summary: "Sort the visa, apartment or hotel policy, cash and app-based transport before choosing a nightlife format.",
    verdict: "Landmark 81 is the source's apartment-search anchor; District 1 is the practical base for massage, dining and KTV access.",
    bestTime: "Before departure",
    budget: "Source suggests a high cash reserve for multi-night KTV plans",
    sourceUpdated: "2026",
    sections: [
      { title: "Visa first", body: "The source directs mainland Chinese visitors to arrange a Vietnam tourist visa before travel. Use the current official process for your passport." },
      { title: "Choose guest policy, not just stars", body: "Apartment-style stays can be more flexible, but every property controls its own registration and visitor rules." },
      { title: "Use ride-hailing", body: "The source strongly discourages self-driving and describes city ride-hailing as inexpensive." }
    ],
    checklist: ["Verify visa requirements.", "Confirm property guest rules.", "Install Grab.", "Carry VND cash plus a backup card.", "Store valuables in the room safe."],
    venueSlugs: []
  }),
  guide({
    slug: "massage-and-spa-formats",
    title: "Ho Chi Minh Massage Format Playbook",
    kicker: "Full, partial or pool-villa",
    summary: "District 1 offers several fixed-price Korean-style formats; Bồng Lai adds private rooms and group villas.",
    verdict: "For one or two visitors, compare the fixed-price District 1 venues. Reserve the pool-villa complex only when group size and budget are settled.",
    bestTime: "4–6 PM for Bồng Lai; book the smaller venues ahead",
    budget: "VND 1.5m–2.4m fixed-price venues; VND 6.5m+ Bồng Lai",
    sourceUpdated: "2026",
    sections: [
      { title: "Fixed-price cluster", body: "Kiều Trinh, Linh Cherry, Massage Queen, Dodo, Starking and Dubai Luxury provide the source's clearest comparison set." },
      { title: "Booking discipline", body: "Several venues publish provider updates through messaging channels. Confirm the official channel, then respect the appointment." },
      { title: "Group-villa decision", body: "Bồng Lai villas start at three people and add room, pool and staffing layers. Get one total quote before travel." }
    ],
    checklist: ["Choose full or partial format.", "Confirm package duration.", "Verify official contact.", "Set group size before villa booking.", "Avoid broker deposits."],
    venueSlugs: slugs(hcmVenues, ["Kiều Trinh – High Class Service", "Linh Cherry", "Massage Queen", "Dodo Spa Ho Chi Minh", "Bồng Lai Các Massage"])
  }),
  guide({
    slug: "ktv-format-and-budget",
    title: "Ho Chi Minh KTV Format and Budget",
    kicker: "Ten venues, four formats",
    summary: "Korean, Chinese, sheer-costume and nude-format KTVs differ in language, roster, room spend and outside-booking patterns.",
    verdict: "Choose the format before the venue, arrive around 5:30–6:30 PM, and put one person in charge of every order.",
    bestTime: "5:30–6:30 PM for popular venues",
    budget: "VND 1.5m–3m+ per person before seating and other layers",
    sourceUpdated: "2026",
    sections: [
      { title: "Match the format", body: "Boss, GK22, Dragon-King, Matrix and Lux188 are source-listed presentation-led formats; 102 and Odyssey are Korean-style; Lucky and Las Vegas are the most explicit; Catwalk adds a flexible open hall." },
      { title: "Control the bill", body: "Room/minimum, alcohol, host seating, mamasan, service staff, food and optional entertainment must be itemised. Do not accept unordered bottles or devices." },
      { title: "Keep legality visible", body: "Vietnam prohibits e-cigarettes and nitrous oxide. PlayDude does not reproduce the source's contrary instructions." }
    ],
    checklist: ["Reserve the venue directly.", "Arrive before the roster is allocated.", "Name one bill owner.", "Decline unordered items.", "Use only adult, consensual and legal arrangements."],
    venueSlugs: slugs(hcmVenues, ["Boss Restaurant & KTV", "GK22 KTV", "Dragon-King KTV", "102 KTV", "Matrix KTV", "Catwalk"])
  })
];

const jakartaGuides = [
  guide({
    slug: "arrival-transport-and-cash",
    title: "Jakarta Arrival, Transport and Cash",
    kicker: "Plan for traffic",
    summary: "Visa, customs declaration, Grab pickup, toll roads and cash planning matter more than distance on the map.",
    verdict: "Pre-arrange the visa route, use the official Grab pickup point, and let traffic—not kilometres—set the schedule.",
    bestTime: "Before departure and at the airport",
    budget: "Source-observed visa on arrival IDR 500k; verify current official rules",
    sourceUpdated: "June 2025",
    sections: [
      { title: "Visa and declaration", body: "The source describes visa-on-arrival and electronic options plus a post-baggage customs/health QR process. Verify the current Indonesian immigration workflow." },
      { title: "Use app pickup", body: "Avoid unsolicited airport taxis. Follow signs to the official ride-hailing pickup and approve toll roads when they materially reduce travel time." },
      { title: "Choose the base", body: "Gajah Mada is closest to the source's value venues; Thamrin offers better hotels and drinks but longer traffic exposure." }
    ],
    checklist: ["Verify visa route.", "Keep hotel and onward tickets available.", "Install Grab.", "Carry IDR cash.", "Allow a large traffic buffer."],
    venueSlugs: []
  }),
  guide({
    slug: "choose-the-complex",
    title: "Choose the Jakarta Complex",
    kicker: "Value, mid-tier or premium",
    summary: "Classic, Travel, The Pool, Malioboro and VFour represent different trade-offs in price, room quality and roster breadth.",
    verdict: "Classic and Travel are value comparisons; The Pool is the cleanliness-and-hardware upgrade; Malioboro sits between; VFour's on-site rooms draw the strongest hygiene warning.",
    bestTime: "6–8 PM for Classic; 7–9 PM for Malioboro",
    budget: "IDR 375k value entry to IDR 3.55m international packages",
    sourceUpdated: "June 2025",
    sections: [
      { title: "Value", body: "Classic has separate first- and fifth-floor bars. Travel uses a similar price model with stronger source-rated atmosphere but older rooms." },
      { title: "Premium", body: "The Pool combines bar, pool, sauna and higher-standard rooms with local and international tiers." },
      { title: "Hygiene stop condition", body: "The source criticises VFour and some older hotel rooms. Inspect the room and leave if cleanliness is unacceptable." }
    ],
    checklist: ["Choose value or premium before leaving.", "Confirm the correct floor/entrance.", "Inspect room hygiene.", "Check the wristband bill.", "Verify adult age."],
    venueSlugs: slugs(jakartaVenues, ["Classic Hotel Jakarta", "Hotel Travel", "The Pool @ 1001 Hotel", "Malioboro Hotel & Spa", "VFour Hotel Bar Street"])
  }),
  guide({
    slug: "jakarta-first-night-route",
    title: "Jakarta First-Night Route",
    kicker: "One district, two comparisons",
    summary: "Do not cross the city collecting venue names. Compare two nearby options and keep the return journey simple.",
    verdict: "Stay near Gajah Mada for a value route or commit to The Pool/Malioboro as a destination night.",
    bestTime: "Leave before 6 PM",
    budget: "Carry venue price plus drinks, card fee and optional tip",
    sourceUpdated: "June 2025",
    sections: [
      { title: "Value route", body: "Start at Classic during the 6–8 PM window. If the room or roster does not fit, move to Travel rather than crossing Jakarta." },
      { title: "Day option", body: "Sugar and B Fashion are earlier fixed-duration alternatives. The source recommends arriving before 4 PM." },
      { title: "Exit plan", body: "Record the exact pickup point and keep enough battery and cash for the return trip." }
    ],
    checklist: ["Pick one district.", "Save two target venues.", "Set a price ceiling.", "Check room hygiene.", "Book the return ride before the phone battery is low."],
    venueSlugs: slugs(jakartaVenues, ["Classic Hotel Jakarta", "Hotel Travel", "Sugar Spa & Massage", "B Fashion Massage"])
  })
];

const klGuides = [
  guide({
    slug: "kuala-lumpur-reality-check",
    title: "Kuala Lumpur Reality Check",
    kicker: "A smaller, more discreet market",
    summary: "The source describes a fragmented, legally sensitive nightlife market rather than a walkable entertainment district.",
    verdict: "Treat Kuala Lumpur as a business-trip or stopover add-on, not a destination built around nightlife comparison.",
    bestTime: "Plan before leaving the hotel",
    budget: "RM250 entry-level source packages",
    sourceUpdated: "May 2025",
    sections: [
      { title: "Know the legal context", body: "Commercial sex is illegal in Malaysia. PlayDude records the source venues but does not guarantee their current legality, licensing or service menu." },
      { title: "Avoid street solicitation", body: "The source gives its strongest scam and hygiene warning to massage solicitation around Jalan Alor." },
      { title: "Use real venues", body: "Prefer an identifiable storefront with a current listing. Do not rely on anonymous photo-only delivery offers." }
    ],
    checklist: ["Check current law.", "Use a mapped storefront.", "Confirm price before travel.", "Avoid street touts.", "Leave if identity or age is unclear."],
    venueSlugs: slugs(klVenues, ["Four Seasons Spa", "Hokkaido Spa"])
  }),
  guide({
    slug: "kepong-comparison-route",
    title: "Kepong Three-Venue Comparison",
    kicker: "One cluster, one price tier",
    summary: "Bi Hai Qing Tian, Yangguang and Apple are the source's compact Kepong comparison set.",
    verdict: "Use Bi Hai Qing Tian as the first price reference, then compare the two nearby alternatives before paying.",
    bestTime: "Afternoon or early evening",
    budget: "RM250/1h and RM500/180m observed baseline",
    sourceUpdated: "May 2025",
    sections: [
      { title: "Start with the baseline", body: "Bi Hai Qing Tian is source-reported with 50+ providers and late hours. Yangguang and Apple are described as similar nearby alternatives." },
      { title: "Confirm the current menu", body: "The guide's price is dated May 2025. Ask for a current written package and total duration." },
      { title: "Stop if the listing moved", body: "Because the legal environment is sensitive, do not follow an unverified relocation or private address." }
    ],
    checklist: ["Confirm the storefront.", "Compare all three live menus.", "Use cash carefully.", "Do not prepay a broker.", "Keep return transport ready."],
    venueSlugs: slugs(klVenues, ["Bi Hai Qing Tian", "Yangguang", "Apple"])
  }),
  guide({
    slug: "city-centre-vs-spa-complex",
    title: "City Centre vs Spa Complex",
    kicker: "Choose convenience or facilities",
    summary: "Hokkaido and Genesis are city-centre options; Four Seasons adds a leisure complex and longer-stay menu outside the core.",
    verdict: "Use the city-centre pair for a short fixed-duration visit; choose Four Seasons only if the bath, buffet and rest facilities matter.",
    bestTime: "Midday to evening",
    budget: "RM88 entry plus RM250+ services at Four Seasons; RM250 city-centre baseline",
    sourceUpdated: "May 2025",
    sections: [
      { title: "City centre", body: "Hokkaido is near Fahrenheit 88 and source-priced at RM250/60 minutes. Genesis is listed as a comparable tier." },
      { title: "Sri Petaling", body: "Four Seasons is source-reported on the fifth floor of Endah Parade with bath, buffet, cinema, entertainment and rest zones." },
      { title: "No guarantees", body: "Verify current opening status, official address, price and legal service menu directly." }
    ],
    checklist: ["Choose convenience or facilities.", "Verify current address.", "Ask what entry includes.", "Confirm service duration.", "Avoid anonymous call-out listings."],
    venueSlugs: slugs(klVenues, ["Four Seasons Spa", "Hokkaido Spa", "Genesis Sauna Spa"])
  })
];

export const expandedCities = [
  {
    slug: "hanoi", name: "Hanoi", country: "Vietnam", status: "Field guide live", sourceUpdated: "February 2026",
    summary: "Hanoi combines a concentrated Korean Town massage cluster, several late-running city spas and a smaller hosted-KTV market anchored by Fortuna Hotel.",
    mood: "Compact clusters, cash-heavy, format-sensitive", bestFor: ["Korean-style massage comparison", "Small-group KTV", "Lower transport costs"], notIdealFor: ["Visitors expecting a Bangkok-sized nightlife grid"],
    firstNightArea: "Korean Town or Fortuna Hotel", costSignal: "VND 1m massage entry to premium KTV bottle-and-room nights", arrivalWindow: "3–5 PM massage; after 8 PM KTV",
    mainThing: "Choose Korean Town, the city-spa circuit or KTV. Crossing formats without a budget creates the surprise.",
    planning: [
      { label: "Base", value: "Central Hanoi / Korean Town", note: "Choose sightseeing access or venue concentration" },
      { label: "Transport", value: "Grab", note: "Source describes low city fares" },
      { label: "Cash", value: "VND required", note: "Many venue layers are cash-led" },
      { label: "Massage window", value: "3–5 PM", note: "Before the reported evening peak" },
      { label: "KTV window", value: "After 8 PM", note: "Reserve for larger groups" }
    ],
    areas: [
      { name: "Korean Town", bestFor: "Eight massage venues", atmosphere: "Concentrated and comparison-friendly", confidence: "Source dated Feb 2026", price: "VND 1m–4.8m", know: "Compare full and partial formats before booking." },
      { name: "Central Hanoi", bestFor: "Larger spa and pool formats", atmosphere: "Destination venues", confidence: "Source dated Feb 2026", price: "VND 1.5m–4m+", know: "Late hours are source claims; verify live." },
      { name: "Fortuna Hotel", bestFor: "Boss KTV and Spa de Palace", atmosphere: "Hotel-contained", confidence: "Source dated Feb 2026", price: "Premium layered KTV", know: "Room, bottle, seating and tips are separate." }
    ], guides: hanoiGuides, venues: hanoiVenues
  },
  {
    slug: "ho-chi-minh-city", name: "Ho Chi Minh City", country: "Vietnam", status: "Field guide live", sourceUpdated: "2026",
    summary: "Ho Chi Minh City has the broadest new-city dataset: fixed-price District 1 massage, a high-end pool-villa complex, hosted restaurants, DJ cafes and four distinct KTV formats.",
    mood: "High variety, reservation-led, layered KTV bills", bestFor: ["Format comparison", "Mandarin-friendly KTV", "Group nights"], notIdealFor: ["Visitors who will not appoint a bill owner"],
    firstNightArea: "District 1", costSignal: "VND 1.5m massage entry to VND 8m+ KTV layers", arrivalWindow: "4–6 PM spa; 5:30–6:30 PM KTV",
    mainThing: "Pick massage, hosted dining or one KTV format before booking. The city punishes vague plans with layered bills.",
    planning: [
      { label: "Base", value: "District 1 / Landmark 81 area", note: "Choose hotel policy before price" },
      { label: "Transport", value: "Grab", note: "Avoid self-driving" },
      { label: "Cash", value: "VND plus backup card", note: "ATM and card limits vary" },
      { label: "Spa window", value: "4–6 PM", note: "Best Bồng Lai source window" },
      { label: "KTV window", value: "5:30–6:30 PM", note: "Before roster allocation" }
    ],
    areas: [
      { name: "District 1", bestFor: "Fixed-price massage and central stay", atmosphere: "Accessible, reservation-friendly", confidence: "Source dated 2026", price: "VND 1.5m–2.4m", know: "Several venues require advance booking." },
      { name: "Bồng Lai complex", bestFor: "Single rooms and group villas", atmosphere: "High-budget destination", confidence: "Source dated 2026", price: "VND 6.5m+", know: "Villas require group commitment and a complete quote." },
      { name: "KTV circuit", bestFor: "Korean, Chinese, sheer and nude formats", atmosphere: "Reservation-led", confidence: "Source dated 2026", price: "Highly layered", know: "One person must control every order." }
    ], guides: hcmGuides, venues: hcmVenues
  },
  {
    slug: "jakarta", name: "Jakarta", country: "Indonesia", status: "Field guide live", sourceUpdated: "June 2025",
    summary: "Jakarta's source venues are hotel entertainment complexes rather than a walkable bar district, with value, mid-tier and premium tiers plus two daytime spas.",
    mood: "Traffic-heavy, value-rich, complex-based", bestFor: ["Price-led comparison", "Hotel entertainment complexes", "Day-spa alternatives"], notIdealFor: ["Cross-city venue hopping"],
    firstNightArea: "Gajah Mada / North-West Jakarta", costSignal: "IDR 375k value entry to IDR 3.55m premium international tiers", arrivalWindow: "Before 6 PM",
    mainThing: "Traffic is the real cover charge. Choose one complex tier and stay in that part of the city.",
    planning: [
      { label: "Visa", value: "Verify VOA / e-visa", note: "Use official Indonesian immigration" },
      { label: "Airport", value: "Official Grab pickup", note: "Avoid unsolicited cars" },
      { label: "Base", value: "Gajah Mada or Thamrin", note: "Value access versus hotel quality" },
      { label: "Traffic", value: "Large buffer", note: "Approve toll roads when useful" },
      { label: "Cash", value: "IDR plus card", note: "Keep small cash for fees and tips" }
    ],
    areas: [
      { name: "Gajah Mada / Kota", bestFor: "Classic and Travel value route", atmosphere: "Dense, old-school complexes", confidence: "Source dated Jun 2025", price: "From IDR 375k", know: "Correct entrance and floor matter." },
      { name: "1001 / Malioboro", bestFor: "Premium and multinational options", atmosphere: "Destination complexes", confidence: "Source dated Jun 2025", price: "IDR 1m–3.55m+", know: "Inspect what entry and wristband billing include." },
      { name: "Day-spa route", bestFor: "Sugar and B Fashion", atmosphere: "Earlier and fixed-duration", confidence: "Source dated Jun 2025", price: "IDR 680k–1.1m", know: "Visit before 4 PM." }
    ], guides: jakartaGuides, venues: jakartaVenues
  },
  {
    slug: "kuala-lumpur", name: "Kuala Lumpur", country: "Malaysia", status: "Field guide live", sourceUpdated: "May 2025",
    summary: "Kuala Lumpur has a smaller, dispersed and legally sensitive source set: one Sri Petaling leisure spa, a three-venue Kepong cluster and two city-centre options.",
    mood: "Discreet, dispersed, legally sensitive", bestFor: ["Business-trip add-on", "Small venue comparison", "Short fixed-duration visit"], notIdealFor: ["A nightlife-only trip", "Street solicitation"],
    firstNightArea: "Kepong or Bukit Bintang", costSignal: "RM250 baseline; RM88 entry plus services at Four Seasons", arrivalWindow: "Afternoon to early evening",
    mainThing: "Use an identifiable storefront, verify current law and price, and avoid anonymous delivery or street-tout offers.",
    planning: [
      { label: "Legal context", value: "Commercial sex is illegal", note: "Verify current law and venue licensing" },
      { label: "Transport", value: "Grab", note: "Venues are dispersed" },
      { label: "Avoid", value: "Jalan Alor touts", note: "Strongest source scam/hygiene warning" },
      { label: "Baseline", value: "RM250", note: "Source-observed short package" },
      { label: "Rule", value: "Storefront first", note: "Avoid anonymous photo-only offers" }
    ],
    areas: [
      { name: "Kepong", bestFor: "Three-venue comparison", atmosphere: "Local, late-running", confidence: "Source dated May 2025", price: "RM250–500", know: "Bi Hai Qing Tian sets the source baseline." },
      { name: "Bukit Bintang", bestFor: "Convenient city-centre visit", atmosphere: "Short fixed-duration", confidence: "Source dated May 2025", price: "RM250 observed", know: "Hokkaido is near Fahrenheit 88." },
      { name: "Sri Petaling", bestFor: "Leisure-spa facilities", atmosphere: "Bath, buffet and rest complex", confidence: "Source dated May 2025", price: "RM88 entry + services", know: "Verify current address and legal menu." }
    ], guides: klGuides, venues: klVenues
  }
];
