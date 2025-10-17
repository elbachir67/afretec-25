// src/seedFirestore.js
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");
const ACTIVITIES = require("./data/activities");

// Initialiser Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://afretec-pulse.firebaseio.com",
});

const db = admin.firestore();

async function cleanOldCollections() {
  console.log("🧹 Cleaning old collections...");

  const collectionsToDelete = [
    "badges",
    "participant_badges",
    "points_history",
    "micro_evaluations",
  ];

  for (const collectionName of collectionsToDelete) {
    const snapshot = await db.collection(collectionName).get();
    if (!snapshot.empty) {
      console.log(`  Deleting ${snapshot.size} documents from ${collectionName}...`);
      const batch = db.batch();
      snapshot.docs.forEach((doc) => batch.delete(doc.ref));
      await batch.commit();
    }
  }

  console.log("✅ Old collections cleaned");
}

async function seedActivities() {
  console.log("🌱 Seeding activities...");

  const snapshot = await db.collection("activities").get();
  if (!snapshot.empty) {
    console.log(`  Deleting ${snapshot.size} existing activities...`);
    const batch = db.batch();
    snapshot.docs.forEach((doc) => batch.delete(doc.ref));
    await batch.commit();
  }

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

async function createEvaluationCollections() {
  console.log("🌱 Creating evaluation collections...");

  const collections = ["daily_evaluations", "final_evaluations"];

  for (const collectionName of collections) {
    const collectionRef = db.collection(collectionName);
    const snapshot = await collectionRef.limit(1).get();

    if (snapshot.empty) {
      console.log(`  Creating ${collectionName} collection...`);
    } else {
      console.log(`  ${collectionName} collection already exists`);
    }
  }

  console.log("✅ Evaluation collections ready");
}

async function main() {
  try {
    await cleanOldCollections();
    await seedActivities();
    await createEvaluationCollections();
    console.log("🎉 Seeding complete!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding:", error);
    process.exit(1);
  }
}

main();
