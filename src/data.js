import { expandedCities } from "./expanded-cities.js";

const FIELD_NOTE = "Founder-sourced field note";

function venue(details) {
  return {
    bestFor: [],
    notIdealFor: [],
    priceItems: [],
    tips: [],
    watchFor: "Prices, line-ups, hours, and venue policies can change without notice.",
    confidence: FIELD_NOTE,
    officialUrl: null,
    mapUrl: null,
    ...details
  };
}

function guide(details) {
  return {
    sections: [],
    checklist: [],
    venueSlugs: [],
    ...details
  };
}

const bangkokVenues = [
  venue({
    slug: "thermae-cafe",
    name: "Thermae Cafe",
    area: "Asok / Nana",
    category: "Independent",
    type: "Independent meeting point",
    summary: "A long-running, drink-entry meeting point beneath Ruamchitt Plaza Hotel. The venue sells drinks; any private arrangement is independent of the venue.",
    verdict: "Efficient and low-commitment, but less transparent than a managed venue.",
    bestFor: ["Solo visitors", "Late starts", "Visitors who dislike bar tabs"],
    notIdealFor: ["Anyone expecting venue-managed pricing", "Visitors uncomfortable negotiating directly"],
    atmosphere: "Crowded, transactional, and easy to enter without committing beyond a drink.",
    priceSignal: "Low entry cost; independent arrangements vary",
    priceItems: [
      { label: "Entry", value: "Purchase a drink" },
      { label: "Observed short arrangement", value: "THB 2,500-3,500" },
      { label: "Observed longer arrangement", value: "THB 5,000-8,000" },
      { label: "Nearby short-stay room", value: "THB 500-700" }
    ],
    timing: "Reported 8 PM-2 AM; strongest field-note window 8:30-10:30 PM",
    entryNotes: "Located below the Ruamchitt Plaza Hotel between Asok and Nana BTS. Photography is not appropriate.",
    watchFor: "Independent workers are not managed or medically screened by the venue. Confirm adult age, boundaries, total price, duration, and payment timing before leaving.",
    tips: ["Bring cash and agree the complete price before leaving.", "Use a licensed ride-hailing app rather than curbside cars.", "Leave if age, identity, or consent is unclear."],
    sourceUpdated: "May 2026",
    mapUrl: "https://maps.app.goo.gl/smzVHzdAB9M6AjPWA"
  }),
  venue({
    slug: "wonder-massage",
    name: "Wonder Massage",
    area: "Sukhumvit",
    category: "Adult massage",
    type: "Japanese-style adult massage",
    summary: "A large-roster, value-oriented option highlighted in the May 2026 field notes.",
    verdict: "A practical first comparison stop when selection matters more than luxury.",
    bestFor: ["First-time comparison", "Value focus", "Afternoon visits"],
    priceSignal: "From THB 2,000 in the source notes",
    priceItems: [{ label: "Observed starting package", value: "THB 2,000" }],
    timing: "Category sweet spot: 2-7 PM",
    entryNotes: "Ask to see the current package list before choosing.",
    tips: ["Confirm duration and inclusions.", "Pay only the posted package price at reception.", "Do not photograph staff."],
    sourceUpdated: "May 2026",
    mapUrl: "https://maps.app.goo.gl/WzunhWH1EFBa6VKW9"
  }),
  venue({
    slug: "eden-massage",
    name: "Eden Massage",
    area: "Sukhumvit",
    category: "Adult massage",
    type: "Japanese-style adult massage",
    summary: "A communication-friendly, appearance-led venue with a reported starting price above the value tier.",
    verdict: "Worth comparing when easy communication matters.",
    bestFor: ["Mandarin-speaking visitors", "Appearance-led selection"],
    priceSignal: "From THB 2,500 in the source notes",
    priceItems: [{ label: "Observed starting package", value: "THB 2,500" }],
    timing: "2-7 PM",
    entryNotes: "Request the current menu and confirm the selected package in writing.",
    tips: ["Use the displayed menu, not a verbal summary.", "Confirm whether tips are optional."],
    sourceUpdated: "May 2026",
    mapUrl: "https://maps.app.goo.gl/Zvfe66CYDkVkmjFQA"
  }),
  venue({
    slug: "exotic-massage-bangkok",
    name: "Exotic Massage Bangkok",
    area: "Sukhumvit",
    category: "Adult massage",
    type: "Japanese-style adult massage",
    summary: "A broad-selection venue positioned in the field notes as a service-and-value balance.",
    verdict: "A sensible second stop for comparison shoppers.",
    bestFor: ["Value", "Broader selection"],
    priceSignal: "From THB 2,000 in the source notes",
    priceItems: [{ label: "Observed starting package", value: "THB 2,000" }],
    timing: "2-7 PM",
    entryNotes: "Check the current roster and menu on arrival.",
    tips: ["Confirm package duration.", "Keep the receipt until departure."],
    sourceUpdated: "May 2026",
    mapUrl: "https://maps.app.goo.gl/ZN3BQu3c4cMmtzfV7"
  }),
  venue({
    slug: "canary-massage-bangkok",
    name: "Canary Massage",
    area: "Sukhumvit",
    category: "Adult massage",
    type: "Premium themed massage",
    summary: "A premium, appearance-led venue with three reported package tiers.",
    verdict: "Higher spend, more curated presentation; confirm what each tier actually includes.",
    bestFor: ["Premium presentation", "Visitors who prefer clear tiers"],
    notIdealFor: ["Tight budgets"],
    priceSignal: "THB 4,500-6,500 observed tiers",
    priceItems: [
      { label: "Tier 1", value: "THB 4,500" },
      { label: "Tier 2", value: "THB 5,500" },
      { label: "Tier 3", value: "THB 6,500" }
    ],
    timing: "Afternoon to early evening",
    entryNotes: "Ask how the tiers differ before paying.",
    tips: ["Do not assume the highest tier means a longer duration.", "Confirm all extras before the session."],
    sourceUpdated: "May 2026",
    mapUrl: "https://maps.app.goo.gl/sQjxNB4KagnGgy8e9"
  }),
  venue({
    slug: "psyche-dream-spa",
    name: "Psyche Dream Spa",
    area: "Bangkok",
    category: "Adult massage",
    type: "Luxury themed spa",
    summary: "A high-budget themed venue with private booking support and multiple room concepts.",
    verdict: "A specialist luxury option, not a casual first stop.",
    bestFor: ["High budgets", "Private advance planning", "Themed rooms"],
    notIdealFor: ["Walk-in value seekers"],
    priceSignal: "THB 7,500 for a reported 90-minute package",
    priceItems: [
      { label: "Observed 90-minute package", value: "THB 7,500" },
      { label: "Observed multi-person package", value: "THB 11,000" }
    ],
    timing: "Reserve before travelling across town",
    entryNotes: "Request a written package summary and current room list.",
    tips: ["Confirm the total before paying a deposit.", "Use official contact channels only."],
    sourceUpdated: "May 2026",
    mapUrl: "https://maps.app.goo.gl/NV43QbWUF7sP72cV7"
  }),
  venue({
    slug: "boss-massage-33",
    name: "BOSS Massage 33",
    area: "Sukhumvit Soi 33",
    category: "Adult massage",
    type: "Japanese-style adult massage",
    summary: "A lower-entry-price option in the dense Soi 33 comparison corridor.",
    verdict: "Useful for value comparison; the real advantage is its location among alternatives.",
    bestFor: ["Value", "Soi 33 comparison route"],
    priceSignal: "From THB 1,800 in the source notes",
    priceItems: [{ label: "Observed starting package", value: "THB 1,800" }],
    timing: "2-7 PM",
    entryNotes: "Soi 33 has many similar storefronts; compare menus before choosing.",
    tips: ["Walk the lane once before committing.", "Never photograph inside or outside staff line-ups."],
    sourceUpdated: "May 2026",
    mapUrl: "https://maps.app.goo.gl/YpBFVn4c4v7voGDUA"
  }),
  venue({
    slug: "dragon-lady-bangkok",
    name: "Dragon Lady Bangkok",
    area: "Ekkamai",
    category: "Adult massage",
    type: "Korean-style themed massage",
    summary: "A newer Ekkamai venue reported with water-bed facilities and a lower opening price.",
    verdict: "A modern alternative when Sukhumvit Soi 33 feels repetitive.",
    bestFor: ["Newer facilities", "Couples who confirm the current policy"],
    priceSignal: "From THB 1,800 in the source notes",
    priceItems: [{ label: "Observed starting package", value: "THB 1,800" }],
    timing: "Afternoon to evening",
    entryNotes: "Check the live menu and couples policy before travelling.",
    tips: ["Confirm room type and duration.", "Book only through the official site."],
    sourceUpdated: "May 2026",
    officialUrl: "https://dragonladybkk.com/",
    mapUrl: "https://maps.app.goo.gl/3Sh4PuEDmEMgfwbG6"
  }),
  venue({
    slug: "black-caviar",
    name: "Black Caviar Executive Club",
    area: "Ratchada",
    category: "Soapy massage",
    type: "Premium soapy massage",
    summary: "One of the premium benchmarks in the commissioned field notes, with the widest reported price span.",
    verdict: "Large selection and premium positioning, but price discipline matters.",
    bestFor: ["Premium first comparison", "Large selection"],
    notIdealFor: ["Visitors without a fixed budget"],
    priceSignal: "Observed THB 5,500-42,000",
    priceItems: [{ label: "Observed package range", value: "THB 5,500-42,000" }],
    timing: "Best selection reported around 6-8 PM",
    entryNotes: "Ask for the complete tier card before choosing.",
    tips: ["Decide your ceiling before entering.", "Confirm card or mobile-payment acceptance at reception."],
    sourceUpdated: "May 2026",
    mapUrl: "https://maps.app.goo.gl/Gu7TaXPpps6ohdE6A"
  }),
  venue({
    slug: "maria-massage-bangkok",
    name: "Maria Massage Bangkok",
    area: "Ratchada",
    category: "Soapy massage",
    type: "Premium soapy massage",
    summary: "A long-running premium venue noted for a large selection and broad tier structure.",
    verdict: "A practical premium benchmark with a slightly lower reported floor than Black Caviar.",
    bestFor: ["Large selection", "Premium comparison"],
    priceSignal: "Observed THB 5,100-33,000",
    priceItems: [{ label: "Observed package range", value: "THB 5,100-33,000" }],
    timing: "6-8 PM",
    entryNotes: "Request the current price board; do not rely on driver or third-party quotes.",
    tips: ["Arrive independently.", "Confirm package, duration, and any service charge."],
    sourceUpdated: "May 2026",
    mapUrl: "https://maps.app.goo.gl/WYSHTDVm93yVa8Uz6"
  }),
  venue({
    slug: "tara-bangkok",
    name: "Tara Bangkok",
    area: "Ratchada",
    category: "Soapy massage",
    type: "Upper-midrange soapy massage",
    summary: "An upper-midrange alternative with a lower reported ceiling than the two largest premium names.",
    verdict: "A useful middle option when premium venues feel excessive.",
    bestFor: ["Upper-midrange budgets", "First-time category trial"],
    priceSignal: "Observed THB 4,000-20,000",
    priceItems: [{ label: "Observed package range", value: "THB 4,000-20,000" }],
    timing: "6-8 PM",
    entryNotes: "Use the current venue menu as the only authoritative price.",
    tips: ["Compare two tiers rather than defaulting to the highest.", "Keep transport independent."],
    sourceUpdated: "May 2026",
    mapUrl: "https://maps.app.goo.gl/c4kFkihN89f2NDyW8"
  }),
  venue({
    slug: "lalisa-ratchada-17",
    name: "Lalisa Ratchada 17",
    area: "Ratchada",
    category: "Soapy massage",
    type: "Design-led soapy massage",
    summary: "A polished Ratchada venue with a reported range that starts below the biggest premium houses.",
    verdict: "Strongest fit for visitors who value presentation and facilities.",
    bestFor: ["Modern interiors", "Upper-midrange budgets"],
    priceSignal: "Observed THB 4,300-20,300",
    priceItems: [{ label: "Observed package range", value: "THB 4,300-20,300" }],
    timing: "6-8 PM",
    entryNotes: "Ask which tiers are actually available that evening.",
    tips: ["Confirm the final total before selection.", "Avoid referral pricing."],
    sourceUpdated: "May 2026",
    mapUrl: "https://maps.app.goo.gl/3K4siVUT3Eno8K2dA"
  }),
  ...[
    ["little-duck", "Little Duck Massage", "From THB 2,800", "https://maps.app.goo.gl/uCQrzhHaNg6fA15u5"],
    ["merci-massage", "Merci Massage", "From THB 2,000", "https://maps.app.goo.gl/TA7qmmScGWLNcZCH9"],
    ["nancy-soapy", "Nancy Soapy Massage", "From THB 2,800", "https://maps.app.goo.gl/yoRMWXJLZjGZNQXY6"],
    ["la-belle", "La Belle", "From THB 3,000", "https://maps.app.goo.gl/TepaLdDRtTRtDibf9"],
    ["the-bank-massage", "The Bank Massage Club", "From THB 3,000", "https://maps.app.goo.gl/wZnfnzVuhmAE23158"]
  ].map(([slug, name, price, mapUrl]) =>
    venue({
      slug,
      name,
      area: "Ratchada",
      category: "Soapy massage",
      type: "Midrange soapy massage",
      summary: "A midrange venue included in the May 2026 comparison set.",
      verdict: "Treat this as a price benchmark, not a blind recommendation.",
      bestFor: ["Category trial", "Midrange budgets"],
      priceSignal: price,
      priceItems: [{ label: "Observed starting price", value: price.replace("From ", "") }],
      timing: "6-8 PM",
      entryNotes: "Request the current price board on arrival.",
      tips: ["Arrive independently.", "Leave if the displayed price differs materially from the quote."],
      sourceUpdated: "May 2026",
      mapUrl
    })
  ),
  venue({
    slug: "nana-plaza",
    name: "Nana Plaza",
    area: "Nana",
    category: "Go-go",
    type: "Three-floor adult entertainment complex",
    summary: "A concentrated complex on Sukhumvit Soi 4 with 24 go-go bars and three beer bars listed by its official site.",
    verdict: "Best for comparing multiple venues without changing districts.",
    bestFor: ["First-time orientation", "One-location comparison", "Late-evening energy"],
    notIdealFor: ["Quiet conversation", "Visitors who dislike direct sales pressure"],
    atmosphere: "Busy, tourist-facing, and highly venue-dependent across three floors.",
    priceSignal: "Guest beer around THB 180; lady drinks around THB 220 in May field notes",
    priceItems: [
      { label: "Observed guest beer", value: "THB 180" },
      { label: "Observed lady drink", value: "THB 220" },
      { label: "Observed bar fine", value: "THB 1,000-1,500" }
    ],
    timing: "From 8 PM; strongest comparison window 9-11 PM",
    entryNotes: "Official site lists 24 go-go bars across three floors. Individual bars set their own rules.",
    tips: ["Start with one drink and compare floors.", "Ask before ordering drinks for anyone else.", "Carry valid ID; alcohol sales are 20+."],
    sourceUpdated: "Field note May 2026; official site cross-check July 2026",
    confidence: "Cross-checked with official complex site",
    officialUrl: "https://nanaplazabkk.com/",
    mapUrl: "https://maps.app.goo.gl/QeBVUSHWnWpwYHj59"
  }),
  venue({
    slug: "billboard-bangkok",
    name: "Billboard Bangkok",
    area: "Nana Plaza, 3rd floor",
    category: "Go-go",
    type: "Go-go bar",
    summary: "A large third-floor Nana venue with an official opening time of 8 PM and a show-led, sit-and-watch format.",
    verdict: "One of the easier Nana choices for visitors who want to settle in before making decisions.",
    bestFor: ["First-time Nana visit", "Longer sit", "Show-led atmosphere"],
    priceSignal: "Use current venue menu; Nana field-note benchmarks apply",
    priceItems: [{ label: "Observed complex benchmark", value: "Beer ~THB 180 / lady drink ~THB 220" }],
    timing: "Official site: open nightly from 8 PM",
    entryNotes: "Top floor of Nana Plaza.",
    tips: ["Check the menu before ordering.", "Do not assume companion availability or pricing."],
    sourceUpdated: "Official site cross-check July 2026",
    confidence: "Official website checked",
    officialUrl: "https://billboardbangkok.com/"
  }),
  venue({
    slug: "rainbow-4",
    name: "Rainbow 4",
    area: "Nana Plaza, 2nd floor",
    category: "Go-go",
    type: "Go-go bar",
    summary: "A glamour-led Nana venue repeatedly highlighted in both the commissioned field notes and recent visitor discussion.",
    verdict: "Strong visual presentation, but treat it as a high-pressure comparison stop rather than a guaranteed match.",
    bestFor: ["Appearance-led selection", "Nana comparison route"],
    priceSignal: "Use Nana complex benchmark and verify live menu",
    priceItems: [{ label: "Observed complex benchmark", value: "Lady drink ~THB 220" }],
    timing: "9-11 PM",
    entryNotes: "Second floor of Nana Plaza.",
    tips: ["Start with one round.", "Decline extra drinks clearly if you do not want them."],
    sourceUpdated: "May 2026 field note; visitor cross-check July 2026"
  }),
  venue({
    slug: "baccara-cowboy",
    name: "Baccara",
    area: "Soi Cowboy",
    category: "Go-go",
    type: "Go-go bar",
    summary: "A well-known Soi Cowboy venue singled out in the field notes for a darker, more performance-led room.",
    verdict: "A focused Cowboy stop; better as part of a two-venue comparison than a whole-night commitment.",
    bestFor: ["Soi Cowboy first visit", "Performance-led atmosphere"],
    priceSignal: "Cowboy benchmark: beer ~THB 180; lady drink ~THB 220",
    priceItems: [
      { label: "Observed guest beer", value: "THB 180" },
      { label: "Observed lady drink", value: "THB 220" }
    ],
    timing: "9-11 PM",
    entryNotes: "Confirm the current menu and photography policy.",
    tips: ["Keep the first visit short.", "Settle the bill before changing venues."],
    sourceUpdated: "May 2026",
    mapUrl: "https://maps.app.goo.gl/rQip21wC95DGDGVV6"
  }),
  venue({
    slug: "the-pimp-bangkok",
    name: "The Pimp Bangkok",
    area: "Bangkok",
    category: "Premium club",
    type: "Large adult entertainment club",
    summary: "A high-budget club with a show floor, sofa seating, private rooms, bottle packages, and hosted companion seating.",
    verdict: "Best treated as a planned group night with a written budget, not a spontaneous walk-in.",
    bestFor: ["Groups", "Bottle-service format", "High budgets"],
    notIdealFor: ["Solo value seekers", "Unplanned visits"],
    priceSignal: "High; multiple minimum-spend layers",
    priceItems: [
      { label: "Reported table minimum", value: "From THB 5,000" },
      { label: "Reported sofa minimum", value: "From THB 8,000" },
      { label: "Reported room fee", value: "THB 2,500-9,000" },
      { label: "Reported hosted seating", value: "THB 2,000-3,000 first hour" }
    ],
    timing: "Thursday-Saturday for the largest reported line-up",
    entryNotes: "Minimum spend, room fee, bottle package, and hosted seating are separate line items.",
    watchFor: "The source also reports additional adult packages. Ask for a complete written quote and engage only with clearly identified adults 20+.",
    tips: ["Have one person approve all orders.", "Photograph or retain the written bill structure, not people.", "Ask what counts toward the minimum spend."],
    sourceUpdated: "May 2026"
  })
];

const pattayaMassageDirectory = [
  ["canary-massage-pattaya", "Canary Massage Pattaya", "Adult massage", "Premium themed massage", "Appearance-led new venue in the February field notes.", "https://maps.app.goo.gl/Quabbu8gyJz8JM7e7"],
  ["popplu-massage", "POPPLU Massage", "Adult massage", "Nuru-style massage", "New venue listed in the February field notes.", "https://maps.app.goo.gl/undMo6ibVe4p3WYY8"],
  ["lantingxu-spa", "Lantingxu Spa", "Adult massage", "Japanese-style massage", "A highly photographed venue in the local directory.", "https://maps.app.goo.gl/x3ZuvHsWo6yYKvpJ9"],
  ["hoho-nuru", "HOHO Nuru Massage", "Adult massage", "Nuru-style massage", "A venue with an official site and field-note listing.", "https://maps.app.goo.gl/e3n34u61NeRmhfzF9", "https://www.hohonurumassagepattaya.com/"],
  ["yi-hong-yuan-spa", "Yi Hong Yuan Spa", "Adult massage", "Themed massage", "A new themed venue in the February directory.", "https://maps.app.goo.gl/6oN8gKRbWzJnZMoFA"],
  ["young-massage-pattaya", "Young Massage Pattaya", "Adult massage", "Japanese-style massage", "A two-branch operator in the field notes.", "https://maps.app.goo.gl/T5hz1WiVzqALYv1ZA"],
  ["ringo-nuru", "Ringo Nuru Massage", "Adult massage", "Nuru-style massage", "A listed venue with an official site.", "https://maps.app.goo.gl/2gGQSKKAKwXxcmBH8", "https://www.ringopattaya.com/"],
  ["secret-garden-spa", "Secret Garden Spa", "Adult massage", "Japanese-style massage", "Described as one of Pattaya's earlier dedicated Japanese-style venues.", "https://maps.app.goo.gl/cbqke5oFsuD9ajpR7"],
  ["night-massage-pattaya", "Night Massage", "Adult massage", "Japanese-style massage", "A new venue in the February directory.", "https://maps.app.goo.gl/JnajamQZWDJ3crA79"],
  ["nuru-spa-pattaya", "Nuru Spa Pattaya", "Adult massage", "Nuru-style massage", "A listed venue with an official website.", "https://maps.app.goo.gl/M5dsLcNTCECrSCKG7", "https://www.nuruspattaya.com/"],
  ["pattaya-vice-nuru", "Pattaya Vice Nuru Massage", "Adult massage", "Nuru-style massage", "A Pattaya branch linked to an operator with Bangkok presence.", "https://maps.app.goo.gl/Hb4woJXhiv774Fv46"],
  ["kinbi-nuru", "KINBI Nuru Massage", "Adult massage", "Nuru-style massage", "A new venue listed in the February directory.", "https://maps.app.goo.gl/M4GnS5yQtfb9Q5qu7"]
].map(([slug, name, category, type, summary, mapUrl, officialUrl]) =>
  venue({
    slug,
    name,
    area: "Central Pattaya / Third Road",
    category,
    type,
    summary,
    verdict: "Directory listing: compare the live menu and roster before deciding.",
    bestFor: ["Afternoon comparison", "Visitors who prefer posted packages"],
    priceSignal: "Category benchmark from THB 2,800-3,000",
    priceItems: [{ label: "Observed category starting range", value: "THB 2,800-3,000" }],
    timing: "Reported category hours from 1 PM; best comparison window 5-6 PM",
    entryNotes: "Current menus were not individually verified. Ask for the full package list.",
    tips: ["Compare two venues before paying.", "Confirm duration, inclusions, and tip policy."],
    sourceUpdated: "February 2026",
    mapUrl,
    officialUrl
  })
);

const pattayaVenues = [
  ...pattayaMassageDirectory,
  venue({
    slug: "ygm-body-massage",
    name: "YGM Body Massage",
    area: "Near Soi 6",
    category: "Soapy massage",
    type: "Soapy massage",
    summary: "A newer, heavily promoted venue where the field notes observed different quote cards for referred and independent visitors.",
    verdict: "The most important information is price control: request the lowest public walk-in card.",
    bestFor: ["Independent walk-ins", "Visitors willing to compare quotes"],
    priceSignal: "Observed public tiers THB 2,900-6,900",
    priceItems: [
      { label: "Observed public tiers", value: "THB 2,900 / 3,900 / 4,900 / 5,900 / 6,900" },
      { label: "Reported referred opening quote", value: "From THB 5,900" }
    ],
    timing: "Early evening",
    entryNotes: "Ask for the complete public walk-in card before choosing.",
    watchFor: "Referral or driver pricing may be higher than the independent walk-in menu.",
    tips: ["Arrive independently.", "Leave if the starting card is materially above the reported public tiers.", "Do not prepay through an unofficial intermediary."],
    sourceUpdated: "February 2026",
    mapUrl: "https://maps.app.goo.gl/74LAayRwdPvf7eJq5"
  }),
  venue({
    slug: "honey-2-pattaya",
    name: "Honey 2",
    area: "Central Pattaya",
    category: "Soapy massage",
    type: "Large soapy massage",
    summary: "A large-room, large-selection benchmark recommended in the field notes as an alternative to heavily promoted new venues.",
    verdict: "A practical comparison stop; selection matters more than branding.",
    bestFor: ["Large selection", "Midrange budgets"],
    priceSignal: "Category range observed THB 2,800-6,800",
    priceItems: [{ label: "Observed category package range", value: "THB 2,800-6,800" }],
    timing: "Early evening",
    entryNotes: "Request the current card from the manager.",
    tips: ["Arrive on foot or independently.", "Confirm all charges at reception."],
    sourceUpdated: "February 2026",
    mapUrl: "https://maps.app.goo.gl/RSCfwi3zZ2rwExqk7"
  }),
  venue({
    slug: "hoho-bath-pattaya",
    name: "Ho Ho Bathhouse",
    area: "Central Pattaya",
    category: "Soapy massage",
    type: "Soapy massage",
    summary: "A nearby alternative to Honey 2 in the February comparison route.",
    verdict: "Use it as a live price-and-selection comparison, not a destination on branding alone.",
    bestFor: ["Side-by-side comparison", "Midrange budgets"],
    priceSignal: "Category range observed THB 2,800-6,800",
    priceItems: [{ label: "Observed category package range", value: "THB 2,800-6,800" }],
    timing: "Early evening",
    entryNotes: "About 50 metres from the recommended comparison area in the field notes.",
    tips: ["Compare with Honey 2 before paying.", "Ask for the public walk-in menu."],
    sourceUpdated: "February 2026",
    mapUrl: "https://maps.app.goo.gl/cF2U7aFbuymskiMZ6"
  }),
  venue({
    slug: "soi-6-pattaya",
    name: "Soi 6",
    area: "Beach Road / Second Road",
    category: "Beer bar",
    type: "Open-front adult beer-bar street",
    summary: "A dense, walkable strip of 50+ small bars where drinks, hosted company, room fees, and off-site fees are separate.",
    verdict: "High energy and easy to scan, but no longer the automatic value choice described in older guides.",
    bestFor: ["Solo visitors", "Afternoon start", "Fast venue comparison"],
    notIdealFor: ["Groups larger than three", "Visitors seeking privacy"],
    priceSignal: "Low drinks; layered companion fees",
    priceItems: [
      { label: "Observed guest drink", value: "THB 100-160" },
      { label: "Observed lady drink", value: "THB 180" },
      { label: "Observed upstairs room", value: "THB 400" },
      { label: "Observed bar fine", value: "THB 1,000-2,000" }
    ],
    timing: "Reported 3 PM-2 AM; best field-note window 5-8 PM",
    entryNotes: "Each bar applies its own minimum drinks and release rules.",
    watchFor: "Five- or ten-drink minimums may be presented as a package. Ask what is mandatory before ordering.",
    tips: ["Walk the street once before entering.", "Ask the price of every drink before agreeing.", "Keep interaction consensual; buying a drink never purchases physical access."],
    sourceUpdated: "February 2026"
  }),
  venue({
    slug: "walking-street-pattaya",
    name: "Walking Street",
    area: "South Pattaya",
    category: "Go-go",
    type: "Nightlife district",
    summary: "Pattaya's largest nightlife corridor, combining go-go bars, live music, Russian clubs, nightclubs, and restaurants.",
    verdict: "The strongest one-night comparison route in Pattaya when you know which format you want.",
    bestFor: ["First-time orientation", "Venue-hopping", "Late-night groups"],
    priceSignal: "Wide range; go-go lady drinks around THB 200 in the field notes",
    priceItems: [
      { label: "Observed go-go lady drink", value: "THB 200" },
      { label: "Observed standard bar fine", value: "THB 1,000-2,000" },
      { label: "Observed VIP minimum", value: "THB 5,000-10,000" }
    ],
    timing: "From 8 PM; strongest comparison window 9-11 PM",
    entryNotes: "Choose a lane before arriving: go-go, Russian performance bar, Thai nightclub, or live music.",
    tips: ["Set a walking route and budget ceiling.", "Close each bill before changing venues.", "Use Tourist Police 1155 for serious disputes."],
    sourceUpdated: "February 2026"
  }),
  ...[
    ["palace-agogo", "Palace", "High-volume, glamour-led room with a large line-up and more aggressive upselling.", "Presentation", "https://www.facebook.com/palaceagogowalkingstreet/"],
    ["shark-agogo", "Shark", "High-energy Walking Street venue praised in the field notes for staff engagement.", "Energy"],
    ["lighthouse-agogo", "Lighthouse", "Smaller sister venue with a similar presentation-led format.", "Compact comparison"],
    ["xs-agogo", "XS", "Large room with strong sound, lighting, and one of the biggest reported line-ups.", "Production"],
    ["pinup-agogo", "Pin Up", "Long-running glamour-led venue with an official 8-9 PM happy hour.", "Early happy hour", "https://pinupgogo.com/"],
    ["chick-agogo", "Chick", "Large venue beside XS with a similar high-volume, model-led format.", "Large line-up"],
    ["fahrenheit-agogo", "Fahrenheit", "A more value-oriented room that the field notes consider underrated, though loud.", "Value"],
    ["baccara-pattaya", "Baccara Pattaya", "A long-running, mixed-age-profile venue positioned below the premium rooms on price.", "Value comparison"],
    ["windmill-club", "Windmill Club", "A very high-contact venue where atmosphere and explicitness matter more than polish.", "Extreme format"]
  ].map(([slug, name, summary, bestFor, officialUrl]) =>
    venue({
      slug,
      name,
      area: "Walking Street",
      category: "Go-go",
      type: "Go-go bar",
      summary,
      verdict: `${bestFor} is the reason to choose it; verify the live line-up before committing.`,
      bestFor: [bestFor, "Walking Street comparison"],
      priceSignal: "Use current menu; standard and premium venues differ",
      priceItems: [
        { label: "Observed lady drink", value: "Around THB 200" },
        { label: "Observed standard short total", value: "THB 4,000-5,500 plus venue fees" },
        { label: "Observed premium short total", value: "THB 6,500-7,000 incl. bar fine" }
      ],
      timing: "8:30-11 PM",
      entryNotes: "Some venues require three to five drinks to release a performer from a scheduled stage rotation. Ask before agreeing.",
      tips: ["Start with one drink.", "Clarify whether a multi-drink offer is required or optional.", "Use only adult, consensual arrangements and confirm age."],
      sourceUpdated: officialUrl ? "February 2026; official site cross-check July 2026" : "February 2026",
      confidence: officialUrl ? "Field note plus official channel" : FIELD_NOTE,
      officialUrl
    })
  ),
  ...[
    ["hollywood-pattaya", "Hollywood Pattaya", "Thai nightclub", "Large Thai-style nightclub with a strong hosted-table culture.", "Arrive before 10:30 PM", "THB 1,800 observed Red Label bottle", "https://maps.app.goo.gl/cdMRVdZrrfFMzzFR8"],
    ["myst-pattaya", "Myst Pattaya", "Thai nightclub", "A less formal, lower-entry alternative to Hollywood with a busy upper-floor option.", "Late evening", "Upper-floor minimum from THB 6,000 observed", "https://maps.app.goo.gl/YCwgcXcBZPKrW6Vv5"],
    ["republic-pattaya", "Republic Club Pattaya", "Nightclub", "A mixed local-and-international club where the field notes frame social confidence as more important than a hosted format.", "Late evening", "Beer-entry tables reported", "https://maps.app.goo.gl/8QyLxJD4BH6W5a7M6"],
    ["panda-club-pattaya", "Panda Club", "PR nightclub", "A compact PR-led club on Walking Street with a strong atmosphere.", "After 10 PM", "PR seating buyout THB 4,000 observed", "https://maps.app.goo.gl/7dBntVpYXvLiaqvP8"],
    ["world-house-pattaya", "World House", "PR nightclub", "A larger electronic-music venue linked in the notes to the Panda group.", "After 10 PM", "Table minimums vary", "https://maps.app.goo.gl/B5a4XPhJNzpYXkSZ6"],
    ["space-pattaya", "Space Pattaya", "PR nightclub", "A large PR-club format with table service and private rooms.", "After 10 PM", "Private room THB 3,000 observed", "https://maps.app.goo.gl/rsAiLnJtirHYsSCb9"]
  ].map(([slug, name, type, summary, timing, priceSignal, mapUrl]) =>
    venue({
      slug,
      name,
      area: "Central / South Pattaya",
      category: "Nightclub",
      type,
      summary,
      verdict: "Choose this for the club format, not as a substitute for Walking Street go-go bars.",
      bestFor: ["Groups", "Bottle service", "Late-night music"],
      notIdealFor: ["Quiet solo visits"],
      priceSignal,
      priceItems: [{ label: "Field-note price signal", value: priceSignal }],
      timing,
      entryNotes: "Hosted seating, table minimums, bottles, and private rooms are separate charges.",
      tips: ["Agree a group budget before entry.", "One person should approve orders.", "Ask which charges count toward minimum spend."],
      sourceUpdated: "February 2026",
      mapUrl
    })
  ),
  venue({
    slug: "79-show-pattaya",
    name: "79 Show",
    area: "Pattaya",
    category: "Adult show",
    type: "Adult stage show",
    summary: "A ticketed adults-only show with rolling performances and phone storage at entry.",
    verdict: "A fixed-price alternative to bar-based nightlife when a stage show is the goal.",
    bestFor: ["Ticketed format", "Visitors avoiding drink-based venues"],
    priceSignal: "THB 1,500 observed door price",
    priceItems: [{ label: "Observed door ticket", value: "THB 1,500" }],
    timing: "Reported rolling shows 6-11 PM; arrive before 9:30 PM",
    entryNotes: "Phones are reportedly stored in lockers during the show.",
    tips: ["Confirm the current ticket at the door.", "Do not attempt photography."],
    sourceUpdated: "February 2026",
    mapUrl: "https://maps.app.goo.gl/JiEnacVcrRVScPvc7"
  }),
  venue({
    slug: "tiffany-show-pattaya",
    name: "Tiffany's Show",
    area: "North Pattaya",
    category: "Cabaret",
    type: "Mainstream cabaret",
    summary: "A polished, mainstream cabaret suitable for mixed groups and visitors who do not want adult bar interaction.",
    verdict: "The easiest low-friction evening show in this directory.",
    bestFor: ["Mixed groups", "First-time visitors", "Mainstream cabaret"],
    priceSignal: "Ticketed; choose by seat tier",
    priceItems: [{ label: "Pricing", value: "Verify current seat tiers" }],
    timing: "Check current show schedule",
    entryNotes: "Advance ticketing is recommended for preferred seating.",
    tips: ["Compare official seat tiers rather than reseller labels.", "Allow travel time from Walking Street."],
    sourceUpdated: "February 2026",
    mapUrl: "https://maps.app.goo.gl/g1QQvNdZX2N1Ront8"
  }),
  ...[
    ["one-percent-barber", "1% Barber & Massage", "Korean-style grooming and massage", "From THB 800; advance booking recommended", "https://maps.app.goo.gl/VrPWtAEwTGs1xfYW9"],
    ["sharr-barbershop", "Sharr Barbershop", "Korean-style grooming and massage", "Similar format; walk-ins reported easier", "https://maps.app.goo.gl/AxN2WhEwbUpb2Cri6"],
    ["ktv66-pattaya", "KTV66", "Adult karaoke", "The field note's preferred Pattaya karaoke option", "https://maps.app.goo.gl/mmTkvrFvfiRYQpwL6"]
  ].map(([slug, name, type, priceSignal, mapUrl]) =>
    venue({
      slug,
      name,
      area: "Pattaya",
      category: type === "Adult karaoke" ? "Karaoke" : "Recovery",
      type,
      summary: `${name} is included as a specialist alternative to the main bar-and-club routes.`,
      verdict: "Use it as a deliberate format choice, not an impulse detour.",
      bestFor: [type, "Day-after or early-evening planning"],
      priceSignal,
      priceItems: [{ label: "Field-note signal", value: priceSignal }],
      timing: "Verify current hours",
      entryNotes: "Contact the venue directly for the current menu or room policy.",
      tips: ["Confirm the full price before booking.", "Use official or map-listed contact details."],
      sourceUpdated: "February 2026",
      mapUrl
    })
  )
];

const bangkokGuides = [
  guide({
    slug: "first-night-playbook",
    title: "Bangkok First-Night Playbook",
    kicker: "Start here",
    summary: "Choose the district before the venue. Bangkok becomes manageable once Sukhumvit, Ratchada, Silom, and Patpong stop blending together.",
    verdict: "Stay near the format you actually want; crossing Bangkok at peak hours can erase the value of a cheaper venue.",
    bestTime: "Start planning before 7 PM",
    budget: "Carry cash plus one backup card",
    sourceUpdated: "May 2026 + official checks July 2026",
    sections: [
      { title: "Choose your base", body: "Asok or Nana is the most flexible base for Thermae, Nana Plaza, Soi Cowboy, and Sukhumvit massage venues. Sala Daeng works better for Thaniya and Patpong. Ratchada is the practical base for large soapy-massage venues." },
      { title: "Build one route", body: "Do not combine Sukhumvit, Ratchada, and Patpong in one short evening. Pick one district, one comparison stop, and one final venue." },
      { title: "Set the budget before drinking", body: "Guest drinks, hosted drinks, venue fees, companion fees, rooms, and transport may all be separate. Ask for the full stack, not one headline number." }
    ],
    checklist: ["Submit TDAC within the official three-day window before arrival.", "Carry valid ID; alcohol sales and adult venues are 20+.", "Save Tourist Police 1155.", "Confirm your hotel guest policy.", "Use licensed ride-hailing and keep valuables secured."],
    venueSlugs: ["thermae-cafe", "nana-plaza", "billboard-bangkok", "baccara-cowboy"]
  }),
  guide({
    slug: "sukhumvit-massage-route",
    title: "Sukhumvit Adult-Massage Route",
    kicker: "2-7 PM",
    summary: "A price-and-format comparison across Soi 33 and nearby Sukhumvit venues, distilled from the May 2026 field notes.",
    verdict: "The lane matters more than the brand: compare two live menus before paying.",
    bestTime: "2-7 PM",
    budget: "Observed starting range THB 1,800-7,500",
    sourceUpdated: "May 2026",
    sections: [
      { title: "Why this time window", body: "The field notes report larger rosters and fewer customers in the afternoon to early evening. The exact line-up changes daily." },
      { title: "How to compare", body: "Check the current roster, package duration, room type, inclusions, and optional tips. Leave if the live menu does not match the quote." },
      { title: "Non-negotiable etiquette", body: "No photography. Do not pressure staff beyond the selected package. Confirm all boundaries directly and respectfully." }
    ],
    checklist: ["Walk Soi 33 once before choosing.", "Use written menus.", "Confirm total and duration.", "Keep the receipt.", "Treat all extras as optional unless printed."],
    venueSlugs: ["wonder-massage", "eden-massage", "exotic-massage-bangkok", "canary-massage-bangkok", "psyche-dream-spa", "boss-massage-33", "dragon-lady-bangkok"]
  }),
  guide({
    slug: "ratchada-soapy-massage",
    title: "Ratchada Soapy-Massage Intelligence",
    kicker: "6-8 PM",
    summary: "A tiered comparison of premium and midrange houses, with observed May 2026 package ranges.",
    verdict: "Decide your ceiling first; the widest venues can present price ladders from a few thousand to tens of thousands of baht.",
    bestTime: "6-8 PM for the broadest reported selection",
    budget: "Observed THB 2,000-42,000",
    sourceUpdated: "May 2026",
    sections: [
      { title: "Premium tier", body: "Black Caviar and Maria carry the broadest reported ranges and largest selections. Tara and Lalisa sit closer to the upper-midrange." },
      { title: "Midrange tier", body: "Little Duck, Merci, Nancy, La Belle, and The Bank provide lower starting points, but live selection may be smaller." },
      { title: "Avoid referral pricing", body: "Arrive independently and request the public price card. A driver or guide referral can change the opening quote." }
    ],
    checklist: ["Set a hard spending ceiling.", "Ask what each tier changes.", "Confirm payment method.", "Do not pay an unofficial intermediary.", "Keep transport independent."],
    venueSlugs: ["black-caviar", "maria-massage-bangkok", "tara-bangkok", "lalisa-ratchada-17", "little-duck", "merci-massage", "nancy-soapy", "la-belle", "the-bank-massage"]
  }),
  guide({
    slug: "thermae-without-guesswork",
    title: "Thermae Without Guesswork",
    kicker: "Independent format",
    summary: "How the drink-entry venue works, what is and is not managed by the cafe, and what must be agreed before leaving.",
    verdict: "Low entry friction does not mean low risk; independent negotiation requires more discipline, not less.",
    bestTime: "8:30-10:30 PM in the May 2026 field notes",
    budget: "Drink entry + independently negotiated arrangement",
    sourceUpdated: "May 2026",
    sections: [
      { title: "What the venue controls", body: "Thermae sells drinks and provides the meeting space. Private arrangements and prices are independent of the venue." },
      { title: "What to agree", body: "Confirm adult age, price, duration, destination, boundaries, and payment timing. Do not assume a longer booking means a fixed departure time." },
      { title: "Transport and property", body: "Use an app-based car, secure valuables, and avoid curbside drivers. Independent workers are not a guarantee against theft, health risk, or disputes." }
    ],
    checklist: ["Buy the required drink.", "No photography.", "Verify adult age and ID.", "Agree the total before leaving.", "Use protection and respect consent continuously."],
    venueSlugs: ["thermae-cafe"]
  }),
  guide({
    slug: "thaniya-karaoke",
    title: "Thaniya Japanese-Karaoke Guide",
    kicker: "Silom / Sala Daeng",
    summary: "A cost-first guide to the Japanese-karaoke format: hourly guest drinks, hosted drinks, room fees, bar fines, and private arrangements.",
    verdict: "Best for a slower, conversation-led night; poor fit if karaoke quality or instant intensity is the priority.",
    bestTime: "7:30-8:30 PM",
    budget: "Two-person, two-hour field-note example reached ~THB 16,100 including private arrangements",
    sourceUpdated: "May 2025 and May 2026",
    sections: [
      { title: "The cost stack", body: "Field notes report THB 600-800 per guest per hour, lady drinks around THB 200, private room around THB 500, and bar fine around THB 800-1,200. Private arrangements are separate." },
      { title: "How to control the bill", body: "Agree a drink ceiling before choosing hosted company. Ask the room host to leave after the order is set, and count only drinks you approved." },
      { title: "Adult-only rule", body: "The source material contains serious age-verification concerns around some businesses. PlayDude excludes those businesses. Engage only with adults 20+ carrying valid ID; if age is unclear, leave." }
    ],
    checklist: ["Arrive via Sala Daeng BTS or Silom MRT.", "Ask whether the person can leave before ordering drinks.", "Set a per-hour drink cap.", "Check the bill line by line.", "Never engage with anyone under 20 or without valid adult ID."],
    venueSlugs: []
  }),
  guide({
    slug: "nana-cowboy-gogo",
    title: "Nana Plaza vs Soi Cowboy",
    kicker: "9-11 PM",
    summary: "A district comparison for visitors who want managed bars, visible menus, and multiple venues within a short walk.",
    verdict: "Nana wins on density; Cowboy wins on street-level simplicity. Neither rewards passive ordering.",
    bestTime: "9-11 PM",
    budget: "Guest drinks ~THB 180; lady drinks ~THB 220 in May field notes",
    sourceUpdated: "May 2026; official checks July 2026",
    sections: [
      { title: "Nana Plaza", body: "A three-floor complex with 24 go-go bars listed by its official site. It supports fast comparison without transport." },
      { title: "Soi Cowboy", body: "A linear street with easier visual navigation. Baccara is the clearest field-note recommendation, but every bar sets its own live menu." },
      { title: "Drink discipline", body: "A gesture or 'OK' can authorize multiple drinks. State the number clearly and ask for the running bill before changing venues." }
    ],
    checklist: ["Carry ID.", "Start with one guest drink.", "State one lady drink, not 'OK'.", "Ask about bar fine separately.", "Close the bill before moving."],
    venueSlugs: ["nana-plaza", "billboard-bangkok", "rainbow-4", "baccara-cowboy"]
  }),
  guide({
    slug: "bangkok-premium-clubs",
    title: "Bangkok Premium Club Budgeting",
    kicker: "High-budget format",
    summary: "How minimum spend, bottles, rooms, hosted seating, and adult packages layer together in Bangkok's large clubs.",
    verdict: "A group product that works only when one person controls the bill.",
    bestTime: "Thursday-Saturday, 10 PM onward",
    budget: "Plan THB 20,000+ for a serious group visit",
    sourceUpdated: "May 2026",
    sections: [
      { title: "Separate every line item", body: "Minimum spend usually covers drinks and food, not room fees or hosted seating. Ask what counts toward the minimum." },
      { title: "Group control", body: "Choose one person to approve bottles, hosted seating, extensions, and private-room changes. Request a running bill." },
      { title: "Who this is for", body: "Premium clubs make sense for three or more people who plan to stay several hours. Solo visitors usually get better value elsewhere." }
    ],
    checklist: ["Book through an official channel.", "Request a complete written quote.", "Name one bill owner.", "Set a hard ceiling.", "Confirm adult ID for all hosted participants."],
    venueSlugs: ["the-pimp-bangkok"]
  })
];

const pattayaGuides = [
  guide({
    slug: "first-night-playbook",
    title: "Pattaya First-Night Playbook",
    kicker: "Start here",
    summary: "Stay near Beach Road or Second Road, learn the baht-bus loop, and choose between Soi 6, Walking Street, and a Thai nightclub before drinking.",
    verdict: "Pattaya is easy to move through, but mixing formats without a plan is how small charges become a large bill.",
    bestTime: "Start around 5 PM for Soi 6 or 8:30 PM for Walking Street",
    budget: "Cash-first; keep transport and emergency money separate",
    sourceUpdated: "February 2026 + official checks July 2026",
    sections: [
      { title: "Where to stay", body: "Beach Road and Second Road give the simplest access to Soi 6, Central Pattaya, Terminal 21, and Walking Street. A remote villa is poor value for a nightlife-first trip." },
      { title: "How to move", body: "The field notes report THB 10 for the songthaew loop. Use licensed ride-hailing for off-route trips and avoid driving a scooter after drinking." },
      { title: "Choose one opening format", body: "Soi 6 is an afternoon beer-bar street. Walking Street is the strongest venue-comparison route. Hollywood and the PR clubs are later, group-oriented products." }
    ],
    checklist: ["Save Tourist Police 1155.", "Carry valid ID; alcohol venues are 20+.", "Confirm hotel guest policy.", "Keep valuables in the hotel safe.", "Set the night's total before the first drink."],
    venueSlugs: ["soi-6-pattaya", "walking-street-pattaya", "hollywood-pattaya", "tiffany-show-pattaya"]
  }),
  guide({
    slug: "pattaya-massage-directory",
    title: "Pattaya Adult-Massage Directory",
    kicker: "1 PM onward",
    summary: "Twelve named venues from the February 2026 field notes, organised for live menu comparison rather than blind recommendations.",
    verdict: "Pattaya's category is newer and generally more expensive than Bangkok's; compare the current menu before committing.",
    bestTime: "5-6 PM",
    budget: "Category starting signal THB 2,800-3,000",
    sourceUpdated: "February 2026",
    sections: [
      { title: "Third Road concentration", body: "Many of the newer Japanese- and Nuru-style venues cluster around Third Road, which makes a two-stop comparison realistic." },
      { title: "Do not outsource the quote", body: "Use official websites or map-listed contact details. Confirm the package directly; third-party introductions can alter the opening price." },
      { title: "What to compare", body: "Duration, room type, package inclusions, current roster, optional tips, and cancellation rules matter more than promotional photos." }
    ],
    checklist: ["Compare two menus.", "Confirm duration and inclusions.", "Do not photograph staff.", "Keep the receipt.", "Leave if the live price differs materially."],
    venueSlugs: pattayaMassageDirectory.map((item) => item.slug)
  }),
  guide({
    slug: "pattaya-soapy-massage",
    title: "Pattaya Soapy-Massage Price Control",
    kicker: "Independent arrival",
    summary: "A short comparison route focused on avoiding referral markups and finding the public walk-in card.",
    verdict: "The information advantage is not the venue name; it is knowing the reported public price ladder before you walk in.",
    bestTime: "Early evening",
    budget: "Observed category range THB 2,800-6,900",
    sourceUpdated: "February 2026",
    sections: [
      { title: "Referral markup", body: "The field notes found a major difference between public walk-in pricing and some referral quotes at YGM. Arrive independently and ask for the lowest public card." },
      { title: "Use a comparison pair", body: "Honey 2 and Ho Ho were recommended as nearby alternatives when the first quote or selection was not convincing." },
      { title: "Know when to leave", body: "If the manager refuses to show a complete card or the starting tier is materially above the public range, leave calmly." }
    ],
    checklist: ["Arrive without a driver waiting.", "Ask for the public price card.", "Compare two venues.", "Pay reception only.", "Keep tips voluntary."],
    venueSlugs: ["ygm-body-massage", "honey-2-pattaya", "hoho-bath-pattaya"]
  }),
  guide({
    slug: "soi-6-without-surprises",
    title: "Soi 6 Without Surprises",
    kicker: "5-8 PM",
    summary: "The drink rules, room fees, bar fines, and five- or ten-drink requirements that shape Pattaya's most famous afternoon strip.",
    verdict: "Soi 6 is easy to enter and easy to overspend in. Walking the street once is the best first move.",
    bestTime: "5-8 PM",
    budget: "Guest drinks THB 100-160; lady drinks ~THB 180 in February notes",
    sourceUpdated: "February 2026",
    sections: [
      { title: "Read the street first", body: "More than 50 open-front bars were reported. Walk from Second Road toward Beach Road and back before choosing." },
      { title: "Ask what is mandatory", body: "Some bars use five- or ten-drink requirements before a person can leave the venue. Ask whether the package is mandatory and what bar fine applies." },
      { title: "Consent is separate from drinks", body: "A drink pays the venue's hosted-company charge. It does not purchase touching, private time, or consent. Ask and respect the answer." }
    ],
    checklist: ["Walk once before entering.", "Order one drink at a time.", "Ask about minimum drinks.", "Confirm room and bar-fine fees separately.", "Leave if age or consent is unclear."],
    venueSlugs: ["soi-6-pattaya"]
  }),
  guide({
    slug: "walking-street-gogo",
    title: "Walking Street Go-Go Comparator",
    kicker: "9-11 PM",
    summary: "A venue-by-venue map of production, glamour, value, intensity, drink pressure, and VIP minimums.",
    verdict: "There is no single 'best' bar. Pick the room by format, then test it with one drink.",
    bestTime: "9-11 PM",
    budget: "Lady drinks ~THB 200; standard and premium release totals differ",
    sourceUpdated: "February 2026; selected official checks July 2026",
    sections: [
      { title: "Premium production", body: "Palace, XS, Pin Up, and Chick lead on room size, line-up, or production. They also carry more multi-drink prompts and higher premium totals." },
      { title: "Energy and value", body: "Shark and Lighthouse are compact alternatives; Fahrenheit and Baccara were positioned as value comparisons. Windmill is an extreme-format venue, not a glamour venue." },
      { title: "Avoid accidental multi-orders", body: "Three or five raised fingers may mean three or five drinks. Say the exact number. If a performer is on rotation, ask to buy one drink and wait until the set ends." }
    ],
    checklist: ["Choose two target bars.", "Start with one guest drink.", "State the exact lady-drink count.", "Ask about VIP minimums before sitting.", "Close each bill before moving."],
    venueSlugs: ["palace-agogo", "shark-agogo", "lighthouse-agogo", "xs-agogo", "pinup-agogo", "chick-agogo", "fahrenheit-agogo", "baccara-pattaya", "windmill-club"]
  }),
  guide({
    slug: "pattaya-nightclubs",
    title: "Pattaya Nightclub Decision Guide",
    kicker: "10 PM onward",
    summary: "Hollywood, Myst, Republic, Panda, World House, and Space serve different social and spending styles.",
    verdict: "Thai nightclubs are a group-and-table product. Go-go bars are a venue-comparison product. Do not confuse the two.",
    bestTime: "Arrive before 10:30 PM for better positioning",
    budget: "Bottle entry to THB 50,000+ peak table minimums",
    sourceUpdated: "February 2026",
    sections: [
      { title: "Thai club route", body: "Hollywood is the field-note glamour leader; Myst is looser and lower-entry; Republic is more social and less hosted." },
      { title: "PR club route", body: "Panda is compact, World House is production-led, and Space adds private rooms. Hosted PR seating and companion arrangements are separate decisions." },
      { title: "Control the table", body: "Table minimums rise on Friday, Saturday, and event nights. Ask what counts toward the minimum and appoint one person to approve orders." }
    ],
    checklist: ["Arrive as a group.", "Ask for the live table minimum.", "Name one bill owner.", "Do not mix private arrangements into the venue bill without a written breakdown.", "Plan transport home before midnight."],
    venueSlugs: ["hollywood-pattaya", "myst-pattaya", "republic-pattaya", "panda-club-pattaya", "world-house-pattaya", "space-pattaya"]
  }),
  guide({
    slug: "shows-and-recovery",
    title: "Shows, Cabaret and Recovery",
    kicker: "Lower-friction options",
    summary: "Ticketed shows, mainstream cabaret, grooming, massage, and karaoke for nights that do not need another bar crawl.",
    verdict: "The best second-night plan may be a fixed-price show or recovery session, not a repeat of Walking Street.",
    bestTime: "Early evening or the following afternoon",
    budget: "From THB 800 for grooming; adult show reported THB 1,500",
    sourceUpdated: "February 2026",
    sections: [
      { title: "Fixed-price entertainment", body: "79 Show is adults-only and phone-free. Tiffany's is a mainstream cabaret suitable for mixed groups." },
      { title: "Recovery", body: "1% Barber and Sharr combine Korean-style grooming and massage. The field note recommends booking 1% in advance." },
      { title: "Karaoke", body: "KTV66 is the only Pattaya karaoke venue singled out in the source. Confirm the current room, drink, and hosted-seating rules directly." }
    ],
    checklist: ["Buy show tickets through official channels.", "Respect phone and photography rules.", "Confirm grooming packages.", "Hydrate and avoid driving after drinking.", "Leave time between late nights."],
    venueSlugs: ["79-show-pattaya", "tiffany-show-pattaya", "one-percent-barber", "sharr-barbershop", "ktv66-pattaya"]
  })
];

export const cities = [
  {
    slug: "bangkok",
    name: "Bangkok",
    country: "Thailand",
    status: "Field guide live",
    sourceUpdated: "May 2026",
    summary: "Bangkok is not one nightlife scene. It is a set of different systems: Sukhumvit comparison lanes, Ratchada's large houses, Nana and Cowboy go-go bars, Thaniya karaoke, Thermae's independent market, and high-budget clubs.",
    mood: "High variety, high information advantage, transport-sensitive",
    bestFor: ["Visitors who plan by format", "Premium choice", "District comparison"],
    notIdealFor: ["One-night visitors trying to cross the whole city", "Anyone unwilling to confirm prices"],
    firstNightArea: "Asok / Nana",
    costSignal: "THB 2,000 entry-tier adult venues to THB 20,000+ club nights",
    arrivalWindow: "Plan by 7 PM; venue windows vary",
    mainThing: "Pick one system and one district. Bangkok rewards a route, not a checklist.",
    planning: [
      { label: "Arrival", value: "TDAC within 3 days before arrival", note: "Official immigration requirement for non-Thai nationals" },
      { label: "Best base", value: "Asok / Nana", note: "Most flexible for a first nightlife-focused stay" },
      { label: "Alternative base", value: "Sala Daeng", note: "Better for Thaniya and Patpong" },
      { label: "Transport", value: "BTS/MRT + app-based car", note: "Avoid crossing districts during peak traffic" },
      { label: "Emergency", value: "Tourist Police 1155", note: "Multilingual tourist assistance" }
    ],
    areas: [
      { name: "Asok / Nana", bestFor: "Thermae, Nana Plaza, Cowboy, flexible hotel base", atmosphere: "International and direct", confidence: "High", price: "Mixed", know: "The easiest first-night base because several formats sit within one short corridor." },
      { name: "Sukhumvit Soi 33", bestFor: "Afternoon adult-massage comparison", atmosphere: "Dense storefront corridor", confidence: "High", price: "THB 1,800-7,500 observed", know: "Walk the lane once, compare current menus, and never photograph staff." },
      { name: "Ratchada", bestFor: "Large soapy-massage venues", atmosphere: "Destination venues, less walkable", confidence: "Medium", price: "THB 2,000-42,000 observed", know: "Set your ceiling and arrive independently to avoid referral pricing." },
      { name: "Silom / Thaniya", bestFor: "Japanese karaoke and conversation-led nights", atmosphere: "Structured, hourly, slower", confidence: "Medium", price: "Layered hourly charges", know: "Age verification is essential; PlayDude excludes businesses named in source allegations involving minors." }
    ],
    guides: bangkokGuides,
    venues: bangkokVenues
  },
  {
    slug: "pattaya",
    name: "Pattaya",
    country: "Thailand",
    status: "Field guide live",
    sourceUpdated: "February 2026",
    summary: "Pattaya is compact enough to compare formats in person: afternoon beer bars on Soi 6, large Walking Street go-go rooms, newer Third Road massage venues, Thai nightclubs, PR clubs, and ticketed shows.",
    mood: "Compact, direct, high-energy, price-layered",
    bestFor: ["Short nightlife trips", "Walkable comparison", "Afternoon-to-late routes"],
    notIdealFor: ["Visitors who dislike direct sales", "Remote villa stays"],
    firstNightArea: "Beach Road / Second Road",
    costSignal: "THB 100 drinks to THB 50,000+ event-night tables",
    arrivalWindow: "5 PM for Soi 6; 9 PM for Walking Street",
    mainThing: "Choose the format first: Soi 6, Walking Street, massage, Thai club, PR club, or a fixed-price show.",
    planning: [
      { label: "Airport car", value: "THB 1,800-2,200 observed", note: "Source range from Bangkok airports; verify live quote" },
      { label: "Best base", value: "Beach Road / Second Road", note: "Easy access to the main nightlife loop" },
      { label: "Local loop", value: "Songthaew THB 10 observed", note: "Ask locally if the route or fare has changed" },
      { label: "Off-route travel", value: "Grab / Bolt", note: "Avoid driving after drinking" },
      { label: "Emergency", value: "Tourist Police 1155", note: "Multilingual tourist assistance" }
    ],
    areas: [
      { name: "Soi 6", bestFor: "Afternoon beer-bar route", atmosphere: "Open-front, high-contact, easy to scan", confidence: "High", price: "Low drinks, layered venue fees", know: "Walk it once and ask what drink minimums are mandatory." },
      { name: "Walking Street", bestFor: "Go-go comparison, live music, clubs", atmosphere: "Indoor, late, high production", confidence: "High", price: "Mixed to premium", know: "Choose two target bars before arriving; one street contains several different products." },
      { name: "Third Road", bestFor: "Newer massage venues", atmosphere: "Spread-out destination storefronts", confidence: "Medium", price: "From THB 2,800-3,000 observed", know: "Compare current menus; promotional photos are not the product." },
      { name: "North / Central Pattaya", bestFor: "Shows, cabaret, Thai clubs", atmosphere: "More structured", confidence: "High", price: "Ticketed to premium tables", know: "A better fit for mixed groups or a second night." }
    ],
    guides: pattayaGuides,
    venues: pattayaVenues
  },
  ...expandedCities
];

export function getCity(slug) {
  return cities.find((city) => city.slug === slug);
}

export function getVenue(citySlug, venueSlug) {
  return getCity(citySlug)?.venues.find((item) => item.slug === venueSlug) || null;
}

export function getGuide(citySlug, guideSlug) {
  return getCity(citySlug)?.guides.find((item) => item.slug === guideSlug) || null;
}

export function getPublishedCities() {
  return cities.filter((city) => city.status === "Field guide live");
}

export function getAllVenues() {
  return getPublishedCities().flatMap((city) => city.venues.map((item) => ({ ...item, citySlug: city.slug, cityName: city.name })));
}
