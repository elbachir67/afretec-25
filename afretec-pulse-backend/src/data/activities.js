// src/data/activities.js
const ACTIVITIES = [
  {
    code: "day1-opening",
    title: {
      en: "Opening of Meeting",
      fr: "Ouverture de la Réunion",
    },
    type: "plenary",
    day: 1,
    scheduledStart: new Date("2025-10-20T08:45:00Z"),
    scheduledEnd: new Date("2025-10-20T09:40:00Z"),
  },
  {
    code: "day1-activity-overview",
    title: {
      en: "Activity Overview",
      fr: "Aperçu des Activités",
    },
    type: "plenary",
    day: 1,
    scheduledStart: new Date("2025-10-20T09:40:00Z"),
    scheduledEnd: new Date("2025-10-20T10:20:00Z"),
  },
  {
    code: "day1-edtech-story",
    title: {
      en: "Impact of Innovation on Education: An Edtech Story",
      fr: "Impact de l'Innovation sur l'Éducation : Une Histoire Edtech",
    },
    type: "plenary",
    day: 1,
    scheduledStart: new Date("2025-10-20T10:45:00Z"),
    scheduledEnd: new Date("2025-10-20T11:45:00Z"),
  },
  {
    code: "day1-progress-pulse",
    title: {
      en: "Progress Pulse: Partner Level",
      fr: "Bilan de Progression : Niveau Partenaire",
    },
    type: "panel",
    day: 1,
    scheduledStart: new Date("2025-10-20T11:45:00Z"),
    scheduledEnd: new Date("2025-10-20T13:00:00Z"),
  },
  {
    code: "day1-lunch",
    title: {
      en: "Lunch & Networking",
      fr: "Déjeuner & Réseautage",
    },
    type: "break",
    day: 1,
    scheduledStart: new Date("2025-10-20T13:00:00Z"),
    scheduledEnd: new Date("2025-10-20T14:30:00Z"),
  },
  {
    code: "day1-student-voices",
    title: {
      en: "Amplify Impact: Student Voices",
      fr: "Amplifier l'Impact : Voix des Étudiants",
    },
    type: "plenary",
    day: 1,
    scheduledStart: new Date("2025-10-20T14:30:00Z"),
    scheduledEnd: new Date("2025-10-20T15:30:00Z"),
  },
  {
    code: "day1-networking-break",
    title: {
      en: "Networking Break",
      fr: "Pause Réseautage",
    },
    type: "break",
    day: 1,
    scheduledStart: new Date("2025-10-20T15:30:00Z"),
    scheduledEnd: new Date("2025-10-20T15:45:00Z"),
  },
  {
    code: "day1-digital-innovation",
    title: {
      en: "Growing Digital Innovation: Exemplars",
      fr: "Innovation Numérique en Croissance : Exemplaires",
    },
    type: "plenary",
    day: 1,
    scheduledStart: new Date("2025-10-20T15:45:00Z"),
    scheduledEnd: new Date("2025-10-20T16:45:00Z"),
  },
  {
    code: "day1-closing",
    title: {
      en: "Closing of Day One",
      fr: "Clôture du Jour 1",
    },
    type: "plenary",
    day: 1,
    scheduledStart: new Date("2025-10-20T16:45:00Z"),
    scheduledEnd: new Date("2025-10-20T17:00:00Z"),
  },
  {
    code: "day1-gala-dinner",
    title: {
      en: "Gala Dinner at Azalai Hotel",
      fr: "Dîner de Gala à l'Hôtel Azalai",
    },
    type: "break",
    day: 1,
    scheduledStart: new Date("2025-10-20T19:00:00Z"),
    scheduledEnd: new Date("2025-10-20T21:00:00Z"),
  },
  // DAY 2
  {
    code: "day2-opening",
    title: {
      en: "Opening of Day Two",
      fr: "Ouverture du Jour 2",
    },
    type: "plenary",
    day: 2,
    scheduledStart: new Date("2025-10-21T08:45:00Z"),
    scheduledEnd: new Date("2025-10-21T09:00:00Z"),
  },
  {
    code: "day2-progress-pulse-pillar",
    title: {
      en: "Progress Pulse: Pillar Level",
      fr: "Bilan de Progression : Niveau Pilier",
    },
    type: "panel",
    day: 2,
    scheduledStart: new Date("2025-10-21T09:00:00Z"),
    scheduledEnd: new Date("2025-10-21T11:00:00Z"),
  },
  {
    code: "day2-networking-break",
    title: {
      en: "Networking Break",
      fr: "Pause Réseautage",
    },
    type: "break",
    day: 2,
    scheduledStart: new Date("2025-10-21T10:30:00Z"),
    scheduledEnd: new Date("2025-10-21T11:00:00Z"),
  },
  {
    code: "day2-world-cafe",
    title: {
      en: "World Café: Expanding Collaborative Horizons",
      fr: "World Café : Élargir les Horizons Collaboratifs",
    },
    type: "workshop",
    day: 2,
    scheduledStart: new Date("2025-10-21T11:30:00Z"),
    scheduledEnd: new Date("2025-10-21T12:30:00Z"),
  },
  {
    code: "day2-lunch",
    title: {
      en: "Lunch & Poster Presentation",
      fr: "Déjeuner & Présentation Posters",
    },
    type: "break",
    day: 2,
    scheduledStart: new Date("2025-10-21T13:00:00Z"),
    scheduledEnd: new Date("2025-10-21T14:30:00Z"),
  },
  {
    code: "day2-startup-showcase",
    title: {
      en: "Startup Showcase",
      fr: "Vitrine des Startups",
    },
    type: "plenary",
    day: 2,
    scheduledStart: new Date("2025-10-21T14:00:00Z"),
    scheduledEnd: new Date("2025-10-21T15:30:00Z"),
  },
  {
    code: "day2-ucad-programs",
    title: {
      en: "Discovering Programs Supporting Entrepreneurship at UCAD",
      fr: "Découverte des Programmes d'Entrepreneuriat à l'UCAD",
    },
    type: "workshop",
    day: 2,
    scheduledStart: new Date("2025-10-21T15:30:00Z"),
    scheduledEnd: new Date("2025-10-21T17:00:00Z"),
  },
  {
    code: "day2-closing",
    title: {
      en: "Closing of Day Two",
      fr: "Clôture du Jour 2",
    },
    type: "plenary",
    day: 2,
    scheduledStart: new Date("2025-10-21T17:00:00Z"),
    scheduledEnd: new Date("2025-10-21T17:30:00Z"),
  },
  // DAY 3
  {
    code: "day3-opening",
    title: {
      en: "Opening of Day Three",
      fr: "Ouverture du Jour 3",
    },
    type: "plenary",
    day: 3,
    scheduledStart: new Date("2025-10-22T09:00:00Z"),
    scheduledEnd: new Date("2025-10-22T09:45:00Z"),
  },
  {
    code: "day3-closing-meeting",
    title: {
      en: "Closing of Meeting",
      fr: "Clôture de la Réunion",
    },
    type: "plenary",
    day: 3,
    scheduledStart: new Date("2025-10-22T09:45:00Z"),
    scheduledEnd: new Date("2025-10-22T10:00:00Z"),
  },
  {
    code: "day3-networking-break",
    title: {
      en: "Networking Break",
      fr: "Pause Réseautage",
    },
    type: "break",
    day: 3,
    scheduledStart: new Date("2025-10-22T10:00:00Z"),
    scheduledEnd: new Date("2025-10-22T10:30:00Z"),
  },
  {
    code: "day3-mastercard-session",
    title: {
      en: "Mastercard Foundation Session: Finance & Impact",
      fr: "Session Mastercard Foundation : Finance & Impact",
    },
    type: "panel",
    day: 3,
    scheduledStart: new Date("2025-10-22T10:30:00Z"),
    scheduledEnd: new Date("2025-10-22T12:30:00Z"),
  },
  {
    code: "day3-city-tour",
    title: {
      en: "City Tour (Monument de la Renaissance, Gorée Island)",
      fr: "Visite de la Ville (Monument de la Renaissance, Île de Gorée)",
    },
    type: "break",
    day: 3,
    scheduledStart: new Date("2025-10-22T10:30:00Z"),
    scheduledEnd: new Date("2025-10-22T12:30:00Z"),
  },
];

module.exports = ACTIVITIES;
