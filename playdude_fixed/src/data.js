export const cities = [
  {
    slug: "bangkok",
    name: "Bangkok",
    country: "Thailand",
    summary:
      "Bangkok nightlife is layered, energetic, and spread across districts with very different personalities. The first-time challenge is not finding somewhere to go - it is choosing the right area for the kind of night you actually want.",
    mood: "High variety, late momentum, strong district contrasts",
    bestFor: ["First-time explorers", "Rooftop drinks", "High-energy clubs", "International crowds"],
    notIdealFor: ["Visitors who want everything within one walkable street", "Anyone ignoring transport time"],
    firstNightArea: "Sukhumvit",
    costSignal: "Mid-range to premium depending on venue type",
    arrivalWindow: "8:30 PM - 10:30 PM",
    mainThing:
      "Bangkok rewards planning by area. Pick the district first, then choose venues that match the pace you want.",
    areas: [
      {
        name: "Sukhumvit",
        bestFor: "A flexible first night with many backup options.",
        atmosphere: "International, busy, easy to navigate.",
        confidence: "High",
        price: "Mid-range to premium",
        know: "Good for starting safely because transport, hotels, and venue variety are close together."
      },
      {
        name: "Thonglor",
        bestFor: "Polished bars, local trend scenes, and stylish groups.",
        atmosphere: "Fashionable and more curated.",
        confidence: "Medium",
        price: "Premium",
        know: "Better when you know the venue style in advance; some places reward reservations."
      },
      {
        name: "Silom",
        bestFor: "Mixed nightlife, hotel access, and classic Bangkok evening routes.",
        atmosphere: "Varied and practical.",
        confidence: "Medium",
        price: "Mixed",
        know: "A useful area, but venue-by-venue expectations matter."
      }
    ],
    venues: [
      {
        slug: "signal-room",
        name: "Signal Room",
        area: "Sukhumvit",
        type: "Cocktail bar",
        summary:
          "A polished placeholder cocktail bar suited to a first stop before a louder night. Use it as a calm orientation point in a busy district.",
        bestFor: ["First drink", "Couples", "Small groups"],
        notIdealFor: ["Big dance floor energy", "Very tight budgets"],
        atmosphere: "Low-lit, composed, conversation-friendly early in the evening.",
        crowd: "A mixed visitor and local professional crowd, usually more relaxed before peak hours.",
        priceSignal: "Mid-range to premium",
        timing: "Best from 8:30 PM before the district gets louder.",
        entryNotes: "Smart casual is safest. Check event nights before going.",
        tips: ["Arrive early for easier seating.", "Use it as a first stop, not the whole night.", "Plan the next venue before ordering the second round."],
        lastVerified: "Placeholder profile"
      },
      {
        slug: "afterglow-club",
        name: "Afterglow Club",
        area: "Thonglor",
        type: "Club",
        summary:
          "A premium placeholder club profile for readers who want a higher-energy stop after drinks.",
        bestFor: ["Late-night groups", "Dancing", "Premium nightlife"],
        notIdealFor: ["Quiet conversation", "Arriving without checking the night format"],
        atmosphere: "Loud, polished, and more energetic after midnight.",
        crowd: "Stylish local and international groups, with event-night variation.",
        priceSignal: "Premium",
        timing: "Gets more useful after 11:30 PM.",
        entryNotes: "Dress well and check reservation expectations on peak nights.",
        tips: ["Confirm the music format.", "Budget for premium pricing.", "Keep a transport plan for the end of the night."],
        lastVerified: "Placeholder profile"
      }
    ]
  },
  {
    slug: "pattaya",
    name: "Pattaya",
    country: "Thailand",
    summary:
      "Pattaya nightlife is compact, direct, and easy to overread from reputation alone. PlayDude treats it practically: where to start, what kind of atmosphere to expect, and how to keep the night controlled.",
    mood: "Compact, bold, visitor-heavy, easy to navigate",
    bestFor: ["Short trips", "Walkable nightlife", "Direct venue-hopping", "High-energy streets"],
    notIdealFor: ["Travelers seeking subtle local scenes", "Visitors uncomfortable with loud nightlife zones"],
    firstNightArea: "Central Pattaya",
    costSignal: "Budget-friendly to mid-range, with premium exceptions",
    arrivalWindow: "8:00 PM - 10:00 PM",
    mainThing:
      "The city is easy to move through, but atmosphere changes quickly by street and venue type.",
    areas: [
      {
        name: "Central Pattaya",
        bestFor: "A practical first-night base with easy movement.",
        atmosphere: "Busy, direct, and visitor-oriented.",
        confidence: "High",
        price: "Mixed",
        know: "Good for orientation, but choose venue types carefully."
      },
      {
        name: "Beach Road",
        bestFor: "A simple route between drinks, food, and late-night options.",
        atmosphere: "Open, tourist-facing, active.",
        confidence: "Medium",
        price: "Mixed",
        know: "Useful as a corridor, not a complete plan by itself."
      },
      {
        name: "Jomtien",
        bestFor: "Lower-pressure evenings away from the loudest core.",
        atmosphere: "More relaxed and spread out.",
        confidence: "Medium",
        price: "Budget-friendly to mid-range",
        know: "Better for calmer starts than peak-night intensity."
      }
    ],
    venues: [
      {
        slug: "harbor-lounge",
        name: "Harbor Lounge",
        area: "Central Pattaya",
        type: "Lounge bar",
        summary:
          "A placeholder lounge for a controlled first stop before deciding whether to continue into louder zones.",
        bestFor: ["First stop", "Solo orientation", "Small groups"],
        notIdealFor: ["All-night dancing", "Hidden local atmosphere"],
        atmosphere: "Casual, open, and easy to read.",
        crowd: "Mostly visitors with a steady flow of groups starting the night.",
        priceSignal: "Mid-range",
        timing: "Best from 8:00 PM.",
        entryNotes: "Casual dress usually works, but avoid beachwear for smarter venues.",
        tips: ["Start here if you want a lower-pressure read on the area.", "Confirm prices before ordering in unfamiliar venues.", "Keep backup venues nearby."],
        lastVerified: "Placeholder profile"
      }
    ]
  },
  {
    slug: "tokyo",
    name: "Tokyo",
    country: "Japan",
    summary:
      "Tokyo nightlife is precise, dense, and highly neighborhood-specific. A great night depends on matching the district to your intent, then understanding rules, reservations, trains, and timing.",
    mood: "Dense, stylish, rule-aware, neighborhood-led",
    bestFor: ["Cocktail bars", "Music-focused nights", "Small groups", "Late-night city texture"],
    notIdealFor: ["Visitors who dislike planning", "Large groups without reservations"],
    firstNightArea: "Shibuya or Shinjuku",
    costSignal: "Mid-range to premium",
    arrivalWindow: "7:30 PM - 10:00 PM",
    mainThing:
      "Tokyo nightlife works best when you understand the format before entering: bar, club, izakaya, lounge, or tiny specialty room.",
    areas: [
      {
        name: "Shibuya",
        bestFor: "A first night with energy, music, and easy movement.",
        atmosphere: "Youthful, dense, bright, active.",
        confidence: "High",
        price: "Mixed",
        know: "Good starting point, but specific venues can be small or event-driven."
      },
      {
        name: "Shinjuku",
        bestFor: "Classic late-night Tokyo range.",
        atmosphere: "Layered, intense, and varied by block.",
        confidence: "Medium",
        price: "Mixed",
        know: "Excellent with a plan, confusing without one."
      },
      {
        name: "Roppongi",
        bestFor: "International nightlife and later hours.",
        atmosphere: "Global, direct, mixed reputation.",
        confidence: "Medium",
        price: "Mid-range to premium",
        know: "Choose venues carefully and keep expectations specific."
      }
    ],
    venues: [
      {
        slug: "line-check",
        name: "Line Check",
        area: "Shibuya",
        type: "Music bar",
        summary:
          "A placeholder music bar for visitors who want atmosphere and sound without committing immediately to a club.",
        bestFor: ["Music-focused drinks", "Small groups", "Early-night Shibuya"],
        notIdealFor: ["Large groups", "Quiet conversation during busy hours"],
        atmosphere: "Compact, sound-led, and more focused than a casual pub.",
        crowd: "A mix of locals, regulars, and music-curious visitors.",
        priceSignal: "Mid-range",
        timing: "Best after 8:00 PM.",
        entryNotes: "Check cover or event charges before entering.",
        tips: ["Look up the night's music format.", "Keep group size small.", "Know your last-train or late-night transport plan."],
        lastVerified: "Placeholder profile"
      }
    ]
  },
  {
    slug: "osaka",
    name: "Osaka",
    country: "Japan",
    summary:
      "Osaka nightlife is warmer and more conversational than many visitors expect, but it still rewards area knowledge. The best nights balance food, drinks, and compact district-hopping.",
    mood: "Warm, social, food-led, compact",
    bestFor: ["Food and drinks", "Casual bar-hopping", "Friendly atmosphere", "First-time Japan visitors"],
    notIdealFor: ["Huge club-only itineraries", "Travelers who skip area planning"],
    firstNightArea: "Namba",
    costSignal: "Budget-friendly to mid-range, with premium bars available",
    arrivalWindow: "7:00 PM - 9:30 PM",
    mainThing:
      "Osaka is strongest when the night starts with food and builds into drinks rather than jumping straight into peak venues.",
    areas: [
      {
        name: "Namba",
        bestFor: "A flexible first night with food, drinks, and movement.",
        atmosphere: "Bright, social, busy.",
        confidence: "High",
        price: "Mixed",
        know: "A practical base for visitors who want options close together."
      },
      {
        name: "Shinsaibashi",
        bestFor: "Bars, clubs, and a more polished route.",
        atmosphere: "Stylish and active.",
        confidence: "Medium",
        price: "Mid-range",
        know: "Works well after dinner if you already know your first venue."
      },
      {
        name: "Umeda",
        bestFor: "Station-area convenience and after-work drinks.",
        atmosphere: "Urban, practical, more businesslike.",
        confidence: "Medium",
        price: "Mixed",
        know: "Useful for a composed evening, less obvious for late-night wandering."
      }
    ],
    venues: [
      {
        slug: "lantern-counter",
        name: "Lantern Counter",
        area: "Namba",
        type: "Bar",
        summary:
          "A placeholder bar profile for a friendly, low-pressure start in Osaka's most practical first-night district.",
        bestFor: ["First drink", "Casual bar-hopping", "Food-led evenings"],
        notIdealFor: ["Large groups", "High-volume club energy"],
        atmosphere: "Compact, conversational, and easy to pair with nearby food stops.",
        crowd: "Local regulars, visitors, and small groups beginning the night.",
        priceSignal: "Budget-friendly to mid-range",
        timing: "Best from 7:30 PM.",
        entryNotes: "Small bars may have limited seats or table charges. Check before settling in.",
        tips: ["Start after dinner nearby.", "Keep the group small.", "Have a second nearby option ready if seats are full."],
        lastVerified: "Placeholder profile"
      }
    ]
  }
];

export function getCity(slug) {
  return cities.find((city) => city.slug === slug);
}

export function getVenue(citySlug, venueSlug) {
  const city = getCity(citySlug);
  if (!city) return null;
  return city.venues.find((venue) => venue.slug === venueSlug);
}
