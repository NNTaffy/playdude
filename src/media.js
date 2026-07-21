const OFFICIAL_VENUE_MEDIA = {
  "bangkok|nana-plaza": {
    src: "/media/official/nana-plaza.jpg",
    alt: "Official nighttime view inside Nana Plaza in Bangkok",
    credit: "Official venue image · Nana Plaza",
    sourceUrl: "https://nanaplazabkk.com/"
  },
  "bangkok|billboard-bangkok": {
    src: "/media/official/billboard-bangkok.png",
    alt: "Billboard Bangkok official venue logo",
    credit: "Official venue logo · Billboard Bangkok",
    sourceUrl: "https://billboardbangkok.com/"
  },
  "bangkok|sherbet-club-bangkok": {
    src: "/media/official/sherbet-club.png",
    alt: "Sherbet Club Bangkok official venue logo",
    credit: "Official venue logo · Sherbet Club",
    sourceUrl: "https://www.sherbetclubbkk.com/"
  },
  "pattaya|pinup-agogo": {
    src: "/media/official/pinup-agogo.jpg",
    alt: "Official Pin Up Pattaya venue promotional image",
    credit: "Official venue image · Pin Up",
    sourceUrl: "https://pinupgogo.com/"
  },
  "pattaya|ringo-nuru": {
    src: "/media/official/ringo-nuru.jpg",
    alt: "Official Ringo Nuru Massage Pattaya venue image",
    credit: "Official venue image · Ringo",
    sourceUrl: "https://www.ringopattaya.com/"
  },
  "hanoi|mr-spa-nuru-massage-64-bach-ang-hanoi-160": {
    src: "/media/official/mr-spa.jpg",
    alt: "Official interior image from Mr Spa Hanoi",
    credit: "Official venue image · Mr Spa",
    sourceUrl: "https://mrspa.vn/"
  },
  "ho-chi-minh-city|dodo-spa-ho-chi-minh-hochiminh-174": {
    src: "/media/official/dodo-spa.png",
    alt: "Dodo Spa Ho Chi Minh City official venue logo",
    credit: "Official venue logo · Dodo Spa",
    sourceUrl: "https://dodo-spa.com/"
  },
  "ho-chi-minh-city|massage-queen-hochiminh-173": {
    src: "/media/official/massage-queen.png",
    alt: "Massage Queen Ho Chi Minh City official venue logo",
    credit: "Official venue logo · Massage Queen",
    sourceUrl: "https://massagequeen.vn/"
  },
  "ho-chi-minh-city|kieu-trinh-high-class-service-hochiminh-171": {
    src: "/media/official/kieu-trinh.webp",
    alt: "Kieu Trinh High Class official venue logo",
    credit: "Official venue logo · Kieu Trinh",
    sourceUrl: "https://massagekieutrinh.com/"
  }
};

export function venueMedia(item) {
  const key = `${item.citySlug}|${item.slug}`;
  return OFFICIAL_VENUE_MEDIA[key] || {
    src: `/media/venues/${item.citySlug}-${item.slug}.svg`,
    alt: `${item.name} editorial venue visual for ${item.cityName || item.citySlug}`,
    credit: "PlayDude editorial visual",
    sourceUrl: null
  };
}

export function guideMedia(city, item) {
  return {
    src: `/media/playbooks/${city.slug}-${item.slug}.svg`,
    alt: `${item.title} editorial playbook visual`,
    credit: "PlayDude editorial visual",
    sourceUrl: null
  };
}
