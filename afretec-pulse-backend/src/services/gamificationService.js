// src/services/gamificationService.js
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  updateDoc,
  addDoc,
  arrayUnion,
  increment,
  serverTimestamp,
  orderBy,
  limit,
} from "firebase/firestore";
import { db } from "./firebase";

export const checkAndUnlockBadges = async participant => {
  try {
    const currentBadges = participant.badges || [];

    // Récupérer tous les badges
    const badgesSnapshot = await getDocs(collection(db, "badges"));
    const allBadges = badgesSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));

    // Stats participant
    const microEvalsQuery = query(
      collection(db, "micro_evaluations"),
      where("participantCode", "==", participant.code)
    );
    const microEvalsSnap = await getDocs(microEvalsQuery);

    const earlyBirdCount = microEvalsSnap.docs.filter(
      doc => doc.data().isEarlyBird === true
    ).length;

    const commentsCount = microEvalsSnap.docs.filter(
      doc => doc.data().responses.key_takeaway?.trim().length > 0
    ).length;

    const finalEvalQuery = query(
      collection(db, "final_evaluations"),
      where("participantCode", "==", participant.code)
    );
    const finalEvalSnap = await getDocs(finalEvalQuery);

    const totalActivities = await getDocs(collection(db, "activities"));
    const allDone =
      microEvalsSnap.size >= totalActivities.size && !finalEvalSnap.empty;

    // Vérifier chaque badge
    for (const badge of allBadges) {
      if (currentBadges.includes(badge.id)) continue;

      let shouldUnlock = false;

      switch (badge.requirement.type) {
        case "micro_eval_count":
          shouldUnlock = microEvalsSnap.size >= badge.requirement.value;
          break;
        case "early_bird_count":
          shouldUnlock = earlyBirdCount >= badge.requirement.value;
          break;
        case "comments_count":
          shouldUnlock = commentsCount >= badge.requirement.value;
          break;
        case "all_done":
          shouldUnlock = allDone;
          break;
        case "leaderboard_top_10_percent":
          const rank = await getParticipantRank(participant.code);
          const totalParticipants = await getDocs(
            collection(db, "participants")
          );
          const top10Percent = Math.ceil(totalParticipants.size * 0.1);
          shouldUnlock = rank <= top10Percent;
          break;
      }

      if (shouldUnlock) {
        // Débloquer
        const participantRef = doc(db, "participants", participant.id);

        await updateDoc(participantRef, {
          badges: arrayUnion(badge.id),
          totalPoints: increment(badge.bonusPoints),
        });

        await addDoc(collection(db, "participant_badges"), {
          participantCode: participant.code,
          badgeId: badge.id,
          unlockedAt: serverTimestamp(),
        });

        await addDoc(collection(db, "points_history"), {
          participantCode: participant.code,
          pointsEarned: badge.bonusPoints,
          reason: "badge_unlock",
          badgeId: badge.id,
          createdAt: serverTimestamp(),
        });
      }
    }
  } catch (error) {
    console.error("Error checking badges:", error);
  }
};

export const getLeaderboard = async (limitCount = 10) => {
  try {
    const q = query(
      collection(db, "participants"),
      orderBy("totalPoints", "desc"),
      limit(limitCount)
    );

    const snapshot = await getDocs(q);

    return snapshot.docs.map((doc, index) => ({
      rank: index + 1,
      code: doc.data().code,
      points: doc.data().totalPoints,
      badges: doc.data().badges || [],
    }));
  } catch (error) {
    console.error("Error getting leaderboard:", error);
    throw error;
  }
};

export const getParticipantRank = async code => {
  try {
    const q = query(
      collection(db, "participants"),
      orderBy("totalPoints", "desc")
    );

    const snapshot = await getDocs(q);

    let rank = 0;
    snapshot.docs.forEach((doc, index) => {
      if (doc.data().code === code) {
        rank = index + 1;
      }
    });

    return rank;
  } catch (error) {
    console.error("Error getting rank:", error);
    return 0;
  }
};
