const sourceNames = {
  dayrate: "Bangkok Day-Massage Guide · July 2025",
  bangkok: "Bangkok Field Guide · May 2026",
  thaniya: "Thermae & Thaniya Field Guide · May 2025",
  pattaya: "Pattaya Field Guide · February 2026",
  hanoi: "Hanoi Field Guide · February 2026",
  hochiminh: "Ho Chi Minh City Field Guide · 2026",
  jakarta: "Jakarta Field Guide · June 2025",
  kualalumpur: "Kuala Lumpur Nightlife Guide · May 2025"
};

const records = [];

function add(sourceKey, city, area, category, entries) {
  entries.forEach(([name, page, price, note, url = "", status = "Source-listed"]) => {
    records.push({
      id: `${sourceKey}-${records.length + 1}`,
      name,
      city,
      area,
      category,
      source: sourceNames[sourceKey],
      sourceKey,
      page,
      price: price || "Not stated in source",
      note,
      url,
      status
    });
  });
}

// Complete venue list from the re-uploaded 29-page Bangkok day-massage guide.
add("dayrate", "Bangkok", "Sukhumvit 33", "Japanese massage", [
  ["BOSS Massage 33", 4, "From THB 1,900", "Taiwanese-owned with Chinese-language support; the source describes a value-led uniform and multi-provider format with roughly 10–15 providers.", "https://bosssukhumvit33.com/"],
  ["666 Class", 4, "Same positioning as nearby value venues", "An older venue reported as newly renovated, with newer equipment and a more comfortable room environment.", "https://www.666classbkk.com/bangkok"],
  ["Chairman Nuru Massage", 5, "Value tier", "Newer equipment and a specialty furniture concept are the source's main differentiators.", "https://chairmanbkk.com/"],
  ["G2G Massage", 5, "Value tier", "An established venue reported as newly renovated, with newer equipment and improved comfort.", "https://g2gbkk.com/"],
  ["The333 Nuru Massage", 5, "Value tier", "An established, source-tested venue reported as newly renovated with newer equipment and a more comfortable environment.", "https://www.the333bkk.com/"],
  ["Queen Massage", 6, "Value tier", "An older venue reported as renovated; the source highlights a younger roster, newer equipment and improved comfort.", "https://queensukhumvit33.x.2nt.com/index.html"],
  ["Toro Massage", 6, "Value tier", "A new venue built around a Japanese-style presentation and wooden-tub service.", "https://www.torobkk.com/"],
  ["Aurora Massage 33 Nuru", 6, "Value tier", "Long-running couple-friendly venue; the source treats service consistency as its main strength.", "https://aurora-bkk.com/33/main/"],
  ["Dozo Nuru Massage", 7, "Value tier", "Long-running, source-tested venue with Chinese-language support and a wider prop/menu range.", "http://www.dozo-bkk.com/"],
  ["Hakumi Nuru Massage", 7, "From THB 3,200", "Higher-end, couple-friendly venue positioned around presentation quality and Japanese-style Nuru service.", "https://www.hakumimassage.com/"],
  ["Daisy Dream Nuru Massage Bangkok", 7, "Value tier", "Long-running venue described as having the strongest Japanese visual identity in this cluster.", "https://daisydream.club/"],
  ["Akane Massage", 8, "Not stated", "The source describes the premises and roster as dated and does not recommend it.", "", "Source-listed · negative review"],
  ["7-Heaven", 8, "From THB 1,300", "Long-running oral-service venue using photo selection; broad menu and roster, but dated rooms, weak soundproofing and peak-time queues.", "https://www.7-heavenbkk.com/"],
  ["Vovo Sukhumvit 33", 8, "From THB 1,400", "New oral-service and role-play venue below Dozo, with themed rooms and uniform options.", "https://www.vovobkk.com/"],
  ["Demonia Fetish and BDSM Club", 9, "Entry THB 1,000; private session observed at THB 3,500", "Fetish/BDSM club with a drink included in entry, simple stage performances and guided sessions; the source says most visitors participate as the receiving partner.", "https://demoniabangkok.com/"],
]);

add("dayrate", "Bangkok", "Sukhumvit 31", "Japanese massage", [
  ["Doki Doki Nuru Massage", 9, "From THB 1,600", "Long-running, source-tested venue described as combining value, presentation, uniforms and multi-provider options; roughly 10–15 providers.", "https://dokidokibangkok.com/"],
  ["Hiso Nuru Massage", 10, "Same positioning as Doki Doki", "New, source-tested venue combining presentation, service and specialty furniture.", "https://www.hisomassage.com/"],
  ["Aries Massage Bangkok", 10, "Not stated", "Presentation-led venue with a Cantonese-style service concept; reported as busy, so advance booking was advised."],
]);

add("dayrate", "Bangkok", "Sukhumvit 23 / Soi Cowboy", "Japanese massage", [
  ["Mitu Soap", 11, "From THB 3,000 in a later source", "Source-tested, presentation-and-service-led venue using photo selection and daily Line roster updates; described by the author as the strongest all-rounder."],
  ["Eden Massage", 11, "From THB 2,500 in a later source", "New Chinese-owned venue with a larger roster, uniform options and strong recent momentum; advance booking advised."],
  ["Awesome999 Nuru Massage Bangkok", 12, "Not stated", "New, couple-friendly venue in the higher-presentation cluster.", "https://www.awesome999bkk.com/"],
  ["Kokoro Massage Bangkok", 12, "THB 3,900 package highlighted", "Source-tested service-first venue with specialty furniture; the author warns that presentation-focused visitors may prefer elsewhere.", "https://www.kokorobkk.com/"],
  ["WOW! Bangkok Massage", 13, "Comparable to Kokoro", "Kokoro sister venue and an early Bangkok role-play concept, with themed rooms and a service-first position.", "https://www.wowbkk23.com/"],
  ["Aya Massage Bangkok Nuru & Soapy", 13, "Not stated", "Source-tested couple-friendly venue with a larger roster and shared-bath options.", "https://ayamassagebangkok.com/"],
  ["Secret Kiss", 13, "From THB 1,300", "Service-led venue opposite Kokoro offering both oral-only and full-service menus; source says walk-ins are practical."],
  ["Glamor Nuru Massage Bangkok", 14, "From THB 1,800", "Source-tested value and service venue built around a star-ceiling large-bed room concept."],
]);

add("dayrate", "Bangkok", "Asok", "Japanese massage", [
  ["Canary Massage", 15, "THB 4,500 / 5,500 / 6,500 tiers", "Source-tested, heavily booked role-play venue with three presentation-based price tiers; advance booking strongly advised.", "http://www.canarymassage.net/index.html"],
  ["Wonder Massage", 15, "From THB 2,000 in a later source", "Source-tested value venue with more than 30 providers, many described as younger part-time workers.", "https://www.wonderbangkok.com/booking"],
  ["Stella Nuru Massage BKK", 16, "Not stated", "New Korean-owned, higher-design venue behind Korean Town and across from Thermae.", "https://linktr.ee/Stellanurumassage"],
  ["AMOR 888", 16, "Not stated", "New Korean-owned venue positioned around presentation and service.", "https://www.amorbkk.com/"],
  ["Suwon Man's Spa", 16, "From THB 2,800 in a later source", "Newer higher-design venue with steam/sauna and bathing facilities, a larger roster and strong source-period demand.", "https://suwonbangkok.com/"],
  ["Sazanka Spa & Sauna", 17, "THB 1,500 base; observed add-ons THB 1,000 / 2,000", "Source-tested Korean sauna package combining bathing, scrub, massage and a Korean set meal; source advises booking because the roster is limited.", "https://sazanka.co.th/"],
]);

add("dayrate", "Bangkok", "Sukhumvit 39 / Phrom Phong", "Japanese massage", [
  ["Stocking Massage", 18, "Value tier", "Stocking-themed massage venue offering partial- and full-service menus."],
  ["Bkkvice Nuru Massage", 18, "Value tier", "Couple- and LGBT-friendly cyberpunk venue with a more alternative roster and styling.", "https://bkkvice.com/"],
]);

add("dayrate", "Bangkok", "Sukhumvit 18 / 20 / 22", "Japanese massage", [
  ["Boss Massage 26", 19, "Base price plus an observed THB 1,000 specialty add-on", "Source-tested value venue positioned around a more explicit specialty menu; the source recommends preselecting and reserving if presentation matters.", "https://www.boss26massage.com/index.php"],
  ["Kawaii Nuru Massage", 20, "Value tier", "New, source-tested venue with a younger, larger roster and a position similar to Sukhumvit 33 value venues.", "https://kawaii-massage.com/"],
  ["Exotic Massage Bangkok", 20, "From THB 2,000 in a later source", "Source-tested, couple-friendly venue with a larger younger roster, hotel call-out service and a women's Yoni service menu.", "https://exoticmassagebangkok.com/"],
  ["Peach Massage Bangkok 20", 21, "From THB 1,600; two-provider package observed at THB 4,000", "Service-first value venue offering call-out and overnight arrangements; the source treats roster presentation as variable.", "https://peachmassage.com/"],
  ["Aimi Bangkok", 21, "Not stated", "New mid-to-high-end venue with a stronger design and presentation focus.", "https://aimibangkokmassage.com/"],
  ["OLA OLA Nuru Massage", 22, "Low-price tier", "One of seven lower-priced, couple-friendly venues reported to offer call-out and overnight arrangements; source advises checking the live Google Maps listing."],
  ["Cherry Massage Bangkok", 22, "Low-price tier", "One of seven lower-priced, couple-friendly venues reported to offer call-out and overnight arrangements."],
  ["Viva Amour Massage Bangkok", 22, "Low-price tier", "One of seven lower-priced, couple-friendly venues reported to offer call-out and overnight arrangements."],
  ["Kiki", 22, "Low-price tier", "One of seven lower-priced, couple-friendly venues reported to offer call-out and overnight arrangements."],
  ["Bit Style Massage", 22, "Low-price tier", "One of seven lower-priced, couple-friendly venues reported to offer call-out and overnight arrangements."],
  ["Dive Massage", 22, "Low-price tier", "One of seven lower-priced, couple-friendly venues reported to offer call-out and overnight arrangements."],
  ["Classy Nuru Massage Sukhumvit 22", 22, "Low-price tier", "One of seven lower-priced, couple-friendly venues reported to offer call-out and overnight arrangements."],
  ["Cube Nuru Massage", 22, "Not stated", "New Korean-owned venue combining presentation, environment, service and props; the source calls it Soi 22's presentation-led option.", "https://www.cube-22.com/zh"],
]);

add("dayrate", "Bangkok", "Sukhumvit 24 / 24-1 / 26", "Japanese massage", [
  ["Deep Massage", 23, "From THB 2,200 in a later source", "New, source-tested Wonder sister venue; couple-friendly, newer environment, and male providers available by reservation.", "https://www.deepbangkok.com/"],
  ["Addict Massage", 24, "From THB 2,200", "Long-running, source-tested presentation-led venue with premium Model options and hotel call-out service.", "https://addictmassage.com/en"],
  ["102 Massage Bangkok", 24, "From THB 2,200", "Long-running, source-tested venue with a larger roster and service-led reputation.", "https://www.massage-bangkok.net/en/"],
  ["Spicy Massage", 25, "From THB 1,400; two-provider option observed at THB 2,900", "Source-tested walk-in value venue in Soi 24/1; the source explicitly flags an advertised age of 18 and therefore requires age verification.", "", "Age verification required · source claim"],
  ["Madame Claude", 25, "Oral service from THB 1,300; full service from THB 2,000", "French-owned, service-first value venue; the source describes presentation as subjective.", "https://bj-bangkok.com/"],
  ["Venus Club", 25, "Not stated", "Listed among Soi 26 venues the source does not recommend because of roster quality; retained for completeness.", "", "Source-listed · negative review"],
  ["Don Quixote Nuru Massage", 25, "Not stated", "Listed among Soi 26 venues the source does not recommend because of roster quality; retained for completeness.", "", "Source-listed · negative review"],
  ["Black Lotus Massage", 25, "Not stated", "Listed among Soi 26 venues the source does not recommend because of roster quality; retained for completeness.", "", "Source-listed · negative review"],
  ["Tiara Nuru Massage", 25, "Not stated", "New venue listed among Soi 26 options the source does not recommend because of roster quality; retained for completeness.", "", "Source-listed · negative review"],
]);

add("dayrate", "Bangkok", "Thonglor / Ekkamai", "Japanese massage", [
  ["Lunar Nuru Bangkok Massage", 26, "Mid-to-high tier", "New couple- and LGBT-friendly venue positioned around presentation; advance booking advised.", "https://lunarmassagebkk.com/"],
  ["Airi Nuru Massage", 26, "Not stated", "New presentation-led venue offering call-out service; advance booking advised.", "https://airimassage.com/"],
  ["Bangkok Waterbomb Nuru Massage", 26, "Not stated", "New Ekkamai presentation-led venue where the source says the stronger roster choices are booked quickly.", "https://bangkokeroticmassage1.com/"],
  ["Sento Bangkok – Nuru Massage & Japanese Spa", 27, "From THB 2,500", "New higher-end Japanese-style Ekkamai venue with sauna and onsen facilities.", "https://sentobkk.com/"],
  ["Momo Massage Thonglor", 27, "Not stated", "Long-running venue at Thonglor BTS that the source does not recommend because of roster quality; retained for completeness.", "", "Source-listed · negative review"],
  ["Pretty Massage", 27, "Not stated", "Long-running venue at Thonglor BTS that the source does not recommend because of roster quality; retained for completeness.", "", "Source-listed · negative review"],
]);

add("dayrate", "Bangkok", "RCA", "Japanese massage", [
  ["Psyche Dream Spa", 28, "THB 7,500 / 60 min; two-provider option THB 11,000", "Source-tested mall venue positioned around role-play, presentation and service; Chinese-language support and advance booking noted."],
  ["RCA Peak 8848", 28, "THB 5,000–10,000 depending on nationality tier", "New venue claiming a multi-national roster and Cantonese-style services, reported open until 3 AM; the source provides Line booking.", "", "Unverified source claim"],
  ["Kitty Spa RCA", 29, "Not stated", "Presentation-led partial-service venue listed as one of several additional RCA options."],
  ["CAT66 Massage & Spa RCA & Guest Rooms", 29, "Not stated", "Mid-tier Japanese-massage venue with guest rooms, listed as an additional RCA option."],
  ["Cbody Spa Club", 29, "Not stated", "Presentation-led partial-service venue listed as one of several additional RCA options."],
]);

// Additional venue records from the wider Bangkok guide and the Thermae/Thaniya guide.
add("bangkok", "Bangkok", "Sukhumvit", "Massage / planning", [
  ["Spring Massage & Spa", 5, "Not stated", "One of two recommended larger men's-wellness venues; four Bangkok branches, boutique rooms and Chinese-language booking.", "https://s-bkk.com/"],
  ["Ho Li", 5, "Not stated", "Recommended larger men's-wellness venue with more rooms and providers, practical for groups."],
  ["Dragon Lady Bangkok", 10, "From THB 1,800", "New Ekkamai Korean-style Nuru venue with a new interior, waterbed service, couple and multi-provider options.", "https://dragonladybkk.com/"],
]);

add("bangkok", "Bangkok", "Ratchada", "Soapy massage", [
  ["The Lord Palace", 10, "THB 5,800–34,800", "Reopened legacy venue beside Black Caviar. The source notes its earlier closure was connected to trafficking/underage allegations, so current ownership, licensing and age controls require independent verification.", "", "Enhanced verification required"],
  ["Black Caviar Executive Club", 11, "THB 5,500–42,000", "First-tier soapy venue; source rates it highest for roster size/presentation and among the strongest for service."],
  ["Maria Massage Bangkok", 11, "THB 5,100–33,000", "First-tier soapy venue with one of the largest rosters; comparatively older environment."],
  ["Tara Bangkok", 11, "THB 4,000–20,000", "First-tier soapy venue with a lower entry point than Black Caviar, The Lord and Maria."],
  ["Lalisa Ratchada 17", 12, "THB 4,300–20,300", "First-tier soapy venue; the source rates its environment highest in the group."],
  ["Little Duck Massage", 12, "From THB 2,800", "Mid-tier face-to-face selection venue positioned as a lower-risk first trial."],
  ["Merci Massage", 12, "From THB 2,000", "Lower-priced mid-tier soapy venue."],
  ["Nancy Soapy Massage", 13, "From THB 2,800", "Mid-tier venue reported with 80+ providers and a value position."],
  ["La Belle", 13, "From THB 3,000", "Long-running mid-tier soapy venue with a larger roster."],
  ["The Bank Massage Club", 13, "From THB 3,000", "Long-running mid-tier soapy venue with a larger roster."],
]);

add("bangkok", "Bangkok", "Thaniya", "Japanese karaoke", [
  ["Victoria", 14, "District baseline: drinks THB 600–800/hour", "Presentation-led casual-clothes karaoke near the mid-street 7-Eleven; source reports roughly 20–30 providers."],
  ["U-Smile", 14, "District baseline", "Uniform and presentation-led Japanese karaoke; source reports roughly 30 providers."],
]);

add("thaniya", "Bangkok", "Thaniya", "Japanese karaoke", [
  ["Gaori", 20, "District baseline", "Legacy high-energy karaoke beside Victoria; source reports 20+ providers and uses an age-coded description that requires strict 20+ verification.", "", "Age verification required"],
  ["Otome", 20, "District baseline", "Legacy presentation-led karaoke beside Victoria; source reports 20+ providers."],
  ["Chiai", 21, "District baseline", "Legacy karaoke opposite Victoria; source describes a mixed mature/younger roster of 30+ and requires strict age verification."],
  ["Enjoy", 21, "Reported as Thaniya's cheapest option", "The source explicitly describes this venue as involving under-20 providers. It is retained as a risk record only: do not enter or transact without verified 20+ age controls.", "", "Do not recommend · underage risk claim"],
  ["Thermae Cafe", 1, "Short time THB 2,000–3,500; long time commonly THB 5,000+", "Basement cafe-market beneath Ruamchitt Plaza Hotel; reported hours 8 PM–2 AM, strongest selection around 8:30–10:30 PM, cash negotiation and no photography."],
  ["Thaniya Road", 13, "Drinks THB 600–800/hour; room THB 500; lady drinks THB 200", "Japanese-karaoke district with dozens of similarly structured venues. Source advises entering several rooms, checking the live roster and using cash to avoid a reported 10% card surcharge."],
]);

add("bangkok", "Bangkok", "Nana / Cowboy / Patpong", "Go-go bar", [
  ["Nana Plaza", 18, "Beer about THB 180; lady drink about THB 220", "Three-floor adult-entertainment complex; the source's recommended window is 9–11 PM."],
  ["Rainbow 4", 19, "District baseline", "Second-floor Nana Plaza venue singled out by the source for presentation."],
  ["Billboard Bangkok", 19, "District baseline", "Third-floor Nana Plaza venue with shower-show entertainment; described as less pressuring for repeat drinks."],
  ["Baccara Soi Cowboy", 19, "District baseline", "Soi Cowboy go-go venue noted for dark lighting and a more explicit stage format."],
  ["King's Castle", 20, "Beer THB 180; lady drink THB 230; promotion 10 drinks THB 2,000", "Patpong venue with a VIP room. The source explicitly reports under-20 workers, so it is retained only as an age-risk record and is not a recommendation.", "", "Do not recommend · underage risk claim"],
  ["King's Castle 1", 20, "Same group baseline", "Largest stage and roster in the group; source reports shows around 10:30 PM and midnight. Strict independent 20+ verification is required.", "", "Age verification required"],
  ["King's Castle 3", 20, "Same group baseline", "Smaller roster than the other group venues; retained with the same strict age-verification warning.", "", "Age verification required"],
  ["King's Sport Bar", 20, "KTV room THB 500/hour", "Pool bar with KTV in the King's group; source notes Chinese song selection and no minimum spend beyond drinks. Strict 20+ verification required.", "", "Age verification required"],
]);

add("bangkok", "Bangkok", "Bangkok", "Member club", [
  ["The Pimp Bangkok", 23, "THB 15,000 observed package after 2 AM; otherwise THB 20,000", "Large member club with hall, sofas and KTV rooms; large shows Thu–Sat and roughly 100–120 providers on those nights."],
  ["Klub 25", 23, "General club table fee THB 2,000–3,000 first hour", "High-presentation member club with hall seating and KTV rooms; source says outside arrangements are not the default."],
  ["Elite", 23, "General club baseline", "Source ranks it among Bangkok's largest, highest-presentation member clubs; outside arrangements are not the default."],
  ["Sherbet", 23, "General club baseline", "High-presentation member club with hall seating and KTV rooms."],
  ["Czech", 23, "General club baseline", "High-presentation member club with hall seating and KTV rooms."],
  ["Ten%", 23, "THB 13,000 observed inclusive package", "Member club described as having a buy-one-get-one seating format; source considers the environment less premium and pricing relatively high."],
  ["Palazzo", 23, "General club baseline", "Large member club listed among the source's higher-presentation options."],
]);

// Pattaya: every named venue or district in the source is retained, including negative assessments.
add("pattaya", "Pattaya", "Third Road / Central Pattaya", "Japanese massage", [
  ["Canary Massage Pattaya", 4, "From about THB 2,800 district baseline", "New presentation-led role-play venue."],
  ["Popplu Massage", 4, "District baseline", "New Japanese-massage venue."],
  ["Lantingxu Spa", 4, "District baseline", "New Japanese-massage venue described as a social-media check-in location."],
  ["HOHO Nuru Massage", 5, "District baseline", "New Japanese-massage venue.", "https://www.hohonurumassagepattaya.com/"],
  ["Yi Hong Yuan Spa", 5, "District baseline", "New role-play venue."],
  ["Young Massage Pattaya", 5, "District baseline", "Japanese-massage venue also written as 漾 Young Massage."],
  ["Young Massage Branch 2", 6, "District baseline", "New branch beside Young Massage, also written as 潤 Young Massage สาขา2."],
  ["Ringo Nuru Massage", 6, "District baseline", "New Japanese-massage venue.", "https://www.ringopattaya.com/"],
  ["Secret Garden Spa", 6, "District baseline", "Described by the source as Pattaya's first true Japanese-massage venue."],
  ["Night Massage", 7, "District baseline", "New Japanese-massage venue."],
  ["Nuru Spa Pattaya", 7, "District baseline", "New Japanese-massage venue.", "https://www.nuruspattaya.com/"],
  ["Pattaya Vice Nuru Massage", 7, "District baseline", "New Pattaya branch connected in the source to Bangkok's Aya venue."],
  ["KINBI Nuru Massage", 8, "District baseline", "New Japanese-massage venue, also written きん美."],
]);

add("pattaya", "Pattaya", "Central Pattaya", "Soapy massage", [
  ["YGM Body Massage", 8, "Source reports walk-in board THB 2,900 / 3,900 / 4,900 / 5,900 / 6,900", "New venue near Soi 6. Source warns referral-linked quotes may start at THB 5,900 and advises requesting the ordinary walk-in board."],
  ["Honey 2", 9, "About THB 2,800–6,800 district range", "Source's preferred Pattaya soapy option, close to Ho Ho Bathhouse."],
  ["Ho Ho Bathhouse", 9, "About THB 2,800–6,800 district range", "Soapy venue about 50 metres from Honey 2; source recommends comparing both."],
  ["Honey 1", 9, "About THB 2,800–6,800 district range", "Convenience option for visitors already staying nearby."],
  ["Honey 3", 9, "About THB 2,800–6,800 district range", "Convenience option for visitors already staying nearby."],
]);

add("pattaya", "Pattaya", "Beach Road / Walking Street", "Nightlife district", [
  ["Soi 6", 10, "Beer THB 100–160; lady drink THB 180; upstairs room THB 400", "More than 50 semi-open bars, typically 3 PM–2 AM; source recommends 5–8 PM and warns that drink-task and barfine layers must be confirmed."],
  ["Walking Street", 15, "Lady drink about THB 200", "Compact go-go and nightclub district; the source prefers it over Soi 6 for air-conditioned rooms and easier venue comparison."],
]);

add("pattaya", "Pattaya", "Walking Street", "Go-go bar", [
  ["Palace", 19, "VIP minimum observed THB 5,000–10,000", "Newly expanded venue; source ranks it highest for average presentation but also warns of aggressive drink upselling."],
  ["Shark", 20, "VIP minimum observed THB 5,000–10,000", "Source rates atmosphere and staff initiative highly."],
  ["Lighthouse", 20, "Not stated", "Palace sister venue with comparable roster quality in a smaller room."],
  ["XS", 20, "VIP minimum observed THB 5,000–10,000", "Large roster with strong sound, music and room hardware."],
  ["Pin Up", 20, "VIP minimum observed THB 5,000–10,000", "Long-running presentation-led go-go bar."],
  ["Chick", 21, "VIP minimum observed THB 5,000–10,000", "Beside XS; source reports roster additions from XS and Pin Up."],
  ["Fahrenheit", 21, "General go-go baseline", "Source describes it as underrated and value-led with a Western-facing style; warns the music is very loud."],
  ["Baccara Pattaya", 21, "General go-go baseline", "Long-running, value-led venue with a mixed-age roster and a more permissive in-room format."],
  ["Coco A Go Go", 21, "Russian PR short-time total observed around THB 13,000", "Value-led, high-contact show venue with an in-house mixed roster and occasional Russian PRs at the entrance."],
  ["Windmill Club", 22, "Observed THB 3,000 plus THB 1,500 barfine", "Two facing venues, one smoking and one non-smoking; the source prioritizes interaction over presentation."],
  ["Moulin Rouge", 22, "Beer THB 380; lady drink THB 500; private dance THB 3,000/10 min", "Russian-bar venue with the largest Russian roster in the source and professional pole performances; smoking reported."],
  ["XO Club Pattaya", 22, "Russian-bar baseline", "Russian-bar venue described as the most highly designed in the group; non-smoking reported."],
]);

add("pattaya", "Pattaya", "Pattaya", "Nightclub", [
  ["Hollywood Pattaya", 24, "Red Label observed THB 1,800; VIP minimum from THB 30,000", "Source's presentation-led freelance nightclub; recommended arrival before 10:30 PM."],
  ["Myst Pattaya", 24, "Upstairs table minimum from THB 6,000", "Lower-cost, high-energy freelance nightclub with occasional standout roster options."],
  ["Republic Club Pattaya", 24, "Beer-table entry", "Mainstream club with Thai, Russian and international visitors; source frames it as a social venue requiring good English and personal initiative."],
  ["Panda Club", 26, "PR full-evening seating THB 4,000", "Small Walking Street PR club with strong atmosphere; source notes outside arrangements are not guaranteed."],
  ["World House", 26, "Table minimum THB 5,000–30,000 weekdays; KTV room THB 3,000", "Panda sister venue on Third Road; source rates its sound, DJ and environment highly."],
  ["Space Pattaya", 26, "PR THB 4,000; Chinese PR reported THB 8,000; KTV room THB 3,000", "Bangkok Space branch opposite World House with tables and private KTV rooms."],
]);

add("pattaya", "Pattaya", "Pattaya", "Show / recovery / KTV", [
  ["79 Show", 28, "Ticket observed THB 1,500", "Adult show running continuously from about 6–11 PM; phones are stored in lockers during the show."],
  ["Tiffany's Show", 28, "Ticket price not stated", "Mainstream cabaret described as suitable for a broad audience; source advises advance ticket purchase."],
  ["Oriental Princess", 28, "Not stated", "Cabaret cruise listed but not recommended by the source because of its tour-group format.", "", "Source-listed · negative review"],
  ["Haitian Shengyan Male Model Show", 28, "Not stated", "Male-model show listed but not recommended by the source because of its tour-group format.", "", "Source-listed · negative review"],
  ["1% Barber & Massage", 29, "From THB 800", "Popular Korean-style hair-wash, facial and massage venue; source says booking is essential."],
  ["Sharr Barbershop", 29, "Not stated", "Korean-owned grooming and massage venue described as close to 1% in hardware and service, with easier walk-in access."],
  ["KTV66", 30, "Not stated", "Soi 6 karaoke venue; the only Pattaya KTV recommended by the source, with the district's strongest average presentation claim."],
]);

// Hanoi source inventory. Contacts belonging to individual brokers were intentionally not reproduced; venue links and prices are retained.
add("hanoi", "Hanoi", "Korean Town", "Korean massage", [
  ["Lolly Spa", 2, "VND 1.8m/30m; 2.2m/60m; 3.6m/90m", "Long-running full-service venue, reported 12 PM–1 AM, 15+ providers, source scores presentation 4.5/5 and environment 3/5."],
  ["Amazing VIP", 3, "VND 1.6m/60m; 3.5m/100m two-provider", "Partial-service venue, reported 12 PM–1 AM, 15+ providers, presentation 4/5 and environment 3/5."],
  ["Gangnam Spa", 4, "VND 1.6m/60m; 1.9m/90m", "Popular partial-service venue, reported 12 PM–1 AM, 15+ providers, presentation 4/5 and environment 3.5/5."],
  ["D Salon", 4, "VND 2.1m/60m; 3.7m/120m", "Popular full-service venue with live selection, reported 12 PM–2 AM, 15+ providers, presentation 4/5 and environment 4/5."],
  ["Lee Spa", 5, "VND 1.8m/30m; 2.2m/60m; 3.6m/75m or 120m; 4.8m/90m", "Popular full-service venue, reported 11 AM–1 AM, 20+ providers, presentation 4/5 and environment 3.5/5."],
  ["Moon VIP Massage", 5, "VND 1.5m/60m; 2m/90m; listed room/menu add-ons", "Partial-service venue with sauna and bathing options, reported 12 PM–2 AM, 15+ providers, presentation 4/5 and environment 3.5/5."],
  ["Massage Tokyo 2", 6, "VND 1.2m/60m", "Value partial-service venue, reported 12 PM–2 AM, 10+ providers, presentation 4/5 and environment 3/5."],
  ["VIP Massage Midu", 6, "VND 1m/70m; 1.3m/90m; 1.6m/120m", "Value partial-service venue, reported 12 PM–2 AM, 10+ providers, presentation 4/5 and environment 3/5."],
]);

add("hanoi", "Hanoi", "Central Hanoi", "Nuru / spa", [
  ["Nhạc Dương Lầu Spa & Massage Club", 7, "VND 2.4m/80m; 3m/100m; 4m/120m; group pool option VND 3m/person", "City-centre full-service venue, reported 10 AM–3 AM, 20+ providers, presentation 4/5 and environment 4/5."],
  ["Massage Nuru Osuka", 7, "VND 1.5m/60m; 1.8m/90m; 2.3m two-session package", "City-centre full-service venue, reported 10 AM–5 AM, 15+ providers, presentation 4/5 and environment 3/5."],
  ["Massage Sweetlady", 8, "VND 1.6m/75m", "New city-centre full-service venue, reported 10 AM–3 AM, 20+ providers, presentation 4/5 and environment 3.5/5."],
  ["Mr. Spa – Nuru Massage 64 Bạch Đằng", 8, "Single room: VND 1.5m entry + 1.6m service; villa pool: VND 1.8m + 2m", "Pool-villa format, reported 9 AM–4 AM, 20+ providers, presentation 4/5 and environment 4.5/5.", "https://mrspa.vn/"],
  ["Bồng Lai Các Spa & Massage Hà Nội", 10, "Entry VND 1.5m–2.5m; service VND 1.6m–3m", "Large city spa known in the source as 'Hanoi Dragon Palace', reported 9 AM–4 AM, 30+ providers, presentation 4/5 and environment 4.5/5."],
]);

add("hanoi", "Hanoi", "Hanoi", "KTV / hotel spa", [
  ["Boss KTV Hanoi", 11, "Hall minimum about VND 1.132m/person; booth about VND 1.455m/person; room and bottle tiers listed in source", "Basement venue inside Fortuna Hotel. Source reports roughly 80–100 providers in 2026, Chinese-language service, hall shows and private rooms."],
  ["Spa de Palace", 13, "Regular room VND 600k; VIP room VND 1.5m; source lists optional service add-ons", "Fortuna Hotel rooftop massage department with 30+ trained providers; no lineup selection and standard massage is the base product."],
  ["Karaoke F5 Plus – New Branch", 13, "Not stated", "New value-led sheer-costume karaoke; source warns to confirm which branch is being booked."],
  ["Karaoke F5 Plus – Old Branch", 13, "Not stated", "Older branch of the value-led sheer-costume karaoke; confirm location before travel."],
  ["Karaoke Royal Club", 14, "Not stated", "Popular sheer-costume karaoke listed by the source."],
  ["Karaoke Level", 14, "Not stated", "Popular sheer-costume karaoke listed by the source."],
  ["Karaoke Paris – Linh Đàm", 15, "Not stated", "Long-running sheer-costume karaoke listed by the source."],
  ["Karaoke Hoàng Gia", 15, "Not stated", "Sheer-costume karaoke described by the source as having a younger roster; strict adult age verification required.", "", "Age verification required"],
  ["Karaoke New 194 Trần Duy Hưng", 16, "Not stated", "Popular sheer-costume karaoke listed by the source."],
]);

add("hochiminh", "Ho Chi Minh City", "District 1", "Massage / spa", [
  ["Kiều Trinh – High Class Service", 6, "VND 2m / two sessions", "Full-service venue rated 4.5/5 by the source for both presentation and service; advance booking is described as essential.", "https://massagekieutrinh.com/"],
  ["Linh Cherry", 6, "VND 2.4m / one session", "Popular full-service District 1 venue with a larger roster; source rates presentation 4.5/5 and service 4/5, with no reservation normally required."],
  ["Massage Queen", 7, "VND 2.4m / two sessions", "Full-service venue rated 4.5/5 for presentation and service; source says advance booking is essential.", "https://massagequeen.vn/"],
  ["Dodo Spa Ho Chi Minh", 7, "VND 1.5m package", "Korean-style partial-service venue rated 4.5/5 for presentation and service; advance booking advised.", "https://dodo-spa.com/"],
  ["Starking Massage", 8, "VND 1.5m package", "Korean-style partial-service venue rated 4.5/5 for presentation and service; advance booking advised."],
  ["Massage Dubai Luxury Q1", 8, "VND 1.5m package", "Korean-style partial-service venue rated 4.5/5 for presentation and service; advance booking advised."],
  ["Bồng Lai Các Massage", 9, "Single room VND 6.5m/120m; small villa VND 6.5m/person; large villa VND 7m/person", "High-end full-service complex with single rooms and prebooked pool-villa formats. Source recommends 4–6 PM and says villas require at least three guests.", "https://nhacduonglaurelax.com/"],
]);

add("hochiminh", "Ho Chi Minh City", "Ho Chi Minh City", "Grooming / cafe", [
  ["MiMi Beauty Salon", 11, "VND 500k–900k package + VND 400k source-reported tip", "Presentation-led hair-wash and beauty salon; source calls it visually strong but expensive."],
  ["Salon Mai Anh 2", 12, "Comparable to MiMi", "Presentation-led hair-wash salon in the same cluster as Mai Anh Beauty Salon."],
  ["Mai Anh Beauty Salon", 12, "Comparable to MiMi", "Hair, facial and head-wash venue in the same cluster as Salon Mai Anh 2."],
  ["Hớt Tóc Hoàng Triều", 12, "VND 350k–400k package + VND 200k source-reported tip", "Korean-style barbershop/head-wash venue positioned as better value than the presentation-led salons."],
  ["VIP Barbershop", 12, "VND 350k–400k package + VND 200k source-reported tip", "Korean-style barbershop/head-wash venue sharing ownership and price positioning with Hớt Tóc Hoàng Triều."],
  ["Royal Barbershop", 12, "VND 350k–400k package + VND 200k source-reported tip", "Korean-style barbershop/head-wash venue in the same cluster."],
  ["Café Xì Trum", 13, "Drinks from tens to low hundreds of thousands VND", "DJ cafe described as having the largest host roster in the source; strongest atmosphere after 3 PM or after 7 PM."],
  ["Cafe DJ 777", 13, "Drink-led", "Long-running hosted DJ coffee venue."],
  ["Goodjn DJ Coffee & Beer", 13, "Drink-led", "Popular hosted DJ coffee venue close to Cafe DJ 777."],
]);

add("hochiminh", "Ho Chi Minh City", "Ho Chi Minh City", "Hosted restaurant", [
  ["Nhà Hàng Hai Lúa", 14, "Host seating VND 500k; room/mamasan fee VND 500k; food at menu price", "Private-room hosted restaurant with a broad menu; the source recommends advance ordering for roast pork."],
  ["Công Ty TNHH Nhà Hàng Hàn Huyên", 14, "Source says pricing is reasonable", "Hosted private-room restaurant listed as comparable to Hai Lúa."],
  ["Nhà Hàng Lai Rai Phố", 15, "Not stated", "Hosted restaurant listed as comparable to Hai Lúa; source advises checking live reviews and menu."],
  ["Nhà Hàng Lynh Anh", 15, "Not stated", "Hosted restaurant listed as comparable to Hai Lúa; source advises checking live reviews and menu."],
]);

add("hochiminh", "Ho Chi Minh City", "Ho Chi Minh City", "KTV", [
  ["Boss Restaurant & KTV", 18, "From VND 3m/person; seating VND 1m; short VND 4m; overnight VND 8m", "Top-tier sheer-costume KTV. Source reports 200+ hosts, 80% Chinese-language ability and its strongest average presentation rating."],
  ["GK22 KTV", 19, "Package VND 3.3m; seating VND 1m; short VND 4m; overnight VND 6m", "Long-running mid-tier sheer-costume KTV with 200+ source-reported hosts and a value position."],
  ["Dragon-King KTV", 20, "VND 2m–3m/person; seating VND 1m; short VND 4m; overnight VND 6m", "Also known as 466 or Dragon K; long-running value sheer-costume KTV with 300+ source-reported hosts."],
  ["Lucky KTV", 21, "VND 2m–3m/person; seating VND 1m; short VND 5m; overnight VND 8m", "High-demand nude-format KTV with a source-reported 50+ host roster."],
  ["Las Vegas KTV", 22, "VND 2m–3m/person; seating VND 1m; short VND 5m; overnight VND 8m", "Second high-demand nude-format KTV in the source, with a reported 50+ host roster."],
  ["102 KTV", 23, "From VND 1.5m/person; seating VND 1m; short VND 3m; overnight VND 5m", "Korean-style KTV with 100+ source-reported hosts and a 90% outside-booking rate claim."],
  ["Odyssey Karaoke", 24, "Package VND 5.3m; seating VND 500k; short VND 2.5m; overnight VND 4m", "Long-running value Korean KTV; source says rooms are usually available without advance booking."],
  ["Matrix KTV", 25, "VND 2.5m–3m/person; seating VND 1.5m; short VND 4m; overnight VND 8m", "Top-tier sheer-costume KTV positioned against Boss, with 100+ source-reported hosts.", "https://matrixkaraoke.com/gioi-thieu-ve-matrix-karaoke/"],
  ["Catwalk", 26, "Room from VND 2m/person; flexible hall spend; seating VND 1m", "Solo-friendly venue with an open hall, beer-by-the-bottle option and private KTV rooms; 80+ source-reported hosts."],
  ["The Lux188", 27, "Room from VND 2m/person; seating VND 1m; short VND 4m; overnight VND 6m", "Value sheer-costume KTV with 150+ source-reported hosts."],
]);

add("jakarta", "Jakarta", "North / West Jakarta", "Hotel entertainment complex", [
  ["Classic Hotel Jakarta", 9, "IDR 375k short; IDR 500k two-provider; card fee IDR 40k", "Two-bar complex: an older first-floor room with 150+ source-reported hosts and a newer fifth-floor room with 120+. Reported hours 6 PM–3 AM; best window 6–8 PM."],
  ["Hotel Travel", 13, "IDR 375k short; IDR 500k two-provider", "Value hotel-bar complex with stronger source-rated atmosphere and presentation than Classic, but older rooms and more tip pressure."],
  ["The Pool @ 1001 Hotel", 15, "Entry IDR 300k; local package IDR 1.55m/90m; international package IDR 3.55m/90m", "Higher-end pool, sauna and bar complex with 70–90 local hosts plus international options; strict no-photography controls."],
  ["Malioboro Hotel & Spa", 19, "Entry IDR 150k; local tiers IDR 1.048m–1.48m; dancer IDR 3.8m; international IDR 2.5m–2.8m", "Mid-tier multinational hotel-spa complex below The Pool on price and hardware; source advises using the second-floor bar rather than the dated wet area."],
  ["VFour Hotel Bar Street", 22, "IDR 400k on-site; IDR 800k/3h hotel call-out", "Cluster of similarly priced bars, each reported with 50–70 local hosts; no entry fee, but source strongly criticizes the on-site room hygiene."],
  ["Starmoon Bar", 23, "VFour district baseline", "One bar inside the VFour cluster. The source mentions an 18-year-old provider, so this record requires strict adult age verification.", "", "Age verification required"],
]);

add("jakarta", "Jakarta", "Jakarta", "Day spa", [
  ["Sugar Spa & Massage", 24, "IDR 900k/120m", "Service-led Japanese/Nuru-style day spa, reported open 11 AM–11 PM. Source recommends visiting 11:30 AM–4 PM before peak bookings."],
  ["B Fashion Massage", 25, "IDR 680k / 880k / 1.1m for 90m", "Sixth-floor venue inside B Fashion Hotel with three presentation-based tiers; source recommends daytime rather than evening."],
]);

add("kualalumpur", "Kuala Lumpur", "Sri Petaling", "Spa", [
  ["Four Seasons Spa", 2, "Entry RM88; RM250/45m; RM500/180m; hotel call-out RM1,000/10h", "Fifth-floor leisure spa in Endah Parade with buffet, bath, cinema, entertainment and rest areas; source reports 12 PM–2 AM."],
]);

add("kualalumpur", "Kuala Lumpur", "Kepong", "Massage / spa", [
  ["Bi Hai Qing Tian", 3, "RM250/1h; RM500/180m", "Long-running Vietnamese-led full-service venue, source-reported 50+ providers and 12 PM–6 AM hours."],
  ["Yangguang", 3, "Comparable to Bi Hai Qing Tian", "Nearby Kepong alternative described as similar in service, price and environment."],
  ["Apple", 4, "Comparable to Bi Hai Qing Tian", "Nearby Kepong alternative described as similar in service, price and environment."],
]);

add("kualalumpur", "Kuala Lumpur", "Bukit Bintang", "Massage / spa", [
  ["Hokkaido Spa", 4, "RM250/60m", "Long-running city-centre venue near the south entrance of Fahrenheit 88."],
  ["Genesis Sauna Spa", 5, "Comparable to Hokkaido Spa", "Source-tested venue described as the same general tier as Hokkaido Spa."],
]);

export const sourceLedger = records;
export const sourceLedgerSources = sourceNames;
export const sourceLedgerCities = [...new Set(records.map((item) => item.city))];
export const sourceLedgerCategories = [...new Set(records.map((item) => item.category))].sort((a, b) => a.localeCompare(b));
