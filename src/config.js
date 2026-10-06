// ============================================================================
// SALON CONFIG — everything specific to THIS business lives here.
//
// To reuse this whole site for a different grooming salon: change the values
// in this file (and swap the files in /public/assets), then update the two
// SEO tags at the top of index.html. You should not need to touch any file
// inside src/components/ or src/utils/.
// ============================================================================

export const salon = {
  name: "Creature Comfort Shop",
  shortName: "Creature Comfort",

  // Used in the hero heading as: "{kicker} {highlight} {city}"
  heroKicker: "Dog grooming with",
  heroHighlight: "love",
  heroCity: "in Riverside",

  tagline: "Dog grooming · Riverside, CA",

  description:
    "We treat your pets as if they were our own. Every pet always has the same groomer, so they’re greeted by a familiar face each visit. It’s like doggie daycare — we love on them and keep them with us.",

  // E.164 format — used for tel: / sms: links.
  phone: "+19513591957",
  phoneDisplay: "(951) 359-1957",

  email: "", // leave blank to hide the "send by email" fallback link

  address: {
    line1: "9990 Indiana Ave #1",
    city: "Riverside",
    state: "CA",
    zip: "92503",
  },

  // Google Maps embed + link query. Kept separate from the address object
  // so you can hand-tune the query string without reformatting the address.
  mapsQuery: "9990 Indiana Ave #1, Riverside, CA 92503",

  // 0 = Sunday ... 6 = Saturday, matching Date#getDay().
  hours: [
    { day: "Sunday", open: null, close: null },
    { day: "Monday", open: null, close: null },
    { day: "Tuesday", open: "9:00 am", close: "6:00 pm" },
    { day: "Wednesday", open: null, close: null },
    { day: "Thursday", open: "9:00 am", close: "6:00 pm" },
    { day: "Friday", open: "9:00 am", close: "6:00 pm" },
    { day: "Saturday", open: "9:00 am", close: "6:00 pm" },
  ],
  hoursSummary: "Tue, Thu, Fri & Sat · 9am–6pm",

  // Drop-off windows offered in the booking form.
  dropOffTimes: ["9–11 am", "11 am–1 pm", "1–3 pm", "3–5 pm"],

  // Toggle to show/hide "from $X" price labels next to each service.
  // Prices below are placeholder sample values — replace with your own.
  showPrices: false,

  // Dogs only. Add a `cat: [...]` list (and `sizes.cat`) to bring back the
  // cat column and the dog/cat toggle in the booking form.
  services: {
    dog: [
      { name: "Full grooming & haircut", price: 70 },
      { name: "Bath & brush", price: 40 },
      { name: "Nail clipping", price: 15 },
      { name: "Ear cleaning", price: 10 },
      { name: "Bows & finishing touches", price: 0 },
    ],
  },

  // [label, sublabel] pairs shown as size-picker buttons in the booking form.
  sizes: {
    dog: [
      ["Small", "under 20 lb"],
      ["Medium", "20–50 lb"],
      ["Large", "50–90 lb"],
      ["XL", "90+ lb"],
    ],
  },

  // Shown in the hero instead of decorative shapes.
  storefront: {
    src: "/assets/storefront.jpg",
    alt: "Creature Comfort Shop storefront, unit 1, with “Welcome Fuzzy Friends” painted on the door",
  },

  gallery: [
    { src: "/assets/golden-poolside.jpg", alt: "Fluffy golden retriever in a blue bandana and ear bows, fresh from grooming" },
    { src: "/assets/easter-pups.jpg", alt: "Two freshly groomed dogs in Easter bandanas under a flower-covered gazebo" },
    { src: "/assets/holiday-pups.jpg", alt: "Holiday portraits of two groomed dogs in red bandanas by a Christmas tree" },
  ],

  // From Google reviews (last names shortened to an initial).
  reviews: [
    {
      name: "Cheryl L.",
      when: "6 months ago",
      text: "Our pupster Roady loves going to Cheri, she loves all her little clients. I highly recommend her, she’s gentle, caring, and respectful. Absolutely 5+ stars from us. :)",
    },
    {
      name: "Marcia K.",
      when: "3 years ago",
      text: "The best groomer in town! I have taken my shih-tzus in to Cherrie for years now and my fur babies love her!!! They always look amazing when I pick them up! Cherrie is the best!!!!",
    },
    {
      name: "Maggie W.",
      when: "6 years ago",
      text: "I was recommended to Cheri by my sister. First, her communication is great, whether by text or call. I was able to get in fairly quick. The shop was clean. She was sweet as can be on the phone and even sweeter in person. She not only grooms the dogs but will let you know if she sees something on your pet. My dog had yeast in her ear, which explains why she’s been scratching at it the last week. She was very honest when I asked for service that she could have just charged me for, but advised that it was an unnecessary service. My dog came back cute and a day later, her bows are still on. That’s a first!! Great place, great owner, highly recommend.",
    },
    {
      name: "Jan K.",
      when: "6 years ago",
      text: "Cheri, the owner, genuinely loves the pets she grooms and takes the time to speak with the owners and addresses their individual concerns and requests with a smile. Her knowledge and skill is very impressive. My Yorkie loves his time with her and we thoroughly adore and love her care and thoughtfulness. She is by far the best groomer in Riverside as she lovingly pampers your precious fur babies.",
    },
    {
      name: "Barb M.",
      when: "8 years ago",
      text: "Best grooming place, my dog loves it there. I’ve been taking her there for over 3 years. Would not take her anywhere else. The groomers are friendly, very best! I give them a 5 star rating.",
    },
  ],

  // Cozy "creature comforts" palette: warm cream, cocoa ink, terracotta
  // accent and a soft sage. Applied at runtime as CSS custom properties
  // (see src/main.jsx), so this object is the ONE place that defines the
  // site's colors. accentStrong/accentDeep/accentLabel are dark enough to
  // clear WCAG AA contrast against the light backgrounds they sit on.
  colors: {
    bg: "#FBF6EE",
    surface: "#FFFDF9",
    surfaceAlt: "#E8EEE2",
    ink: "#2F2622",
    inkHover: "#4A3C35",
    inkSoft: "#5A4D45",
    inkMute: "#6F625A",
    onDarkSoft: "#DCCFC3",
    headerBg: "rgba(251,246,238,.94)",
    placeholder: "#EFE5D7",
    border: "rgba(47,38,34,.1)",
    borderStrong: "rgba(47,38,34,.2)",
    accent: "#E8A07A",
    accentHover: "#EEB291",
    accentStrong: "#B4552B",
    accentDeep: "#9C4724",
    accentLabel: "#8F4220",
    sage: "#A9BC9C",
    highlight: "#FCE8DA",
    selection: "#F5C9AE",
    onDark: "#FBF6EE",
    error: "#B3261E",
    openDot: "#4F8A4A",
    closedDot: "#C9A27A",
  },

  fonts: {
    display: "'Fraunces', Georgia, serif",
    body: "'Nunito', system-ui, sans-serif",
    googleFontsHref:
      "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;1,9..144,400;1,9..144,600&family=Nunito:wght@400;600;700&display=swap",
  },
};
