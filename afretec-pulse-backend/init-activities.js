import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  deleteDoc,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD1335Pt--9yDvnK4j1aJSW2Simuo6mF3s",
  authDomain: "afretec-pulse.firebaseapp.com",
  projectId: "afretec-pulse",
  storageBucket: "afretec-pulse.firebasestorage.app",
  messagingSenderId: "412974491041",
  appId: "1:412974491041:web:1568cc345d25ed2ce2d7e0",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// VRAIES ACTIVITÉS DU PROGRAMME AFRETEC 2025 (Bilingues)
const activities = [
  // ========== DAY 1 - Monday, October 20 ==========
  {
    day: 1,
    code: "day1-opening",
    title: {
      en: "Opening of Meeting",
      fr: "Ouverture de la Réunion",
    },
    type: "plenary",
    scheduledStart: new Date("2025-10-20T08:45:00"),
    scheduledEnd: new Date("2025-10-20T09:40:00"),
    isCompleted: false,
  },
  {
    day: 1,
    code: "day1-activity-overview",
    title: {
      en: "Activity Overview",
      fr: "Aperçu des Activités",
    },
    type: "plenary",
    scheduledStart: new Date("2025-10-20T09:40:00"),
    scheduledEnd: new Date("2025-10-20T10:20:00"),
    isCompleted: false,
  },
  {
    day: 1,
    code: "day1-photo-break",
    title: {
      en: "Group Photo & Networking Break",
      fr: "Photo de Groupe & Pause Réseautage",
    },
    type: "break",
    scheduledStart: new Date("2025-10-20T10:20:00"),
    scheduledEnd: new Date("2025-10-20T10:45:00"),
    isCompleted: false,
  },
  {
    day: 1,
    code: "day1-edtech-story",
    title: {
      en: "Impact of Innovation on Education: An Edtech Story",
      fr: "Impact de l'Innovation sur l'Éducation : Une Histoire Edtech",
    },
    type: "panel",
    scheduledStart: new Date("2025-10-20T10:45:00"),
    scheduledEnd: new Date("2025-10-20T11:45:00"),
    isCompleted: false,
  },
  {
    day: 1,
    code: "day1-progress-pulse",
    title: {
      en: "Progress Pulse: Partner Level",
      fr: "Bilan de Progression : Niveau Partenaires",
    },
    type: "panel",
    scheduledStart: new Date("2025-10-20T11:45:00"),
    scheduledEnd: new Date("2025-10-20T13:00:00"),
    isCompleted: false,
  },
  {
    day: 1,
    code: "day1-lunch",
    title: {
      en: "Lunch & Networking",
      fr: "Déjeuner & Réseautage",
    },
    type: "break",
    scheduledStart: new Date("2025-10-20T13:00:00"),
    scheduledEnd: new Date("2025-10-20T14:30:00"),
    isCompleted: false,
  },
  {
    day: 1,
    code: "day1-student-voices",
    title: {
      en: "Amplify Impact: Student Voices",
      fr: "Amplifier l'Impact : Voix Étudiantes",
    },
    type: "panel",
    scheduledStart: new Date("2025-10-20T14:30:00"),
    scheduledEnd: new Date("2025-10-20T15:30:00"),
    isCompleted: false,
  },
  {
    day: 1,
    code: "day1-afternoon-break",
    title: {
      en: "Networking Break",
      fr: "Pause Réseautage",
    },
    type: "break",
    scheduledStart: new Date("2025-10-20T15:30:00"),
    scheduledEnd: new Date("2025-10-20T15:45:00"),
    isCompleted: false,
  },
  {
    day: 1,
    code: "day1-digital-innovation",
    title: {
      en: "Growing Digital Innovation: Exemplars",
      fr: "Développement de l'Innovation Numérique : Exemples",
    },
    type: "panel",
    scheduledStart: new Date("2025-10-20T15:45:00"),
    scheduledEnd: new Date("2025-10-20T16:45:00"),
    isCompleted: false,
  },
  {
    day: 1,
    code: "day1-closing",
    title: {
      en: "Closing of Day One & Expectation for Day Two",
      fr: "Clôture du Jour 1 & Attentes pour le Jour 2",
    },
    type: "plenary",
    scheduledStart: new Date("2025-10-20T16:45:00"),
    scheduledEnd: new Date("2025-10-20T17:00:00"),
    isCompleted: false,
  },

  // ========== DAY 2 - Tuesday, October 21 ==========
  {
    day: 2,
    code: "day2-opening",
    title: {
      en: "Opening of Day Two",
      fr: "Ouverture du Jour 2",
    },
    type: "plenary",
    scheduledStart: new Date("2025-10-21T08:45:00"),
    scheduledEnd: new Date("2025-10-21T09:00:00"),
    isCompleted: false,
  },
  {
    day: 2,
    code: "day2-pillar-pulse",
    title: {
      en: "Progress Pulse: Pillar Level",
      fr: "Bilan de Progression : Niveau Piliers",
    },
    type: "panel",
    scheduledStart: new Date("2025-10-21T09:00:00"),
    scheduledEnd: new Date("2025-10-21T11:00:00"),
    isCompleted: false,
  },
  {
    day: 2,
    code: "day2-morning-break",
    title: {
      en: "Networking Break",
      fr: "Pause Réseautage",
    },
    type: "break",
    scheduledStart: new Date("2025-10-21T10:30:00"),
    scheduledEnd: new Date("2025-10-21T11:00:00"),
    isCompleted: false,
  },
  {
    day: 2,
    code: "day2-world-cafe",
    title: {
      en: "World Café: Expanding Collaborative Horizons",
      fr: "World Café : Élargir les Horizons Collaboratifs",
    },
    type: "workshop",
    scheduledStart: new Date("2025-10-21T11:30:00"),
    scheduledEnd: new Date("2025-10-21T12:30:00"),
    isCompleted: false,
  },
  {
    day: 2,
    code: "day2-lunch",
    title: {
      en: "Lunch & Poster Presentation",
      fr: "Déjeuner & Présentation de Posters",
    },
    type: "break",
    scheduledStart: new Date("2025-10-21T13:00:00"),
    scheduledEnd: new Date("2025-10-21T14:30:00"),
    isCompleted: false,
  },
  {
    day: 2,
    code: "day2-startup-showcase",
    title: {
      en: "Startup Showcase",
      fr: "Vitrine des Startups",
    },
    type: "panel",
    scheduledStart: new Date("2025-10-21T14:00:00"),
    scheduledEnd: new Date("2025-10-21T15:30:00"),
    isCompleted: false,
  },
  {
    day: 2,
    code: "day2-ucad-visit",
    title: {
      en: "Discovering Programs Supporting Entrepreneurship at UCAD",
      fr: "Découverte des Programmes d'Entrepreneuriat à l'UCAD",
    },
    type: "workshop",
    scheduledStart: new Date("2025-10-21T15:30:00"),
    scheduledEnd: new Date("2025-10-21T17:00:00"),
    isCompleted: false,
  },
  {
    day: 2,
    code: "day2-closing",
    title: {
      en: "Closing of Day Two & Expectation for Day Three",
      fr: "Clôture du Jour 2 & Attentes pour le Jour 3",
    },
    type: "plenary",
    scheduledStart: new Date("2025-10-21T17:00:00"),
    scheduledEnd: new Date("2025-10-21T17:30:00"),
    isCompleted: false,
  },

  // ========== DAY 3 - Wednesday, October 22 ==========
  {
    day: 3,
    code: "day3-opening",
    title: {
      en: "Opening of Day Three",
      fr: "Ouverture du Jour 3",
    },
    type: "plenary",
    scheduledStart: new Date("2025-10-22T09:00:00"),
    scheduledEnd: new Date("2025-10-22T09:45:00"),
    isCompleted: false,
  },
  {
    day: 3,
    code: "day3-closing",
    title: {
      en: "Closing of Meeting",
      fr: "Clôture de la Conférence",
    },
    type: "plenary",
    scheduledStart: new Date("2025-10-22T09:45:00"),
    scheduledEnd: new Date("2025-10-22T10:00:00"),
    isCompleted: false,
  },
  {
    day: 3,
    code: "day3-final-break",
    title: {
      en: "Networking Break",
      fr: "Pause Réseautage",
    },
    type: "break",
    scheduledStart: new Date("2025-10-22T10:00:00"),
    scheduledEnd: new Date("2025-10-22T10:30:00"),
    isCompleted: false,
  },
  {
    day: 3,
    code: "day3-parallel",
    title: {
      en: "Parallel Activities",
      fr: "Activités Parallèles",
    },
    type: "workshop",
    scheduledStart: new Date("2025-10-22T10:30:00"),
    scheduledEnd: new Date("2025-10-22T12:30:00"),
    isCompleted: false,
  },
];

async function initializeActivities() {
  try {
    console.log("🔄 Suppression des anciennes activités...");
    const existingActivities = await getDocs(collection(db, "activities"));
    const deletePromises = existingActivities.docs.map(doc =>
      deleteDoc(doc.ref)
    );
    await Promise.all(deletePromises);
    console.log(`✅ ${existingActivities.size} anciennes activités supprimées`);

    console.log("📝 Création des nouvelles activités bilingues...");
    for (const activity of activities) {
      await addDoc(collection(db, "activities"), activity);
      console.log(`✅ Créé: ${activity.title.fr} / ${activity.title.en}`);
    }

    console.log(
      `\n🎉 ${activities.length} activités bilingues créées avec succès !`
    );
    process.exit(0);
  } catch (error) {
    console.error("❌ Erreur:", error);
    process.exit(1);
  }
}

initializeActivities();
