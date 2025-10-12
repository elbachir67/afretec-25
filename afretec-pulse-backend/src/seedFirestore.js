// src/seedFirestore.js
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");
const ACTIVITIES = require("./data/activities");
const BADGES = require("./data/badges");

// Initialiser Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://afretec-pulse.firebaseio.com",
});

const db = admin.firestore();

async function seedActivities() {
  console.log("🌱 Seeding activities...");

  for (const activity of ACTIVITIES) {
    await db.collection("activities").add({
      ...activity,
      isActive: false,
      isCompleted: false,
      actualEnd: null,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });
  }

  console.log(`✅ ${ACTIVITIES.length} activities seeded`);
}

async function seedBadges() {
  console.log("🌱 Seeding badges...");

  for (const badge of BADGES) {
    await db.collection("badges").doc(badge.id).set(badge);
  }

  console.log(`✅ ${BADGES.length} badges seeded`);
}

async function main() {
  try {
    await seedActivities();
    await seedBadges();
    console.log("🎉 Seeding complete!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding:", error);
    process.exit(1);
  }
}

main();
